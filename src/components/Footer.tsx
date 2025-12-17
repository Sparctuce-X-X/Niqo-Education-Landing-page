"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Mail, 
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Heart
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  product: {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#fonctionnalites" },
      { label: "Tarifs", href: "#tarifs" },
      { label: "FAQ", href: "#faq" },
      { label: "Démo", href: "#demo" },
    ],
  },
  company: {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  legal: {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
      { label: "CGU", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0F172A] to-[#0A0F1A] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#03cea4]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ca1551]/5 rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Restez informé des nouveautés
              </h3>
              <p className="text-white/60">
                Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#03cea4]/50 transition-colors w-full sm:w-80"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-[#03cea4] to-[#02b896] text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-[#03cea4]/30 transition-all flex items-center justify-center gap-2"
              >
                S&apos;inscrire
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a 
              href="#" 
              className="flex items-center gap-4 mb-6 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Image 
                  src="/images/Logo.png" 
                  alt="Niqo Education" 
                  width={144}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                  sizes="144px"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#03cea4] to-[#ca1551] rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity" />
              </div>
              <div>
                <span className="text-xs text-white/40 tracking-wider">GESTION SCOLAIRE</span>
              </div>
            </motion.a>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              La plateforme de gestion scolaire tout-en-un pour les écoles privées 
              en Afrique francophone. Simplifiez votre quotidien.
            </p>
            <div className="space-y-4">
              <motion.a 
                href="mailto:contact@niqo.education" 
                className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#22C55E]/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@niqo.education</span>
              </motion.a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-bold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a 
                      href={link.href}
                      className="text-white/60 hover:text-[#22C55E] transition-colors flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-[#22C55E] transition-colors" />
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm flex items-center gap-2">
              © {new Date().getFullYear()} Niqo Education.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#22C55E] hover:to-emerald-600 transition-all border border-white/10 hover:border-transparent hover:shadow-lg hover:shadow-green-500/20"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
