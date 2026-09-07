"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import {
  DOCKED_RIGHT_MARGIN,
  LETTER_STAGGER,
  REFLOW_DISTANCE,
  REFLOW_START,
  getPinDistance,
} from "@/lib/heroPin";

/**
 * Text-only hero: an oversized wordmark carries the section instead of a
 * photo. As the user scrolls, the big inline word hands off to a
 * fixed-position copy of itself that reflows into a small vertical stack
 * pinned to the right edge — a persistent side marker for the rest of the
 * page. The section pins in place (position: sticky) until the letters
 * finish docking, so the next section doesn't scroll up mid-animation.
 */
const letterContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const ease = [0.16, 1, 0.3, 1] as const;

const letterVariant = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Cubic Bezier through p0 (start) and p3 (end), shaped by two control
// points. Both control points sit level with the start — that holds the
// path flat/horizontal through most of the sweep, then it dives into the
// final stacked spot only in the last stretch, giving a hook rather than an
// even bow.
function cubicBezier(p0: number, p1: number, p2: number, p3: number, t: number) {
  const inv = 1 - t;
  return inv * inv * inv * p0 + 3 * inv * inv * t * p1 + 3 * inv * t * t * p2 + t * t * t * p3;
}

type LetterRect = { x: number; y: number; width: number; fontSize: number };

// Shared measurement state for both halves of the effect: the in-flow
// heading (which provides the letters to measure) and the fixed docked
// copy (which reads those measurements). Split into a hook, rather than one
// component rendering both, so the fixed copy can be mounted as a sibling
// of the sticky section instead of a descendant of it — nesting it inside
// the sticky section caused a real paint-order glitch right as the section
// released from being stuck (the section beneath would render over the
// tail of the docked stack for a stretch of scroll around the release
// point), even though it's position: fixed and z-40.
function useDockingLetters() {
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [start, setStart] = useState<LetterRect[] | null>(null);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  const { scrollY } = useScroll();

  const measure = useCallback(() => {
    const rects = letterRefs.current.map((el) => {
      if (!el) return { x: 0, y: 0, width: 0, fontSize: 16 };
      const r = el.getBoundingClientRect();
      return { x: r.left, y: r.top, width: r.width, fontSize: parseFloat(getComputedStyle(el).fontSize) };
    });
    setStart(rects);
    setViewport({ w: window.innerWidth, h: window.innerHeight });
  }, []);

  useEffect(() => {
    let resizeHandle: ReturnType<typeof setTimeout> | null = null;
    function scheduleMeasure() {
      if (resizeHandle) clearTimeout(resizeHandle);
      resizeHandle = setTimeout(measure, 150);
    }

    measure();
    // Re-measure once the heading font has actually finished loading —
    // measuring too early (before the web font swaps in) captures the
    // fallback font's metrics, which throws off the per-letter widths used
    // for alignment.
    document.fonts.ready.then(measure);
    window.addEventListener("resize", scheduleMeasure);
    return () => {
      window.removeEventListener("resize", scheduleMeasure);
      if (resizeHandle) clearTimeout(resizeHandle);
    };
  }, [measure]);

  return { letterRefs, start, viewport, scrollY, measure };
}

