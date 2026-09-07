import type { Metadata } from "next";
import Image from "next/image";
import AboutHero from "@/components/AboutHero";
import CTA from "@/components/CTA";
import ValuePropsScroll from "@/components/ValuePropsScroll";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About - Faith Property Services",
  description:
    "Trusted commercial cleaning experts across Melbourne and Victoria since 2012.",
};

const aboutProps = [
  {
    title: "13+ Years Experience",
    text: "Established in 2012, trusted across Melbourne and Victoria ever since.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Fully Insured & Compliant",
    text: "CM3 prequalified and covered by comprehensive public liability insurance.",
    icon: "M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z",
  },
  {
    title: "Trained, Uniformed Team",
    text: "Every cleaner is trained, uniformed, and held to the same high standard.",
    icon: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13A4 4 0 0116 11",
  },
  {
    title: "Customer-First Service",
    text: "Clear communication and flexible scheduling built around your site.",
    icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  },
];

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <ValuePropsScroll props={aboutProps} />

      {/* Commitment + pride + Experience you can trust — one shared
          full-bleed map background sits behind all of this copy. The
          section is locked to the map's own aspect ratio (with a mobile
          floor) so the image runs edge to edge at full width without
          ever being cropped top or bottom. */}
      <section className="relative aspect-[1262/882] min-h-[640px] w-full overflow-hidden bg-navy-deep/75 sm:min-h-0">
        <Image
          src="/service-area-map-v2.png"
          alt=""
          fill
          className="pointer-events-none select-none object-cover"
          aria-hidden="true"
        />

        <div className="container-x relative flex h-full flex-col justify-center gap-16 py-16 [text-shadow:_0_2px_4px_rgb(0_0_0_/_80%),_0_4px_24px_rgb(0_0_0_/_90%)]">
          <div className="mx-auto max-w-3xl text-center" style={{ marginTop: "auto" }}>
            <Reveal>
              <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
                Experience You Can Trust
              </h2>
              <p className="mt-5 font-body text-lg text-white/90">
                We proudly serve businesses across the region, including Berwick,
                Dandenong, Chadstone, Moorabbin, Clyde North, Bentleigh East, Seaford,
                Mornington, and Preston. We don&rsquo;t just clean properties, we care
                for them.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Intro + image — full-bleed background photo, edge to edge, with the
          copy overlaid on top (same treatment as the homepage About section). */}
      <section className="relative min-h-[600px] overflow-hidden bg-navy-deep/75 py-24 sm:min-h-[720px]">
        <Image
          src="/about-boss.png"
          alt="Faith Property Services team meeting"
          fill
          className="absolute inset-0 object-cover"
          style={{ objectPosition: "center 25%" }}
        />
        {/* Darkens the right side (where the copy sits) while leaving the left
            side of the photo clearer. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-navy-deep via-navy-deep/70 to-transparent" />

        <div className="container-x relative flex min-h-[600px] items-center sm:min-h-[720px]">
          <Reveal className="mx-auto max-w-2xl" delay={0.1}>
            <span className="eyebrow text-base">About us</span>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Trusted Cleaning Experts Since 2012
            </h2>
            <p className="mt-5 font-body text-xl text-white/65">
              Established experience since 2012, Faith Property Services has grown
              into one of the most trusted names in commercial cleaning Melbourne
              and across Victoria. With over 13 years of proven expertise, we
              deliver high-quality, reliable, and flexible cleaning services
              tailored to the needs of businesses, property managers, and
              facility operators.
            </p>
            <p className="mt-4 font-body text-xl text-white/65">
              Our mission is to keep your properties spotless, safe, and welcoming
              at all times, with customised cleaning plans adapted to your
              operational requirements.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA light="cloud" />
    </main>
  );
}
