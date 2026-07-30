import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Calendar 2025-26 | Important Dates & Deadlines | CAConnect",
  description: "Complete tax calendar for FY 2025-26. Never miss an Income Tax, GST, TDS, or ROC filing deadline.",
};

export default function TaxCalendarPage() {
  const deadlines = [
    { date: "Jul 31", desc: "ITR Filing (Non-Audit Cases)", category: "Income Tax" },
    { date: "Aug 7", desc: "TDS Payment for July", category: "TDS" },
    { date: "Sep 30", desc: "Director KYC (DIR-3)", category: "ROC" },
    { date: "Oct 31", desc: "ITR Filing (Audit Cases)", category: "Income Tax" },
    { date: "Nov 11", desc: "GSTR-1 for October", category: "GST" },
    { date: "Nov 20", desc: "GSTR-3B for October", category: "GST" },
    { date: "Dec 15", desc: "Advance Tax - Q3", category: "Income Tax" },
    { date: "Dec 31", desc: "GST Annual Return (GSTR-9)", category: "GST" },
    { date: "Mar 15", desc: "Advance Tax - Q4", category: "Income Tax" },
    { date: "Mar 31", desc: "Last date for Tax Saving Investments", category: "Income Tax" },
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
            <span className="text-primary font-medium">Tax Calendar</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 mb-4">
              <Calendar className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">FY 2025-26</span>
            </div>
            <h1 className="text-3xl font-extrabold text-primary sm:text-4xl">Tax Calendar 2025-26</h1>
            <p className="mt-3 text-muted">Key filing deadlines for Income Tax, GST, TDS, and ROC compliance.</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {deadlines.map((d) => (
              <div key={d.desc} className="flex items-center gap-4 rounded-xl border border-border bg-white p-4 hover:border-accent/30 transition-colors">
                <div className="flex h-12 w-16 items-center justify-center rounded-lg bg-primary/5 shrink-0">
                  <span className="text-sm font-bold text-primary">{d.date}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-primary">{d.desc}</p>
                  <p className="text-xs text-muted">{d.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="gold" size="lg" href="/#lead-form" icon={<ArrowRight className="h-4 w-4" />}>
              Need Help With Filing? Get Free Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
