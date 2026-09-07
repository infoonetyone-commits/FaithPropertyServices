"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { PINNED_HERO_WORDS, getPinDistance } from "@/lib/heroPin";

type Blob = {
  position: string; // Tailwind position classes
  size: string; // vmax
  blur: string; // px
  gradient: string;
  opacity: number;
  depth: number; // mouse-parallax strength (px per unit of cursor offset)
  scrollRange: [number, number]; // px of travel across the full page scroll
  drift: { x: number; y: number; duration: number };
};

// Same purple/gold pair as the static ambient glows already used on individual
// sections (see About.tsx) — this is the "live" version of that treatment,
// mounted once behind the whole page instead of redrawn per section. Fixed
// + z-[-10] so it sits behind every section's own background; Hero paints a
// fully opaque photo over its own footprint, so it's never visible there.
const blobs: Blob[] = [
  {
    position: "left-[-15%] top-[-5%]",
    size: "62vmax",
    blur: "110px",
    gradient: "radial-gradient(circle at 35% 35%, #7c5cc4, #2e1f57 65%, transparent 78%)",
    opacity: 0.95,
    depth: 14,
    scrollRange: [0, -500],
    drift: { x: 30, y: 22, duration: 28 },
  },
  {
    position: "right-[-18%] top-[48%]",
    size: "54vmax",
    blur: "100px",
    gradient: "radial-gradient(circle at 60% 40%, #f2b134, #a8760f 62%, transparent 76%)",
    opacity: 0.8,
    depth: 20,
    scrollRange: [0, 550],
    drift: { x: -24, y: -20, duration: 34 },
  },
  {
    position: "left-1/4 bottom-[-10%]",
    size: "46vmax",
    blur: "100px",
    gradient: "radial-gradient(circle at 50% 50%, #f2b134, #7c5cc4 70%, transparent 80%)",
    opacity: 0.65,
    depth: 26,
    scrollRange: [0, -400],
    drift: { x: -18, y: 20, duration: 24 },
  },
];

/** Ambient, cursor- and scroll-reactive colour glow behind the whole site. */
export default function SiteBackground() {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  // Pages with a DockingWordHero (About, Our Process) pin scroll for a
  // stretch while they play their letter-docking animation — the page holds
  // still, but raw scrollY keeps advancing underneath. Left uncompensated,
  // that makes the blobs drift by their usual amount while nothing else on
  // screen is moving, dragging them far further into view than intended.
  // Freezing scrollY at 0 for that span, then resuming from where it left
  // off, makes the blobs behave as if the pinned stretch of scroll never
  // happened — matching how they'd look with no pin at all.
  const pinnedWord = pathname ? PINNED_HERO_WORDS[pathname] : undefined;
  const effectiveScrollY = useTransform(scrollY, (v) => {
    if (!pinnedWord) return v;
    const pinDistance = getPinDistance(pinnedWord);
    return v <= pinDistance ? 0 : v - pinDistance;
  });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (reduceMotion) return;
    function handleMove(e: MouseEvent) {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    }
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reduceMotion, mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {blobs.map((blob, i) => (
        <ParallaxBlob
          key={i}
          blob={blob}
          scrollY={effectiveScrollY}
          mouseX={mouseX}
          mouseY={mouseY}
          reduceMotion={!!reduceMotion}
        />
      ))}
    </div>
  );
}

function ParallaxBlob({
  blob,
  scrollY,
  mouseX,
  mouseY,
  reduceMotion,
}: {
  blob: Blob;
  scrollY: MotionValue<number>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const scrollOffset = useTransform(scrollY, [0, 6000], blob.scrollRange);
  const px = useTransform(mouseX, (v) => v * blob.depth);
  const py = useTransform(mouseY, (v) => v * blob.depth);
  const y = useTransform([scrollOffset, py], (values) => (values[0] as number) + (values[1] as number));

  return (
    <motion.div
      className={`absolute ${blob.position}`}
      style={{ width: blob.size, height: blob.size, x: px, y }}
    >
      <motion.div
        className="h-full w-full rounded-full"
        style={{
          background: blob.gradient,
          filter: `blur(${blob.blur})`,
          mixBlendMode: "screen",
          opacity: blob.opacity,
        }}
        animate={
          reduceMotion
            ? undefined
            : { x: [0, blob.drift.x, 0], y: [0, blob.drift.y, 0], scale: [1, 1.06, 1] }
        }
        transition={{ duration: blob.drift.duration, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
