import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Solutions from "@/components/Solutions";
import Features from "@/components/Features";
import CaseStudy from "@/components/CaseStudy";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <WhatsAppButton />
      <Hero />
      <BeforeAfter />
      <Solutions />
      <Features />
      <CaseStudy />
      <FAQ />
      <Pricing />
      <Footer />
    </main>
  );
}
