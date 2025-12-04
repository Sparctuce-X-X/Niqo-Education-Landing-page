"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Comment fonctionne l'intégration WhatsApp ?",
    answer: "Niqo Education utilise l'API officielle WhatsApp Business. Une fois votre compte configuré, les messages sont envoyés automatiquement aux parents selon les événements (absences, factures, annonces). Les parents n'ont rien à installer, ils reçoivent les messages directement sur leur WhatsApp habituel.",
  },
  {
    question: "Puis-je importer mes données existantes ?",
    answer: "Oui, absolument ! Vous pouvez importer vos listes d'élèves, parents et classes depuis un fichier Excel. Je vous accompagne gratuitement pour la migration de vos données existantes.",
  },
  {
    question: "Y a-t-il une application pour les parents ?",
    answer: "Oui, les parents ont accès à une application mobile (iOS et Android) où ils peuvent suivre les présences, consulter les factures, voir les notes et communiquer avec l'école. En plus, ils reçoivent les notifications importantes sur WhatsApp.",
  },
  {
    question: "Comment sont sécurisées les données ?",
    answer: "La sécurité est notre priorité. Toutes les données sont chiffrées (SSL/TLS), stockées sur des serveurs sécurisés avec des sauvegardes quotidiennes. Nous sommes conformes aux réglementations sur la protection des données personnelles.",
  },
  {
    question: "Combien de temps prend la mise en place ?",
    answer: "La configuration initiale prend généralement entre 24 et 72 heures selon la taille de votre école. Je vous accompagne personnellement pour créer votre compte, importer vos données et vous former. Vous pouvez commencer à utiliser la plateforme très rapidement.",
  },
  {
    question: "Puis-je changer de plan à tout moment ?",
    answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Le changement prend effet immédiatement et la facturation est ajustée au prorata.",
  },
  {
    question: "Proposez-vous une formation ?",
    answer: "Oui, une formation en visio ou WhatsApp est incluse. Je vous forme personnellement à l'utilisation de la plateforme et reste disponible pour répondre à toutes vos questions.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les paiements par Mobile Money (Orange Money, MTN Money, Wave), virement bancaire et carte bancaire. La facturation peut être mensuelle ou annuelle (avec 2 mois offerts).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#F97316]/10 text-[#F97316] font-medium rounded-full text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-[#1E3A5F]/70">
            Tout ce que vous devez savoir sur Niqo Education
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-gray-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#F8FAFC] transition-colors"
              >
                <span className="font-semibold text-[#1E3A5F] pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#22C55E] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#1E3A5F]/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center p-8 bg-[#F8FAFC] rounded-2xl"
        >
          <MessageCircle className="w-12 h-12 text-[#22C55E] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
            Vous avez d&apos;autres questions ?
          </h3>
          <p className="text-[#1E3A5F]/60 mb-4">
            Je suis disponible pour vous répondre
          </p>
          <a
            href="https://wa.me/22500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-full transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Discuter sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
