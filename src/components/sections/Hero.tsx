"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, BadgeCheck, Zap, IndianRupee, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const floatingCards = [
  { icon: BadgeCheck, label: "Verified CAs", delay: 0 },
  { icon: Users, label: "5000+ Businesses Served", delay: 0.2 },
  { icon: Zap, label: "Fast Response", delay: 0.4 },
  { icon: IndianRupee, label: "Transparent Pricing", delay: 0.6 },
];

const heroStats = [
  { value: 2500, suffix: "+", label: "Verified CAs" },
  { value: 5000, suffix: "+", label: "Businesses Served" },
  { value: 95, suffix: "%", label: "Success Rate" },
  { value: 200, suffix: "+", label: "Cities Covered" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-white to-blue-50/50" />
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0B1F3A" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-20 -right-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-blob" />
        <div className="absolute -bottom-20 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                India&apos;s #1 CA Marketplace — Free to Use
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-[3.5rem]"
            >
              India&apos;s Trusted Platform to Connect with{" "}
              <span className="text-gradient-gold">Expert Chartered Accountants</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg leading-relaxed text-muted sm:text-xl"
            >
              Whether you need GST Registration, Income Tax Filing, Company
              Registration, ROC Compliance, Audit or Virtual CFO Services — we
              connect you with verified professionals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button variant="gold" size="lg" href="#lead-form" icon={<ArrowRight className="h-5 w-5" />}>
                Get Free Consultation
              </Button>
              <Button variant="secondary" size="lg" href="#find-ca" icon={<Search className="h-4 w-4" />}>
                Find a CA
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-2xl font-bold text-primary sm:text-3xl">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Floating Cards & Visual */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mx-auto h-[500px] w-[500px]"
            >
              {/* Decorative rings */}
              <div className="absolute inset-8 rounded-full border border-border/60" />
              <div className="absolute inset-16 rounded-full border border-accent/20" />
              <div className="absolute inset-24 rounded-full border border-primary/10" />

              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-44 w-44 rounded-full bg-gradient-premium flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">CA</p>
                    <p className="text-sm font-semibold text-white mt-1">Connect</p>
                    <p className="text-[10px] text-white/60 mt-0.5">Find Your Expert</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              {floatingCards.map((card, index) => {
                const positions = [
                  "top-4 left-4",
                  "top-4 right-0",
                  "bottom-12 left-0",
                  "bottom-12 right-4",
                ];
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + card.delay }}
                    className={`absolute ${positions[index]}`}
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg border border-border"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="text-sm font-semibold text-primary whitespace-nowrap">
                        {card.label}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
