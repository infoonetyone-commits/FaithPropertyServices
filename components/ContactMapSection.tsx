import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import ContactRequestForm from "@/components/ContactRequestForm";

const MAP_SRC =
  "https://www.google.com/maps?q=1/19+Silvretta+Court,+Clyde+North,+VIC+3978&output=embed";

export default function ContactMapSection() {
  return (
    <section className="relative overflow-hidden bg-navy-deep/75 py-20">
      <video
        src="/contact-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Darkens the video so the map, form, and cards stay legible on top. */}
      <div className="pointer-events-none absolute inset-0 bg-navy-deep/30" />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Reach us</span>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl">
            Find us on Google
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <Reveal className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            <iframe
              title="Faith Property Services location"
              src={MAP_SRC}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              // Plain Maps embed has no dark-mode param without a paid API
              // key + custom style JSON — inverting the whole iframe and
              // rotating the hue back is the standard key-free trick to
              // fake it (roads/background go dark, colors land close to
              // their original hue instead of staying inverted).
              style={{ filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)", opacity: 0.8 }}
            />
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="rounded-2xl bg-cloud p-6 shadow-xl shadow-black/30 ring-1 ring-navy/10 backdrop-blur-md sm:p-8">
            <h3 className="font-heading text-2xl font-semibold text-navy">Submit a Request</h3>
            <ContactRequestForm />
          </Reveal>
        </div>

        {/* Contact cards */}
        <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2">
          <RevealItem>
            <a
              href="tel:1300849252"
              className="flex items-center gap-4 rounded-2xl bg-navy-deep/80 p-6 shadow-xl shadow-black/30 ring-1 ring-white/15 backdrop-blur-md transition-shadow hover:shadow-lg hover:shadow-cyan/5"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-cyan/10 text-cyan">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block font-heading text-lg font-semibold text-white">Make a Call</span>
                <span className="block font-body text-cyan">1300 849 252</span>
              </span>
            </a>
          </RevealItem>

          <RevealItem>
            <a
              href="mailto:Info@faithpropertyservices.com.au"
              className="flex items-center gap-4 rounded-2xl bg-navy-deep/80 p-6 shadow-xl shadow-black/30 ring-1 ring-white/15 backdrop-blur-md transition-shadow hover:shadow-lg hover:shadow-cyan/5"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-cyan/10 text-cyan">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.7" />
                  <path d="m2 6 10 7 10-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block font-heading text-lg font-semibold text-white">Send Email</span>
                <span className="block break-all font-body text-cyan">Info@faithpropertyservices.com.au</span>
              </span>
            </a>
          </RevealItem>
        </RevealGroup>
      </div>

      <style>{`
        .form-label {
          display: block;
          font-family: var(--font-cormorant), serif;
          font-weight: 600;
          font-size: 0.85rem;
          color: rgba(15,23,42,0.8);
          margin-bottom: 0.35rem;
        }
        .form-input {
          width: 100%;
          border-radius: 0.6rem;
          border: 1px solid rgba(15,23,42,0.15);
          background: rgba(15,23,42,0.03);
          padding: 0.7rem 0.9rem;
          font-family: var(--font-cormorant), serif;
          font-size: 0.95rem;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input::placeholder { color: rgba(15,23,42,0.35); }
        .form-input:focus { border-color: #3aa6b9; }
      `}</style>
    </section>
  );
}
