"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RevealGroup, RevealItem } from "@/components/Reveal";

const COLLAPSED_COUNT = 6;

const ease = [0.16, 1, 0.3, 1] as const;

function Check() {
  return (
    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-cyan text-navy">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Tile({ text }: { text: string }) {
  return (
    <RevealItem
      whileHover={{ y: -3, borderColor: "rgba(58,166,185,0.4)" }}
      className="glass flex items-start gap-3 rounded-xl px-4 py-3 font-body text-white/80 transition-colors"
    >
      <Check />
      <span>{text}</span>
    </RevealItem>
  );
}

/**
 * A checklist that opens with a short preview and expands on click — long
 * lists (the NDIS page has several 8-16 item ones) otherwise read as a wall
 * of near-identical rows even as a grid. Short lists just render flat, no
 * toggle, since there's nothing to hide.
 */
export default function BulletChecklist({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false);
  const isLong = items.length > COLLAPSED_COUNT;
  // Even short lists read better as a grid once there are more than a
  // couple of items — a single full-width pill per line (as this used to
  // render) looks noticeably plainer than the two-column tile treatment
  // the long lists get right above/below it on the same page.
  const gridCols = items.length > 3 ? "sm:grid-cols-2" : "";

  if (!isLong) {
    return (
      <RevealGroup className={`mt-5 grid gap-3 ${gridCols}`}>
        {items.map((b) => (
          <Tile key={b} text={b} />
        ))}
      </RevealGroup>
    );
  }

  const shown = items.slice(0, COLLAPSED_COUNT);
  const rest = items.slice(COLLAPSED_COUNT);

  return (
    <div className="mt-5">
      <RevealGroup className="grid gap-3 sm:grid-cols-2">
        {shown.map((b) => (
          <Tile key={b} text={b} />
        ))}
      </RevealGroup>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden"
          >
            <RevealGroup className="grid gap-3 pt-3 sm:grid-cols-2">
              {rest.map((b) => (
                <Tile key={b} text={b} />
              ))}
            </RevealGroup>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 flex items-center gap-2 font-body text-sm font-semibold text-cyan transition-colors hover:text-white"
      >
        {open ? "Show less" : `Show ${rest.length} more`}
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease }}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>
    </div>
  );
}
