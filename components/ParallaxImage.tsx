"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * A photo that drifts slightly as the page scrolls past it — the image
 * itself is sized taller than its frame (inset -12%/-12% top/bottom) so the
 * parallax offset never uncovers empty space at the edges.
 */
export default function ParallaxImage({
  src,
  alt,
  aspect,
  className = "",
}: {
  src: string;
  alt: string;
  aspect: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      className={`group relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-cyan/5 ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-cyan/20 ${className}`}
      style={{ aspectRatio: String(aspect) }}
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[12%] -bottom-[12%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-navy-deep/10 to-navy-deep/25" />
    </div>
  );
}
