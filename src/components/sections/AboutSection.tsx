"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To deliver strategic financial solutions that empower businesses to achieve sustainable growth while maintaining full regulatory compliance.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be India's most trusted and technology-driven CA firm, known for proactive advisory and exceptional client relationships.",
  },
  {
    icon: Gem,
    title: "Values",
    description:
      "Integrity, Excellence, Innovation, Transparency, and Client-Centricity form the foundation of every engagement we undertake.",
  },
];

const aboutStats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 1000, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Expert Team Members" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-background" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="About Us"
          title="Building Financial Excellence Since 2009"
          description="We are a team of 50+ qualified professionals committed to transforming how businesses manage their finances."
        />

        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left - Image & Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/10 border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-premium flex items-center justify-center mb-4">
                    <Award className="h-10 w-10 text-accent" />
                  </div>
                  <p className="text-lg font-bold text-primary">
                    Sharma & Associates
                  </p>
                  <p className="text-sm text-muted mt-1">
                    Premium Office, Connaught Place, New Delhi
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-5 shadow-xl border border-border"
            >
              <p className="text-3xl font-bold text-accent">15+</p>
              <p className="text-sm font-medium text-primary">
                Years of
                <br />
                Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Your Trusted Financial Partner
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Founded in 2009 by CA Rajesh Sharma, our firm has grown from a
              small practice in Connaught Place to one of Delhi&apos;s most
              respected CA firms. We combine deep expertise with modern
              technology to deliver services that truly move the needle for our
              clients.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Our client-first philosophy means we don&apos;t just handle
              compliance—we become your strategic financial advisor, helping you
              make informed decisions that drive profitability and sustainable
              growth.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 gap-8 rounded-2xl bg-gradient-premium p-8 sm:grid-cols-4 lg:p-12"
        >
          {aboutStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-accent sm:text-4xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
