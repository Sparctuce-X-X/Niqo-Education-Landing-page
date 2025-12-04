"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, Building2, Sparkles, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Idéal pour les petites écoles",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/20",
    features: [
      "Jusqu'à 100 élèves",
      "1 administrateur",
      "Gestion des présences",
      "Suivi des paiements",
      "500 messages WhatsApp/mois",
      "Support par email",
    ],
    cta: "Demander un devis",
    popular: false,
  },
  {
    name: "Pro",
    description: "Pour les écoles en croissance",
    icon: Crown,
    gradient: "from-[#22C55E] to-emerald-500",
    shadowColor: "shadow-green-500/30",
    features: [
      "Jusqu'à 500 élèves",
      "5 administrateurs",
      "Toutes les fonctionnalités Starter",
      "WhatsApp illimité",
      "App mobile complète",
      "Rapports avancés",
      "Support prioritaire",
    ],
    cta: "Demander un devis",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Pour les grandes écoles",
    icon: Building2,
    gradient: "from-[#1E3A5F] to-indigo-600",
    shadowColor: "shadow-indigo-500/20",
    features: [
      "Élèves illimités",
      "Administrateurs illimités",
      "API personnalisée",
      "Intégrations sur mesure",
      "Support dédié 24/7",
      "Formation sur site",
      "Personnalisation avancée",
    ],
    cta: "Nous contacter",
    popular: false,
  },
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-sm font-semibold text-[#F97316]">Nos formules</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-6">
            Une offre{" "}
            <span className="relative">
              <span className="text-gradient">adaptée</span>
            </span>
            {" "}à votre école
          </h2>
          
          <p className="text-xl text-[#1E3A5F]/60 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à la taille de votre établissement.
            Facturation trimestrielle ou annuelle. Demandez un devis personnalisé.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative group ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Glow effect for popular */}
              {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-[#22C55E] to-emerald-500 rounded-[2rem] blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              )}
              
              <div className={`relative h-full rounded-3xl p-8 transition-all duration-500 ${
                plan.popular 
                  ? "bg-gradient-to-br from-[#1E3A5F] via-[#1E3A5F] to-[#0F172A] text-white shadow-2xl" 
                  : "bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl"
              }`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-[#F97316] to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-orange-500/30">
                      <Sparkles className="w-4 h-4" />
                      Le plus populaire
                    </span>
                  </motion.div>
                )}

                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${plan.gradient} shadow-lg ${plan.shadowColor}`}
                >
                  <plan.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Plan Info */}
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  plan.popular ? "text-white/70" : "text-[#1E3A5F]/60"
                }`}>
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + featureIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? "bg-[#22C55E]/20" : "bg-[#22C55E]/10"
                      }`}>
                        <Check className="w-3 h-3 text-[#22C55E]" />
                      </div>
                      <span className={`text-sm ${
                        plan.popular ? "text-white/90" : "text-[#1E3A5F]/70"
                      }`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#demo"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold transition-all ${
                    plan.popular 
                      ? "bg-gradient-to-r from-[#22C55E] to-emerald-500 hover:from-[#16A34A] hover:to-emerald-600 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50" 
                      : "bg-[#1E3A5F] hover:bg-[#1E3A5F]/90 text-white"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[#1E3A5F]/50"
        >
          {[
            "✓ 14 jours d'essai gratuit",
            "✓ Sans engagement",
            "✓ Annulation à tout moment",
            "✓ Support inclus"
          ].map((item, index) => (
            <span key={index} className="text-sm font-medium">{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
