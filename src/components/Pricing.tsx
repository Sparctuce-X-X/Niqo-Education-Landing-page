"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star, MessageCircle, Clock, Users } from "lucide-react";

const pilotFeatures = [
  "Gestion complète des élèves et classes",
  "Suivi des présences en temps réel",
  "Notifications WhatsApp automatiques",
  "Suivi des paiements",
  "Application mobile",
  "Accompagnement direct par le fondateur",
  "Formation en visio/WhatsApp",
  "Support prioritaire pendant toute la phase pilote",
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-20 md:py-32 bg-gradient-to-b from-white via-[#F8FAFC] to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#F97316]/10 to-[#F97316]/5 border border-[#F97316]/20 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-[#F97316]" />
            <span className="text-sm font-semibold text-[#F97316]">Offre de lancement</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-6">
            Programme{" "}
            <span className="relative">
              <span className="text-gradient">Pilote</span>
            </span>
          </h2>
          
          <p className="text-xl text-[#1E3A5F]/60 max-w-2xl mx-auto">
            Nous recherchons 3 écoles en Afrique francophone pour tester Niqo Education 
            pendant 3 mois, gratuitement.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#22C55E] to-emerald-500 rounded-[2rem] blur-lg opacity-30" />
          
          <div className="relative bg-gradient-to-br from-[#1E3A5F] via-[#1E3A5F] to-[#0F172A] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#22C55E] to-emerald-500 text-white font-bold rounded-full shadow-lg shadow-green-500/30">
                🎁 3 mois 100% gratuits
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 mt-4">
              {[
                { icon: Users, value: "3", label: "Écoles recherchées" },
                { icon: Clock, value: "3 mois", label: "Durée du pilote" },
                { icon: MessageCircle, value: "Direct", label: "Avec le fondateur" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#22C55E]" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {pilotFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <span className="text-white/90 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-[#22C55E] to-emerald-500 hover:from-[#16A34A] hover:to-emerald-600 text-white font-bold rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all"
              >
                Candidater pour le programme pilote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <p className="text-white/50 text-sm mt-4">
                Places limitées • Réponse sous 24-48h
              </p>
            </div>
          </div>
        </motion.div>

        {/* After pilot note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full">
            <span className="text-sm text-[#1E3A5F]/70">
              💡 Tarifs disponibles après la période pilote • Demandez un devis personnalisé
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
