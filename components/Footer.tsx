import Image from "next/image";
import Link from "next/link";

const quickLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Process", href: "/our-process" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const footerServices: { label: string; href: string }[] = [
  { label: "Commercial Cleaning", href: "/commercial-cleaning" },
  { label: "Industrial Cleaning", href: "/commercial-cleaning/industrial-cleaning" },
  { label: "Window Cleaning", href: "/window-cleaning" },
  { label: "Steam Cleaning", href: "/steam-cleaning" },
  { label: "End of Lease Cleaning", href: "/end-of-lease-cleaning" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Image
            src="/logo-white.svg"
            alt="Faith Property Services"
            width={150}
            height={47}
            className="h-10 w-auto"
          />
          <p className="mt-5 font-body text-sm text-white/65">
            Professional Commercial Cleaning Across Victoria, Australia and New
            Zealand.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading text-base font-semibold">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="font-body text-sm text-white/65 hover:text-cyan"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading text-base font-semibold">Our Services</h3>
          <ul className="mt-5 space-y-3">
            {footerServices.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="font-body text-sm text-white/65 hover:text-cyan">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-base font-semibold">Faith Property Services Pty Ltd</h3>
          <address className="mt-5 space-y-3 not-italic font-body text-sm text-white/65">
            <p>
              1/19 Silvretta Court, Clyde North,
              <br />
              Vic 3978, Australia.
            </p>
            <p>
              <span className="block text-white/45">Call Us</span>
              <a href="tel:1300849252" className="text-cyan hover:underline">
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
