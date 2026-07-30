"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  User,
  Building2,
  Rocket,
  Heart,
  MoreHorizontal,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { services, cities } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

interface LeadFormData {
  userType: string;
  service: string;
  city: string;
  name: string;
  phone: string;
  email: string;
  preferredTime: string;
  message: string;
}

const userTypes = [
  { id: "individual", label: "Individual", icon: User },
  { id: "business", label: "Business", icon: Building2 },
  { id: "startup", label: "Startup", icon: Rocket },
  { id: "ngo", label: "NGO", icon: Heart },
  { id: "other", label: "Other", icon: MoreHorizontal },
];

const timeSlots = [
  "Morning (9 AM - 12 PM)",
  "Afternoon (12 PM - 3 PM)",
  "Evening (3 PM - 6 PM)",
  "Late Evening (6 PM - 8 PM)",
];

export function LeadFormSection() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<LeadFormData>();
  const selectedUserType = watch("userType");
  const selectedService = watch("service");

  const totalSteps = 4;

  const onSubmit = async (data: LeadFormData) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "2647844a-887b-4bfb-81b8-2f8809d30c6a",
          subject: `🔔 New Lead: ${data.name} - Consultation Form`,
          from_name: "CAConnect Leads",
          name: data.name,
          email: data.email,
          phone: data.phone,
          user_type: data.userType || "N/A",
          service_required: data.service || "N/A",
          city: data.city || "N/A",
          preferred_time: data.preferredTime || "N/A",
          message: data.message || "N/A",
          source: "Consultation Form",
          received_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error("Web3Forms error:", result);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(true);
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  if (isSubmitted) {
    return (
      <section id="lead-form" className="relative py-24 lg:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-lg rounded-2xl border border-accent/30 bg-white p-8 text-center shadow-xl"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Thank You!</h2>
            <p className="mt-3 text-muted leading-relaxed">
              One of our experts will contact you within{" "}
              <span className="font-bold text-accent">30 minutes</span>.
            </p>
            <p className="mt-2 text-sm text-muted">
              Meanwhile, check your email for a confirmation with next steps.
            </p>
            <div className="mt-6 rounded-xl bg-background p-4">
              <p className="text-xs font-medium text-muted">What happens next?</p>
              <ul className="mt-2 space-y-2 text-left text-sm text-text">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  Our team reviews your requirement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  We match you with 3-5 verified CAs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  Free consultation call scheduled
                </li>
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section id="lead-form" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-white" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Free Consultation
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            Get Matched with the Right CA
          </h2>
          <p className="mt-3 text-muted max-w-xl mx-auto">
            Fill this simple form and we&apos;ll connect you with verified professionals within 30 minutes. It&apos;s 100% free.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          {/* Progress Bar */}
          <div className="mb-8 flex items-center justify-between">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className="flex items-center flex-1">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                    i + 1 <= step
                      ? "bg-accent text-primary"
                      : "bg-border text-muted"
                  }`}
                >
                  {i + 1 <= step ? "✓" : i + 1}
                </div>
                {i < totalSteps - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 transition-all ${
                    i + 1 < step ? "bg-accent" : "bg-border"
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm min-h-[320px]">
              <AnimatePresence mode="wait">
                {/* Step 1: Who are you? */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-lg font-bold text-primary mb-2">Who are you?</h3>
                    <p className="text-sm text-muted mb-6">Help us understand your profile for better matching.</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {userTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => { setValue("userType", type.id); nextStep(); }}
                            className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all hover:border-accent hover:bg-accent/5 ${
                              selectedUserType === type.id
                                ? "border-accent bg-accent/5"
                                : "border-border"
                            }`}
                          >
                            <Icon className="h-6 w-6 text-accent" />
                            <span className="text-sm font-medium text-primary">{type.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Service Required */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-lg font-bold text-primary mb-2">What service do you need?</h3>
                    <p className="text-sm text-muted mb-6">Select the primary service you&apos;re looking for.</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[280px] overflow-y-auto pr-2">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => { setValue("service", service.id); nextStep(); }}
                          className={`text-left rounded-xl border-2 p-3 transition-all hover:border-accent hover:bg-accent/5 ${
                            selectedService === service.id
                              ? "border-accent bg-accent/5"
                              : "border-border"
                          }`}
                        >
                          <span className="text-xs font-semibold text-primary block">{service.title}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Location */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-lg font-bold text-primary mb-2">Where is your business located?</h3>
                    <p className="text-sm text-muted mb-6">This helps us find CAs near you.</p>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="lead-city" className="block text-sm font-medium text-primary mb-1.5">
                          <MapPin className="h-4 w-4 inline mr-1" />
                          City
                        </label>
                        <select
                          id="lead-city"
                          {...register("city", { required: "Please select your city" })}
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                        >
                          <option value="">Select your city</option>
                          {cities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                          <option value="other">Other</option>
                        </select>
                        {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Details */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-lg font-bold text-primary mb-2">Almost done! Your contact details</h3>
                    <p className="text-sm text-muted mb-6">We&apos;ll never spam you. Your data is secure.</p>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="lead-name" className="block text-sm font-medium text-primary mb-1.5">
                          <User className="h-4 w-4 inline mr-1" />
                          Full Name
                        </label>
                        <input
                          id="lead-name"
                          type="text"
                          {...register("name", { required: "Name is required" })}
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="lead-phone" className="block text-sm font-medium text-primary mb-1.5">
                            <Phone className="h-4 w-4 inline mr-1" />
                            Phone
                          </label>
                          <input
                            id="lead-phone"
                            type="tel"
                            {...register("phone", { required: "Phone is required" })}
                            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                            placeholder="+91 98765 43210"
                          />
                          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                        </div>
                        <div>
                          <label htmlFor="lead-email" className="block text-sm font-medium text-primary mb-1.5">
                            <Mail className="h-4 w-4 inline mr-1" />
                            Email
                          </label>
                          <input
                            id="lead-email"
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                            placeholder="you@company.com"
                          />
                          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="lead-time" className="block text-sm font-medium text-primary mb-1.5">
                          <Clock className="h-4 w-4 inline mr-1" />
                          Preferred Callback Time
                        </label>
                        <select
                          id="lead-time"
                          {...register("preferredTime")}
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                        >
                          <option value="">Select preferred time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={prevStep}
                className={`flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors ${
                  step === 1 ? "invisible" : ""
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary transition-colors"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-bold text-primary hover:bg-accent-light transition-colors"
                >
                  Get Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              )}
            </div>
          </form>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              100% Free
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              No Spam
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              30 min Response
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              Data Secure
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
