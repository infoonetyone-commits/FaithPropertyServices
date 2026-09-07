import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const bullets = [
  { label: "Commercial & Office Cleaning", href: "/commercial-cleaning/office-cleaning" },
  { label: "Industrial & Warehouse Cleaning", href: "/commercial-cleaning/industrial-cleaning" },
  { label: "Retail & Supermarket Cleaning", href: "/commercial-cleaning/supermarket-cleaning" },
  // No single page covers both Education and Healthcare — links to the
  // commercial-cleaning hub, which lists both (school + hospital cleaning).
  { label: "Education & Healthcare Cleaning", href: "/commercial-cleaning" },
];

export default function About() {
  return (
    <section id="about" className="relative min-h-[600px] overflow-hidden bg-navy-deep/75 py-24 sm:min-h-[720px]">
      {/* Full-bleed background video, edge to edge, with the copy overlaid on top. */}
      <video
        src="/about-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Darkens the right side (where the copy sits) while leaving the left
          side of the photo clearer — text stays readable without a flat
          overlay hiding the whole image. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-navy-deep via-navy-deep/70 to-transparent" />

      <div className="container-x relative flex min-h-[600px] items-center sm:min-h-[720px]">
        <Reveal className="max-w-2xl mx-auto" delay={0.1}>
          <span className="eyebrow text-base">About us</span>
          <h2 className="font-heading mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Bringing Professional Cleaning to Every Space
          </h2>
          <p className="mt-5 font-body text-xl text-white/65">
            With over 13 years of experience, Faith Property Services delivers
            dependable, high-quality cleaning across commercial, industrial,
            retail, and institutional sites throughout Victoria. Our team
            combines professionalism, attention to detail, and care — keeping
            every property spotless, safe, and welcoming.
          </p>

          <ul className="mt-7 grid gap-4 sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b.label}>
                <Link
                  href={b.href}
                  className="group flex h-full items-center gap-3 font-body text-lg text-white/80 transition-colors hover:text-cyan"
                >
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-cyan text-navy transition-transform duration-200 group-hover:scale-110">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="border-b border-transparent transition-colors group-hover:border-cyan/50">
                    {b.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a href="#services" className="btn-outline-light">Learn More</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
