import { Reveal } from "@/components/Reveal";
import ContactQuoteForm from "@/components/ContactQuoteForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-cloud py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <Reveal>
          <span className="eyebrow">Get in touch</span>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Get a Free Quote
          </h2>
          <p className="mt-5 max-w-md font-body text-lg text-navy/65">
            Tell us about your space and the service you need. Our team will get
            back to you with a fair, transparent quote.
          </p>
          <div className="mt-8 space-y-4">
            <a href="tel:1300849252" className="flex items-center gap-3 font-body text-navy">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              1300 849 252
            </a>
            <p className="flex items-center gap-3 font-body text-navy">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </span>
              1/19 Silvretta Court, Clyde North, Vic 3978
            </p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="rounded-2xl bg-white p-6 shadow-xl shadow-navy/5 ring-1 ring-navy/10 sm:p-8">
          <ContactQuoteForm />
        </Reveal>
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
        .form-input::placeholder {
          color: rgba(15,23,42,0.35);
        }
        .form-input:focus {
          border-color: #3aa6b9;
        }
      `}</style>
    </section>
  );
}
