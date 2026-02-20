"use client";

import { motion } from "framer-motion";
import { GraduationCap, Receipt, BriefcaseBusiness, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: BriefcaseBusiness,
    title: "Consulting & sur-mesure",
    description:
      "Nous concevons la solution que votre organisation attend, même pour des besoins très spécifiques.",
    href: "https://wa.me/242068755353?text=Bonjour%20Niqo%2C%20je%20souhaite%20vous%20contacter%20pour%20un%20besoin%20sur%20mesure.",
    cta: "Contactez-nous sur WhatsApp",
  },
  {
    icon: Receipt,
    title: "Niqo CRM",
    description:
      "Module de facturation et de devis disponible quand votre besoin inclut un volet commercial/financier.",
    href: "https://wa.me/242068755353?text=Bonjour%20Niqo%2C%20je%20souhaite%20demander%20un%20devis.",
    cta: "Demander un devis",
  },
  {
    icon: GraduationCap,
    title: "Niqo Education",
    description:
      "Plateforme de gestion scolaire pour centraliser élèves, présences, paiements, communication et suivi pédagogique.",
    href: "#fonctionnalites",
    cta: "Voir les fonctionnalités",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-[#22C55E]/10 text-[#22C55E] font-semibold rounded-full text-sm mb-4">
            Nos solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
            Des offres adaptées à vos enjeux
          </h2>
          <p className="text-lg text-[#1E3A5F]/70 max-w-3xl mx-auto">
            Notre point fort est le sur-mesure: nous partons de votre besoin concret et construisons la bonne solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 flex items-center justify-center mb-5">
                <solution.icon className="w-6 h-6 text-[#22C55E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">{solution.title}</h3>
              <p className="text-[#1E3A5F]/70 leading-relaxed mb-6">{solution.description}</p>
              <a
                href={solution.href}
                target={solution.href.startsWith("http") ? "_blank" : undefined}
                rel={solution.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-[#22C55E] font-semibold hover:text-[#16A34A] transition-colors"
              >
                {solution.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
