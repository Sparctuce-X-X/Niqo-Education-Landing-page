"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Users, TrendingUp, School, MessageCircle, X, GraduationCap, Building2 } from "lucide-react";

const stats = [
  {
    value: "400M+",
    label: "Élèves en Afrique subsaharienne d'ici 2030",
    icon: Users,
    color: "from-[#F97316] to-[#EAB308]",
  },
  {
    value: "95%",
    label: "Des parents africains utilisent WhatsApp",
    icon: MessageCircle,
    color: "from-[#25D366] to-[#128C7E]",
  },
  {
    value: "70%",
    label: "Des écoles privées gèrent encore sur papier",
    icon: School,
    color: "from-[#22C55E] to-emerald-600",
  },
  {
    value: "2x",
    label: "Croissance des écoles privées en 10 ans",
    icon: TrendingUp,
    color: "from-[#1E3A5F] to-indigo-600",
  },
];

const targetCountries = [
  { 
    name: "Côte d'Ivoire", 
    flag: "🇨🇮",
    stats: {
      schools: "22 000+",
      students: "5.8 millions",
      privateSchools: "35%",
      funFact: "Le taux de scolarisation a doublé en 20 ans"
    }
  },
  { 
    name: "Sénégal", 
    flag: "🇸🇳",
    stats: {
      schools: "15 000+",
      students: "3.5 millions",
      privateSchools: "28%",
      funFact: "1ère destination éducative en Afrique de l'Ouest"
    }
  },
  { 
    name: "Cameroun", 
    flag: "🇨🇲",
    stats: {
      schools: "25 000+",
      students: "7 millions",
      privateSchools: "40%",
      funFact: "Système bilingue français-anglais unique en Afrique"
    }
  },
  { 
    name: "Congo-Brazzaville", 
    flag: "🇨🇬",
    stats: {
      schools: "3 500+",
      students: "1.2 million",
      privateSchools: "25%",
      funFact: "Taux d'alphabétisation parmi les plus élevés d'Afrique centrale"
    }
  },
  { 
    name: "RDC", 
    flag: "🇨🇩",
    stats: {
      schools: "51 000+",
      students: "19 millions",
      privateSchools: "70%",
      funFact: "Plus grand système éducatif francophone d'Afrique"
    }
  },
  { 
    name: "Rwanda", 
    flag: "🇷🇼",
    stats: {
      schools: "5 000+",
      students: "2.5 millions",
      privateSchools: "15%",
      funFact: "Leader africain de la digitalisation de l'éducation"
    }
  },
  { 
    name: "Gabon", 
    flag: "🇬🇦",
    stats: {
      schools: "2 000+",
      students: "450 000",
      privateSchools: "30%",
      funFact: "Taux de scolarisation de 95% au primaire"
    }
  },
  { 
    name: "Bénin", 
    flag: "🇧🇯",
    stats: {
      schools: "12 000+",
      students: "3 millions",
      privateSchools: "20%",
      funFact: "Gratuité scolaire depuis 2006"
    }
  },
  { 
    name: "Mali", 
    flag: "🇲🇱",
    stats: {
      schools: "13 000+",
      students: "3.8 millions",
      privateSchools: "25%",
      funFact: "Croissance de 8% par an des écoles privées"
    }
  },
  { 
    name: "Burkina Faso", 
    flag: "🇧🇫",
    stats: {
      schools: "16 000+",
      students: "4.5 millions",
      privateSchools: "22%",
      funFact: "Investissement éducatif de 20% du budget national"
    }
  },
];

