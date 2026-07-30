"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import Link from "next/link";
import {
  Package,
  CheckCircle2,
  ArrowRight,
  Download,
  FileText,
  Calendar,
  ClipboardCheck,
  Shield,
  BookOpen,
  Calculator,
  Users,
  Mail,
  Phone,
  User,
  Building2,
  Sparkles,
  Lock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface KitFormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  companyName: string;
}

const kitContents = [
  {
    icon: Calendar,
    title: "GST Compliance Calendar",
    description: "Monthly & quarterly filing deadlines — GSTR-1, GSTR-3B, annual returns",
  },
  {
    icon: FileText,
    title: "Income Tax Filing Calendar",
    description: "Key dates for advance tax, TDS filings, ITR deadlines for FY 2025-26",
  },
  {
    icon: ClipboardCheck,
    title: "ROC Filing Checklist",
    description: "Annual return deadlines — AOC-4, MGT-7, ADT-1, DIR-3 KYC",
  },
  {
    icon: Calculator,
    title: "TDS/TCS Compliance Guide",
    description: "Rates, due dates, and filing requirements in one reference sheet",
  },
  {
    icon: Shield,
    title: "Penalty & Late Fee Reference",
    description: "Consequences of non-compliance for every major filing",
  },
  {
    icon: BookOpen,
    title: "Startup Compliance Roadmap",
    description: "First-year must-dos after incorporation — step-by-step guide",
  },
  {
    icon: FileText,
    title: "GST-Compliant Invoice Template",
    description: "Ready-to-use invoice format that meets all GST requirements",
  },
  {
    icon: Users,
    title: "Board Resolution Templates",
    description: "Common resolutions for bank accounts, director appointments & more",
  },
];

const businessTypes = [
  "Private Limited Company",
  "LLP",
  "Partnership Firm",
  "Sole Proprietorship",
  "One Person Company",
  "Startup (< 2 years)",
  "Other",
];

const stats = [
  { value: "5,000+", label: "Downloads" },
  { value: "15+", label: "Templates Included" },
  { value: "2025-26", label: "Updated For" },
  { value: "100%", label: "Free" },
];

