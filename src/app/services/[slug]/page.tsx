import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs, allServiceDetails } from "@/lib/services-data";
import { ServicePageContent } from "./ServicePageContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Sharma & Associates CA`,
    description: service.heroDescription.slice(0, 160),
    openGraph: {
      title: `${service.title} - Sharma & Associates`,
      description: service.shortDescription,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get related services data
  const relatedServices = service.relatedServices
    .map((relSlug) => allServiceDetails.find((s) => s.slug === relSlug))
    .filter(Boolean);

  return <ServicePageContent service={service} relatedServices={relatedServices} />;
}
