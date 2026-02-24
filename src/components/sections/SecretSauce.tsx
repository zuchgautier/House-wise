"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Sparkles, Wrench, BarChart3, Clock, Shield } from "lucide-react";
import {
    staggerContainer,
    fadeInUp,
    viewportOnce,
    SPRING_HOVER,
} from "@/lib/animations";

const benefits = [
    { icon: TrendingUp, title: "Prix dynamique", description: "Algorithme intelligent pour optimiser vos tarifs en temps réel." },
    { icon: Sparkles, title: "Ménage 5 étoiles", description: "Nettoyage standard hôtelier après chaque séjour." },
    { icon: Wrench, title: "Maintenance 24/7", description: "Intervention rapide pour tout problème technique." },
    { icon: BarChart3, title: "Transparence totale", description: "Rapports détaillés de vos revenus et performances." },
    { icon: Clock, title: "Réactivité garantie", description: "Réponse aux voyageurs en 15 minutes max." },
    { icon: Shield, title: "Protection complète", description: "Assurance et suivi de chaque réservation." },
];

export const SecretSauce = memo(function SecretSauce() {
    return (
        <section id="services" className="section-light section-spacing section-connector">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <span className="badge-subtle mb-6 inline-flex">Nos services</span>
                    <h2 className="text-section text-noir mb-6">
                        La différence <span className="text-gradient">HOUSEWISE</span>
                    </h2>
                    <p className="text-bleu-nuit/70 text-lg max-w-xl mx-auto font-light">
                        Une expertise locale combinée aux meilleures technologies.
                    </p>
                </motion.div>

                {/* Cards Grid - White floating cards on Beige */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.title}
                                className="glass-card p-8"
                                variants={fadeInUp}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={SPRING_HOVER}
                            >
                                {/* Icon in subtle gold circle */}
                                <div className="icon-circle mb-6">
                                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>

                                {/* Title - Pure black */}
                                <h3 className="text-xl font-semibold text-noir mb-3">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p className="text-bleu-nuit/70 leading-relaxed font-light">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
});
