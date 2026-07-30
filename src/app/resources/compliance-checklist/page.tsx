import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ClipboardCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Compliance Checklist | Monthly, Quarterly & Annual | CAConnect",
  description: "Complete compliance checklist for Indian businesses. Income Tax, GST, TDS, ROC, PF, ESI deadlines organized by frequency.",
};

export default function ComplianceChecklistPage() {
  const monthly = ["GST Return (GSTR-3B)", "TDS Payment", "PF & ESI Payment", "Professional Tax"];
  const quarterly = ["TDS Return Filing", "Advance Tax Payment", "GSTR-1 (Quarterly scheme)"];
  const annual = ["Income Tax Return", "GST Annual Return (GSTR-9)", "ROC Annual Filing (MGT-7, AOC-4)", "Director KYC", "Tax Audit Report", "Transfer Pricing Report"];

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
            <span className="text-primary font-medium">Compliance Checklist</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 mb-4">
              <ClipboardCheck className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Free Guide</span>
            </div>
            <h1 className="text-3xl font-extrabold text-primary sm:text-4xl">Business Compliance Checklist</h1>
            <p className="mt-3 text-muted">Essential compliance deadlines organized by frequency for Indian businesses.</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            {[{ title: "Monthly", items: monthly }, { title: "Quarterly", items: quarterly }, { title: "Annual", items: annual }].map((group) => (
              <div key={group.title}>
                <h2 className="text-lg font-bold text-primary mb-3">{group.title} Compliances</h2>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-white p-3">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm text-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="gold" size="lg" href="/#lead-form" icon={<ArrowRight className="h-4 w-4" />}>
              Get Expert Help With Compliance
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
