"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Process", href: "/our-process" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Clicking "/" while already on "/" is a no-op for Next's router (no route
  // change), so it wouldn't otherwise scroll back to top — do it manually.
  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`container-x transition-all duration-300 ${scrolled ? "pt-2.5" : "pt-4"}`}>
        <div
          className={`flex items-center justify-between gap-6 rounded-full px-6 transition-all duration-300 sm:px-8 ${
            scrolled
              ? "h-16 bg-navy/95 shadow-lg shadow-black/20 backdrop-blur"
              : "h-20 bg-navy/70 backdrop-blur-sm"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleHomeClick}>
            <Image
              src="/logo-white.svg"
              alt="Faith Property Services"
              width={140}
              height={44}
              className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`nav-link relative pb-1 ${isActive ? "!text-cyan" : ""}`}
                  onClick={item.href === "/" ? handleHomeClick : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-cyan"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:1300849252"
              className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-body text-sm font-bold text-white transition-colors hover:bg-white hover:text-navy"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              1300 849 252
            </a>
            <Link href="/ndis" className="btn-ndis !py-3 !px-6">NDIS</Link>
            <Link href="/contact" className="btn-primary !py-3 !px-7">Get a Free Quote</Link>
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
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 overflow-hidden rounded-2xl bg-navy/95 p-4 backdrop-blur lg:hidden"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`rounded-lg px-3 py-2.5 font-body hover:bg-white/10 ${
                        isActive ? "bg-white/10 text-cyan" : "text-white/90"
                      }`}
                      onClick={(e) => {
                        if (item.href === "/") handleHomeClick(e);
                        setMobileOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <a
                  href="tel:1300849252"
                  className="mt-2 rounded-lg px-3 py-2.5 text-center font-body font-semibold text-white/90 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  1300 849 252
                </a>
                <Link href="/ndis" className="btn-ndis mt-2" onClick={() => setMobileOpen(false)}>
                  NDIS
                </Link>
                <Link href="/contact" className="btn-primary mt-2" onClick={() => setMobileOpen(false)}>
                  Get a Free Quote
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        :global(.nav-link) {
          font-family: var(--font-cormorant), serif;
          font-weight: 500;
          font-size: 1.02rem;
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
