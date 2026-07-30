"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { siteConfig, services } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: siteConfig.address,
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email Address",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: siteConfig.officeHours,
  },
];

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Start a Conversation"
          description="Have a question or need expert financial advice? Reach out to us and we'll respond within 4 business hours."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-base font-semibold text-primary hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-primary">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-border h-48">
              <iframe
                src={siteConfig.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-muted">
                    We&apos;ve received your message. Our team will contact you within 4
                    business hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-primary mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name", {
                          required: "Name is required",
                        })}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="Rajesh Kumar"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-primary mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="rajesh@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-primary mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-primary mb-1.5"
                      >
                        Service Required
                      </label>
                      <select
                        id="service"
                        {...register("service")}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primary mb-1.5"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-primary transition-all duration-300 hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
