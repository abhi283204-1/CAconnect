"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Calculator,
  Receipt,
  ClipboardCheck,
  BookOpen,
  FileText,
  Package,
  ArrowRight,
  Download,
} from "lucide-react";
import Link from "next/link";
import { resources } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Calculator,
  Receipt,
  ClipboardCheck,
  BookOpen,
  FileText,
  Package,
};

const typeColors: Record<string, string> = {
  Tool: "bg-blue-50 text-blue-600",
  Calculator: "bg-green-50 text-green-600",
  Guide: "bg-purple-50 text-purple-600",
  Download: "bg-orange-50 text-orange-600",
};

export function ResourceCenterSection() {
  return (
    <section id="resources" className="relative py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Resource Center"
          title="Free Tools & Guides for Your Business"
          description="Calculators, checklists, and guides to help you stay on top of your financial compliance."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = iconMap[resource.icon] || FileText;
            const typeColor = typeColors[resource.type] || "bg-gray-50 text-gray-600";
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  href={resource.href}
                  className="group flex flex-col h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
                >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 group-hover:bg-accent/10 transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <span className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${typeColor}`}>
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  {resource.description}
                </p>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                  <span>{resource.type === "Guide" ? "Read Guide" : resource.type === "Download" ? "Download Free" : "Use Tool"}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Downloads CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Download className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="font-bold text-primary">Free Business Compliance Kit</p>
              <p className="text-sm text-muted">Tax calendar + checklist + guides — all in one download.</p>
            </div>
          </div>
          <a
            href="/resources/compliance-kit"
            className="shrink-0 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent-light transition-colors"
          >
            Download Free
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
