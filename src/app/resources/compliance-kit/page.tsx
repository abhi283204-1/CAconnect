import { Metadata } from "next";
import { ComplianceKitContent } from "./ComplianceKitContent";

export const metadata: Metadata = {
  title: "Free Business Compliance Kit | Calendars, Checklists & Templates | CAConnect",
  description:
    "Download our free Business Compliance Kit — GST calendar, income tax deadlines, ROC checklist, TDS guide, invoice templates, and board resolution formats. Updated for FY 2025-26.",
  openGraph: {
    title: "Free Business Compliance Kit | CAConnect",
    description:
      "15+ compliance templates, calendars & checklists for Indian businesses. Download free — no credit card required.",
  },
};

export default function ComplianceKitPage() {
  return <ComplianceKitContent />;
}
