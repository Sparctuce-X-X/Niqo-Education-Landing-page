"use client";

import { motion } from "framer-motion";
import { 
  X, 
  Check, 
  FileStack, 
  Clock, 
  PhoneOff, 
  Frown,
  Smartphone,
  Zap,
  MessageCircle,
  Smile,
  ArrowRight
} from "lucide-react";

const beforeItems = [
  { icon: FileStack, text: "Registres papier perdus" },
  { icon: Clock, text: "Appel qui prend 10 minutes" },
  { icon: PhoneOff, text: "Parents jamais informés" },
  { icon: Frown, text: "Secrétariat débordé" },
];

const afterItems = [
  { icon: Smartphone, text: "Tout sur une seule app" },
  { icon: Zap, text: "Appel en 10 secondes" },
  { icon: MessageCircle, text: "WhatsApp automatique" },
  { icon: Smile, text: "Équipe sereine" },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-50/50 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-100 to-green-100 rounded-full mb-6"
          >
            <span className="text-sm font-semibold text-[#1E3A5F]">La transformation</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-6">
            Avant vs{" "}
            <span className="text-gradient">Après</span>
            {" "}Niqo
          </h2>
          
          <p className="text-xl text-[#1E3A5F]/60 max-w-2xl mx-auto">
            Découvrez comment Niqo Education transforme le quotidien de votre école
          </p>
        </motion.div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-red-200 to-red-100 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white rounded-3xl p-8 border-2 border-red-200 shadow-xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1E3A5F]">Avant</h3>
                  <p className="text-red-500 text-sm font-medium">Sans Niqo Education</p>
                </div>
              </div>

              {/* Illustration */}
              <div className="bg-red-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center gap-4">
                  {/* Stressed person illustration */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-red-200 rounded-full flex items-center justify-center">
                      <Frown className="w-10 h-10 text-red-500" />
                    </div>
                    {/* Floating papers */}
                    <motion.div 
                      className="absolute -top-2 -right-2 w-8 h-10 bg-white rounded shadow-md rotate-12"
                      animate={{ y: [0, -5, 0], rotate: [12, 15, 12] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute -bottom-1 -left-3 w-8 h-10 bg-white rounded shadow-md -rotate-6"
                      animate={{ y: [0, -3, 0], rotate: [-6, -10, -6] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                  </div>
                  {/* Clock showing late */}
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-red-300 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-red-400" />
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {beforeItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-red-50 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="text-[#1E3A5F] font-medium">{item.text}</span>
                    <X className="w-5 h-5 text-red-400 ml-auto" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-green-200 to-green-100 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white rounded-3xl p-8 border-2 border-green-200 shadow-xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#22C55E]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1E3A5F]">Après</h3>
                  <p className="text-[#22C55E] text-sm font-medium">Avec Niqo Education</p>
                </div>
              </div>

              {/* Illustration */}
              <div className="bg-green-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center gap-4">
                  {/* Happy person illustration */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center">
                      <Smile className="w-10 h-10 text-[#22C55E]" />
                    </div>
                    {/* Phone with checkmark */}
                    <motion.div 
                      className="absolute -top-2 -right-2 w-10 h-14 bg-[#1E3A5F] rounded-lg flex items-center justify-center"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Check className="w-5 h-5 text-[#22C55E]" />
                    </motion.div>
                  </div>
                  {/* WhatsApp icon */}
                  <motion.div 
                    className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MessageCircle className="w-8 h-8 text-white" fill="white" />
                  </motion.div>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {afterItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-green-50 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#22C55E]" />
                    </div>
                    <span className="text-[#1E3A5F] font-medium">{item.text}</span>
                    <Check className="w-5 h-5 text-[#22C55E] ml-auto" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#22C55E] to-emerald-500 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all"
          >
            Passer au &quot;Après&quot;
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
