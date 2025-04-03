import Hero from "@/components/Hero";
import WhyItMatters from "@/components/WhyItMatters";
import Features from "@/components/Features";
import ForWhom from "@/components/ForWhom";
import HowItWorks from "@/components/HowItWorks";
import PricingPreview from "@/components/PricingPreview";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyItMatters />
      <Features />
      <ForWhom />
      <HowItWorks />
      <PricingPreview />
      <EmailCapture />
      <Footer />
    </main>
  );
}
