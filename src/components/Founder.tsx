"use client";

import { motion } from "framer-motion";
import { Heart, Quote, Cpu, Globe, Sparkles } from "lucide-react";

export default function Founder() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full mb-6"
            >
              <Heart className="w-4 h-4 text-[#F97316]" />
              <span className="text-sm font-semibold text-[#F97316]">L&apos;histoire derrière Niqo</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-6 leading-tight">
              Une plateforme qui me tient{" "}
              <span className="text-gradient">à cœur</span>
            </h2>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-[#1E3A5F]/70 leading-relaxed"
          >
            <p>
              Je suis <strong className="text-[#1E3A5F]">Dominique Huang</strong>, congolais d&apos;origine chinoise, 
              passé par une <strong className="text-[#1E3A5F]">grande école d&apos;ingénieur à Paris</strong>. 
              Passionné par les <strong className="text-[#1E3A5F]">technologies</strong>, l&apos;<strong className="text-[#1E3A5F]">intelligence artificielle</strong> et 
              la <strong className="text-[#1E3A5F]">digitalisation du continent africain</strong>.
            </p>
            <p>
              Je travaille depuis plusieurs mois sur <strong className="text-[#1E3A5F]">Niqo Education</strong>, 
              une solution <strong className="text-[#1E3A5F]">simple et efficace</strong> pour 
              moderniser la gestion des écoles africaines, en utilisant ce que tout le monde maîtrise déjà : 
              <span className="text-[#25D366] font-semibold"> WhatsApp</span>.
            </p>
            <p>
              Après avoir échangé avec de nombreuses écoles, j&apos;ai compris leurs vrais défis quotidiens. 
              C&apos;est cette écoute qui a façonné chaque fonctionnalité de Niqo Education.
            </p>
          </motion.div>

          {/* Passion badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {[
              { icon: Cpu, label: "Technologies & IA", color: "from-blue-500 to-cyan-500" },
              { icon: Globe, label: "Digitalisation de l'Afrique", color: "from-[#22C55E] to-emerald-500" },
              { icon: Sparkles, label: "Innovation", color: "from-[#F97316] to-orange-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-[#1E3A5F]">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-8 bg-gradient-to-br from-[#1E3A5F] to-[#0F172A] rounded-3xl relative text-white text-center"
          >
            <Quote className="absolute top-6 left-6 w-10 h-10 text-white/10" />
            <p className="text-xl font-medium italic mb-4 relative z-10">
              &ldquo;Votre école peut être modernisée en moins d&apos;une journée. 
              Je m&apos;engage personnellement à vous accompagner.&rdquo;
            </p>
            <p className="text-[#22C55E] font-bold text-lg">— Dominique Huang</p>
            <p className="text-white/50 text-sm mt-1">Fondateur de Niqo Education</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
