import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import ParallaxImage from "@/components/ParallaxImage";
import AccentBar from "@/components/AccentBar";
import BulletChecklist from "@/components/BulletChecklist";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import ViewTransitionSignal from "@/components/ViewTransitionSignal";
import { svcTransitionName } from "@/lib/transition";
import { getService, type ServiceData, type ServiceSection, type Side } from "@/lib/services-data";

function SectionBody({ section }: { section: ServiceSection }) {
  return (
    <>
      {section.heading && (
        <>
          <AccentBar />
          <h2 className="font-heading text-2xl font-semibold leading-tight text-white sm:text-3xl">
            {section.heading}
          </h2>
        </>
      )}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="mt-4 whitespace-pre-line font-body text-lg text-white/65">
          {p}
        </p>
      ))}
      {section.bullets && section.bullets.length > 0 && <BulletChecklist items={section.bullets} />}
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
    <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
      <Reveal className={side === "R" ? "lg:order-1" : "lg:order-2"}>{children}</Reveal>
      <Reveal delay={0.1} className={side === "R" ? "lg:order-2" : "lg:order-1"}>
        <ParallaxImage src={src} alt={alt} aspect={aspect} />
      </Reveal>
    </div>
  );
}

/** Supporting photo strip — 2-3 images breaking up the text-heavy stacked sections. */
function Gallery({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <section className="bg-navy-deep/75 pb-20">
      <RevealGroup
        className={`container-x mx-auto grid gap-6 ${images.length >= 3 ? "sm:grid-cols-3" : "max-w-2xl sm:grid-cols-2"}`}
      >
        {images.map((img) => (
          <RevealItem
            key={img.src}
            whileHover={{ y: -4 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-cyan/5 ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-cyan/20"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-navy-deep/5 to-transparent" />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

export default function ServicePage({
  data,
  hero,
  gallery,
  gallery2,
  gallery2After = 2,
  beforeCTA,
}: {
  data: ServiceData;
  hero?: React.ReactNode;
  gallery?: { src: string; alt: string }[];
  /** A second photo strip dropped partway through the stacked text sections. */
  gallery2?: { src: string; alt: string }[];
  /** How many of the stacked sections render before gallery2 breaks in. */
  gallery2After?: number;
  /** Extra content (e.g. testimonials) slotted in right before the closing CTA. */
  beforeCTA?: React.ReactNode;
}) {
  const [first, second, ...rest] = data.sections;
  const restBeforeGallery2 = gallery2 && gallery2.length > 0 ? rest.slice(0, gallery2After) : rest;
  const restAfterGallery2 = gallery2 && gallery2.length > 0 ? rest.slice(gallery2After) : [];

  // Sub-pages (e.g. "commercial-cleaning/office-cleaning") link back to
  // their immediate parent category rather than skipping to the top listing.
  const parentSlug = data.slug.includes("/") ? data.slug.split("/")[0] : null;
  const parent = parentSlug ? getService(parentSlug) : undefined;
  const backLink = parent
    ? { label: parent.title, href: `/${parentSlug}` }
    : { label: "All Services", href: "/services" };

  return (
    <main>
      <ViewTransitionSignal />
      {hero ?? (
        <PageHero
          title={data.title}
          subtitle={data.intro}
          image={data.hero ?? "/hero.jpg"}
          imageTransitionName={svcTransitionName(data.slug)}
          backLink={backLink}
        />
      )}

      {/* First section — image on its real side */}
      <section className="relative bg-navy-deep/75 py-20">
        {/* Softens the seam where PageHero's opaque photo meets this
            section's translucent (glow-showing) background. Same fix as
            the homepage's Hero → Stats transition. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-navy-deep via-navy-deep/70 via-30% to-transparent" />
        {first && data.image1 ? (
          <ImageTextRow src={data.image1} aspect={data.image1Aspect} side={data.image1Side} alt={data.title}>
            <SectionBody section={first} />
          </ImageTextRow>
        ) : (
          first && (
            <Reveal className="container-x relative mx-auto max-w-3xl">
              <SectionBody section={first} />
            </Reveal>
          )
        )}
      </section>

      {/* Second section — image on its real side */}
      {second && (
        <section className="bg-navy-deep/75 py-20">
          {data.image2 ? (
            <ImageTextRow src={data.image2} aspect={data.image2Aspect} side={data.image2Side} alt={data.title}>
              <SectionBody section={second} />
            </ImageTextRow>
          ) : (
            <Reveal className="container-x mx-auto max-w-4xl">
              <SectionBody section={second} />
            </Reveal>
          )}
        </section>
      )}

      {gallery && gallery.length > 0 && <Gallery images={gallery} />}

      {/* Remaining sections — stacked, with an optional second photo strip
          breaking up the run partway through. */}
      {restBeforeGallery2.length > 0 && (
        <section className="bg-navy-deep/75 py-20">
          <RevealGroup className="container-x mx-auto max-w-4xl space-y-12">
            {restBeforeGallery2.map((s, i) => (
              <RevealItem key={i}>
                <SectionBody section={s} />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      )}

      {gallery2 && gallery2.length > 0 && <Gallery images={gallery2} />}

      {restAfterGallery2.length > 0 && (
        <section className="bg-navy-deep/75 py-20">
          <RevealGroup className="container-x mx-auto max-w-4xl space-y-12">
            {restAfterGallery2.map((s, i) => (
              <RevealItem key={i}>
                <SectionBody section={s} />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      )}

      {beforeCTA}

      <CTA />
    </main>
  );
}
