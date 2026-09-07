"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { WaveCanvas } from "@/components/ui/wave-canvas";

const COLLAPSED = 56; // px — size of the seed square before it grows
const PAD = 24; // px — expanded card padding (p-6)
const FULL_HEIGHT = 220; // px — shared by every card, so they all match

type Prop = { title: string; text: string; icon: string };

function ScrollCard({
  p,
  index,
  inView,
}: {
  p: Prop;
  index: number;
  inView: boolean;
}) {
  const cellRef = useRef<HTMLDivElement>(null);
  const [fullWidth, setFullWidth] = useState(280);
  const cardProgress = useMotionValue(0);

  // Full width tracks the stable grid cell (not the animating card itself),
  // so it only changes on real viewport/breakpoint changes.
  useEffect(() => {
    const el = cellRef.current;
    if (!el) return;
    const measure = () => setFullWidth(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Play the morph once when the section scrolls into view, staggered per
  // card — no scroll-scrubbing, so the section needs no extra pinned height.
  useEffect(() => {
    if (!inView) return;
    const controls = animate(cardProgress, 1, {
      duration: 0.7,
      delay: index * 0.15,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, index, cardProgress]);

  const width = useTransform(cardProgress, [0, 1], [COLLAPSED, fullWidth]);
  const height = useTransform(cardProgress, [0, 1], [COLLAPSED, FULL_HEIGHT]);
  const padding = useTransform(cardProgress, [0, 1], [0, PAD]);
  const contentOpacity = useTransform(cardProgress, [0.45, 1], [0, 1]);
  const contentY = useTransform(cardProgress, [0.45, 1], [10, 0]);
  const boxShadow = useTransform(
    cardProgress,
    [0, 1],
    [
      "0 0 0 1px rgba(58,166,185,0.1), 0 8px 20px -6px rgba(15,23,42,0.12)",
      "0 0 0 1px rgba(58,166,185,0.3), 0 16px 32px -8px rgba(15,23,42,0.18)",
    ]
  );

  return (
    <div
      ref={cellRef}
      className="relative w-full animate-float"
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <motion.div
        style={{ width, height, boxShadow }}
        className="relative mx-auto overflow-hidden rounded-2xl border border-navy/10 bg-white/70 backdrop-blur-md"
      >
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
            paddingLeft: padding,
            paddingRight: padding,
            paddingTop: padding,
            paddingBottom: padding,
          }}
        >
          <div className="flex h-[72px] items-center justify-between gap-3">
            <h3 className="line-clamp-2 font-heading text-xl font-bold text-navy">{p.title}</h3>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d={p.icon} stroke="#3aa6b9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="mt-9 font-body font-semibold text-navy/65">{p.text}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ValuePropsScroll({ props }: { props: Prop[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-cloud py-16 sm:py-24"
    >
      <WaveCanvas className="absolute inset-0 h-full w-full opacity-70" />
      <div className="container-x relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {props.map((p, i) => (
          <ScrollCard key={p.title} p={p} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