// Real, in-flow heading — provides layout spacing and the load-in stagger,
// then fades out to the fixed copy once scrolling starts. Rendered inside
// the sticky section, where its layout box is needed.
function InFlowHeading({
  word,
  letterRefs,
  scrollY,
  measure,
  isMobile,
}: {
  word: string;
  letterRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
  scrollY: ReturnType<typeof useScroll>["scrollY"];
  measure: () => void;
  isMobile: boolean;
}) {
  // On mobile the docked-letters overlay is hidden entirely (see
  // DockedLettersOverlay), so there's no fixed copy to hand off to — fading
  // this out on scroll would just leave the heading blank. Keep it visible
  // there; only fade for the desktop handoff.
  return (
    <motion.div style={{ opacity: useTransform(scrollY, (v) => (isMobile ? 1 : v > 0 ? 0 : 1)) }}>
      <motion.h1
        className="select-none font-heading text-[16vw] font-bold leading-[0.85] tracking-tight text-cyan sm:text-[11vw] lg:text-[8vw]"
        variants={letterContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        onAnimationComplete={measure}
      >
        {word.split("").map((char, i) => (
          <motion.span
            key={i}
            ref={(el) => {
              letterRefs.current[i] = el;
            }}
            variants={letterVariant}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}

// Fixed copy — starts exactly where the real letters are, reflows into a
// vertical stack on the right edge as you scroll, then holds there (the
// transform clamps once scroll passes REFLOW_DISTANCE). Rendered as a
// sibling of the sticky section, not a descendant of it — see the note on
// useDockingLetters above.
function DockedLettersOverlay({
  word,
  start,
  viewport,
  scrollY,
}: {
  word: string;
  start: LetterRect[] | null;
  viewport: { w: number; h: number };
  scrollY: ReturnType<typeof useScroll>["scrollY"];
}) {
  if (!start) return null;

  // Letters keep their original (huge) size unless the word is long enough
  // that the docked stack needs to shrink to fit — start it higher up and
  // space rows by the docked font size, all sharing one left edge (rather
  // than each right-aligned by its own width).
  const targetYBase = viewport.h * 0.1;

  // Docked letters shrink for longer words so the stacked column always
  // fits within the viewport instead of running off the bottom edge. A
  // 5-letter word like ABOUT already fits at full size (scale clamps to
  // 1); a longer word like PROCESS needs to shrink to keep every letter on
  // screen.
  const naturalFontSize = Math.max(...start.map((r) => r.fontSize));
  const availableHeight = viewport.h - targetYBase - 40;
  const naturalStackHeight = (word.length - 1) * naturalFontSize * 0.95 + naturalFontSize;
  const scale = Math.min(1, availableHeight / naturalStackHeight);
  const dockedFontSize = naturalFontSize * scale;
  const rowStep = dockedFontSize * 0.95;

  const maxWidth = Math.max(...start.map((r) => r.width)) * scale;
  // Center each letter on a shared vertical centerline rather than sharing
  // a left edge — a letter's stem doesn't always sit flush with its own
  // box's left edge, so left-aligning boxes can leave strokes visibly
  // inset from where others land. Centering is how a single-letter column
  // actually reads as aligned.
  const centerX = viewport.w - DOCKED_RIGHT_MARGIN - maxWidth / 2;
  // Phase 1 target: shift every letter by the same amount, so the word
  // keeps its normal spacing and stays horizontal — it just slides over to
  // sit flush with where the column will land.
  const lastLetter = start[start.length - 1];
  const shiftAmount = viewport.w - DOCKED_RIGHT_MARGIN - (lastLetter.x + lastLetter.width);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden md:block" aria-hidden="true">
      {word.split("").map((char, i) => {
        const gap = i * rowStep;
        const dockedWidth = start[i].width * scale;
        return (
          <DockingLetter
            key={i}
            index={i}
            wordLength={word.length}
            char={char}
            scrollY={scrollY}
            from={start[i]}
            staged={{ x: start[i].x + shiftAmount, y: start[i].y }}
            to={{ x: centerX - dockedWidth / 2, y: targetYBase + gap, fontSize: dockedFontSize }}
          />
        );
      })}
    </div>
  );
}

function DockingLetter({
  index,
  wordLength,
  char,
  scrollY,
  from,
  staged,
  to,
}: {
  index: number;
  wordLength: number;
  char: string;
  scrollY: ReturnType<typeof useScroll>["scrollY"];
  from: LetterRect;
  staged: { x: number; y: number };
  to: { x: number; y: number; fontSize: number };
}) {
  // Reversed: the last letter (index wordLength - 1) gets zero delay and
  // leads the motion; earlier letters wait longer, so the cascade runs
  // backward through the word — hook end first, like a whip crack.
  const letterStart = REFLOW_START + (wordLength - 1 - index) * LETTER_STAGGER;
  const letterEnd = letterStart + REFLOW_DISTANCE;

  // Control points stay level with the start (from.y) for most of the
  // sweep — the first sits a third of the way across, the second right at
  // the fully-shifted-right x — so the path holds flat and only dives
  // toward `to` in the final stretch, instead of bowing evenly throughout.
  const control1 = { x: from.x + (staged.x - from.x) / 3, y: from.y };
  const control2 = { x: staged.x, y: from.y };

  const x = useTransform(scrollY, (v) => {
    const t = easeInOutCubic(clamp01((v - letterStart) / (letterEnd - letterStart)));
    return cubicBezier(from.x, control1.x, control2.x, to.x, t);
  });
  const y = useTransform(scrollY, (v) => {
    const t = easeInOutCubic(clamp01((v - letterStart) / (letterEnd - letterStart)));
    return cubicBezier(from.y, control1.y, control2.y, to.y, t);
  });
  const opacity = useTransform(scrollY, (v) => (v > 0 ? 1 : 0));
  // Shrinks alongside the position curve — for a 5-letter word to.fontSize
  // equals from.fontSize (scale 1, no visible change), but for longer words
  // this eases the letter down to the smaller size DockedLettersOverlay
  // computed to keep the whole stack on screen.
  const fontSize = useTransform(scrollY, (v) => {
    const t = easeInOutCubic(clamp01((v - letterStart) / (letterEnd - letterStart)));
    return from.fontSize + (to.fontSize - from.fontSize) * t;
  });

  return (
    <motion.span
      className="absolute left-0 top-0 select-none font-heading font-bold leading-[0.85] text-cyan"
      style={{ x, y, fontSize, opacity, willChange: "transform" }}
    >
      {char}
    </motion.span>
  );
}

export default function DockingWordHero({
  word,
  eyebrow,
  description,
  stats,
  watermarkSrc,
  videoSrc,
}: {
  word: string;
  eyebrow: string;
  description: string;
  stats?: { value: string; label: string }[];
  watermarkSrc?: string;
  /** Full-bleed looping background video — takes over from watermarkSrc when set. */
  videoSrc?: string;
}) {
  const pinDistance = getPinDistance(word);
  const { letterRefs, start, viewport, scrollY, measure } = useDockingLetters();
  // The docked-letters overlay this pin exists for is hidden below md (see
  // DockedLettersOverlay) — holding the page pinned for it there just reads
  // as the page getting stuck on scroll for no visible reason. Skip the
  // extra reserved distance on mobile so the section releases immediately.
  const isMobile = viewport.w > 0 && viewport.w < 768;

  return (
    <>
      {/* Holds the page still while the letters dock: this wrapper reserves
          one viewport plus pinDistance of extra scroll, and the sticky
          section below stays pinned at the top of the viewport for that
          whole span instead of scrolling away immediately. Once scroll
          passes pinDistance the sticky section runs out of room to stick to
          and releases, letting the next section scroll up normally. */}
      <div className="relative" style={{ height: isMobile ? "100vh" : `calc(100vh + ${pinDistance}px)` }}>
        <section className="sticky top-0 isolate h-screen overflow-hidden bg-navy-deep/75 pb-20 pt-44 text-center lg:pb-28 lg:pt-52">
          {videoSrc ? (
            <>
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                // .container-x (used by every text block below) doesn't set
                // position:relative, so it paints as a plain static block —
                // and positioned elements always paint above static ones,
                // regardless of DOM order. A negative z-index drops this out
                // of that normal positioned layer entirely, so it stacks
                // behind the text instead of fully occluding it.
                className="pointer-events-none absolute inset-0 -z-10 h-full w-full select-none object-cover object-center"
              />
              {/* Darkens the video so the heading and copy stay legible on top.
                  Plain alpha, not a blend mode — multiply barely dims bright/white
                  footage (white pixels stay ~white under multiply), which left
                  this office video's text illegible; a flat overlay darkens
                  evenly regardless of what's underneath. */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-navy-deep/85" />
            </>
          ) : (
            watermarkSrc && (
              <Image
                src={watermarkSrc}
                alt=""
                fill
                priority
                className="pointer-events-none -z-10 select-none object-cover opacity-[0.08] mix-blend-luminosity"
                aria-hidden="true"
              />
            )
          )}

          <div className="container-x">
            <InFlowHeading word={word} letterRefs={letterRefs} scrollY={scrollY} measure={measure} isMobile={isMobile} />
          </div>

          <Reveal delay={0.55} className="container-x">
            <p className="mt-3 font-body text-sm font-semibold uppercase tracking-[0.3em] text-white sm:mt-4 sm:text-base sm:tracking-[0.4em]">
              {eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.65} className="container-x">
            <p className="mx-auto mt-8 max-w-xl font-body text-lg text-white/70">{description}</p>
          </Reveal>

          {stats && (
            <Reveal delay={0.75} className="container-x">
              <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-x-12 gap-y-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-heading text-4xl font-bold text-cyan">{s.value}</div>
                    <div className="mt-1 font-body text-sm text-white/60">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </section>
      </div>

      <DockedLettersOverlay word={word} start={start} viewport={viewport} scrollY={scrollY} />
    </>
  );
}
