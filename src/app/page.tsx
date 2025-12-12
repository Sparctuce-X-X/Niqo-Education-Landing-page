import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Features from "@/components/Features";
import Founder from "@/components/Founder";
import PilotProgram from "@/components/PilotProgram";
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
      <Features />
      <Founder />
      <PilotProgram />
      <FAQ />
      <Pricing />
      <Footer />
    </main>
  );
}
