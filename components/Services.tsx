const services = [
  {
    title: "Commercial Cleaning",
    text: "Customised cleaning for offices, retail spaces, and facilities, keeping every area spotless and business-ready.",
  },
  {
    title: "Industrial Cleaning",
    text: "Safe, efficient cleaning for warehouses, factories, and production sites, ensuring compliance and productivity.",
  },
  {
    title: "Retail & Supermarket Cleaning",
    text: "Maintain a clean, hygienic shopping environment that enhances customer experience and brand reputation.",
  },
  {
    title: "Healthcare & Education Cleaning",
    text: "Hygienic cleaning for hospitals, clinics, and schools with strict safety and sanitation standards.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Comprehensive Cleaning &amp; Maintenance Solutions
          </h2>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              {/* Image placeholder */}
              <div className="flex aspect-[4/3] items-center justify-center bg-teal/10">
                <span className="font-body text-xs uppercase tracking-widest text-teal/40">
                  Image
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-3 font-body text-sm text-ink/65">{s.text}</p>
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
