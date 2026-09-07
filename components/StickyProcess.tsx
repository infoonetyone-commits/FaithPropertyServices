"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export type ProcessStep = { title: string; text: string };

export default function StickyProcess({ steps }: { steps: ProcessStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setActive(Math.min(steps.length - 1, Math.floor(v * steps.length)));
    });
  }, [scrollYProgress, steps.length]);

  return (
    <div ref={containerRef} style={{ height: `${steps.length * 100}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-cloud">
        <div className="container-x relative grid w-full gap-0 lg:grid-cols-2">
          {/* Left: animated step content */}
          <div className="flex flex-col justify-center pr-0 lg:pr-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4, ease }}
              >
                <div className="font-heading text-[4.5rem] font-bold leading-none text-cyan/20 sm:text-[8rem]">
                  {String(active + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-heading text-4xl font-semibold text-navy sm:text-5xl">
                  {steps[active].title}
                </h3>
                <p className="mt-6 max-w-[520px] font-body text-xl text-navy/65">
                  {steps[active].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: step navigation — desktop only */}
          <div className="hidden flex-col justify-center border-l border-navy/10 pl-16 lg:flex">
            <div className="space-y-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  animate={{ opacity: active === i ? 1 : 0.4 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    animate={{ width: active === i ? 36 : 10 }}
                    transition={{ duration: 0.35, ease }}
                    className="h-px flex-none bg-cyan"
                    style={{ minWidth: 10 }}
                  />
                  <span
                    className={`font-heading text-2xl font-semibold transition-colors duration-300 ${
                      active === i ? "text-navy" : "text-navy/35"
                    }`}
                  >
                    {s.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Progress pills */}
            <div className="mt-10 flex items-center gap-2">
              {steps.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ width: active === i ? 24 : 6, opacity: active === i ? 1 : 0.25 }}
                  transition={{ duration: 0.3 }}
                  className="h-1 rounded-full bg-cyan"
                  style={{ minWidth: 6 }}
                />
              ))}
              <span className="ml-2 font-body text-sm uppercase tracking-[0.16em] text-navy/40">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* Mobile progress pills */}
          <div className="mt-8 flex items-center gap-2 lg:hidden">
            {steps.map((_, i) => (
              <motion.div
                key={i}
                animate={{ width: active === i ? 20 : 5, opacity: active === i ? 1 : 0.25 }}
                transition={{ duration: 0.3 }}
                className="h-1 rounded-full bg-cyan"
                style={{ minWidth: 5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
