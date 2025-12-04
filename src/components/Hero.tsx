"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
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
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, prefersReducedMotion ? 1 : 0]);

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
        {[
          { left: 10, top: 15, duration: 3.5, delay: 0.2 },
          { left: 25, top: 45, duration: 4.2, delay: 0.8 },
          { left: 40, top: 20, duration: 3.8, delay: 1.5 },
          { left: 55, top: 70, duration: 4.5, delay: 0.5 },
          { left: 70, top: 35, duration: 3.2, delay: 1.2 },
          { left: 85, top: 60, duration: 4.8, delay: 0.3 },
          { left: 15, top: 80, duration: 3.6, delay: 1.8 },
          { left: 45, top: 55, duration: 4.1, delay: 0.7 },
          { left: 75, top: 25, duration: 3.9, delay: 1.1 },
          { left: 90, top: 85, duration: 4.4, delay: 0.4 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#22C55E]/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
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
              className="text-lg md:text-xl text-[#1E3A5F]/70 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
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
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
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
                href="#tarifs"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#1E3A5F]/10 hover:border-[#22C55E] text-[#1E3A5F] font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:bg-white"
              >
                Voir les offres
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            >
              {[
                { icon: CheckCircle2, text: "Mise en place 24-72h", color: "text-[#22C55E]" },
                { icon: Smartphone, text: "App mobile incluse", color: "text-[#1E3A5F]" },
                { icon: TrendingUp, text: "Accompagnement fondateur", color: "text-[#F97316]" },
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

          {/* Right - Video Mockup & Phone */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Video Mockup */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#22C55E]/20 via-[#25D366]/20 to-[#F97316]/20 rounded-3xl blur-2xl" />
              
              {/* Browser frame */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Browser header */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-lg px-4 py-1.5 text-xs text-gray-500 flex items-center gap-2">
                      <Shield className="w-3 h-3 text-green-500" />
                      app.niqo.education
                    </div>
                  </div>
                </div>
                
                {/* Video thumbnail */}
                <a 
                  href="#demo" 
                  className="block relative aspect-video bg-gradient-to-br from-[#1E3A5F] to-[#0F172A] group cursor-pointer"
                >
                  {/* Dashboard preview mockup */}
                  <div className="absolute inset-0 p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#22C55E] rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-sm">N</span>
                        </div>
                        <div>
                          <div className="h-3 w-24 bg-white/20 rounded" />
                          <div className="h-2 w-16 bg-white/10 rounded mt-1" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-white/10 rounded-lg" />
                        <div className="w-8 h-8 bg-white/10 rounded-lg" />
                      </div>
                    </div>
                    
                    {/* Stats cards */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[
                        { label: "Élèves", value: "247", color: "from-[#22C55E] to-emerald-600" },
                        { label: "Présents", value: "231", color: "from-blue-500 to-cyan-500" },
                        { label: "Messages", value: "1.2k", color: "from-[#F97316] to-orange-600" },
                      ].map((stat, i) => (
                        <div key={i} className={`bg-gradient-to-br ${stat.color} rounded-xl p-3`}>
                          <div className="text-white/70 text-xs">{stat.label}</div>
                          <div className="text-white font-bold text-lg">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Table preview */}
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-3 w-20 bg-white/20 rounded" />
                        <div className="h-6 w-24 bg-[#22C55E]/30 rounded-lg" />
                      </div>
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                          <div className="w-8 h-8 bg-white/10 rounded-full" />
                          <div className="flex-1">
                            <div className="h-2.5 w-24 bg-white/20 rounded" />
                            <div className="h-2 w-16 bg-white/10 rounded mt-1" />
                          </div>
                          <div className="w-16 h-6 bg-green-500/30 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <motion.div 
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(34, 197, 94, 0.4)",
                          "0 0 0 20px rgba(34, 197, 94, 0)",
                        ]
                      }}
                      transition={{ 
                        boxShadow: { duration: 1.5, repeat: Infinity },
                        scale: { duration: 0.2 }
                      }}
                    >
                      <Play className="w-8 h-8 text-[#22C55E] ml-1" fill="#22C55E" />
                    </motion.div>
                  </div>
                  
                  {/* Video duration badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 rounded-lg text-white text-sm font-medium">
                    5:00
                  </div>
                </a>
              </div>
              
              {/* Floating phone mockup */}
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="bg-[#1E3A5F] rounded-[1.5rem] p-1.5 shadow-2xl">
                  <div className="bg-white rounded-[1.2rem] overflow-hidden">
                    {/* Phone header */}
                    <div className="bg-[#22C55E] px-3 py-2 flex items-center gap-2">
                      <div className="w-6 h-6 bg-white/20 rounded-full" />
                      <div>
                        <div className="h-2 w-12 bg-white/80 rounded" />
                        <div className="h-1.5 w-8 bg-white/50 rounded mt-0.5" />
                      </div>
                    </div>
                    {/* Phone content */}
                    <div className="p-2 space-y-2">
                      <div className="bg-[#DCF8C6] rounded-lg p-2 ml-4">
                        <div className="h-2 w-16 bg-[#1E3A5F]/20 rounded" />
                        <div className="h-2 w-12 bg-[#1E3A5F]/20 rounded mt-1" />
                      </div>
                      <div className="bg-white border rounded-lg p-2 mr-4">
                        <div className="h-2 w-14 bg-gray-200 rounded" />
                        <div className="h-2 w-10 bg-gray-200 rounded mt-1" />
                      </div>
                      <div className="bg-[#DCF8C6] rounded-lg p-2 ml-4">
                        <div className="h-2 w-20 bg-[#1E3A5F]/20 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* WhatsApp badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-4 h-4 text-white" fill="white" />
                </div>
              </motion.div>
              
              {/* Floating notification */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#1E3A5F]">Appel fait !</div>
                    <div className="text-[10px] text-gray-500">en quelques clics</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating stat */}
              <motion.div 
                className="absolute top-1/2 -left-12 bg-white rounded-xl shadow-xl p-3 border border-gray-100"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Bell className="w-4 h-4 text-[#F97316]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#1E3A5F]">342 parents</div>
                    <div className="text-[10px] text-gray-500">notifiés</div>
                  </div>
                </div>
              </motion.div>
            </div>
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
