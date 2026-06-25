import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image = "/hero.jpg",
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover object-[center_28%]"
        />
        {/* Lighter gradient — darker on the left for text legibility, bright on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-navy/5" />
      </div>

      <div className="container-x relative flex min-h-[520px] items-center py-24 pt-32 lg:min-h-[620px]">
        <div className="max-w-2xl text-white [text-shadow:_0_2px_16px_rgb(0_0_0_/_45%)]">
          <h1 className="font-heading text-4xl font-semibold leading-[1.1] sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl font-body text-lg text-white/90">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
