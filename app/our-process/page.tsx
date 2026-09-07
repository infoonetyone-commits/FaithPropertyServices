import type { Metadata } from "next";
import Image from "next/image";
import ProcessHero from "@/components/ProcessHero";
import CTA from "@/components/CTA";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import StickyProcess from "@/components/StickyProcess";
import LogoWall from "@/components/LogoWall";
import { WaveCanvas } from "@/components/ui/wave-canvas";

export const metadata: Metadata = {
  title: "Our Process - Faith Property Services",
  description:
    "A structured, audited cleaning method built for property managers, facility teams, and councils across Melbourne and Victoria.",
};

const steps = [
  {
    title: "Site Inspection & Scope",
    text: "A no-obligation walkthrough to assess risks, surfaces, traffic patterns, and access. We define a clear scope, frequencies, and KPIs.",
  },
  {
    title: "Proposal & Mobilisation",
    text: "You receive a transparent quote and site-specific method statement. We induct staff, prepare checklists, and stage equipment and consumables.",
  },
  {
    title: "Service Delivery",
    text: "Uniformed, insured cleaners work to your timetable—after hours, daytime, or hybrid—using professional equipment and eco-friendly products.",
  },
  {
    title: "Quality Control & Reporting",
    text: "Supervisors conduct routine inspections against checklists. Findings and actions are logged and shared.",
  },
  {
    title: "Continuous Improvement",
    text: "We review trends, feedback, and audit results to refine scope, frequencies, and processes.",
  },
];

const pillars = [
  {
    title: "Quality Assurance",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    points: [
      "Daily and weekly inspections against specification",
      "Maintained reports and documented checklists",
      "Non-conformance logged and actioned within 24 hours",
      "HACCP, GMP, and ISO-aligned audit readiness",
    ],
  },
  {
    title: "Onsite Supervision",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    points: [
      "Trained supervisors monitoring performance",
      "WHS compliance and safe work practices",
      "A single, reliable point of contact",
    ],
  },
  {
    title: "Staff Training & Development",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-11.422L12 14z",
    points: [
      "WHS induction for every team member",
      "Chemical safety and handling",
      "Job-specific training and refresher protocols",
    ],
  },
];

const compliance = [
  "ASIC Registration (ACN: 623 914 018)",
  "Labour Hire Authority Victoria license",
  "Allianz Insurance (Policy 41AN03018COM)",
  "CM3 Prequalification (033454)",
  "COVID-19 vaccination standards",
];

export default function OurProcessPage() {
  return (
    <main>
      <ProcessHero />

      {/* How we work */}
      <section className="relative bg-cloud pt-20">
        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-navy sm:text-4xl">
              A Method Built for Compliance
            </h2>
          </Reveal>
        </div>
        <div className="relative z-10">
          <StickyProcess steps={steps} />
        </div>
      </section>

      {/* Pillars */}
      <section className="relative overflow-hidden bg-navy-deep/75 py-20 text-white">
        <WaveCanvas className="absolute inset-0 h-full w-full opacity-70" />
        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block font-body text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
              Assured Quality
            </span>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
              Quality Assurance, Supervision &amp; Staff Training
            </h2>
            <p className="mt-5 font-body text-lg text-white/75">
              We implement scheduled inspections and internal audits to ensure
              every task meets specification.
            </p>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <RevealItem key={p.title} className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d={p.icon} stroke="#3aa6b9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold">{p.title}</h3>
                <ul className="mt-5 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 font-body text-sm text-white/75">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Compliance */}
      <section className="relative overflow-hidden py-20">
        <Image
          src="/fleet-vehicle.png"
          alt="A Faith Property Services branded fleet vehicle"
          fill
          className="pointer-events-none select-none object-cover"
          style={{ objectPosition: "center 40%" }}
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-navy-deep/80" />

        <Reveal className="container-x relative">
          <div className="relative overflow-hidden rounded-3xl bg-navy/70 shadow-2xl shadow-cyan/5 ring-1 ring-white/10 backdrop-blur-md lg:grid lg:grid-cols-2">
            {/* Accent strip */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan via-cyan/40 to-transparent" />

            {/* Left — credentials */}
            <div className="relative overflow-hidden p-8 text-white sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-cyan/5 blur-3xl" />
              <span className="relative inline-block font-body text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
                Compliance &amp; Certifications
              </span>
              <h2 className="relative mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                Fully Compliant &amp; Audit-Ready
              </h2>
              <p className="relative mt-4 font-body text-white/70">
                Licensed, insured, and independently accredited — so you can
                engage us with complete confidence.
              </p>
              <ul className="relative mt-8 space-y-4">
                {compliance.map((c) => (
                  <li key={c} className="flex items-start gap-3 font-body text-white/90">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-cyan text-navy">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — official logo wall */}
            <div className="flex flex-col border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:justify-center">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                Accredited &amp; Insured By
              </p>
              <LogoWall count={6} />
            </div>
          </div>
        </Reveal>
      </section>

      <CTA light="cloud" />
    </main>
  );
}
