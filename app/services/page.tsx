import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services - Faith Property Services",
  description:
    "From large-scale industrial facilities to boutique retail spaces, our team delivers spotless results across Melbourne and Victoria.",
};

const services = [
  {
    title: "Commercial Cleaning",
    img: "/sp-commercial.jpg",
    href: "/commercial-cleaning",
    text: "The Faith Property Services team delivers professional commercial cleaning for offices, retail spaces, and business facilities. They handle all cleaning tasks efficiently while ensuring compliance with safety standards. Your environment stays clean, organized, and welcoming for employees and clients alike.",
  },
  {
    title: "Home & Domestic Cleaning",
    img: "/sp-home.jpg",
    href: "/home-domestic-cleaning-services",
    text: "At Faith Property Services, we provide reliable home and domestic cleaning services tailored to houses, apartments, units, and residential properties across Melbourne and Victoria. Whether you need regular household cleaning, a one-off deep clean, or assistance with everyday home upkeep, our experienced team delivers professional cleaning services with care and attention to detail.",
  },
  {
    title: "Steam Cleaning",
    img: "/sp-steam.jpg",
    href: "/steam-cleaning",
    text: "Expert steam cleaning services by Faith Property Services remove dirt, grime, and bacteria from commercial and residential spaces safely and effectively. Advanced steam equipment ensures all surfaces are sanitized while maintaining compliance with safety standards.",
  },
  {
    title: "High Pressure Cleaning",
    img: "/sp-highpressure.jpg",
    href: "/high-pressure-cleaning",
    text: "Faith Property Services specialists provide high-pressure cleaning for warehouses, driveways, and industrial areas. Powerful equipment removes dirt, grease, and buildup quickly and safely. Work is conducted in line with safety regulations, leaving surfaces spotless and operational.",
  },
  {
    title: "Window Cleaning",
    img: "/sp-window.jpg",
    href: "/window-cleaning",
    text: "Professional window cleaning by Faith Property Services keeps offices, commercial buildings, and retail spaces sparkling. Dirt, smudges, and streaks are removed efficiently while maintaining strict safety standards. Clean windows enhance both appearance and professionalism.",
  },
  {
    title: "After Builders Cleaning",
    img: "/sp-afterbuilders.jpg",
    href: "/after-builders-cleaning",
    text: "After-builders cleaning services from Faith Property Services ensure newly renovated homes and commercial spaces are dust- and debris-free. Construction residues are removed thoroughly and safely, leaving every surface polished and move-in ready.",
  },
  {
    title: "Strip & Seal Services",
    img: "/sp-stripseal.jpg",
    href: "/strip-seal",
    text: "Faith Property Services provides strip and seal services for commercial and industrial flooring. Old coatings are removed, and new protective layers are applied safely and efficiently. Floors are restored to a polished, long-lasting finish while maintaining safety compliance.",
  },
  {
    title: "Graffiti Removal Services",
    img: "/sp-graffiti.jpg",
    href: "/graffiti-removal",
    text: "Graffiti removal specialists at Faith Property Services restore walls, fences, and public spaces to their original condition. Unwanted paint is removed safely using appropriate equipment and cleaning agents, while all work complies with safety regulations.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="From large-scale industrial facilities to boutique retail spaces, our experienced team ensures spotless results that reflect your brand's standards of excellence."
        image="/services-hero.jpg"
      />

      {/* Full range of services */}
      <section className="bg-mint py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">All Services</span>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-navy sm:text-4xl">
              Our Full Range of Services
            </h2>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.title}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/5 sm:flex-row"
              >
                <div className="relative h-52 sm:h-auto sm:w-2/5">
                  <Image src={s.img} alt={s.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 40vw" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-3 flex-1 font-body text-sm text-navy/65">{s.text}</p>
                  <div className="mt-5">
                    <Link href={s.href} className="btn-primary !py-2.5 !px-6">Read More</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-navy/10">
            <Image src="/sp-legacy.jpg" alt="Faith Property Services legacy" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <span className="eyebrow">Our Legacy</span>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Decades of Trusted Excellence
            </h2>
            <p className="mt-5 font-body text-lg text-navy/70">
              At Faith Property Services, our reputation is built on reliability,
              quality, and trust. For over two decades, we&rsquo;ve been delivering
              high-standard commercial and industrial cleaning solutions across
              offices, retail spaces, healthcare facilities, and educational
              institutions. Our experienced team takes pride in maintaining
              environments that are spotless, safe, and welcoming, ensuring every
              client experiences service that goes beyond expectations.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
