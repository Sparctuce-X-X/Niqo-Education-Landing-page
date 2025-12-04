"use client";

import { motion } from "framer-motion";
import { 
  Gift, 
  Calendar, 
  Users, 
  MessageCircle, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  Star
} from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "3 mois 100% gratuits",
    description: "Accès complet à toutes les fonctionnalités sans aucun frais",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description: "Configuration et formation en visio par le fondateur",
  },
  {
    icon: MessageCircle,
    title: "Support WhatsApp direct",
    description: "Assistance prioritaire avec le fondateur lui-même",
  },
  {
    icon: Star,
    title: "Façonnez le produit",
    description: "Vos retours influenceront directement les prochaines fonctionnalités",
  },
];

export default function PilotProgram() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#22C55E] via-[#16A34A] to-[#15803D] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">Opportunité exclusive</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Recherche de{" "}
            <span className="relative inline-block">
              3 écoles pilotes
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-white/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Je recherche actuellement <strong>3 écoles en Afrique francophone</strong> pour un partenariat 
            de 3 mois gratuit, afin d&apos;obtenir des retours réels sur un cycle scolaire complet.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#22C55E]/10 rounded-bl-full" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F97316]/10 rounded-full mb-4">
                    <Clock className="w-4 h-4 text-[#F97316]" />
                    <span className="text-sm font-semibold text-[#F97316]">Places limitées</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-3">
                    Votre école pourrait être la prochaine !
                  </h3>
                  <p className="text-[#1E3A5F]/60 mb-6">
                    Modernisez votre établissement en moins d&apos;une journée. 
                    Je m&apos;engage personnellement à vous accompagner tout au long du partenariat.
                  </p>
                  
                  {/* What you get */}
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {["Configuration gratuite", "Formation incluse", "Support prioritaire"].map((item, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#22C55E]/10 text-[#22C55E] text-sm font-medium rounded-full">
                        <CheckCircle2 className="w-4 h-4" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <motion.a
                    href="#demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#22C55E] to-emerald-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
                  >
                    Candidater maintenant
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                  <p className="text-center text-sm text-[#1E3A5F]/50">
                    Réponse sous 24h garantie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-white/80">
              Aucun engagement • Aucun paiement • Aucun risque
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
