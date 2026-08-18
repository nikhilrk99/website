"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import LinkedInIcon from "@/components/LinkedInIcon";
import ScrollLink from "@/components/ScrollLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About Me" },
];

// Pages with their own #contact section — elsewhere, "Work with me" falls
// back to the one on the home page.
const pagesWithContactForm = ["/", "/about"];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const workWithMeHref = pagesWithContactForm.includes(pathname)
    ? `${pathname}#contact`
    : "/#contact";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-void/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-display text-lg font-bold text-offwhite">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-sm uppercase tracking-wide sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "text-signal"
                  : "text-muted transition-colors hover:text-offwhite"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-offwhite"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>

          <ScrollLink
            href={workWithMeHref}
            className="rounded-full bg-signal px-5 py-2 font-mono text-sm uppercase tracking-wide text-offwhite transition-colors hover:bg-signal-deep"
          >
            Work with me
          </ScrollLink>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="text-offwhite sm:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-6 py-4 font-mono text-sm uppercase tracking-wide sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                isActive(link.href)
                  ? "text-signal"
                  : "text-muted transition-colors hover:text-offwhite"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
