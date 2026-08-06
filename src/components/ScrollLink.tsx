"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

/**
 * Like next/link, but for same-page hash links (e.g. "/#contact"). Next only
 * scrolls on an actual hash change, so a second click after the hash is
 * already in the URL (or after manually scrolling away) does nothing. This
 * scrolls manually whenever the target section already exists on the page.
 */
export default function ScrollLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const [targetPath, hash] = href.split("#");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!hash || targetPath !== pathname) return;

    const target = document.getElementById(hash);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