export function ComplianceKitContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<KitFormData>();

  const onSubmit = async (data: KitFormData) => {
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "Compliance Kit Download" }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#resources" className="hover:text-accent transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-primary font-medium">Free Compliance Kit</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 mb-6">
                <Package className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Free Download — No Credit Card</span>
              </div>

              <h1 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl leading-tight">
                Free Business<br />
                <span className="text-accent">Compliance Kit</span>
              </h1>

              <p className="mt-4 text-lg text-muted leading-relaxed max-w-lg">
                Everything you need to stay compliant in India — calendars, checklists, templates, and penalty guides. Updated for FY 2025-26.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* What's Inside */}
              <div className="mt-10">
                <h2 className="text-lg font-bold text-primary mb-4">What&apos;s Inside the Kit</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {kitContents.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex gap-3 rounded-xl border border-border bg-white p-3 hover:border-accent/30 hover:shadow-sm transition-all"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 shrink-0">
                          <Icon className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-primary">{item.title}</p>
                          <p className="text-xs text-muted mt-0.5 leading-relaxed">{item.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right: Lead Capture Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-28"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-accent/30 bg-white p-8 shadow-xl text-center"
                  >
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Kit Sent! 🎉</h3>
                    <p className="mt-3 text-muted leading-relaxed">
                      Check your email for the download link. The compliance kit has been sent to your inbox.
                    </p>
                    <div className="mt-6 rounded-xl bg-background p-4">
                      <p className="text-xs font-medium text-muted mb-2">While you wait, you can also:</p>
                      <ul className="space-y-2 text-left text-sm text-text">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          <Link href="/resources/compliance-checklist" className="hover:text-accent transition-colors">View the compliance checklist</Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          <Link href="/resources/tax-calendar" className="hover:text-accent transition-colors">Check the tax calendar</Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          <Link href="/#lead-form" className="hover:text-accent transition-colors">Get a free consultation</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Button variant="gold" size="md" href="/#lead-form" icon={<ArrowRight className="h-4 w-4" />}>
                        Talk to a Compliance Expert
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-xl"
                  >
                    <div className="text-center mb-6">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                        <Download className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">Download Free Kit</h3>
                      <p className="text-sm text-muted mt-1">Get instant access to 15+ compliance templates</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="kit-name" className="block text-sm font-medium text-primary mb-1.5">
                          <User className="h-3.5 w-3.5 inline mr-1" />
                          Full Name
                        </label>
                        <input
                          id="kit-name"
                          type="text"
                          {...register("name", { required: "Name is required" })}
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="kit-email" className="block text-sm font-medium text-primary mb-1.5">
                          <Mail className="h-3.5 w-3.5 inline mr-1" />
                          Work Email
                        </label>
                        <input
                          id="kit-email"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Enter a valid email address",
                            },
                          })}
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                          placeholder="you@company.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="kit-phone" className="block text-sm font-medium text-primary mb-1.5">
                          <Phone className="h-3.5 w-3.5 inline mr-1" />
                          Phone Number
                        </label>
                        <input
                          id="kit-phone"
                          type="tel"
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[+]?[\d\s-]{10,15}$/,
                              message: "Enter a valid phone number",
                            },
                          })}
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                          placeholder="+91 98765 43210"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                        )}
                      </div>

                      {/* Business Type */}
                      <div>
                        <label htmlFor="kit-business-type" className="block text-sm font-medium text-primary mb-1.5">
                          <Building2 className="h-3.5 w-3.5 inline mr-1" />
                          Business Type
                        </label>
                        <select
                          id="kit-business-type"
                          {...register("businessType", { required: "Please select your business type" })}
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        >
                          <option value="">Select business type</option>
                          {businessTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        {errors.businessType && (
                          <p className="mt-1 text-xs text-red-500">{errors.businessType.message}</p>
                        )}
                      </div>

                      {/* Company Name (Optional) */}
                      <div>
                        <label htmlFor="kit-company" className="block text-sm font-medium text-primary mb-1.5">
                          <Building2 className="h-3.5 w-3.5 inline mr-1" />
                          Company Name <span className="text-muted font-normal">(Optional)</span>
                        </label>
                        <input
                          id="kit-company"
                          type="text"
                          {...register("companyName")}
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                          placeholder="Your company name"
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-primary hover:bg-accent-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4" />
                            Download Free Compliance Kit
                          </>
                        )}
                      </motion.button>
                    </form>

                    {/* Trust Signals */}
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <Lock className="h-3 w-3 text-green-500" />
                        Secure & Private
                      </span>
                      <span className="flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-green-500" />
                        No Spam
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        Instant Access
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Who Is This For Section */}
      <section className="py-16 bg-background">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Who Is This Kit For?</h2>
            <p className="mt-2 text-muted">Perfect for business owners and founders who want to stay ahead of compliance</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Building2, title: "Startups", desc: "New companies navigating first-year compliance" },
              { icon: Users, title: "SMEs", desc: "Growing businesses managing multiple filings" },
              { icon: User, title: "Freelancers", desc: "Self-employed professionals staying tax-compliant" },
              { icon: Shield, title: "Directors", desc: "Company directors tracking personal compliance" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl border border-border bg-white hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-bold text-primary">{item.title}</h3>
                  <p className="text-xs text-muted mt-1">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center rounded-2xl border border-accent/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:p-12"
          >
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Need Expert Help With Compliance?
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Our verified Chartered Accountants can handle all your compliance filings — so you can focus on growing your business.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="gold" size="lg" href="/#lead-form" icon={<ArrowRight className="h-4 w-4" />}>
                Get Free Consultation
              </Button>
              <Button variant="secondary" size="lg" href="/services">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
