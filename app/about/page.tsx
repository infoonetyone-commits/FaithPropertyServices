import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About - Faith Property Services",
  description:
    "Trusted commercial cleaning experts across Melbourne and Victoria since 2012.",
};

const pride = [
  "Reliable cleaning services Victoria businesses can depend on",
  "Clear communication and responsive support",
  "Flexible cleaning schedules with minimal disruption",
  "Fully compliant safety and hygiene practices",
  "Consistent supervision and quality control",
];

const areas = [
  "Berwick",
  "Dandenong",
  "Chadstone",
  "Moorabbin",
  "Clyde North",
  "Bentleigh East",
  "Seaford",
  "Mornington",
  "Preston",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Faith Property Services"
        subtitle="Creating cleaner, safer, and more professional spaces, one site at a time."
        image="/about-hero.jpg"
      />

      {/* Intro + image */}
      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-navy/10">
            <Image src="/about-meeting.jpg" alt="Faith Property Services team meeting" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <span className="eyebrow">About us</span>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Trusted Cleaning Experts Since 2012
            </h2>
            <p className="mt-5 font-body text-lg text-navy/70">
              Established experience since 2012, Faith Property Services has grown
              into one of the most trusted names in commercial cleaning Melbourne
              and across Victoria. With over 13 years of proven expertise, we
              deliver high-quality, reliable, and flexible cleaning services
              tailored to the needs of businesses, property managers, and
              facility operators.
            </p>
            <p className="mt-4 font-body text-lg text-navy/70">
              Our mission is to keep your properties spotless, safe, and welcoming
              at all times, with customised cleaning plans adapted to your
              operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment + pride */}
      <section className="bg-white pb-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-navy sm:text-3xl">
              Our Commitment to Quality
            </h2>
            <p className="mt-5 font-body text-lg text-navy/70">
              We believe great cleaning starts with great people. Every member of
              our team is fully trained, uniformed, and insured, and we use
              professional-grade equipment and eco-friendly cleaning products to
              deliver consistent, high-quality results.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-navy">
              We take pride in delivering:
            </h3>
            <ul className="mt-5 space-y-3">
              {pride.map((p) => (
                <li key={p} className="flex items-start gap-3 font-body text-navy/80">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-cyan text-white">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experience you can trust */}
      <section className="bg-mint py-20">
        <div className="container-x mx-auto max-w-3xl text-center">
          <span className="eyebrow">Local & dependable</span>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-navy sm:text-4xl">
            Experience You Can Trust
          </h2>
          <p className="mt-5 font-body text-lg text-navy/70">
            We proudly serve businesses across the region, including Berwick,
            Dandenong, Chadstone, Moorabbin, Clyde North, Bentleigh East, Seaford,
            Mornington, and Preston. We don&rsquo;t just clean properties, we care
            for them.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {areas.map((a) => (
              <span
                key={a}
                className="rounded-full bg-white px-4 py-2 font-body text-sm font-medium text-navy ring-1 ring-navy/10"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
