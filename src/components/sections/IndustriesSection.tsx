"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { industries } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-white" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Expertise Across Sectors"
          description="Our verified CAs have deep domain knowledge across diverse industries."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 group-hover:bg-accent/10 transition-colors">
                <Briefcase className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
              </div>
              <span className="font-semibold text-primary text-sm">{industry}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
