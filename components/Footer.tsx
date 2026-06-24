const quickLinks = ["Home", "About", "Our Process", "Services", "Contact"];

const footerServices = [
  "Commercial Cleaning",
  "Industrial Cleaning",
  "Window Cleaning",
  "Steam Cleaning",
  "End of Lease Cleaning",
];

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-white">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-mint text-teal font-heading text-lg font-bold">
              F
            </div>
            <span className="font-heading text-lg font-bold leading-tight">
              Faith Property
              <span className="block text-xs font-medium tracking-wide text-white/60">
                SERVICES
              </span>
            </span>
          </div>
          <p className="mt-5 font-body text-sm text-white/65">
            Professional Commercial Cleaning Across Victoria, Australia and New
            Zealand.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading text-base font-bold">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(/\s+/g, "")}`}
                  className="font-body text-sm text-white/65 hover:text-mint"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading text-base font-bold">Our Services</h3>
          <ul className="mt-5 space-y-3">
            {footerServices.map((s) => (
              <li key={s}>
                <a href="#services" className="font-body text-sm text-white/65 hover:text-mint">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-base font-bold">Faith Property Services Pty Ltd</h3>
          <address className="mt-5 space-y-3 not-italic font-body text-sm text-white/65">
            <p>
              1/19 Silvretta Court, Clyde North,
              <br />
              Vic 3978, Australia.
            </p>
            <p>
              <span className="block text-white/45">Call Us</span>
              <a href="tel:1300849252" className="text-mint hover:underline">
                1300 849 252
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-center font-body text-sm text-white/55">
          Copyright © 2026 Faith Property Services All rights reserved.
        </div>
      </div>
    </footer>
  );
}
