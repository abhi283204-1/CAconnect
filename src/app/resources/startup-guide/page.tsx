import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Rocket, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Startup Registration Guide India 2025 | Step-by-Step | CAConnect",
  description: "Complete guide to registering your startup in India. Private Limited, LLP, DPIIT recognition, and compliance setup explained step by step.",
};

export default function StartupGuidePage() {
  const steps = [
    { step: 1, title: "Choose Your Business Structure", desc: "Private Limited for funding, LLP for services, OPC for solo founders." },
    { step: 2, title: "Get Digital Signature (DSC)", desc: "Required for all MCA filings. Takes 1-2 days to obtain." },
    { step: 3, title: "Reserve Company Name", desc: "Apply via RUN or SPICe+ form. Keep 2-3 name options ready." },
    { step: 4, title: "File Incorporation Documents", desc: "MOA, AOA, Director details, and registered office proof submitted to MCA." },
    { step: 5, title: "Obtain Certificate of Incorporation", desc: "MCA issues CIN, PAN, and TAN upon approval. Takes 5-7 days." },
    { step: 6, title: "Post-Incorporation Setup", desc: "Open bank account, register for GST, apply for MSME, set up compliance calendar." },
    { step: 7, title: "DPIIT Startup Recognition", desc: "Register on Startup India portal for tax benefits and government schemes." },
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
            <span className="text-primary font-medium">Startup Guide</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 mb-4">
              <Rocket className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">2025 Guide</span>
            </div>
            <h1 className="text-3xl font-extrabold text-primary sm:text-4xl">Startup Registration Guide</h1>
            <p className="mt-3 text-muted">Step-by-step process to register your startup in India and get it investor-ready.</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4 rounded-xl border border-border bg-white p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-primary">{s.step}</div>
                <div>
                  <h3 className="font-bold text-primary">{s.title}</h3>
                  <p className="text-sm text-muted mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="gold" size="lg" href="/#lead-form" icon={<ArrowRight className="h-4 w-4" />}>
              Get Expert Help Registering Your Startup
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
