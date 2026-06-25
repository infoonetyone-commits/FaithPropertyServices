import Image from "next/image";

const reviews = [
  {
    name: "Sarah Thompson",
    role: "Office Manager",
    img: "/testimonial-01.png",
    quote:
      "Faith Property Services has been incredible to work with. Their cleaning team is always on time, professional, and leaves our workspace spotless every single day.",
  },
  {
    name: "Justin King",
    role: "Silverton Cricket Club President",
    img: "/testimonial-02.png",
    quote:
      "Highly recommend Faith Property Services, friendly people always willing to go the extra mile and not cut corners. Whilst there work is first class they are also community first type of company giving back to local clubs. You definitely wont be upset using this company as they get it done thanks for all your work guys",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#3aa6b9">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.4 5.4 0 0 1-2.39 3.58v2.97h3.86c2.26-2.09 3.55-5.17 3.55-8.79z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.97c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.32a7.2 7.2 0 0 1 0-4.63V6.6H1.29a12 12 0 0 0 0 10.8l3.98-3.08z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.6l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Honest Reviews from our Customers
          </h2>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl bg-mint p-8 ring-1 ring-navy/5"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <GoogleMark />
              </div>
              <blockquote className="mt-5 flex-1 whitespace-pre-line font-body text-lg leading-relaxed text-navy/75">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-navy/10">
                  <Image src={r.img} alt={r.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-navy">{r.name}</div>
                  <div className="font-body text-sm text-navy/60">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
