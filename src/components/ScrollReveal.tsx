"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

// Fades a section up into place as it enters the viewport. Pass an
// incrementing `delay` across sibling sections so a page cascades in rather
// than revealing everything at once.
export default function ScrollReveal({
  children,
  delay = 0,
  className,
  id,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
