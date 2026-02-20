"use client";

import { motion } from "framer-motion";
import { Building2, FileText, Cog, CheckCircle2 } from "lucide-react";

const points = [
  {
    icon: FileText,
    title: "Besoin",
    text: "Digitaliser la creation des bulletins d'eleves pour fiabiliser et accelerer le processus.",
  },
  {
    icon: Cog,
    title: "Solution",
    text: "Conception d'une solution sur mesure adaptee au fonctionnement du groupe scolaire.",
  },
  {
    icon: CheckCircle2,
    title: "Impact",
    text: "Processus de generation des bulletins plus fluide, centralise et facile a suivre.",
  },
];

export default function CaseStudy() {
  return (
    <section id="cas-client" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-[#F97316]/10 text-[#F97316] font-semibold rounded-full text-sm mb-4">
            Cas client
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
            Groupe scolaire DOM Helder Camara
          </h2>
          <p className="text-lg text-[#1E3A5F]/70 max-w-3xl mx-auto">
            Accompagnement sur mesure pour digitaliser un processus metier cle : la creation des bulletins d'eleves.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-gray-100 bg-gradient-to-br from-[#F8FAFC] to-white p-8 md:p-10 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[#1E3A5F]" />
            </div>
            <p className="text-lg font-semibold text-[#1E3A5F]">Projet de digitalisation des bulletins</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {points.map((point, index) => (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white border border-gray-100 p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-[#22C55E]/10 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-[#22C55E]" />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">{point.title}</h3>
                <p className="text-[#1E3A5F]/70 leading-relaxed">{point.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
