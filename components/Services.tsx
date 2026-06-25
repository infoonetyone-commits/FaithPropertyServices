import Image from "next/image";

const services = [
  {
    title: "Commercial Cleaning",
    text: "Customised cleaning for offices, retail spaces, and facilities, keeping every area spotless and business-ready.",
    img: "/service-commercial.jpg",
  },
  {
    title: "Industrial Cleaning",
    text: "Safe, efficient cleaning for warehouses, factories, and production sites, ensuring compliance and productivity.",
    img: "/service-industrial.jpg",
  },
  {
    title: "Fitness Centre Cleaning",
    text: "Maintain a clean, hygienic shopping environment that enhances customer experience and brand reputation.",
    img: "/service-fitness.jpg",
  },
  {
    title: "Healthcare & Education Cleaning",
    text: "Hygienic cleaning for hospitals, clinics, and schools with strict safety and sanitation standards.",
    img: "/service-healthcare.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-mint py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Comprehensive Cleaning &amp; Maintenance Solutions
          </h2>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/5 transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 font-body text-sm text-navy/65">{s.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">Explore Our Services</a>
        </div>
      </div>
    </section>
  );
}
