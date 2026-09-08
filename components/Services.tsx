import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const services = [
  {
    title: "Warehouse Cleaning",
    badge: "Warehouse",
    text: "Floor scrubbing, racking, loading bays, and amenities kept spotless and compliant without disrupting dispatch.",
    img: "/svc/warehouse-cleaning-hero.png",
    href: "/warehouse-cleaning",
  },
  {
    title: "Commercial Cleaning",
    badge: "Commercial",
    text: "Customised cleaning for offices, retail spaces, and facilities, keeping every area spotless and business-ready.",
    img: "/service-commercial.jpg",
    href: "/commercial-cleaning",
  },
  {
    title: "Industrial Cleaning",
    badge: "Industrial",
    text: "Safe, efficient cleaning for warehouses, factories, and production sites, ensuring compliance and productivity.",
    img: "/service-industrial.jpg",
    href: "/commercial-cleaning/industrial-cleaning",
  },
  {
    title: "Healthcare & Education Cleaning",
    badge: "Healthcare",
    text: "Hygienic cleaning for hospitals, clinics, and schools with strict safety and sanitation standards.",
    img: "/service-healthcare.jpg",
    href: "/commercial-cleaning/hospital-cleaning",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cloud py-20">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Comprehensive Cleaning &amp; Maintenance Solutions
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <RevealItem key={s.title} whileHover={{ y: -6 }}>
              <Link
                href={s.href}
                className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-navy/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-navy-deep/10 to-navy-deep/25" />
                  <span className="absolute left-3 top-3 rounded-full border border-cyan/30 bg-navy-deep/70 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-cyan backdrop-blur-sm">
                    {s.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="line-clamp-2 h-14 font-heading text-lg font-semibold text-navy">{s.title}</h3>
                  <p className="mt-3 font-body text-sm text-navy/65">{s.text}</p>
                  <span className="mt-4 flex translate-y-1 items-center gap-1.5 font-body text-sm font-semibold text-cyan opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-primary">Explore Our Services</Link>
        </div>
      </div>
    </section>
  );
}
