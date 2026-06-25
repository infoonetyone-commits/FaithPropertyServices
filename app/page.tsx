import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
}
