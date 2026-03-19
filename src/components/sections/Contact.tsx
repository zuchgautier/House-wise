"use client";

import { memo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
    Send,
    User,
    Mail,
    Phone,
    Home,
    MessageSquare,
    CheckCircle,
    Loader2,
} from "lucide-react";
import {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerFast,
    viewportOnce,
    SPRING_BOUNCY,
    EASE_OUT_EXPO,
    scaleIn,
} from "@/lib/animations";

export const Contact = memo(function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();
            setIsSubmitting(true);
            setError("");

            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formState),
                });

                if (!response.ok) {
                    throw new Error("Erreur lors de l'envoi");
                }

                setIsSubmitted(true);
            } catch {
                setError("Une erreur est survenue. Veuillez réessayer.");
            } finally {
                setIsSubmitting(false);
            }
        },
        [formState]
    );

    const handleChange = useCallback(
        (
            e: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            >
        ) => {
            setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        },
        []
    );

    const inputClasses =
        "w-full px-5 py-4 rounded-2xl bg-blanc border border-noir/10 focus:border-dore focus:ring-2 focus:ring-dore/20 transition-all duration-300 text-noir placeholder:text-bleu-nuit/50 font-light shadow-sm focus:shadow-md focus:translate-y-[-1px]";

    return (
        <section
            id="contact"
            className="section-light section-spacing mb-16 md:mb-24 lg:mb-32 relative"
        >
            {/* Ambient decoration */}
            <div className="ambient-orb w-80 h-80 -top-40 left-1/3 opacity-15" />

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
                    {/* Left */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <span className="badge-subtle mb-6 inline-flex">
                            Contactez-nous
                        </span>
                        <h2 className="text-section text-noir mb-8">
                            Prêt à <span className="text-gradient">maximiser</span> vos
                            revenus ?
                        </h2>
                        <p className="text-bleu-nuit/70 text-lg mb-10 leading-relaxed font-light">
                            Remplissez ce formulaire et recevez une estimation gratuite sous
                            24h.
                            <span className="font-medium text-noir"> Sans engagement.</span>
                        </p>
                        <motion.ul
                            className="space-y-4"
                            variants={staggerFast}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOnce}
                        >
                            {[
                                "Estimation personnalisée",
                                "Réponse sous 24h",
                                "Premier appel sans engagement",
                            ].map((b) => (
                                <motion.li
                                    key={b}
                                    className="flex items-center gap-3"
                                    variants={fadeInUp}
                                >
                                    <CheckCircle className="w-5 h-5 text-dore flex-shrink-0" />
                                    <span className="text-noir font-medium">{b}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Form Card */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <div className="glass-card p-6 md:p-8 lg:p-10">
                            {isSubmitted ? (
                                <motion.div
                                    className="text-center py-8"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                                >
                                    <motion.div
                                        className="w-16 h-16 rounded-full bg-dore/10 flex items-center justify-center mx-auto mb-6"
                                        variants={scaleIn}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <CheckCircle className="w-8 h-8 text-dore" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold mb-2 text-noir">
                                        Merci !
                                    </h3>
                                    <p className="text-bleu-nuit/70">
                                        Votre demande a bien été envoyée. Nous vous recontacterons
                                        sous 24h.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {error && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                                            {error}
                                        </div>
                                    )}
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dore" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            placeholder="Votre nom"
                                            required
                                            className={`${inputClasses} pl-12`}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dore" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            required
                                            className={`${inputClasses} pl-12`}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dore" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formState.phone}
                                            onChange={handleChange}
                                            placeholder="+212..."
                                            className={`${inputClasses} pl-12`}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dore" />
                                        <select
                                            name="propertyType"
                                            value={formState.propertyType}
                                            onChange={handleChange}
                                            className={`${inputClasses} pl-12 appearance-none cursor-pointer`}
                                        >
                                            <option value="">Type de bien</option>
                                            <option value="studio">Studio</option>
                                            <option value="t2">T2</option>
                                            <option value="t3">T3+</option>
                                            <option value="villa">Villa</option>
                                        </select>
                                    </div>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-dore" />
                                        <textarea
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            placeholder="Votre message..."
                                            rows={4}
                                            className={`${inputClasses} pl-12 resize-none`}
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        className="btn-gold w-full"
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={SPRING_BOUNCY}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" /> Envoi...
                                            </>
                                        ) : (
                                            <>
                                                Envoyer <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});
