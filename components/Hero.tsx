const serviceOptions = [
  "Commercial Cleaning",
  "Steam Cleaning",
  "High Pressure Cleaning",
  "Window Cleaning",
  "After Builders Cleaning",
  "Strip & Seal Services",
  "Graffiti Removal Services",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-teal">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-teal via-teal to-teal-deep" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container-x relative grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        {/* Left: copy */}
        <div className="text-white">
          <h1 className="font-heading text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Professional Commercial Cleaning Across Victoria
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-white/85">
            Creating cleaner, safer, and more professional spaces, one site at a
            time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-light">Get a Free Quote</a>
            <a href="tel:61423204386" className="btn-outline">Call Us Now</a>
          </div>
        </div>

        {/* Right: quote form */}
        <div id="contact" className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          <h2 className="font-heading text-2xl font-bold text-ink">
            Get a Free Quote
          </h2>
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
              <label className="form-label">Contact Service Name</label>
              <input type="text" className="form-input" />
            </div>
            <div>
              <label className="form-label">Service Address</label>
              <input type="text" className="form-input" />
            </div>
            <div>
              <label className="form-label">Service</label>
              <select className="form-input" defaultValue="">
                <option value="" disabled>--- Select Choice ---</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label">Message</label>
              <textarea rows={3} placeholder="Enter your message" className="form-input resize-none" />
            </div>
            <button type="submit" className="btn-primary w-full">Submit</button>
          </form>
        </div>
      </div>

      <style>{`
        .form-label {
          display: block;
          font-family: var(--font-karla), sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: #183030;
          margin-bottom: 0.35rem;
        }
        .form-input {
          width: 100%;
          border-radius: 0.6rem;
          border: 1px solid rgba(2,1,1,0.15);
          background: #fff;
          padding: 0.7rem 0.9rem;
          font-family: var(--font-karla), sans-serif;
          font-size: 0.95rem;
          color: #020101;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          border-color: #183030;
        }
      `}</style>
    </section>
  );
}
