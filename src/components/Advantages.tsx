"use client";

import { motion } from "framer-motion";
import { 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  Smartphone,
  HeadphonesIcon,
  CheckCircle2
} from "lucide-react";

const advantages = [
  {
    icon: MessageCircle,
    title: "WhatsApp natif",
    description: "Les parents reçoivent les infos là où ils sont déjà. Pas besoin d'installer une nouvelle app.",
    highlight: true,
  },
  {
    icon: MapPin,
    title: "Adapté à l'Afrique",
    description: "Paiements en XOF/XAF, interface entièrement en français, adapté aux réalités locales.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Simple à utiliser",
    description: "Interface intuitive, pas besoin de formation technique. Prise en main en quelques minutes.",
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "Accessible partout",
    description: "Fonctionne sur mobile et ordinateur. Gérez votre école depuis n'importe où.",
    highlight: false,
  },
  {
    icon: HeadphonesIcon,
    title: "Support réactif",
    description: "Équipe locale disponible par téléphone, WhatsApp et email. Réponse en moins de 2h.",
    highlight: false,
  },
];

export default function Advantages() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#1E3A5F]/10 text-[#1E3A5F] font-medium rounded-full text-sm mb-4">
            Pourquoi Niqo Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Ce qui nous différencie
          </h2>
          <p className="text-lg text-[#1E3A5F]/70 max-w-2xl mx-auto">
            Une solution pensée pour les écoles africaines, par une équipe qui comprend vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-6 ${
                advantage.highlight 
                  ? "bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white md:col-span-2 lg:col-span-1" 
                  : "bg-[#F8FAFC] border border-gray-100"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                advantage.highlight ? "bg-white/20" : "bg-white"
              }`}>
                <advantage.icon className={`w-6 h-6 ${
                  advantage.highlight ? "text-white" : "text-[#22C55E]"
                }`} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                advantage.highlight ? "text-white" : "text-[#1E3A5F]"
              }`}>
                {advantage.title}
              </h3>
              <p className={`leading-relaxed ${
                advantage.highlight ? "text-white/90" : "text-[#1E3A5F]/60"
              }`}>
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50+", label: "Écoles partenaires" },
            { value: "15 000+", label: "Élèves gérés" },
            { value: "100 000+", label: "Messages envoyés" },
            { value: "98%", label: "Satisfaction client" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#22C55E] mb-1">
                {stat.value}
              </p>
              <p className="text-[#1E3A5F]/60 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
