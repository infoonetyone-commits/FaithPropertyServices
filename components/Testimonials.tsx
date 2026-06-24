const reviews = [
  {
    name: "Sarah Thompson",
    role: "Office Manager",
    quote:
      "Faith Property Services has been incredible to work with. Their cleaning team is always on time, professional, and leaves our workspace spotless every single day.",
  },
  {
    name: "Justin King",
    role: "Silverton Cricket Club President",
    quote:
      "Highly recommend Faith Property Services, friendly people always willing to go the extra mile and not cut corners. Whilst their work is first class they are also community first type of company giving back to local clubs. You definitely won't be upset using this company as they get it done — thanks for all your work guys.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#183030">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-mint/40 py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Honest Reviews from our Customers
          </h2>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm"
            >
              <Stars />
              <blockquote className="mt-5 flex-1 font-body text-lg leading-relaxed text-ink/75">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal font-heading text-lg font-bold text-white">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-bold text-ink">{r.name}</div>
                  <div className="font-body text-sm text-ink/60">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
