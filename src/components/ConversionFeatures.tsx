"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, ArrowUp, Clock, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function ConversionFeatures() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
      setShowBackToTop(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exit intent detection (desktop only)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShownPopup]);

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-3">
        {/* WhatsApp */}
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I need help with a financial service. Please connect me with a CA.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
        </motion.a>

        {/* Call Now */}
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2 }}
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-secondary hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </motion.a>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-border shadow-lg hover:shadow-xl transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 text-primary" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="fixed bottom-0 left-0 right-0 z-30 lg:hidden border-t border-border bg-white/95 backdrop-blur-md p-3"
      >
        <div className="flex items-center gap-2">
          <a
            href="#lead-form"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-accent py-3 font-semibold text-primary transition-colors hover:bg-accent-light text-sm"
          >
            <Phone className="h-4 w-4" />
            Get Free Consultation
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            aria-label="Call now"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      {/* Urgency Banner (shows after 10 seconds) */}
      <UrgencyBanner />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-primary/70 backdrop-blur-sm"
              onClick={() => setShowExitPopup(false)}
            />
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative max-w-md w-full rounded-2xl bg-white p-8 shadow-2xl"
            >
              <button
                onClick={() => setShowExitPopup(false)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Close popup"
              >
                <X className="h-4 w-4 text-muted" />
              </button>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Wait! Get a Free Consultation
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Our experts are available right now. Get matched with a
                  verified CA in just 30 minutes — completely free.
                </p>

                <div className="mt-4 space-y-2 text-left">
                  {["Free expert matching", "No obligation consultation", "Compare multiple quotes"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-text">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="#lead-form"
                  onClick={() => setShowExitPopup(false)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 font-semibold text-primary hover:bg-accent-light transition-colors"
                >
                  Yes, Get Free Consultation
                </a>
                <button
                  onClick={() => setShowExitPopup(false)}
                  className="mt-3 text-sm text-muted hover:text-primary transition-colors"
                >
                  No thanks, I&apos;ll figure it out myself
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Urgency Banner sub-component
function UrgencyBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-20 left-0 right-0 z-30 hidden lg:block"
      >
        <div className="bg-accent/95 backdrop-blur-sm py-2.5 px-4">
          <div className="mx-auto max-w-7xl flex items-center justify-center gap-3">
            <Clock className="h-4 w-4 text-primary animate-pulse" />
            <p className="text-sm font-medium text-primary">
              <span className="font-bold">Limited offer:</span> Get your first consultation absolutely free.{" "}
              <a href="#lead-form" className="underline font-bold">
                Claim now →
              </a>
            </p>
            <button
              onClick={() => setShow(false)}
              className="ml-4 text-primary/70 hover:text-primary"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
