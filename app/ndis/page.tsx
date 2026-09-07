import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import NDISHero from "@/components/NDISHero";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MarqueeRibbon from "@/components/MarqueeRibbon";
import Testimonials from "@/components/Testimonials";
import { getService } from "@/lib/services-data";

export function generateMetadata(): Metadata {
  const data = getService("ndis");
  if (!data) return {};
  return {
    title: `${data.title} - Faith Property Services`,
    description: data.intro,
  };
}

const gallery = [
  { src: "/svc/window-cleaning-1.jpg", alt: "Internal window cleaning" },
  { src: "/svc/steam-cleaning-1.jpg", alt: "Carpet and upholstery steam cleaning" },
  { src: "/svc/after-builders-cleaning-1.png", alt: "Detailed surface cleaning" },
];

const gallery2 = [
  { src: "/svc/end-of-lease-cleaning-1.png", alt: "Kitchen bench cleaning" },
  { src: "/svc/after-builders-cleaning-2.jpg", alt: "The Faith Property Services team at work" },
];

// Mirrors the homepage's Hero -> MarqueeRibbon pairing, and already leads
// with "NDIS APPROVED".
const heroWithMarquee = (
  <>
    <NDISHero />
    <MarqueeRibbon />
  </>
);

export default function Page() {
  const data = getService("ndis");
  if (!data) notFound();
  return (
    <>
      <ScrollProgressBar />
      <ServicePage
        data={data}
        hero={heroWithMarquee}
        gallery={gallery}
        gallery2={gallery2}
        beforeCTA={<Testimonials />}
      />
    </>
  );
}
