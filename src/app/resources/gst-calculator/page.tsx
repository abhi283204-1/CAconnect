import { Metadata } from "next";
import { GSTCalculatorContent } from "./GSTCalculatorContent";

export const metadata: Metadata = {
  title: "GST Calculator | Calculate GST Amount Instantly | CAConnect",
  description:
    "Free GST calculator to compute CGST, SGST, IGST amounts instantly. Calculate inclusive and exclusive GST for any amount. Used by 10,000+ businesses.",
};

export default function GSTCalculatorPage() {
  return <GSTCalculatorContent />;
}
