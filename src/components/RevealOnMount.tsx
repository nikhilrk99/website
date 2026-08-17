"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

// Like ScrollReveal, but fades in as soon as it mounts instead of waiting
// for the element to scroll into view. Use this for content that's already
// visible in the initial viewport, where a scroll-triggered reveal can fail
// to fire (or fire inconsistently) since the element never "enters" view.
export default function RevealOnMount({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
