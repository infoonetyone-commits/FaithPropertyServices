"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const services: { label: string; href: string }[] = [
  { label: "Commercial Cleaning", href: "/commercial-cleaning" },
  { label: "Office Cleaning", href: "/commercial-cleaning/office-cleaning" },
  { label: "Industrial Cleaning", href: "/commercial-cleaning/industrial-cleaning" },
  { label: "Shopping Centre Cleaning", href: "/commercial-cleaning/shopping-centre-cleaning" },
  { label: "Hospital Cleaning", href: "/commercial-cleaning/hospital-cleaning" },
  { label: "School Cleaning", href: "/commercial-cleaning/school-cleaning" },
  { label: "Supermarket Cleaning", href: "/commercial-cleaning/supermarket-cleaning" },
  { label: "Fitness Centre Cleaning", href: "/commercial-cleaning/fitness-centre-cleaning" },
  { label: "Home & Domestic Cleaning", href: "/home-domestic-cleaning-services" },
  { label: "Steam Cleaning", href: "/steam-cleaning" },
  { label: "High Pressure Cleaning", href: "/high-pressure-cleaning" },
  { label: "Window Cleaning", href: "/window-cleaning" },
  { label: "After Builders Cleaning", href: "/after-builders-cleaning" },
  { label: "Strip & Seal", href: "/strip-seal" },
  { label: "Graffiti Removal", href: "/graffiti-removal" },
  { label: "End of Lease Cleaning", href: "/end-of-lease-cleaning" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Process", href: "/our-process" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-x pt-4">
        <div
          className={`flex h-16 items-center justify-between gap-6 rounded-full px-5 transition-all duration-300 sm:px-7 ${
            scrolled
              ? "bg-navy/95 shadow-lg shadow-black/20 backdrop-blur"
              : "bg-navy/70 backdrop-blur-sm"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-white.svg"
              alt="Faith Property Services"
              width={140}
              height={44}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/our-process" className="nav-link">Our Process</Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href="/services" className="nav-link flex items-center gap-1">
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                  <div className="rounded-2xl border border-black/5 bg-white p-2 shadow-xl">
                    {services.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        className="block rounded-lg px-4 py-2 font-body text-sm text-navy/80 hover:bg-mint hover:text-cyan"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary !py-2.5 !px-6">Get a Free Quote</Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mt-2 rounded-2xl bg-navy/95 p-4 backdrop-blur lg:hidden">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 font-body text-white/90 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/services" className="rounded-lg px-3 py-2.5 font-body text-white/90 hover:bg-white/10" onClick={() => setMobileOpen(false)}>
                Services
              </Link>
              <Link href="/contact" className="btn-primary mt-2" onClick={() => setMobileOpen(false)}>
                Get a Free Quote
              </Link>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        :global(.nav-link) {
          font-family: var(--font-bricolage), sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          transition: color 0.2s;
        }
        :global(.nav-link:hover) {
          color: #3aa6b9;
        }
      `}</style>
    </header>
  );
}
