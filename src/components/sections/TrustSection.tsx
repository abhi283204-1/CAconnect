"use client";

import { motion } from "framer-motion";
import { clientLogos } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function TrustSection() {
  return (
    <section className="relative py-16 overflow-hidden border-y border-border bg-white">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-muted mb-8"
        >
          Trusted by Leading Businesses Across India
        </motion.p>
      </Container>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-background px-6 py-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-xs font-bold text-primary">
                    {logo.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-semibold text-primary">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
