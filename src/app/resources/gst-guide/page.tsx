import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "GST Filing Guide 2025 | GSTR-1, 3B, 9, 9C Explained | CAConnect",
  description: "Complete guide to GST return filing in India. Understand GSTR-1, GSTR-3B, GSTR-9, and GSTR-9C with deadlines and step-by-step process.",
};

export default function GSTGuidePage() {
  const returns = [
    { name: "GSTR-1", desc: "Outward supply details. Filed monthly by 11th or quarterly.", frequency: "Monthly/Quarterly" },
    { name: "GSTR-3B", desc: "Summary return with tax payment. Filed monthly by 20th.", frequency: "Monthly" },
    { name: "GSTR-9", desc: "Annual return consolidating all monthly filings.", frequency: "Annual" },
    { name: "GSTR-9C", desc: "Reconciliation statement (turnover > ₹5 Cr). Self-certified.", frequency: "Annual" },
    { name: "GSTR-2B", desc: "Auto-generated ITC statement. Used for reconciliation.", frequency: "Monthly (Auto)" },
    { name: "CMP-08", desc: "Quarterly return for composition scheme dealers.", frequency: "Quarterly" },
  ];

  return (
    <>
      <div className="h-20" />
      <section className="py-16 lg:py-24">
        <Container>
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#resources" className="hover:text-accent transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-primary font-medium">GST Filing Guide</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 mb-4">
              <FileText className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Complete Guide</span>
            </div>
            <h1 className="text-3xl font-extrabold text-primary sm:text-4xl">GST Filing Guide</h1>
            <p className="mt-3 text-muted">Everything you need to know about GST returns — types, deadlines, and filing process.</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {returns.map((r) => (
              <div key={r.name} className="rounded-xl border border-border bg-white p-5 hover:border-accent/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-primary">{r.name}</h3>
                  <span className="text-xs font-semibold bg-primary/5 text-primary px-2 py-0.5 rounded-md">{r.frequency}</span>
                </div>
                <p className="text-sm text-muted">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="gold" size="lg" href="/#lead-form" icon={<ArrowRight className="h-4 w-4" />}>
              Need Help With GST Filing? Talk to an Expert
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