export default function AfricaSection() {
  const [selectedCountry, setSelectedCountry] = useState<typeof targetCountries[0] | null>(null);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* African-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#1E3A5F] to-[#0F172A]" />
      
      {/* Kente-inspired pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="kente" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="30" height="30" fill="#F97316"/>
              <rect x="30" y="30" width="30" height="30" fill="#F97316"/>
              <rect x="30" width="30" height="30" fill="#22C55E"/>
              <rect y="30" width="30" height="30" fill="#22C55E"/>
              <rect x="10" y="10" width="10" height="10" fill="#EAB308"/>
              <rect x="40" y="40" width="10" height="10" fill="#EAB308"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kente)"/>
        </svg>
      </div>
      
      {/* Warm African glow - sunset colors */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#F97316]/20 via-[#EAB308]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#22C55E]/15 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#F97316]/20 to-[#EAB308]/20 backdrop-blur-sm rounded-full mb-6 border border-[#F97316]/20"
          >
            <Globe className="w-4 h-4 text-[#F97316]" />
            <span className="text-sm font-semibold text-white">Pourquoi l&apos;Afrique ?</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            L&apos;éducation en{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#F97316] via-[#EAB308] to-[#22C55E] bg-clip-text text-transparent">
                Afrique
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316] via-[#EAB308] to-[#22C55E] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
            {" "}explose
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Le continent africain connaît la plus forte croissance démographique scolaire au monde. 
            Les écoles privées se multiplient, mais les outils de gestion n&apos;ont pas suivi.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F97316]/20 to-[#22C55E]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Africa needs digital tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Problems */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">📚</span>
                Les défis des écoles africaines
              </h3>
              <ul className="space-y-4">
                {[
                  "Gestion administrative encore sur papier ou Excel",
                  "Communication difficile avec les parents",
                  "Suivi des paiements chronophage",
                  "Pas d'outils adaptés au contexte local",
                  "Connexion internet parfois instable",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <span className="text-[#F97316] mt-1">✗</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right - Solution */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                Pourquoi WhatsApp est la solution
              </h3>
              <ul className="space-y-4">
                {[
                  "95% des parents l'utilisent déjà quotidiennement",
                  "Fonctionne même avec une connexion faible",
                  "Pas besoin d'installer une nouvelle app",
                  "Messages lus en moins de 3 minutes en moyenne",
                  "Gratuit pour les parents (pas de data supplémentaire)",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <span className="text-[#22C55E] mt-1">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Target Countries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white/50 text-sm mb-6 uppercase tracking-wider">
            Pays cibles en Afrique francophone
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {targetCountries.map((country, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCountry(country)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-[#F97316]/30 hover:bg-white/10 transition-all cursor-pointer"
              >
                <span className="text-xl">{country.flag}</span>
                <span className="text-white/80 text-sm font-medium">{country.name}</span>
              </motion.button>
            ))}
          </div>
          <p className="text-white/40 text-xs mt-4">Cliquez sur un pays pour voir les statistiques</p>
        </motion.div>

        {/* Country Stats Modal */}
        <AnimatePresence>
          {selectedCountry && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCountry(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-gradient-to-br from-[#1E3A5F] to-[#0F172A] rounded-3xl p-8 max-w-md w-full border border-white/10 shadow-2xl"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedCountry(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                  <span className="text-6xl mb-4 block">{selectedCountry.flag}</span>
                  <h3 className="text-2xl font-bold text-white">{selectedCountry.name}</h3>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <School className="w-6 h-6 text-[#F97316] mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{selectedCountry.stats.schools}</div>
                    <div className="text-xs text-white/60">Écoles</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <GraduationCap className="w-6 h-6 text-[#22C55E] mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{selectedCountry.stats.students}</div>
                    <div className="text-xs text-white/60">Élèves</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center col-span-2">
                    <Building2 className="w-6 h-6 text-[#EAB308] mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{selectedCountry.stats.privateSchools}</div>
                    <div className="text-xs text-white/60">Écoles privées</div>
                  </div>
                </div>

                {/* Fun Fact */}
                <div className="bg-gradient-to-r from-[#F97316]/20 to-[#EAB308]/20 rounded-xl p-4 border border-[#F97316]/20">
                  <p className="text-sm text-white/90 text-center">
                    <span className="text-lg mr-2">💡</span>
                    {selectedCountry.stats.funFact}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* African illustration - Silhouettes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center items-end gap-2"
        >
          {/* Stylized African children silhouettes */}
          <div className="flex items-end gap-1 opacity-20">
            {[40, 35, 45, 30, 38, 42, 33].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                className="w-4 bg-gradient-to-t from-[#F97316] to-[#EAB308] rounded-t-full"
                style={{ height }}
              />
            ))}
          </div>
          <div className="text-6xl opacity-30">🌍</div>
          <div className="flex items-end gap-1 opacity-20">
            {[38, 42, 30, 45, 35, 40, 36].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                className="w-4 bg-gradient-to-t from-[#22C55E] to-emerald-400 rounded-t-full"
                style={{ height }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
