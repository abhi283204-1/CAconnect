"use client";

import { motion } from "framer-motion";
import { Linkedin, Star, MapPin } from "lucide-react";
import { sampleCAs } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeamSection() {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Our Network"
          title="Top-Rated CAs on Our Platform"
          description="Verified professionals with proven track records across India."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sampleCAs.slice(0, 4).map((ca, index) => (
            <motion.div
              key={ca.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-2xl border border-border bg-white p-6 text-center transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                <div className="relative mx-auto mb-5">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border-2 border-border group-hover:border-accent/50 transition-colors duration-500">
                    <span className="text-xl font-bold text-primary">
                      {ca.name.split(" ").slice(1).map((n) => n[0]).join("")}
                    </span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-primary">{ca.name}</h4>
                <div className="flex items-center justify-center gap-1 mt-1 text-xs text-muted">
                  <MapPin className="h-3 w-3" />
                  {ca.city} • {ca.experience}
                </div>

                <div className="flex items-center justify-center gap-1 mt-2">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  <span className="text-sm font-semibold text-accent">{ca.rating}</span>
                  <span className="text-xs text-muted">({ca.reviews})</span>
                </div>

                <div className="flex flex-wrap justify-center gap-1 mt-3">
                  {ca.specialization.slice(0, 2).map((spec) => (
                    <span key={spec} className="text-[10px] bg-primary/5 text-primary px-2 py-0.5 rounded-md font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
