"use client";

import { motion } from "framer-motion";

/** A short cyan bar that draws in left-to-right when it scrolls into view. */
export default function AccentBar() {
  return (
    <motion.span
      className="mb-4 block h-1 w-12 origin-left rounded-full bg-cyan"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
    />
  );
}
