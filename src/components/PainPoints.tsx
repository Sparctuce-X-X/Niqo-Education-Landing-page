"use client";

import { motion } from "framer-motion";
import { 
  MessageSquareOff, 
  Clock, 
  EyeOff, 
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  Timer,
  AlertTriangle
} from "lucide-react";

const painPoints = [
  {
    icon: Timer,
    problem: "L'appel de présence prend beaucoup de temps",
    solution: "Appel simplifié en quelques clics depuis l'app",
    stat: "< 1 min",
    statLabel: "pour faire l'appel",
  },
  {
    icon: MessageSquareOff,
    problem: "Les parents ne sont pas informés à temps",
    solution: "Absences envoyées automatiquement sur WhatsApp",
    stat: "Instantané",
    statLabel: "notification parents",
  },
  {
    icon: Clock,
    problem: "Les paiements sont compliqués à suivre",
    solution: "Tableau de suivi clair avec rappels WhatsApp",
    stat: "100%",
    statLabel: "visibilité",
  },
  {
    icon: FileSpreadsheet,
    problem: "Trop de tâches manuelles au secrétariat",
    solution: "Automatisation complète des tâches répétitives",
    stat: "10h",
    statLabel: "gagnées par semaine",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500/10 border border-red-500/20 rounded-full mb-6"
          >
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-semibold text-red-500">Problèmes courants</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-6">
            Beaucoup d&apos;écoles nous ont partagé{" "}
            <span className="relative">
              <span className="text-red-500">les mêmes difficultés</span>
            </span>
          </h2>
          <p className="text-xl text-[#1E3A5F]/60 max-w-3xl mx-auto">
            C&apos;est exactement pour cela que nous avons créé Niqo Education. 
            Une solution simple qui utilise ce que tout le monde maîtrise déjà : <span className="font-semibold text-[#25D366]">WhatsApp</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-[#22C55E]/20 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Problem */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1.5 rounded-full uppercase tracking-wide">
                      Le problème
                    </span>
                  </div>
                  <p className="text-[#1E3A5F] font-semibold text-lg mb-2">
                    {item.problem}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full group-hover:bg-[#22C55E]/10 transition-colors">
                  <ArrowRight className="w-5 h-5 text-[#22C55E]" />
                </div>

                {/* Solution */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#22C55E] to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-bold text-[#22C55E] bg-green-50 px-3 py-1.5 rounded-full uppercase tracking-wide">
                      Avec Niqo
                    </span>
                  </div>
                  <p className="text-[#1E3A5F] font-semibold text-lg mb-3">
                    {item.solution}
                  </p>
                  {/* Stat badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/10 rounded-xl">
                    <span className="text-2xl font-bold text-[#22C55E]">{item.stat}</span>
                    <span className="text-sm text-[#1E3A5F]/60">{item.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-[#1E3A5F] to-[#0F172A] rounded-3xl">
            <div className="text-left">
              <p className="text-white font-semibold text-lg mb-1">Voir la démo en 5 minutes</p>
              <p className="text-white/60 text-sm">Découvrez comment Niqo Education peut transformer votre école</p>
            </div>
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold rounded-xl transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Voir la vidéo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
