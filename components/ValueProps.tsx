const props = [
  {
    title: "Affordable Prices",
    text: "Fair, transparent rates with no hidden costs.",
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  },
  {
    title: "Experienced Team",
    text: "Trained and insured professionals you can rely on.",
    icon: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13A4 4 0 0116 11",
  },
  {
    title: "Sustainable Solutions",
    text: "Eco-friendly products for a cleaner, safer environment.",
    icon: "M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6",
  },
  {
    title: "Client Focus",
    text: "Flexible, responsive service built around your needs.",
    icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-mint py-14">
      <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {props.map((p) => (
          <div key={p.title} className="flex flex-col items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan/15">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d={p.icon} stroke="#3aa6b9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold text-navy">{p.title}</h3>
            <p className="font-body text-navy/65">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
