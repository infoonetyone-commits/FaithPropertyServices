import Hero from "@/components/Hero";
import MarqueeRibbon from "@/components/MarqueeRibbon";
import ImageBanner from "@/components/ImageBanner";
import ValueProps from "@/components/ValueProps";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function Home() {
  return (
    <main>
      <ScrollProgressBar />
      <Hero />
      <MarqueeRibbon />
      <ImageBanner />
      <MarqueeRibbon
        items={[
          "OFFICE CLEANING",
          "END OF LEASE CLEANING",
          "PRESSURE WASHING",
          "STEAM CLEANING",
          "WINDOW CLEANING",
          "GRAFFITI REMOVAL",
        ]}
      />
      <ValueProps />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
    </main>
  );
}
