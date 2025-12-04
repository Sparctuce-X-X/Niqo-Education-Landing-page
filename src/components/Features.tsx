"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  CheckSquare, 
  Receipt, 
  MessageCircle,
  Bell,
  BarChart3,
  School,
  Smartphone,
  ArrowRight,
  Zap,
  Send
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Gestion des élèves",
    description: "Inscriptions, dossiers complets, suivi du parcours scolaire de chaque élève.",
    gradient: "from-blue-500 to-blue-600",
    shadowColor: "shadow-blue-500/25",
    bgGradient: "from-blue-50 to-blue-100/50",
  },
  {
    icon: CheckSquare,
    title: "Suivi des présences",
    description: "Marquage en temps réel, alertes automatiques aux parents en cas d'absence.",
    gradient: "from-[#22C55E] to-emerald-600",
    shadowColor: "shadow-green-500/25",
    bgGradient: "from-green-50 to-emerald-100/50",
  },
  {
    icon: Receipt,
    title: "Gestion des paiements",
    description: "Suivi des paiements, rappels automatiques aux parents, historique complet.",
    gradient: "from-amber-500 to-orange-500",
    shadowColor: "shadow-amber-500/25",
    bgGradient: "from-amber-50 to-orange-100/50",
  },
  {
    icon: MessageCircle,
    title: "Communication WhatsApp",
    description: "Messages automatiques pour absences, rappels de paiement, annonces et événements.",
    gradient: "from-[#25D366] to-[#128C7E]",
    shadowColor: "shadow-green-500/25",
    bgGradient: "from-emerald-50 to-teal-100/50",
  },
  {
    icon: Smartphone,
    title: "Application mobile",
    description: "App dédiée pour les professeurs, élèves et parents. Adaptée au marché africain.",
    gradient: "from-[#F97316] to-red-500",
    shadowColor: "shadow-orange-500/25",
    bgGradient: "from-orange-50 to-red-100/50",
  },
  {
    icon: BarChart3,
    title: "Tableau de bord",
    description: "Statistiques en temps réel, vue d'ensemble de votre établissement.",
    gradient: "from-purple-500 to-violet-600",
    shadowColor: "shadow-purple-500/25",
    bgGradient: "from-purple-50 to-violet-100/50",
  },
  {
    icon: School,
    title: "Gestion des classes",
    description: "Emplois du temps, affectation des professeurs, organisation simplifiée.",
    gradient: "from-pink-500 to-rose-600",
    shadowColor: "shadow-pink-500/25",
    bgGradient: "from-pink-50 to-rose-100/50",
  },
  {
    icon: Bell,
    title: "Notifications push",
    description: "Alertes instantanées sur mobile pour ne rien manquer d'important.",
    gradient: "from-indigo-500 to-blue-600",
    shadowColor: "shadow-indigo-500/25",
    bgGradient: "from-indigo-50 to-blue-100/50",
  },
];

// Composant simplifié pour performance - pas d'effets 3D
function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <div className="group relative">
      <div className={`relative h-full bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-6 border border-white/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-2xl ${feature.shadowColor} hover:-translate-y-1`}>
        {/* Content */}
        <div className="relative z-10">
          <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg ${feature.shadowColor} transition-transform duration-300 group-hover:scale-105`}>
            <feature.icon className="w-7 h-7 text-white" />
          </div>
          
          <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">
            {feature.title}
          </h3>
          
          <p className="text-[#1E3A5F]/60 text-sm leading-relaxed mb-4">
            {feature.description}
          </p>

          <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
              En savoir plus
            </span>
            <ArrowRight className={`w-4 h-4 text-[#22C55E] group-hover:translate-x-1 transition-transform`} />
          </div>
        </div>

        {/* Corner decoration */}
        <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />
      </div>
    </div>
  );
}

