"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type GSTType = "exclusive" | "inclusive";

const gstRates = [0, 0.25, 3, 5, 12, 18, 28];

export function GSTCalculatorContent() {
  const [amount, setAmount] = useState<string>("");
  const [rate, setRate] = useState<number>(18);
  const [type, setType] = useState<GSTType>("exclusive");
  const [isInterState, setIsInterState] = useState(false);

  const numAmount = parseFloat(amount) || 0;

  let baseAmount = 0;
  let gstAmount = 0;
  let totalAmount = 0;

  if (type === "exclusive") {
    baseAmount = numAmount;
    gstAmount = (numAmount * rate) / 100;
    totalAmount = numAmount + gstAmount;
  } else {
    totalAmount = numAmount;
    baseAmount = (numAmount * 100) / (100 + rate);
    gstAmount = totalAmount - baseAmount;
  }

  const cgst = isInterState ? 0 : gstAmount / 2;
  const sgst = isInterState ? 0 : gstAmount / 2;
  const igst = isInterState ? gstAmount : 0;

  return (
    <>
      <div className="h-20" />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-background to-accent/[0.02]" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#resources" className="hover:text-accent transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-primary font-medium">GST Calculator</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 mb-4">
                <Calculator className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Free Tool</span>
              </div>
              <h1 className="text-3xl font-extrabold text-primary sm:text-4xl">
                GST Calculator
              </h1>
              <p className="mt-3 text-muted max-w-xl mx-auto">
                Calculate GST amount, CGST, SGST, and IGST instantly. Works for both GST-inclusive and GST-exclusive amounts.
              </p>
            </div>

            {/* Calculator Card */}
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Input Section */}
                <div className="space-y-5">
                  {/* Amount */}
                  <div>
                    <label htmlFor="gst-amount" className="block text-sm font-medium text-primary mb-1.5">
                      Amount (₹)
                    </label>
                    <input
                      id="gst-amount"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-lg font-semibold text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>

                  {/* GST Rate */}
                  <div>
                    <label htmlFor="gst-rate" className="block text-sm font-medium text-primary mb-1.5">
                      GST Rate (%)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {gstRates.map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRate(r)}
                          className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                            rate === r
                              ? "bg-accent text-primary"
                              : "bg-background border border-border text-text hover:border-accent"
                          }`}
                        >
                          {r}%
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Type */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Calculation Type
                    </label>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setType("exclusive")}
                        className={`flex-1 rounded-xl py-3 text-sm font-semibold transition-all ${
                          type === "exclusive"
                            ? "bg-primary text-white"
                            : "bg-background border border-border text-text hover:border-primary"
                        }`}
                      >
                        Add GST
                      </button>
                      <button
                        type="button"
                        onClick={() => setType("inclusive")}
                        className={`flex-1 rounded-xl py-3 text-sm font-semibold transition-all ${
                          type === "inclusive"
                            ? "bg-primary text-white"
                            : "bg-background border border-border text-text hover:border-primary"
                        }`}
                      >
                        Remove GST
                      </button>
                    </div>
                  </div>

                  {/* Inter-state toggle */}
                  <div className="flex items-center gap-3">
                    <input
                      id="interstate"
                      type="checkbox"
                      checked={isInterState}
                      onChange={(e) => setIsInterState(e.target.checked)}
                      className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <label htmlFor="interstate" className="text-sm text-text">
                      Inter-state supply (IGST)
                    </label>
                  </div>
                </div>

                {/* Results Section */}
                <div className="rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border p-6">
                  <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
                    Result
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted">Base Amount</span>
                      <span className="text-lg font-bold text-primary">₹{baseAmount.toFixed(2)}</span>
                    </div>

                    <div className="h-px bg-border" />

                    {isInterState ? (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted">IGST ({rate}%)</span>
                        <span className="text-lg font-semibold text-text">₹{igst.toFixed(2)}</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted">CGST ({rate / 2}%)</span>
                          <span className="text-base font-semibold text-text">₹{cgst.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted">SGST ({rate / 2}%)</span>
                          <span className="text-base font-semibold text-text">₹{sgst.toFixed(2)}</span>
                        </div>
                      </>
                    )}

                    <div className="h-px bg-border" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted">Total GST</span>
                      <span className="text-lg font-bold text-accent">₹{gstAmount.toFixed(2)}</span>
                    </div>

                    <div className="rounded-xl bg-white p-4 border border-accent/20">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-primary">Total Amount</span>
                        <span className="text-2xl font-extrabold text-primary">₹{totalAmount.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 rounded-2xl bg-gradient-premium p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="text-center sm:text-left">
                <p className="text-lg font-bold text-white">Need help with GST compliance?</p>
                <p className="text-sm text-white/70 mt-1">Get matched with a verified GST expert in 30 minutes.</p>
              </div>
              <Button variant="gold" size="md" href="/#lead-form" icon={<ArrowRight className="h-4 w-4" />}>
                Get Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
