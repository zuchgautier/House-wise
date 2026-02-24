"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
    staggerContainer,
    fadeInUp,
    viewportOnce,
    SPRING_HOVER,
} from "@/lib/animations";

const testimonials = [
    {
        name: "Karim B.",
        role: "Propriétaire d'un duplex à Racine",
        rating: 5,
        text: "Housewise a transformé mon appartement en une vraie source de revenus. Je gagne 40% de plus qu'avant et je n'ai plus rien à gérer !",
        avatar: "KB",
    },
    {
        name: "Sofia M.",
        role: "Investisseur à Anfa Supérieur",
        rating: 5,
        text: "Service impeccable, équipe réactive et professionnelle. Mes voyageurs sont ravis et moi aussi. Je recommande à 100% !",
        avatar: "SM",
    },
    {
        name: "Youssef A.",
        role: "Villa 4 chambres à Ain Diab",
        rating: 5,
        text: "Enfin une conciergerie qui comprend le marché casablancais. Transparence totale et revenus optimisés. Merci Housewise !",
        avatar: "YA",
    },
];

export const Testimonials = memo(function Testimonials() {
    return (
        <section className="section-light section-spacing">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <span className="badge-subtle mb-6 inline-flex">
                        <Star className="w-4 h-4" />
                        Témoignages
                    </span>
                    <h2 className="text-section text-noir mb-4">
                        Ce que disent nos{" "}
                        <span className="text-gradient">propriétaires</span>
                    </h2>
                    <p className="text-bleu-nuit/70 text-lg max-w-lg mx-auto font-light">
                        Découvrez les retours de ceux qui nous font confiance
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.name}
                            className="glass-card p-8 relative"
                            variants={fadeInUp}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={SPRING_HOVER}
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 right-8">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dore to-dore-light flex items-center justify-center shadow-lg">
                                    <Quote className="w-5 h-5 text-bleu-nuit" />
                                </div>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-dore text-dore" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-bleu-nuit/80 mb-6 leading-relaxed font-light italic">
                                &quot;{testimonial.text}&quot;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dore/20 to-dore/10 flex items-center justify-center border border-dore/20">
                                    <span className="text-dore font-semibold text-sm">
                                        {testimonial.avatar}
                                    </span>
                                </div>
                                <div>
                                    <div className="font-semibold text-noir">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-bleu-nuit/60">
                                        {testimonial.role}
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
