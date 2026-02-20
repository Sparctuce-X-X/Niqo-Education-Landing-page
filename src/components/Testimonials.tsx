"use client";

import { motion } from "framer-motion";
import { MessageCircle, Wallet, Zap, ShieldCheck } from "lucide-react";

const expectedBenefits = [
  {
    quote: "Réduisez vos impayés grâce aux rappels WhatsApp automatiques envoyés à vos contacts.",
    benefit: "Moins d'impayés",
    Icon: Wallet,
    gradient: "from-[#22C55E] to-emerald-600",
  },
  {
    quote: "Une interface intuitive que vos équipes peuvent prendre en main en moins d'une journée, sans formation technique.",
    benefit: "Prise en main rapide",
    Icon: Zap,
    gradient: "from-[#F97316] to-orange-600",
  },
  {
    quote: "Vos contacts reçoivent des notifications instantanées sur les événements importants. Visibilité et réactivité garanties.",
    benefit: "Meilleure communication",
    Icon: ShieldCheck,
    gradient: "from-[#1E3A5F] to-indigo-600",
  },
];

export default function Testimonials() {
  const stats = [
    { value: "24h", label: "Prise en charge initiale" },
    { value: "Sur mesure", label: "Paramétrage" },
    { value: "24h", label: "Mise en place" },
    { value: "100%", label: "Accompagnement" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#1E3A5F] via-[#1E3A5F] to-[#0F172A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#22C55E]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F97316]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full mb-6"
          >
            <MessageCircle className="w-4 h-4 text-[#22C55E]" />
            <span className="text-sm font-semibold text-white">Bénéfices attendus</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ce que Niqo{" "}
            <span className="relative">
              <span className="text-gradient">vous apporte</span>
            </span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Bénéficiez d&apos;un accompagnement personnalisé pour vos processus métier
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#22C55E]/30 transition-all cursor-pointer"
            >
              <motion.p 
                className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {expectedBenefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative bg-white rounded-3xl p-8 h-full shadow-xl">
                {/* Icon */}
                <motion.div 
                  className={`absolute -top-5 left-8 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <item.Icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Benefit title */}
                <div className="pt-6 mb-4">
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${item.gradient} text-white text-sm font-semibold rounded-full`}>
                    {item.benefit}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#1E3A5F]/80 leading-relaxed text-lg">
                  {item.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 text-sm mb-6">Soyez parmi les premiers à bénéficier de Niqo Education</p>
          <motion.a
            href="https://wa.me/242068755353?text=Bonjour%20Niqo%2C%20je%20souhaite%20vous%20contacter."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#22C55E] to-emerald-500 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
          >
            Contactez-nous sur WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
