"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  // Wrapper is taller than the viewport so the section can stay pinned
  // (sticky) for a stretch of scroll while the wordmark animates, then
  // release and let the page continue once the wrapper's extra height
  // has been scrolled through.
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Rise and expand are tied directly to scroll position — scrolling down
  // plays it forward, scrolling back up reverses it, in sync with the
  // scrollbar the whole way. Bound straight to scrollYProgress (no
  // useSpring smoothing) — a spring needs its own animation-frame loop to
  // converge toward a moving target, and that loop can stall on some
  // mobile browsers/WebViews during inertial touch scroll, freezing the
  // wordmark transform even though native position:sticky (handled by the
  // compositor, not JS) keeps pinning correctly.
  const wordmarkY = useTransform(scrollYProgress, [0, 0.7], ["0vh", "-42vh"]);
  const wordmarkScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.7]);

  // Side copy stays put — no longer slides toward the center.

  return (
    <div id="home" ref={wrapperRef} className="relative" style={{ height: "170vh" }}>
      <section className="sticky top-0 hero-viewport overflow-hidden bg-navy-deep">
        {/* Real page heading, kept for SEO/accessibility — the wordmark below is a stylized logotype, not prose */}
        <h1 className="sr-only">Professional Commercial Cleaning Across Victoria</h1>

        {/* Background photo, shown unedited — no dimming/fade overlay, no opacity
            reduction. Wrapped in its own absolute div so next/image's `fill` sees
            an explicitly "absolute" parent (it doesn't recognize "sticky" on the
            section as a valid positioning context, even though it works fine —
            this just satisfies its own dev-only check). */}
        <div className="absolute inset-0">
          <Image
            src="/hero-new-upscaled.jpeg"
            alt="Faith Property Services — dark, reflective cleaned floor"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Giant wordmark lockup — bottom edge; rises and expands as you scroll.
            Expansion is driven by font-size (via the --wm-scale CSS variable), not a
            transform: scale() — scaling a rasterized text layer up with a transform
            stretches its existing pixels instead of re-rendering the glyphs, which
            reads as blurry. Recomputing font-size every frame keeps the text crisp
            at every size. Only the rise (y) uses a transform, since translating
            doesn't resample anything. */}
        <motion.div
          style={{ y: wordmarkY, ["--wm-scale" as string]: wordmarkScale, willChange: "transform" }}
          className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center overflow-hidden pb-4"
        >
          <p
            className={`font-heading select-none whitespace-nowrap text-[calc(11vw*var(--wm-scale,1))] uppercase leading-[0.8] tracking-tight text-white/95 sm:text-[calc(9vw*var(--wm-scale,1))] lg:text-[calc(7vw*var(--wm-scale,1))]`}
          >
            Faith
          </p>
          <span
            className={`font-heading mt-3 text-[calc(0.875rem*var(--wm-scale,1))] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-[calc(1.5rem*var(--wm-scale,1))] sm:tracking-[0.3em] lg:text-[calc(2.25rem*var(--wm-scale,1))]`}
          >
            Property Services
          </span>
        </motion.div>
      </section>
    </div>
  );
}
