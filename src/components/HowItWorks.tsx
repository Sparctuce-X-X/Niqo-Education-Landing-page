"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Upload, 
  Rocket,
  ArrowRight,
  Monitor,
  Smartphone,
  Zap
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Créez votre espace",
    description: "Créez votre compte et configurez votre organisation. Nous vous accompagnons pour une mise en place en 24-72h.",
    color: "bg-[#22C55E]",
  },
  {
    number: "02",
    icon: Upload,
    title: "Importez vos données",
    description: "Transférez facilement vos contacts, dossiers et éléments métiers depuis Excel.",
    color: "bg-[#F97316]",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Commencez à gérer",
    description: "Vos équipes gèrent via le web et le mobile, avec des workflows adaptés à votre activité.",
    color: "bg-[#1E3A5F]",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#F97316]/10 text-[#F97316] font-medium rounded-full text-sm mb-4">
            Comment ça marche
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Démarrez en 3 étapes simples
          </h2>
          <p className="text-lg text-[#1E3A5F]/70 max-w-2xl mx-auto">
            Pas besoin de formation technique. Je vous accompagne personnellement à chaque étape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#22C55E] via-[#F97316] to-[#1E3A5F]" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow h-full">
                {/* Step Number */}
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number Badge */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-gray-100">
                  {step.number}
                </span>

                <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#1E3A5F]/60 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-[#22C55E] rotate-90" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Split Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {/* Web Platform */}
          <div className="bg-gradient-to-br from-[#1E3A5F] to-[#0F172A] rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Plateforme Web</h3>
              <p className="text-white/70 mb-4">Pour les responsables et les équipes opérationnelles</p>
              <ul className="space-y-2">
                {["Tableau de bord complet", "Gestion des dossiers", "Suivi des paiements", "Rapports et statistiques"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                    <Zap className="w-4 h-4 text-[#22C55E]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile App */}
          <div className="bg-gradient-to-br from-[#22C55E] to-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Application Mobile</h3>
              <p className="text-white/90 mb-4">Pour les équipes terrain et les contacts</p>
              <ul className="space-y-2">
                {["Suivi des opérations", "Validation rapide des tâches", "Notifications en temps réel", "Communication directe avec les contacts"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/90 text-sm">
                    <Zap className="w-4 h-4 text-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/242068755353?text=Bonjour%20Niqo%2C%20je%20souhaite%20vous%20contacter."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-green-500/25 group"
          >
            Contactez-nous sur WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
