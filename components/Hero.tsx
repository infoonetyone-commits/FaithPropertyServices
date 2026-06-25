import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Faith Property Services cleaning team"
          fill
          priority
          className="object-cover object-[center_top]"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
      </div>

      <div className="container-x relative flex min-h-[100svh] items-center py-32">
        <div className="max-w-2xl text-white">
          <h1 className="font-heading text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[4.1rem]">
            Professional Commercial Cleaning Across Victoria
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-white/85">
            Creating cleaner, safer, and more professional spaces, one site at a
            time.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Get a Free Quote</a>
            <a href="tel:61423204386" className="btn-outline-light">Call Us Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
