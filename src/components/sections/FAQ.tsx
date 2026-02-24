"use client";

import { memo, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import {
    staggerContainer,
    fadeInUp,
    viewportOnce,
    LUXURY_EASE,
} from "@/lib/animations";

const faqs = [
    {
        q: "Suis-je obligé de louer mon logement tout le temps ?",
        a: "Pas du tout. Vous utilisez votre logement quand vous le souhaitez. Il vous suffit de bloquer vos dates sur le calendrier et nous ne prenons aucune réservation pendant vos séjours personnels.",
    },
    {
        q: "Comment optimisez-vous mes revenus locatifs ?",
        a: "Nous utilisons des outils de tarification dynamique qui ajustent vos prix chaque jour selon le marché (événements, saisonnalité). Nos clients gagnent en moyenne 30% de plus qu'en gérant seuls.",
    },
    {
        q: "Qui sélectionne les voyageurs ?",
        a: "Nous filtrons rigoureusement chaque profil : identité vérifiée, analyse des avis laissés par d'autres hôtes et motif du séjour. Votre tranquillité est notre priorité.",
    },
    {
        q: "Que se passe-t-il en cas de problème ou de panne ?",
        a: "Nous intervenons immédiatement. Pour les petites réparations, notre équipe technique gère tout. Pour le reste, nous vous consultons et assurons le suivi des assurances si nécessaire.",
    },
    {
        q: "M'accompagnez-vous pour la fiscalité ?",
        a: "Oui, nous vous fournissons un récapitulatif annuel de vos revenus et nous vous guidons vers les meilleures options pour optimiser votre fiscalité locative.",
    },
];

export const FAQ = memo(function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    const toggle = useCallback((index: number) => {
        setOpen((prev) => (prev === index ? null : index));
    }, []);

    return (
        <section id="faq" className="section-light section-spacing pt-10">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    className="text-center mb-10"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <span className="badge-subtle mb-6 inline-flex">
                        <HelpCircle className="w-4 h-4" />
                        FAQ
                    </span>
                    <h2 className="text-section text-noir">
                        Vos <span className="text-gradient">questions</span>
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    className="max-w-3xl mx-auto space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="glass-card overflow-hidden"
                            variants={fadeInUp}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full p-6 flex items-center justify-between gap-4 text-left"
                            >
                                <span className="font-semibold text-noir text-lg">
                                    {faq.q}
                                </span>
                                <motion.div
                                    animate={{ rotate: open === index ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: LUXURY_EASE }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown className="w-5 h-5 text-dore" />
                                </motion.div>
                            </button>

                            {/* GPU-friendly accordion using CSS grid-template-rows */}
                            <div
                                className="faq-content-wrapper"
                                data-open={open === index ? "true" : "false"}
                            >
                                <div className="faq-content-inner">
                                    <div className="px-6 pb-6">
                                        <div className="pt-4 border-t border-noir/5">
                                            <p className="text-bleu-nuit/85 leading-relaxed font-light">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
});
