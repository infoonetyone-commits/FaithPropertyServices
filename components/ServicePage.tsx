import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import type { ServiceData, ServiceSection, Side } from "@/lib/services-data";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3 font-body text-navy/80">
          <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-cyan text-white">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionBody({ section }: { section: ServiceSection }) {
  return (
    <>
      {section.heading && (
        <h2 className="font-heading text-2xl font-semibold leading-tight text-navy sm:text-3xl">
          {section.heading}
        </h2>
      )}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="mt-4 whitespace-pre-line font-body text-lg text-navy/70">
          {p}
        </p>
      ))}
      {section.bullets && section.bullets.length > 0 && <Bullets items={section.bullets} />}
    </>
  );
}

/** A two-column row that places the image on the correct side, using the real aspect ratio. */
function ImageTextRow({
  src,
  aspect,
  side,
  alt,
  children,
}: {
  src: string;
  aspect: number;
  side: Side;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container-x grid items-center gap-12 lg:grid-cols-2">
      <div className={side === "R" ? "lg:order-1" : "lg:order-2"}>{children}</div>
      <div className={side === "R" ? "lg:order-2" : "lg:order-1"}>
        <div
          className="relative w-full overflow-hidden rounded-2xl ring-1 ring-navy/10"
          style={{ aspectRatio: String(aspect) }}
        >
          <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </div>
  );
}

export default function ServicePage({ data }: { data: ServiceData }) {
  const [first, second, ...rest] = data.sections;

  return (
    <main>
      <PageHero title={data.title} subtitle={data.intro} image={data.hero ?? "/hero.jpg"} />

      {/* First section — image on its real side */}
      <section className="bg-white py-20">
        {first && data.image1 ? (
          <ImageTextRow src={data.image1} aspect={data.image1Aspect} side={data.image1Side} alt={data.title}>
            <SectionBody section={first} />
          </ImageTextRow>
        ) : (
          first && (
            <div className="container-x mx-auto max-w-3xl">
              <SectionBody section={first} />
            </div>
          )
        )}
      </section>

      {/* Second section — mint band, image on its real side */}
      {second && (
        <section className="bg-mint py-20">
          {data.image2 ? (
            <ImageTextRow src={data.image2} aspect={data.image2Aspect} side={data.image2Side} alt={data.title}>
              <SectionBody section={second} />
            </ImageTextRow>
          ) : (
            <div className="container-x mx-auto max-w-3xl">
              <SectionBody section={second} />
            </div>
          )}
        </section>
      )}

      {/* Remaining sections — stacked */}
      {rest.length > 0 && (
        <section className="bg-white py-20">
          <div className="container-x mx-auto max-w-3xl space-y-12">
            {rest.map((s, i) => (
              <div key={i}>
                <SectionBody section={s} />
              </div>
            ))}
          </div>
        </section>
      )}

      <CTA />
    </main>
  );
}
