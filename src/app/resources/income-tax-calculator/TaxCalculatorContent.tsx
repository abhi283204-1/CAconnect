"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

function calculateOldRegimeTax(income: number, deductions: number): number {
  const taxable = Math.max(income - deductions, 0);
  let tax = 0;
  if (taxable > 1500000) tax += (taxable - 1500000) * 0.30;
  if (taxable > 1250000) tax += Math.min(taxable - 1250000, 250000) * 0.25;
  if (taxable > 1000000) tax += Math.min(taxable - 1000000, 250000) * 0.20;
  if (taxable > 750000) tax += Math.min(taxable - 750000, 250000) * 0.15; // Surcharge slab simplified
  if (taxable > 500000) tax += Math.min(taxable - 500000, 250000) * 0.20;
  if (taxable > 250000) tax += Math.min(taxable - 250000, 250000) * 0.05;
  // Rebate u/s 87A
  if (taxable <= 500000) tax = 0;
  const cess = tax * 0.04;
  return tax + cess;
}

function calculateNewRegimeTax(income: number): number {
  const standardDeduction = 75000;
  const taxable = Math.max(income - standardDeduction, 0);
  let tax = 0;
  if (taxable > 2400000) tax += (taxable - 2400000) * 0.30;
  if (taxable > 2000000) tax += Math.min(taxable - 2000000, 400000) * 0.25;
  if (taxable > 1600000) tax += Math.min(taxable - 1600000, 400000) * 0.20;
  if (taxable > 1200000) tax += Math.min(taxable - 1200000, 400000) * 0.15;
  if (taxable > 800000) tax += Math.min(taxable - 800000, 400000) * 0.10;
  if (taxable > 400000) tax += Math.min(taxable - 400000, 400000) * 0.05;
  // Rebate u/s 87A for new regime
  if (taxable <= 1200000) tax = 0;
  const cess = tax * 0.04;
  return tax + cess;
}

export function TaxCalculatorContent() {
  const [income, setIncome] = useState<string>("");
  const [deductions, setDeductions] = useState<string>("150000");

  const numIncome = parseFloat(income) || 0;
  const numDeductions = parseFloat(deductions) || 0;

  const oldTax = calculateOldRegimeTax(numIncome, numDeductions);
  const newTax = calculateNewRegimeTax(numIncome);
  const savings = Math.abs(oldTax - newTax);
  const betterRegime = oldTax <= newTax ? "Old Regime" : "New Regime";

  return (
    <>
      <div className="h-20" />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-background to-accent/[0.02]" />

        <Container className="relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#resources" className="hover:text-accent transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-primary font-medium">Income Tax Calculator</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 mb-4">
                <Calculator className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">FY 2025-26</span>
              </div>
              <h1 className="text-3xl font-extrabold text-primary sm:text-4xl">
                Income Tax Calculator
              </h1>
              <p className="mt-3 text-muted max-w-xl mx-auto">
                Compare Old Regime vs New Regime and find which one saves you more tax. Updated for FY 2025-26 budget changes.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Inputs */}
                <div className="space-y-5">
                  <div>
                    <label htmlFor="tax-income" className="block text-sm font-medium text-primary mb-1.5">
                      Annual Income (₹)
                    </label>
                    <input
                      id="tax-income"
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      placeholder="e.g. 1200000"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-lg font-semibold text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                    <p className="mt-1 text-xs text-muted">Include salary, business income, other sources</p>
                  </div>

                  <div>
                    <label htmlFor="tax-deductions" className="block text-sm font-medium text-primary mb-1.5">
                      Total Deductions - Old Regime (₹)
                    </label>
                    <input
                      id="tax-deductions"
                      type="number"
                      value={deductions}
                      onChange={(e) => setDeductions(e.target.value)}
                      placeholder="e.g. 150000"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-lg font-semibold text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                    <p className="mt-1 text-xs text-muted">80C + 80D + HRA + Standard Deduction + Others</p>
                  </div>

                  {numIncome > 0 && (
                    <div className="rounded-xl bg-accent/10 border border-accent/20 p-4">
                      <p className="text-sm font-semibold text-primary">
                        💡 Recommendation: <span className="text-accent">{betterRegime}</span>
                      </p>
                      <p className="text-xs text-muted mt-1">
                        You save ₹{savings.toLocaleString("en-IN", { maximumFractionDigits: 0 })} by choosing the {betterRegime}.
                      </p>
                    </div>
                  )}
                </div>

                {/* Results */}
                <div className="space-y-4">
                  {/* Old Regime */}
                  <div className={`rounded-xl border p-5 ${oldTax <= newTax ? "border-accent/30 bg-accent/5" : "border-border bg-background"}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-primary">Old Regime</span>
                      {oldTax <= newTax && (
                        <span className="text-[10px] font-bold bg-accent text-primary px-2 py-0.5 rounded-md">BETTER</span>
                      )}
                    </div>
                    <p className="text-2xl font-extrabold text-primary">
                      ₹{oldTax.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                    </p>
                    <p className="text-xs text-muted mt-1">
                      Taxable: ₹{Math.max(numIncome - numDeductions, 0).toLocaleString("en-IN")}
                    </p>
                  </div>

                  {/* New Regime */}
                  <div className={`rounded-xl border p-5 ${newTax < oldTax ? "border-accent/30 bg-accent/5" : "border-border bg-background"}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-primary">New Regime</span>
                      {newTax < oldTax && (
                        <span className="text-[10px] font-bold bg-accent text-primary px-2 py-0.5 rounded-md">BETTER</span>
                      )}
                    </div>
                    <p className="text-2xl font-extrabold text-primary">
                      ₹{newTax.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                    </p>
                    <p className="text-xs text-muted mt-1">
                      Taxable: ₹{Math.max(numIncome - 75000, 0).toLocaleString("en-IN")} (after ₹75K std. deduction)
                    </p>
                  </div>

                  {/* Savings */}
                  {numIncome > 0 && (
                    <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center">
                      <p className="text-sm text-green-700 font-medium">Your Tax Savings</p>
                      <p className="text-2xl font-extrabold text-green-700 mt-1">
                        ₹{savings.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                      </p>
                      <p className="text-xs text-green-600 mt-1">by choosing {betterRegime}</p>
                    </div>
                  )}
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
                <p className="text-lg font-bold text-white">Want expert tax planning advice?</p>
                <p className="text-sm text-white/70 mt-1">A CA can help you save 15-30% more with proper planning.</p>
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
