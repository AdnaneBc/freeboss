import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ForWhom from "@/components/ForWhom";
import HowItWorks from "@/components/HowItWorks";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ForWhom />
      <HowItWorks />
      <EmailCapture />
      <Footer />
    </main>
  );
}