export default function Features() {
  const [activeMessage, setActiveMessage] = useState(0);
  
  const messages = [
    { text: "Bonjour Mme Kouassi, votre enfant Marie est bien arrivé à l'école ce matin à 7h45. ✅", time: "08:00" },
    { text: "📢 Rappel: La réunion parents-professeurs aura lieu samedi 15 à 10h.", time: "10:30" },
    { text: "💰 Facture de scolarité disponible. Montant: 150 000 XOF. Échéance: 30 Nov.", time: "14:15" },
  ];

  return (
    <section id="fonctionnalites" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#22C55E]/10 to-[#22C55E]/5 border border-[#22C55E]/20 rounded-full mb-6"
          >
            <Zap className="w-4 h-4 text-[#22C55E]" />
            <span className="text-sm font-semibold text-[#22C55E]">Fonctionnalités puissantes</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-6">
            Tout ce dont votre école{" "}
            <span className="relative">
              <span className="text-gradient">a besoin</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.path
                  d="M2 8 Q100 0 198 8"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>
          
          <p className="text-xl text-[#1E3A5F]/60 max-w-3xl mx-auto leading-relaxed">
            Une plateforme complète et intuitive pour gérer tous les aspects de votre établissement scolaire, 
            de l&apos;inscription à la communication avec les parents.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* WhatsApp Highlight - Premium Version */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/20 via-[#128C7E]/20 to-[#25D366]/20 rounded-[2.5rem] blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-[#25D366] via-[#20BD5C] to-[#128C7E] rounded-[2.5rem] p-10 md:p-16 text-white overflow-hidden">
            {/* Animated background patterns */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 50, 0],
                  y: [0, -30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  x: [0, -30, 0],
                  y: [0, 20, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              {/* Floating icons */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-white/10"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <MessageCircle className="w-8 h-8" />
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <span className="font-semibold">WhatsApp Business API</span>
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                >
                  Communiquez là où sont{" "}
                  <span className="relative inline-block">
                    vos parents
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-white/50 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    />
                  </span>
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-white/90 mb-8 leading-relaxed"
                >
                  <span className="font-bold text-white">95% des parents africains</span> utilisent WhatsApp quotidiennement. 
                  Atteignez-les directement, sans qu&apos;ils aient besoin d&apos;installer une nouvelle application.
                </motion.p>
                
                <motion.ul 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  {[
                    "Notifications d'absence automatiques",
                    "Rappels de paiement personnalisés",
                    "Annonces et événements de l'école",
                    "Communication instantanée avec les parents",
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <CheckSquare className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              
              {/* Phone Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="relative">
                  {/* Phone frame */}
                  <div className="relative w-[280px] md:w-[320px] bg-[#1E3A5F] rounded-[3rem] p-3 shadow-2xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1E3A5F] rounded-b-2xl z-20" />
                    
                    {/* Screen */}
                    <div className="bg-[#ECE5DD] rounded-[2.5rem] overflow-hidden">
                      {/* WhatsApp Header */}
                      <div className="bg-[#075E54] px-4 py-4 pt-10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-full flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white text-sm">Niqo Education</p>
                            <p className="text-xs text-white/70">École Les Étoiles</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Messages */}
                      <div className="p-4 space-y-3 min-h-[300px]">
                        {messages.map((message, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ 
                              opacity: index <= activeMessage ? 1 : 0.3,
                              y: 0,
                              scale: index === activeMessage ? 1.02 : 1
                            }}
                            transition={{ delay: index * 0.3, duration: 0.5 }}
                            className="flex justify-end"
                          >
                            <div className={`bg-[#DCF8C6] rounded-2xl rounded-tr-sm p-3 max-w-[85%] shadow-sm ${index === activeMessage ? 'ring-2 ring-[#25D366]/50' : ''}`}>
                              <p className="text-sm text-[#1E3A5F] leading-relaxed">
                                {message.text}
                              </p>
                              <div className="flex items-center justify-end gap-1 mt-1">
                                <p className="text-[10px] text-gray-500">{message.time}</p>
                                <svg className="w-4 h-4 text-[#53BDEB]" viewBox="0 0 16 15" fill="currentColor">
                                  <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        
                        {/* Typing indicator */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 }}
                          className="flex justify-end"
                        >
                          <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-4 py-3">
                            <div className="flex gap-1">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-2 h-2 bg-gray-400 rounded-full"
                                  animate={{ y: [0, -5, 0] }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Input bar */}
                      <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
                        <div className="flex-1 bg-white rounded-full px-4 py-2">
                          <span className="text-sm text-gray-400">Message...</span>
                        </div>
                        <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                          <Send className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating notification */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, y: -20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, type: "spring" }}
                    className="absolute -right-4 top-20 bg-white rounded-2xl p-3 shadow-xl max-w-[160px]"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center">
                        <CheckSquare className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs font-bold text-[#1E3A5F]">Livré</span>
                    </div>
                    <p className="text-[10px] text-gray-500">Message envoyé à 342 parents</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
