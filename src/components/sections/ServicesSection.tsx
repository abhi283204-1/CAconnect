"use client";

import { motion } from "framer-motion";
import {
  Receipt,
  FileText,
  ShieldCheck,
  BookOpen,
  Users,
  Building2,
  ClipboardCheck,
  Rocket,
  Globe,
  Heart,
  TrendingUp,
  ArrowLeftRight,
  ArrowRight,
  Shield,
  Calculator,
  UtensilsCrossed,
  Award,
  Landmark,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Receipt,
  FileText,
  ShieldCheck,
  BookOpen,
  Users,
  Building2,
  ClipboardCheck,
  Rocket,
  Globe,
  Heart,
  TrendingUp,
  ArrowLeftRight,
  Shield,
  Calculator,
  UtensilsCrossed,
  Award,
  Landmark,
};

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Financial Solutions"
          description="From tax planning to business advisory, we cover every aspect of your financial journey with precision and expertise."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || FileText;
            return (
              <Link key={service.id} href={`/services/${service.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-colors duration-300 group-hover:bg-accent/10">
                    <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>

                  {/* Hover Accent Bar */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-accent scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
