import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/services-data";

export async function generateMetadata(): Promise<Metadata> {
  const data = getService("commercial-cleaning");
  if (!data) return {};
  return {
    title: `${data.title} - Faith Property Services`,
    description: data.intro,
  };
}

export default function Page() {
  const data = getService("commercial-cleaning");
  if (!data) notFound();
  return <ServicePage data={data} />;
}
