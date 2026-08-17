"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Next's built-in scroll-to-hash-on-navigation can miss the target element
// when it sits below content that hasn't settled yet, so a cross-page link
// like "/#contact" sometimes lands on the page without scrolling. This
// re-runs the scroll manually whenever the route changes.
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const target = document.getElementById(hash);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname]);

  return null;
}
