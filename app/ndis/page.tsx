import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "NDIS Cleaning Services - Coming Soon | Faith Property Services",
  description:
    "Our dedicated NDIS cleaning services page is coming soon. Contact us today to discuss your NDIS cleaning needs.",
};

export default function NDISPage() {
  return (
    <main>
      <PageHero
        title="NDIS Cleaning Services"
        subtitle="This page is coming soon."
      />
      <section className="bg-cloud py-20">
        <div className="container-x max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Coming Soon</span>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              We're putting the finishing touches on this page
            </h2>
            <p className="mt-5 font-body text-lg text-navy/65">
              In the meantime, get in touch with our team directly to discuss your NDIS cleaning
              requirements — we're ready to help.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <a href="tel:1300849252" className="btn-ndis">Call 1300 849 252</a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
