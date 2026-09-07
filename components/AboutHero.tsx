import DockingWordHero from "@/components/DockingWordHero";

const stats = [
  { value: "13+", label: "Years Experience" },
  { value: "14+", label: "Suburbs Serviced" },
  { value: "100%", label: "Insured & Compliant" },
];

export default function AboutHero() {
  return (
    <DockingWordHero
      word="ABOUT"
      eyebrow="Faith Property Services"
      description="Creating cleaner, safer, and more professional spaces, one site at a time."
      stats={stats}
      videoSrc="/about-hero-video.mp4"
    />
  );
}
