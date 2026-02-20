"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { 
  Gift, 
  Users, 
  MessageCircle, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Star,
  User,
  Mail,
  Phone,
  Building2,
  Loader2
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  schoolName: z.string().min(2, "Le nom de l'organisation est requis"),
  studentCount: z.string().min(1, "Veuillez sélectionner une option"),
});

type FormData = z.infer<typeof formSchema>;

const benefits = [
  {
    icon: Gift,
    title: "Analyse de vos besoins",
    description: "Cadrage de vos priorités pour proposer une solution adaptée",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description: "Configuration et formation en visio par le fondateur",
  },
  {
    icon: MessageCircle,
    title: "Support WhatsApp direct",
    description: "Assistance prioritaire avec le fondateur lui-même",
  },
  {
    icon: Star,
    title: "Déploiement progressif",
    description: "Mise en place étape par étape selon votre organisation",
  },
];

export default function PilotProgram() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          school_name: data.schoolName,
          student_count: data.studentCount,
          to_email: "contact@niqo.education",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert("Une erreur est survenue. Veuillez réessayer ou nous contacter directement.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-[#22C55E] via-[#16A34A] to-[#15803D] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">Contact & accompagnement</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Parlons de{" "}
            <span className="relative inline-block">
              votre projet
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-white/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Décrivez votre besoin en CRM, digitalisation de processus ou accompagnement sur mesure.
            Nous revenons vers vous avec une approche claire et un plan de mise en place.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Formulaire de candidature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#22C55E]/10 rounded-bl-full" />
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-8 relative z-10"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#22C55E] to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
                  >
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">
                    Merci pour votre demande !
                  </h3>
                  <p className="text-[#1E3A5F]/60 mb-6">
                    Je vous contacterai dans les 24-48 heures pour discuter de votre besoin.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#22C55E] font-semibold hover:underline flex items-center gap-2 mx-auto"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Soumettre une autre demande
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#22C55E] to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1E3A5F]">
                        Demander un devis
                      </h3>
                      <p className="text-sm text-[#1E3A5F]/60">Remplissez le formulaire ci-dessous</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                        Nom complet
                      </label>
                      <div className="relative">
                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-[#22C55E]' : 'text-gray-400'}`} />
                        <input
                          {...register("name")}
                          type="text"
                          placeholder="Votre nom"
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none transition-all bg-[#F8FAFC] ${
                            errors.name 
                              ? "border-red-500" 
                              : "border-transparent focus:border-[#22C55E] focus:bg-white"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-2">{errors.name.message}</motion.p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-[#22C55E]' : 'text-gray-400'}`} />
                          <input
                            {...register("email")}
                            type="email"
                            placeholder="votre@email.com"
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none transition-all bg-[#F8FAFC] ${
                              errors.email 
                                ? "border-red-500" 
                                : "border-transparent focus:border-[#22C55E] focus:bg-white"
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-2">{errors.email.message}</motion.p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                          Téléphone
                        </label>
                        <div className="relative">
                          <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'phone' ? 'text-[#22C55E]' : 'text-gray-400'}`} />
                          <input
                            {...register("phone")}
                            type="tel"
                            placeholder="+225 00 00 00 00"
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none transition-all bg-[#F8FAFC] ${
                              errors.phone 
                                ? "border-red-500" 
                                : "border-transparent focus:border-[#22C55E] focus:bg-white"
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-2">{errors.phone.message}</motion.p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                        Nom de l&apos;organisation
                      </label>
                      <div className="relative">
                        <Building2 className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'school' ? 'text-[#22C55E]' : 'text-gray-400'}`} />
                        <input
                          {...register("schoolName")}
                          type="text"
                          placeholder="Niqo Services"
                          onFocus={() => setFocusedField('school')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none transition-all bg-[#F8FAFC] ${
                            errors.schoolName 
                              ? "border-red-500" 
                              : "border-transparent focus:border-[#22C55E] focus:bg-white"
                          }`}
                        />
                      </div>
                      {errors.schoolName && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-2">{errors.schoolName.message}</motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="studentCount" className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                        Taille de votre structure
                      </label>
                      <div className="relative">
                        <Users className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'students' ? 'text-[#22C55E]' : 'text-gray-400'}`} />
                        <select
                          id="studentCount"
                          {...register("studentCount")}
                          onFocus={() => setFocusedField('students')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none transition-all appearance-none bg-[#F8FAFC] cursor-pointer ${
                            errors.studentCount 
                              ? "border-red-500" 
                              : "border-transparent focus:border-[#22C55E] focus:bg-white"
                          }`}
                        >
                          <option value="">Sélectionnez...</option>
                          <option value="1-10">1 - 10 personnes</option>
                          <option value="11-50">11 - 50 personnes</option>
                          <option value="51-100">51 - 100 personnes</option>
                          <option value="101-250">101 - 250 personnes</option>
                          <option value="250+">Plus de 250 personnes</option>
                        </select>
                        <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90" />
                      </div>
                      {errors.studentCount && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-2">{errors.studentCount.message}</motion.p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#22C55E] to-emerald-500 hover:from-[#16A34A] hover:to-emerald-600 text-white font-bold text-lg rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-center text-[#1E3A5F]/50 mt-4">
                      En soumettant ce formulaire, vous acceptez d&apos;être contacté par Dominique Huang.
                      <br />Vos données sont protégées et ne seront jamais partagées.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-white/80">
              Réponse rapide • Accompagnement sur mesure
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
