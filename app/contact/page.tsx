import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Contact - Faith Property Services",
  description:
    "Get in touch with Faith Property Services for a free quote. Call 1300 849 252 or send us a request.",
};

const MAP_SRC =
  "https://www.google.com/maps?q=1/19+Silvretta+Court,+Clyde+North,+VIC+3978&output=embed";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch to schedule a consultation or to request a quote for your project."
        image="/contact-hero.png"
      />

      {/* Map + form */}
      <section className="bg-white py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Reach us</span>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-navy sm:text-4xl">
              Find us on Google
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Map */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-navy/10">
              <iframe
                title="Faith Property Services location"
                src={MAP_SRC}
                className="h-full min-h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Form */}
            <div className="rounded-2xl bg-mint p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-semibold text-navy">Submit a Request</h3>
              <form className="mt-5 space-y-4">
                <div>
                  <label className="form-label">Name</label>
                  <input type="text" placeholder="Enter full name" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input type="email" placeholder="Enter email address" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Phone Number</label>
                  <input type="tel" placeholder="Enter phone number" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea rows={4} placeholder="Enter your message" className="form-input resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full">Submit</button>
              </form>
            </div>
          </div>

          {/* Contact cards */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <a
              href="tel:1300849252"
              className="flex items-center gap-4 rounded-2xl bg-white p-6 ring-1 ring-navy/10 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-cyan/15 text-cyan">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block font-heading text-lg font-semibold text-navy">Make a Call</span>
                <span className="block font-body text-cyan">1300 849 252</span>
              </span>
            </a>

            <a
              href="mailto:Info@faithpropertyservices.com.au"
              className="flex items-center gap-4 rounded-2xl bg-white p-6 ring-1 ring-navy/10 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-cyan/15 text-cyan">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.7" />
                  <path d="m2 6 10 7 10-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block font-heading text-lg font-semibold text-navy">Send Email</span>
                <span className="block break-all font-body text-cyan">Info@faithpropertyservices.com.au</span>
              </span>
            </a>
          </div>
        </div>

        <style>{`
          .form-label {
            display: block;
            font-family: var(--font-bricolage), sans-serif;
            font-weight: 600;
            font-size: 0.85rem;
            color: #0f172a;
            margin-bottom: 0.35rem;
          }
          .form-input {
            width: 100%;
            border-radius: 0.6rem;
            border: 1px solid rgba(15,23,42,0.15);
            background: #fff;
            padding: 0.7rem 0.9rem;
            font-family: var(--font-bricolage), sans-serif;
            font-size: 0.95rem;
            color: #0f172a;
            outline: none;
            transition: border-color 0.2s;
          }
          .form-input:focus { border-color: #3aa6b9; }
        `}</style>
      </section>

      <CTA />
    </main>
  );
}
