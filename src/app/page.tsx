import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyPlatformSection } from "@/components/sections/WhyPlatformSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FindCASection } from "@/components/sections/FindCASection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { BusinessSolutionsSection } from "@/components/sections/BusinessSolutionsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ResourceCenterSection } from "@/components/sections/ResourceCenterSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { ConversionFeatures } from "@/components/ConversionFeatures";

export default function Home() {
  return (
    <>
      <ConversionFeatures />
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <HowItWorksSection />
        <WhyPlatformSection />
        <ServicesSection />
        <FindCASection />
        <LeadFormSection />
        <BusinessSolutionsSection />
        <StatsSection />
        <TestimonialsSection />
        <ResourceCenterSection />
        <FAQSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
