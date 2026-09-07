import Image from "next/image";
import Link from "next/link";

export default function PageHero({
  title,
  subtitle,
  image = "/hero.jpg",
  imagePosition = "center 28%",
  imageTransitionName,
  backLink,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  imagePosition?: string;
  imageTransitionName?: string;
  backLink?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
          style={{
            objectPosition: imagePosition,
            ...(imageTransitionName ? { viewTransitionName: imageTransitionName } : {}),
          }}
        />
        {/* Lighter gradient — darker on the left for text legibility, bright on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-navy/5" />
        {/* Fades to solid navy at the bottom edge so any photo — bright or
            dark — settles to a flat colour before the next section's
            translucent background begins, instead of cutting hard into it. */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-deep" />
      </div>

      <div className="container-x relative flex min-h-[520px] items-center py-24 pt-32 lg:min-h-[620px]">
        <div className="max-w-2xl text-white [text-shadow:_0_2px_16px_rgb(0_0_0_/_45%)]">
          {backLink && (
            <Link
              href={backLink.href}
              className="mb-5 inline-flex items-center gap-1.5 font-body text-sm font-medium text-white/80 transition-colors hover:text-cyan"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {backLink.label}
            </Link>
          )}
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
