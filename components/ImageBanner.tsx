"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useScroll, useTransform } from "framer-motion";
import { RevealGroup, RevealItem } from "@/components/Reveal";

const stats = [
  { value: 13, suffix: "+", label: "Years Experience" },
  { value: 14, suffix: "+", label: "Suburbs Serviced" },
  { value: 100, suffix: "%", label: "Insured & Compliant" },
  { value: 24, suffix: "hr", label: "Issue Response" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function ImageBanner() {
  // The section's height is reserved by an invisible spacer matching the
  // photo's real aspect ratio at full width — same overall size as before
  // parallax was added. The visible image sits in its own absolutely
  // positioned layer, 12% taller than that box (6% top/bottom) so it has
  // slack to shift into as you scroll; a plain object-contain image has no
  // such slack, so this small overflow (and the light cropping it costs at
  // the top/bottom edges) is what parallax needs.
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-navy-deep">
      <div className="w-full" style={{ aspectRatio: "6192 / 4128" }} />
      <motion.div className="absolute inset-x-0" style={{ top: "-6%", bottom: "-6%", y: imageY }}>
        <video
          src="/home-stats-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Edge fades so the photo settles into the solid navy sections above/below
          instead of ending in a hard rectangle. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-deep to-transparent sm:h-48" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-deep to-transparent sm:h-48" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy-deep to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy-deep to-transparent sm:w-32" />

      {/* Stats, floated directly on the photo — no card, just numbers/text
          with a text-shadow for legibility against the busy background.
          Centering lives on this plain wrapping div, not on RevealGroup
          itself — RevealGroup is a Framer Motion element, and Framer
          manages the `transform` CSS property internally, which clobbers
          a translate-x/y utility class applied directly to it. */}
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:justify-start sm:pl-[32rem]">
        <RevealGroup className="flex flex-col gap-8 sm:gap-16">
          {stats.map((s) => (
            <RevealItem key={s.label} className="text-left">
              <div style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>
                <div
                  className="font-heading font-bold text-cyan"
                  style={{ fontSize: "clamp(3rem, 9vw, 6rem)", lineHeight: 1 }}
                >
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 font-body text-white/90" style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}>
                  {s.label}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
