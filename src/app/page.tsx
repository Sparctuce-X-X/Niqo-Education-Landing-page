import dynamic from "next/dynamic";

// Composants critiques (above the fold) - chargés immédiatement
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Composants non-critiques (below the fold) - chargés en lazy loading
const BeforeAfter = dynamic(() => import("@/components/BeforeAfter"), {
  loading: () => <div className="min-h-[400px]" />,
});
const AfricaSection = dynamic(() => import("@/components/AfricaSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const PainPoints = dynamic(() => import("@/components/PainPoints"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <div className="min-h-[400px]" />,
});
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Founder = dynamic(() => import("@/components/Founder"), {
  loading: () => <div className="min-h-[400px]" />,
});
const PilotProgram = dynamic(() => import("@/components/PilotProgram"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => <div className="min-h-[400px]" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="min-h-[400px]" />,
});
const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
});
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  ssr: false, // Composant client-only, pas besoin de SSR
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <WhatsAppButton />
      <Hero />
      <BeforeAfter />
      <AfricaSection />
      <PainPoints />
      <Features />
      <HowItWorks />
      <Founder />
      <PilotProgram />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
