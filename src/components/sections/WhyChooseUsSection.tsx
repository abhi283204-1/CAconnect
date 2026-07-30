"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  IndianRupee,
  Zap,
  Users,
  HeadphonesIcon,
  Lock,
  CheckCircle2,
  ShieldCheck,
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

export function WhyChooseUsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-background to-accent/[0.02]" />

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left - Content */}
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="What Makes Us Different"
              description="We don't just file returns. We build long-term financial strategies that help your business thrive."
              align="left"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {whyPlatform.map((item, index) => {
                const Icon = iconMap[item.icon] || CheckCircle2;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group flex gap-3 rounded-xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="rounded-2xl bg-gradient-premium p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center">
                      <ShieldCheck className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white">
                        Zero Penalty Record
                      </p>
                      <p className="text-sm text-white/70">
                        100% compliance track record
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/10 p-4 text-center">
                      <p className="text-2xl font-bold text-accent">4 hrs</p>
                      <p className="text-xs text-white/70 mt-1">
                        Avg. Response Time
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4 text-center">
                      <p className="text-2xl font-bold text-accent">1:10</p>
                      <p className="text-xs text-white/70 mt-1">
                        Manager Ratio
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {["ISO Certified Processes", "Cloud-Based Dashboard", "Dedicated RM for Every Client"].map(
                      (item) => (
                        <div key={item} className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                          <span className="text-sm text-white/90">{item}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 rounded-xl bg-white px-4 py-3 shadow-lg border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium text-primary">
                    Live Dashboard
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
