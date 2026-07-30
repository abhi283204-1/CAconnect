"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { navigation, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-premium">
                <span className="text-lg font-bold text-accent">CA</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-lg font-bold leading-tight text-primary">
                  {siteConfig.name}
                </p>
                <p className="text-xs font-medium text-muted">
                  {siteConfig.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-accent/10 hover:text-accent ${
                    isScrolled ? "text-text" : "text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                <Button
                  variant="gold"
                  size="sm"
                  href="/#lead-form"
                  icon={<Phone className="h-4 w-4" />}
                >
                  Get Free Consultation
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white/80 backdrop-blur-sm"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-primary" />
                ) : (
                  <Menu className="h-5 w-5 text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-premium">
                      <span className="text-sm font-bold text-accent">CA</span>
                    </div>
                    <p className="text-base font-bold text-primary">
                      {siteConfig.name}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 text-primary" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-6" aria-label="Mobile navigation">
                  <ul className="space-y-1">
                    {navigation.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center px-4 py-3 rounded-xl text-base font-medium text-text hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="p-6 border-t border-border">
                  <Button
                    variant="gold"
                    size="md"
                    href="/#lead-form"
                    className="w-full"
                    icon={<Phone className="h-4 w-4" />}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Free Consultation
                  </Button>
                  <p className="mt-4 text-center text-sm text-muted">
                    {siteConfig.phone}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
