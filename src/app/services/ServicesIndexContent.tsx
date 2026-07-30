"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
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
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { ServiceDetail } from "@/lib/services-data";

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
};

interface ServicesIndexContentProps {
  services: ServiceDetail[];
}

export function ServicesIndexContent({ services }: ServicesIndexContentProps) {
  return (
    <>
      {/* Header spacer */}
      <div className="h-20" />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-background to-accent/[0.02]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent mb-6">
              12 Specialized Services
            </span>
            <h1 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl leading-tight">
              Comprehensive Financial{" "}
              <span className="text-gradient-gold">Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              From tax planning to business advisory, we cover every aspect of
              your financial journey. Each service is backed by experienced CAs
              and modern technology.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || FileText;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <div className="group h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2">
                      {/* Icon */}
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-accent/10">
                        <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-accent" />
                      </div>

                      {/* Content */}
                      <h2 className="text-xl font-bold text-primary mb-3">
                        {service.title}
                      </h2>
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>

                      {/* Features preview */}
                      <ul className="space-y-1.5 mb-5">
                        {service.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs text-muted">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="flex items-center gap-1 text-sm font-semibold text-accent mt-auto">
                        <span>View Details</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-premium p-8 lg:p-16 text-center"
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Book a free 30-minute consultation. Our experts will understand your business
              and recommend the right services tailored to your needs.
            </p>
            <div className="mt-8">
              <Button variant="gold" size="lg" href="/#lead-form" icon={<Phone className="h-4 w-4" />}>
                Get Free Consultation
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
