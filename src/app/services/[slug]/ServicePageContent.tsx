"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  ChevronDown,
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
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
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

interface ServicePageContentProps {
  service: ServiceDetail;
  relatedServices: (ServiceDetail | undefined)[];
}

export function ServicePageContent({ service, relatedServices }: ServicePageContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const Icon = iconMap[service.icon] || FileText;

  return (
    <>
      {/* Header spacer for fixed nav */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-background to-accent/[0.02]" />
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-2 text-sm text-muted"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary font-medium">{service.title}</span>
          </motion.nav>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 mb-6">
                <Icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Professional Service</span>
              </div>

              <h1 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl leading-tight">
                {service.title}
              </h1>

              <p className="mt-6 text-lg text-muted leading-relaxed">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" href="/#lead-form" icon={<Phone className="h-4 w-4" />}>
                  Get Free Consultation
                </Button>
                <Button variant="secondary" size="md" href="#process">
                  See Our Process
                </Button>
              </div>
            </motion.div>

            {/* Right - Features grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 hover:border-accent/30 hover:shadow-sm transition-all"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-text">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Benefits</span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Why Choose Us for {service.title}
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <span className="text-xl font-bold text-accent">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      {service.process && service.process.length > 0 && (
      <section id="process" className="py-16 lg:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Our Process</span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              How We Deliver {service.title}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {service.process!.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Connector line */}
                {index < service.process!.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-accent/20" />
                )}
                {/* Step number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary font-bold text-sm shadow-md">
                  {step.step}
                </div>
                {/* Content */}
                <div className="pt-1">
                  <h4 className="text-lg font-bold text-primary">{step.title}</h4>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">FAQs</span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Common Questions About {service.title}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full flex items-center gap-4 rounded-xl px-6 py-4 text-left transition-all duration-300 ${
                    openFaq === index
                      ? "bg-primary/5 border border-accent/20"
                      : "bg-background border border-transparent hover:border-border"
                  }`}
                  aria-expanded={openFaq === index}
                >
                  <span className={`flex-1 font-semibold text-sm sm:text-base ${openFaq === index ? "text-primary" : "text-text"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${openFaq === index ? "rotate-180 text-accent" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section id="contact-cta" className="py-16 lg:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-premium p-8 lg:p-16 text-center"
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Get matched with verified experts in 30 minutes. Free consultation,
              no obligation — compare quotes and choose the best CA for your needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold" size="lg" href="/#lead-form" icon={<Phone className="h-4 w-4" />}>
                Get Free Consultation
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="tel:+919876543210"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Call +91 98765 43210
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">Related Services</span>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
                You May Also Need
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => {
                if (!related) return null;
                const RelIcon = iconMap[related.icon] || FileText;
                return (
                  <Link key={related.slug} href={`/services/${related.slug}`}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="group rounded-2xl border border-border bg-white p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 group-hover:bg-accent/10 transition-colors">
                        <RelIcon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">{related.title}</h3>
                      <p className="text-sm text-muted line-clamp-2">{related.shortDescription}</p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                        <span>Learn More</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Back to services */}
      <div className="pb-16">
        <Container>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Services
          </Link>
        </Container>
      </div>
    </>
  );
}
