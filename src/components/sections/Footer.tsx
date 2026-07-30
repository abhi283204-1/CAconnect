"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const platformLinks = [
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Find a CA", href: "/#find-ca" },
  { name: "Business Solutions", href: "/#solutions" },
  { name: "Resources", href: "/#resources" },
  { name: "About Us", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { name: "Income Tax Filing", href: "/services/income-tax" },
  { name: "GST Services", href: "/services/gst-services" },
  { name: "Company Registration", href: "/services/registration" },
  { name: "Audit & Assurance", href: "/services/audit-assurance" },
  { name: "Virtual CFO", href: "/services/virtual-cfo" },
  { name: "Startup Advisory", href: "/services/startup-advisory" },
];

const partnerLinks = [
  { name: "Become a Partner CA", href: "#" },
  { name: "Join Our Network", href: "#" },
  { name: "Referral Program", href: "#" },
  { name: "Partner Dashboard", href: "#" },
  { name: "Success Stories", href: "#" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Disclaimer", href: "#" },
  { name: "Refund Policy", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-dark pt-20 pb-8">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-light">
                <span className="text-sm font-bold text-primary">CA</span>
              </div>
              <div>
                <p className="text-lg font-bold text-white">{siteConfig.name}</p>
                <p className="text-xs text-white/60">{siteConfig.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-sm">
              India&apos;s most trusted platform to connect with verified Chartered
              Accountants. We help individuals and businesses find the right
              financial expert for their needs.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <p className="text-sm font-medium text-white mb-2">Get tax tips & updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  required
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary hover:bg-accent-light transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
                { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/70 hover:bg-accent/20 hover:text-accent transition-all duration-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Platform
            </h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For CAs / Partners */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              For CAs
            </h4>
            <ul className="space-y-3">
              {partnerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Row */}
        <div className="py-8 border-b border-white/10 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span>{siteConfig.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Mail className="h-3.5 w-3.5 text-accent" />
            <span>{siteConfig.email}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-white/70">
            <MapPin className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
            <span>{siteConfig.address}</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-white/50 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
