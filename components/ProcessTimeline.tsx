"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export type ProcessStep = { title: string; text: string };

export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="mx-auto mt-16 max-w-2xl">
      {steps.map((s, i) => {
        const isLast = i === steps.length - 1;
        return (
          <div key={s.title} className="relative flex gap-6">
            {/* Connecting segment — track (static) + progress (draws in on scroll) */}
            {!isLast && (
              <>
                <div className="absolute left-6 top-12 -bottom-10 w-px -translate-x-1/2 bg-white/10" aria-hidden />
                <motion.div
                  className="absolute left-6 top-12 -bottom-10 w-px -translate-x-1/2 bg-cyan"
                  style={{ transformOrigin: "top" }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease, delay: 0.15 }}
                  aria-hidden
                />
              </>
            )}

            {/* Numbered circle */}
            <motion.div
              className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full bg-cyan font-heading text-lg font-bold text-navy ring-4 ring-navy-deep"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
            >
              {i + 1}
            </motion.div>

            {/* Copy */}
            <motion.div
              className="flex-1 pb-10 pt-1.5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
            >
              <h3 className="font-heading text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 font-body text-sm text-white/65">{s.text}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
