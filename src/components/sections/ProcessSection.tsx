"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, FileText, Zap, HeadphonesIcon } from "lucide-react";
import { processSteps } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stepIcons = [MessageSquare, Search, FileText, Zap, HeadphonesIcon];

export function ProcessSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="How We Work With You"
          description="A streamlined, transparent process designed for your convenience and maximum results."
        />

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20" />

          <div className="grid grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step number circle */}
                  <div className="relative mx-auto mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white border-2 border-accent shadow-lg shadow-accent/10"
                    >
                      <Icon className="h-8 w-8 text-accent" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      {step.step}
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-primary mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative ml-4 border-l-2 border-accent/30 pl-8 space-y-10">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Dot on line */}
                  <div className="absolute -left-[calc(2rem+5px)] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-accent shadow-md">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                      Step {step.step}
                    </span>
                    <h4 className="text-lg font-bold text-primary mt-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
