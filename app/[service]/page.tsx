import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { services, getService } from "@/lib/services-data";

// Standalone top-level service pages (excludes the commercial-cleaning hub,
// which has its own folder with sub-pages, and ndis, which has its own
// dedicated route so it can use the docking-word hero instead of PageHero).
const topLevel = services.filter(
  (s) => !s.slug.includes("/") && s.slug !== "commercial-cleaning" && s.slug !== "ndis"
);

export const dynamicParams = false;

export function generateStaticParams() {
  return topLevel.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const data = getService(service);
  if (!data) return {};
  return {
    title: `${data.title} - Faith Property Services`,
    description: data.intro,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const data = getService(service);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
