"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.85 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

export default function LogoWall({ count = 6 }: { count?: number }) {
  return (
    <motion.div
      className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
        <motion.div
          key={n}
          variants={item}
          className="group flex h-28 items-center justify-center bg-white p-5 transition-colors duration-300 hover:bg-mint"
        >
          <Image
            src={`/certs/cert-${n}.png`}
            alt="Certification logo"
            width={184}
            height={99}
            className="max-h-full w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
