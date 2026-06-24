const items = [
  {
    title: "Expertise & Experience",
    text: "With over 13 years of proven industry experience, our skilled and insured team delivers consistent, high-quality cleaning with professionalism and care.",
    icon: "M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z",
  },
  {
    title: "Customized Solutions",
    text: "We tailor every cleaning plan to suit your site's unique needs and schedule—minimising disruption while ensuring spotless results every time.",
    icon: "M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z",
  },
  {
    title: "Sustainable Practices",
    text: "We use eco-friendly cleaning products and safe, compliant methods that protect people, property, and the environment.",
    icon: "M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6",
  },
];

export default function WhyUs() {
  return (
    <section id="process" className="bg-teal py-20 text-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block font-body text-sm font-bold uppercase tracking-[0.18em] text-mint">
            Why Us
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
            Our Commitment to Excellence
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-mint">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d={item.icon} stroke="#183030" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold">{item.title}</h3>
              <p className="mt-3 font-body text-white/75">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
