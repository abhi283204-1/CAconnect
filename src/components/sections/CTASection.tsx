"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-premium" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-6">
            <Phone className="h-3.5 w-3.5" />
            Free 30-Minute Consultation
          </span>

          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
            Ready to Transform Your{" "}
            <span className="text-gradient-gold">Financial Strategy?</span>
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Join 500+ businesses that trust Sharma & Associates for their
            financial success. Book your free consultation today and discover how
            we can help you grow.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              href="#contact"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Schedule Free Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={`tel:+919876543210`}
              className="border-white/30 text-white hover:bg-white hover:text-primary"
              icon={<Phone className="h-4 w-4" />}
            >
              Call Us Now
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
