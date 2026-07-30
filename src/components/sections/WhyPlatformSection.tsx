"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  IndianRupee,
  Zap,
  Users,
  HeadphonesIcon,
  Lock,
} from "lucide-react";
import { whyPlatform } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BadgeCheck,
  IndianRupee,
  Zap,
  Users,
  HeadphonesIcon,
  Lock,
};

export function WhyPlatformSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-background to-accent/[0.02]" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Why CAConnect"
          title="Why 5000+ Businesses Choose Our Platform"
          description="We're not just another directory. We're a curated marketplace that ensures quality, speed, and transparency."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyPlatform.map((item, index) => {
            const Icon = iconMap[item.icon] || BadgeCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-accent/10">
                  <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
