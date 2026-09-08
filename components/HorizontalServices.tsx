"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import ViewTransitionLink from "@/components/ViewTransitionLink";
import { svcTransitionName } from "@/lib/transition";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export type ServiceItem = {
  title: string;
  img: string;
  href: string;
  text: string;
};

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// Non-linear scroll → x map: each page dwells fully in view, then a quick
// transition slides to the next — same "dwell, then snap" feel as the
// horizontal work section it's modelled on, generalised for N pages instead
// of a fixed 3.
function buildSlideMap(count: number) {
  const points: number[] = [];
  const values: string[] = [];
  for (let i = 0; i < count; i++) {
    const start = i / count;
    const dwellEnd = start + 0.6 / count;
    points.push(start, dwellEnd);
    values.push(`-${i * 100}vw`, `-${i * 100}vw`);
    if (i < count - 1) {
      points.push((i + 1) / count);
      values.push(`-${(i + 1) * 100}vw`);
    }
  }
  return { points, values };
}

function ServicesMobile({ services }: { services: ServiceItem[] }) {
  return (
    <section className="relative bg-cloud py-20">
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">All Services</span>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-navy sm:text-4xl">
            Our Full Range of Services
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 flex flex-col gap-7">
          {services.map((s) => (
            <RevealItem
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl shadow-navy/5 ring-1 ring-navy/10"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  style={{ viewTransitionName: svcTransitionName(s.href.replace(/^\//, "")) }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-navy-deep/10 to-navy-deep/25" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 flex-1 font-body text-sm text-navy/65">{s.text}</p>
                <div className="mt-5">
                  <ViewTransitionLink href={s.href} className="btn-primary !py-2.5 !px-6">
                    Read More
                  </ViewTransitionLink>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function ServicesDesktop({ services }: { services: ServiceItem[] }) {
  const pages = chunk(services, 2);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { points, values } = buildSlideMap(pages.length);
  const x = useTransform(scrollYProgress, points, values);

  const [active, setActive] = useState(0);
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setActive(Math.min(pages.length - 1, Math.floor(v * pages.length)));
    });
  }, [scrollYProgress, pages.length]);

  return (
    <div ref={containerRef} style={{ height: `${pages.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-cloud">
        {/* Header — pinned above the sliding cards */}
        <div className="container-x relative z-10 pt-16">
          <div className="flex items-start justify-between">
            <div className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
              <span className="eyebrow">All Services</span>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-navy sm:text-4xl">
                Our Full Range of Services
              </h2>
            </div>
            <div className="hidden shrink-0 items-baseline gap-1 sm:flex">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="font-heading text-3xl font-bold text-navy tabular-nums"
                >
                  0{active + 1}
                </motion.span>
              </AnimatePresence>
              <span className="font-body text-sm text-navy/30">/ 0{pages.length}</span>
            </div>
          </div>
        </div>

        {/* Sliding pages */}
        <motion.div
          style={{ x, width: `${pages.length * 100}vw` }}
          className="absolute left-0 top-0 flex h-full will-change-transform"
        >
          {pages.map((page, i) => (
            <div key={i} className="flex h-full w-screen flex-shrink-0 items-center px-6 pb-16 pt-28 sm:px-12">
              <div className="container-x mx-auto grid w-full gap-7 sm:grid-cols-2">
                {page.map((s) => (
                  <div
                    key={s.title}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl shadow-navy/5 ring-1 ring-navy/10 sm:flex-row"
                  >
                    <div className="relative h-52 overflow-hidden sm:h-auto sm:w-2/5">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 40vw"
                        style={{ viewTransitionName: svcTransitionName(s.href.replace(/^\//, "")) }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-navy-deep/10 to-navy-deep/25" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-heading text-xl font-semibold text-navy">{s.title}</h3>
                      <p className="mt-3 flex-1 font-body text-sm text-navy/65">{s.text}</p>
                      <div className="mt-5">
                        <ViewTransitionLink href={s.href} className="btn-primary !py-2.5 !px-6">
                          Read More
                        </ViewTransitionLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress pills */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
          {pages.map((_, i) => (
            <motion.div
              key={i}
              animate={{ width: active === i ? 28 : 7, opacity: active === i ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
              className="h-1 rounded-full bg-cyan"
              style={{ minWidth: 7 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// The pinned/sliding layout scroll-jacks a full 100vh per page, and each
// page stacks its 2 cards in a single column below sm — on a phone that's
// two full image+text cards squeezed into one screen height with no room
// to scroll internally, so content gets clipped. Below the sm breakpoint
// (matching Tailwind's own 640px cutover used throughout these cards),
// fall back to a plain stacked list instead.
export default function HorizontalServices({ services }: { services: ServiceItem[] }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <ServicesMobile services={services} /> : <ServicesDesktop services={services} />;
}
