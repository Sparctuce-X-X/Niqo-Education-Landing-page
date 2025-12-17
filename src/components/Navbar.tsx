"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#demo", label: "Programme pilote" },
  { href: "#faq", label: "FAQ" },
  { href: "#tarifs", label: "Tarifs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace("#", ""));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? "py-2" 
            : "py-4"
        }`}
      >
        {/* Navbar container avec effet glassmorphism amélioré */}
        <div className={`max-w-6xl mx-auto px-4 transition-all duration-500 ${
          isScrolled ? "px-4" : "px-6"
        }`}>
          <div className={`relative flex items-center justify-between rounded-2xl transition-all duration-500 ${
            isScrolled 
              ? "h-14 px-4 bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/50" 
              : "h-16 px-6 bg-white/40 backdrop-blur-xl border border-white/30"
          }`}>
            
            {/* Effet de brillance animé sur la navbar */}
            {/* Effet de brillance - désactivé pour performance */}

            {/* Logo avec animation */}
            <motion.a 
              href="#" 
              className="relative flex items-center group z-10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="relative">
                <Image 
                  src="/images/Logo.png" 
                  alt="Niqo Education" 
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto object-contain"
                  priority
                  sizes="(max-width: 768px) 32px, 40px"
                />
                {/* Underline animé au hover */}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#03cea4] to-[#ca1551] rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.a>

            {/* Desktop Navigation avec pill animée */}
            <div className="hidden md:flex items-center">
              <div className="relative flex items-center bg-gray-100/50 rounded-xl p-1">
                {/* Pill animée qui suit le hover */}
                <AnimatePresence>
                  {hoveredLink && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-y-1 bg-white rounded-lg shadow-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>
                
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg z-10 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-[#03cea4]"
                        : "text-[#345995]/70 hover:text-[#345995]"
                    }`}
                  >
                    {link.label}
                    {/* Indicateur de section active */}
                    {activeSection === link.href.replace("#", "") && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#03cea4] rounded-full"
                        transition={{ type: "spring", bounce: 0.3 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Desktop CTA avec effet premium */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:flex items-center gap-3 z-10"
            >
              <motion.a
                href="#demo"
                className="group relative flex items-center gap-2 px-5 py-2.5 bg-[#345995] text-white text-sm font-semibold rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient animé au hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#03cea4] to-[#02b896]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Démo gratuite
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 text-[#345995]"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Style premium */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mx-4 mt-2"
            >
              <div className="bg-white/90 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
                <div className="p-4 space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group flex items-center justify-between py-3.5 px-4 rounded-xl text-[#345995] hover:bg-gradient-to-r hover:from-[#03cea4]/10 hover:to-transparent transition-all font-medium"
                    >
                      <span className="flex items-center gap-3">
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-[#03cea4] to-[#ca1551]"
                          whileHover={{ scale: 1.5 }}
                        />
                        {link.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#345995]/30 group-hover:text-[#03cea4] group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  ))}
                </div>
                
                {/* Séparateur avec gradient */}
                <div className="mx-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                
                <div className="p-4">
                  <motion.button
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        const element = document.getElementById('demo');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 300);
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[#345995] to-[#4a6fa8] text-white font-semibold rounded-xl shadow-lg shadow-[#345995]/20 hover:shadow-xl transition-shadow"
                  >
                    <Sparkles className="w-5 h-5" />
                    Demander une démo gratuite
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop blur for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
