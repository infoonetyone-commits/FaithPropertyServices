import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { services, getService } from "@/lib/services-data";

const subPages = services.filter((s) => s.slug.startsWith("commercial-cleaning/"));

export const dynamicParams = false;

export function generateStaticParams() {
  return subPages.map((s) => ({ sub: s.slug.replace("commercial-cleaning/", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sub: string }>;
}): Promise<Metadata> {
  const { sub } = await params;
  const data = getService(`commercial-cleaning/${sub}`);
  if (!data) return {};
  return {
    title: `${data.title} - Faith Property Services`,
    description: data.intro,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ sub: string }>;
}) {
  const { sub } = await params;
  const data = getService(`commercial-cleaning/${sub}`);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
