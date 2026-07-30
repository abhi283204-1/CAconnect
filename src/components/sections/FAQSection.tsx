"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services, pricing, and processes."
        />

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-3"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center gap-4 rounded-xl px-6 py-4 text-left transition-all duration-300 ${
                  openIndex === index
                    ? "bg-primary/5 border border-accent/20"
                    : "bg-background border border-transparent hover:border-border hover:bg-primary/[0.02]"
                }`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <HelpCircle
                  className={`h-5 w-5 shrink-0 transition-colors ${
                    openIndex === index ? "text-accent" : "text-muted"
                  }`}
                />
                <span
                  className={`flex-1 font-semibold text-sm sm:text-base ${
                    openIndex === index ? "text-primary" : "text-text"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-accent" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 py-4 pl-15 text-sm text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
