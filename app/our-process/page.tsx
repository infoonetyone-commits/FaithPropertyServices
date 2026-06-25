import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

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
  {
    title: "Quality Assurance, Supervision & Staff Training",
    text: "We implement scheduled inspections and internal audits to ensure every task meets specification.",
  },
];

const pillars = [
  {
    title: "Quality Assurance",
    points: [
      "Daily and weekly inspections against specification",
      "Maintained reports and documented checklists",
      "Non-conformance logged and actioned within 24 hours",
      "HACCP, GMP, and ISO-aligned audit readiness",
    ],
  },
  {
    title: "Onsite Supervision",
    points: [
      "Trained supervisors monitoring performance",
      "WHS compliance and safe work practices",
      "A single, reliable point of contact",
    ],
  },
  {
    title: "Staff Training & Development",
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
      <PageHero
        title="Our Process"
        subtitle="We keep your sites spotless, safe, and compliant—without disrupting operations. Our method is structured, audited, and built for property managers, facility teams, and councils across Melbourne and Victoria."
        image="/process-hero.jpg"
      />

      {/* How we work */}
      <section className="bg-white py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-navy sm:text-4xl">
              A Method Built for Compliance
            </h2>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl bg-mint p-7 ring-1 ring-navy/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan font-heading text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 font-body text-sm text-navy/65">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-navy py-20 text-white">
        <div className="container-x mb-14 grid items-center gap-12 lg:grid-cols-2">
          <div>
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
          </div>
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10" style={{ aspectRatio: "0.6" }}>
            <Image src="/process-vertical.jpg" alt="Faith Property Services quality assurance" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
        <div className="container-x grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <h3 className="font-heading text-xl font-semibold">{p.title}</h3>
              <ul className="mt-5 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 font-body text-sm text-white/75">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-gradient-to-b from-mint to-white py-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-navy/5 ring-1 ring-navy/10 lg:grid lg:grid-cols-2">
            {/* Left — credentials on dark panel */}
            <div className="relative bg-navy p-8 text-white sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-2xl" />
              <span className="inline-block font-body text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
                Compliance &amp; Certifications
              </span>
              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                Fully Compliant &amp; Audit-Ready
              </h2>
              <p className="mt-4 font-body text-white/70">
                Licensed, insured, and independently accredited — so you can
                engage us with complete confidence.
              </p>
              <ul className="mt-8 space-y-4">
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
            <div className="p-8 sm:p-12">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-navy/50">
                Accredited &amp; Insured By
              </p>
              <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-navy/10 ring-1 ring-navy/10 sm:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="flex h-28 items-center justify-center bg-white p-5 transition-colors duration-200 hover:bg-mint"
                  >
                    <Image
                      src={`/certs/cert-${n}.png`}
                      alt="Certification logo"
                      width={184}
                      height={99}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
