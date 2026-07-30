import { Metadata } from "next";
import { allServiceDetails } from "@/lib/services-data";
import { ServicesIndexContent } from "./ServicesIndexContent";

export const metadata: Metadata = {
  title: "Our Services | Sharma & Associates - Chartered Accountants",
  description:
    "Explore our comprehensive range of CA services including Income Tax, GST, Audit & Assurance, Business Registration, Virtual CFO, International Taxation, and more. Expert financial solutions for every business need.",
  openGraph: {
    title: "Our Services | Sharma & Associates CA",
    description: "Comprehensive financial services for businesses of all sizes.",
  },
};

export default function ServicesPage() {
  return <ServicesIndexContent services={allServiceDetails} />;
}
