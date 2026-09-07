import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactMapSection from "@/components/ContactMapSection";

export const metadata: Metadata = {
  title: "Contact - Faith Property Services",
  description:
    "Get in touch with Faith Property Services for a free quote. Call 1300 849 252 or send us a request.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactMapSection />
    </main>
  );
}
