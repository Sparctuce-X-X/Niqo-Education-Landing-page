"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight,
  Smartphone,
  Bell,
  Users,
  Sparkles,
  Play,
  TrendingUp,
  Shield
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100/40 via-white to-orange-50/30" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#22C55E]/20 to-[#22C55E]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#F97316]/20 to-[#F97316]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#1E3A5F]/5 to-transparent rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#22C55E]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-[#22C55E]/20 shadow-lg shadow-green-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
              </span>
              <span className="text-sm font-medium text-[#1E3A5F]">
                Nouveau • Recherche d'écoles pilotes
              </span>
              <Sparkles className="w-4 h-4 text-[#F97316]" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1E3A5F] leading-[1.1] mb-6"
            >
              Gérez votre école{" "}
              <span className="relative">
                <span className="text-gradient">simplement</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <motion.path
                    d="M2 8 Q100 0 198 8"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
              <br />
              <span className="text-[#1E3A5F]/80">communiquez</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white px-4 py-1">efficacement</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-lg -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  style={{ originX: 0 }}
                />
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-[#1E3A5F]/70 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              Une solution <span className="font-semibold text-[#1E3A5F]">simple et efficace</span> pour 
              moderniser la gestion de votre école, en utilisant ce que tout le monde maîtrise déjà : 
              <span className="font-semibold text-[#25D366]"> WhatsApp</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
            >
              <a
                href="#demo"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Demander une démo gratuite
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#16A34A] to-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </a>
              <a
                href="#fonctionnalites"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#1E3A5F]/10 hover:border-[#22C55E] text-[#1E3A5F] font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:bg-white"
              >
                <Play className="w-5 h-5 text-[#22C55E]" />
                Voir la démo
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto"
            >
              {[
                { icon: CheckCircle2, text: "Configuration 24h", color: "text-[#22C55E]" },
                { icon: Smartphone, text: "App mobile incluse", color: "text-[#1E3A5F]" },
                { icon: TrendingUp, text: "98% satisfaction", color: "text-[#F97316]" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-xs font-medium text-[#1E3A5F]/70 text-center">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#1E3A5F]/50">Découvrir</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#1E3A5F]/20 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
