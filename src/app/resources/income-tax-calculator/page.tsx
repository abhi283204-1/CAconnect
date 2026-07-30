import { Metadata } from "next";
import { TaxCalculatorContent } from "./TaxCalculatorContent";

export const metadata: Metadata = {
  title: "Income Tax Calculator FY 2025-26 | Old vs New Regime | CAConnect",
  description:
    "Free Income Tax Calculator for FY 2025-26. Compare old regime vs new regime. Calculate your tax liability instantly and plan your savings.",
};

export default function TaxCalculatorPage() {
  return <TaxCalculatorContent />;
}
