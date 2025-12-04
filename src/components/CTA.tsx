"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { 
  Send, 
  CheckCircle2, 
  Loader2,
  User,
  Mail,
  Phone,
  Building2,
  Users,
  Sparkles,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Headphones
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  schoolName: z.string().min(2, "Le nom de l'école est requis"),
  studentCount: z.string().min(1, "Veuillez sélectionner une option"),
});

type FormData = z.infer<typeof formSchema>;

export default function CTA() {
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
    
    console.log("Envoi en cours avec:", {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      data
    });
    
    try {
      // EmailJS
      const result = await emailjs.send(
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
      
      console.log("EmailJS result:", result);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert("Une erreur est survenue. Veuillez réessayer ou nous contacter directement.");
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: Clock, text: "Démonstration personnalisée de 15 minutes" },
    { icon: Sparkles, text: "Mise en place gratuite de votre compte" },
    { icon: Shield, text: "3 mois d'essai pilote gratuit" },
    { icon: Headphones, text: "Accompagnement direct par le fondateur" },
  ];

  return (
    <section id="demo" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E] via-[#16A34A] to-[#15803D]">
        {/* Animated orbs */}
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F97316]/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-[#F97316]" />
              <span className="text-sm font-semibold text-white">Démo personnalisée en 5 minutes</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Votre école peut être{" "}
              <span className="relative inline-block">
                modernisée
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F97316] rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
              {" "}en moins d&apos;une journée
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Je peux vous faire une courte démo en direct sur WhatsApp. 
              Découvrez comment Niqo Education peut transformer votre établissement.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-lg">🚀</span>
              </div>
              <div>
                <p className="text-sm text-white font-medium">Programme pilote en cours</p>
                <p className="text-xs text-white/70">Places limitées pour 3 écoles</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/20 rounded-[2rem] blur-3xl scale-95" />
            
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-8"
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
                      Je vous contacterai dans les 24-48 heures pour planifier 
                      votre démonstration personnalisée.
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
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#22C55E] to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1E3A5F]">
                          Démo gratuite
                        </h3>
                        <p className="text-sm text-[#1E3A5F]/60">Remplissez le formulaire ci-dessous</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                          Nom complet
                        </label>
                        <div className="relative group">
                          <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-[#22C55E]' : 'text-gray-400'}`} />
                          <input
                            {...register("name")}
                            type="text"
                            placeholder="Votre nom"
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl focus:outline-none transition-all bg-[#F8FAFC] ${
                              errors.name 
                                ? "border-red-500 focus:border-red-500" 
                                : "border-transparent focus:border-[#22C55E] focus:bg-white"
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-2 flex items-center gap-1"
                          >
                            <span className="w-1 h-1 bg-red-500 rounded-full" />
                            {errors.name.message}
                          </motion.p>
                        )}
                      </div>

                      {/* Email & Phone Row */}
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

                      {/* School Name */}
                      <div>
                        <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                          Nom de l&apos;école
                        </label>
                        <div className="relative">
                          <Building2 className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'school' ? 'text-[#22C55E]' : 'text-gray-400'}`} />
                          <input
                            {...register("schoolName")}
                            type="text"
                            placeholder="École Les Étoiles"
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

                      {/* Student Count */}
                      <div>
                        <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                          Nombre d&apos;élèves
                        </label>
                        <div className="relative">
                          <Users className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'students' ? 'text-[#22C55E]' : 'text-gray-400'}`} />
                          <select
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
                            <option value="1-50">1 - 50 élèves</option>
                            <option value="51-100">51 - 100 élèves</option>
                            <option value="101-250">101 - 250 élèves</option>
                            <option value="251-500">251 - 500 élèves</option>
                            <option value="500+">Plus de 500 élèves</option>
                          </select>
                          <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90" />
                        </div>
                        {errors.studentCount && (
                          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-2">{errors.studentCount.message}</motion.p>
                        )}
                      </div>

                      {/* Submit Button */}
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
                            Demander ma démo gratuite
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </motion.button>

                      <p className="text-xs text-center text-[#1E3A5F]/50 mt-4">
                        En soumettant ce formulaire, vous acceptez d&apos;être contacté par Dominique Huang, fondateur de Niqo Education.
                        <br />Vos données sont protégées et ne seront jamais partagées.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
