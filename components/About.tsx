const bullets = [
  "Commercial & Office Cleaning",
  "Industrial & Warehouse Cleaning",
  "Retail & Supermarket Cleaning",
  "Education & Healthcare Cleaning",
];

export default function About() {
  return (
    <section id="about" className="bg-mint/40 py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Image placeholder */}
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-teal/10 ring-1 ring-teal/10">
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-body text-sm uppercase tracking-widest text-teal/40">
                Image Placeholder
              </span>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <span className="eyebrow">About us</span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Bringing Professional Cleaning to Every Space
          </h2>
          <p className="mt-5 font-body text-lg text-ink/70">
            With over 13 years of experience, Faith Property Services delivers
            dependable, high-quality cleaning across commercial, industrial,
            retail, and institutional sites throughout Victoria. Our team
            combines professionalism, attention to detail, and care — keeping
            every property spotless, safe, and welcoming.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 font-body text-ink/80">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal text-white">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a href="#services" className="btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
