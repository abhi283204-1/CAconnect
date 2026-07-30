"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  PiggyBank,
  Building2,
  Rocket,
  Lightbulb,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { businessSolutions } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  PiggyBank,
  Building2,
  Rocket,
  Lightbulb,
  CalendarCheck,
};

export function BusinessSolutionsSection() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-background" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Business Solutions"
          title="Premium Solutions for Growing Businesses"
          description="End-to-end financial solutions designed for businesses that want strategic, ongoing support."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessSolutions.map((solution, index) => {
            const Icon = iconMap[solution.icon] || TrendingUp;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
              >
                {/* Price Badge */}
                <div className="absolute top-4 right-4 rounded-lg bg-accent/10 px-2.5 py-1">
                  <span className="text-xs font-bold text-accent">
                    From {solution.startingPrice}
                  </span>
                </div>

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-accent/10">
                  <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-accent" />
                </div>

                <h3 className="text-lg font-bold text-primary mb-2 pr-16">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {solution.description}
                </p>

                <a
                  href="#lead-form"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
                >
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
