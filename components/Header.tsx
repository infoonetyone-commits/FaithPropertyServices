"use client";

import { useState } from "react";

const services = [
  "Commercial Cleaning",
  "Office Cleaning",
  "Industrial Cleaning",
  "Shopping Centre Cleaning",
  "Hospital Cleaning",
  "School Cleaning",
  "Supermarket Cleaning",
  "Fitness Centre Cleaning",
  "Home & Domestic Cleaning",
  "Steam Cleaning",
  "High Pressure Cleaning",
  "Window Cleaning",
  "After Builders Cleaning",
  "Strip & Seal",
  "Graffiti Removal",
  "End of Lease Cleaning",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-teal text-white font-heading text-lg font-bold">
            F
          </div>
          <span className="font-heading text-lg font-bold leading-tight text-ink">
            Faith Property
            <span className="block text-xs font-medium tracking-wide text-teal/70">
              SERVICES
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#process" className="nav-link">Our Process</a>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link flex items-center gap-1">
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-xl border border-black/5 bg-white p-2 shadow-xl">
                {services.map((s) => (
                  <a
                    key={s}
                    href="#services"
                    className="block rounded-lg px-4 py-2 font-body text-sm text-ink/80 hover:bg-mint hover:text-teal"
                  >
                    {s}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary">Get a Free Quote</a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="#183030" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {["Home", "About", "Our Process", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="rounded-lg px-2 py-2.5 font-body text-ink/80 hover:bg-mint hover:text-teal"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2" onClick={() => setMobileOpen(false)}>
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}

      <style jsx>{`
        :global(.nav-link) {
          font-family: var(--font-karla), sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: #183030;
          transition: color 0.2s;
        }
        :global(.nav-link:hover) {
          color: rgba(24, 48, 48, 0.6);
        }
      `}</style>
    </header>
  );
}
