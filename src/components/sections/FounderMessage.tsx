"use client";

import { memo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    viewportOnce,
} from "@/lib/animations";

const ParallaxCard = memo(function ParallaxCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`perspective-1000 ${className}`}
        >
            <div
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className="h-full w-full"
            >
                {children}
            </div>
        </motion.div>
    );
});

export const FounderMessage = memo(function FounderMessage() {
    return (
        <section className="section-light section-spacing">
            <div className="section-container">
                <motion.div
                    className="glass-card p-8 md:p-12 lg:p-16"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Photos Portrait */}
                        <motion.div
                            className="relative grid grid-cols-2 gap-4 sm:gap-6"
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOnce}
                            style={{ perspective: 1000 }}
                        >
                            {/* Founder 1 */}
                            <ParallaxCard className="group relative aspect-[3/4] rounded-2xl bg-gradient-to-br from-bleu-nuit/5 to-dore/10 overflow-hidden border border-dore/10 hover:border-dore/30 transition-colors duration-500">
                                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                                <div className="absolute inset-0">
                                    <Image
                                        src="/founders/founder-1.png"
                                        alt="Fondateur Housewise"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bleu-nuit/80 to-transparent z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-xs font-medium uppercase tracking-wider text-center">
                                        GAUTIER
                                    </p>
                                </div>
                            </ParallaxCard>

                            {/* Founder 2 */}
                            <ParallaxCard className="group relative aspect-[3/4] rounded-2xl bg-gradient-to-br from-bleu-nuit/5 to-dore/10 overflow-hidden border border-dore/10 hover:border-dore/30 transition-colors duration-500 mt-8 sm:mt-12">
                                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                                <div className="absolute inset-0">
                                    <Image
                                        src="/founders/founder-2.png"
                                        alt="Co-Fondateur Housewise"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bleu-nuit/80 to-transparent z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-xs font-medium uppercase tracking-wider text-center">
                                        MEHDI
                                    </p>
                                </div>
                            </ParallaxCard>

                            {/* Decorative Element - Shared */}
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-dore/20 to-transparent rounded-full blur-3xl -z-10" />
                        </motion.div>

                        {/* Message Content */}
                        <motion.div
                            className="lg:pl-8"
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOnce}
                        >
                            <span className="badge-subtle mb-6 inline-flex">
                                Notre Engagement
                            </span>

                            <h2 className="text-2xl md:text-3xl font-semibold text-noir mb-6 leading-tight">
                                Nous ne gérons pas des locations,
                                <br />
                                <span className="text-gradient">
                                    nous valorisons votre patrimoine.
                                </span>
                            </h2>

                            <div className="space-y-4 text-bleu-nuit/70 leading-relaxed font-light mb-8">
                                <p>
                                    Pour nous, votre bien est un investissement stratégique. Nous
                                    le gérons avec une rigueur absolue pour maximiser votre
                                    rentabilité, en toute transparence.
                                </p>
                                <p>
                                    Notre secret ? Allier les standards de l&apos;hôtellerie de
                                    luxe à notre expertise locale de Casablanca. De Gauthier à Ain
                                    Diab, nous connaissons chaque quartier pour valoriser votre
                                    patrimoine et vous garantir une tranquillité d&apos;esprit
                                    totale.
                                </p>
                            </div>

                            {/* Signature */}
                            <div className="border-t border-dore/20 pt-6">
                                <svg
                                    viewBox="0 0 200 60"
                                    className="w-40 h-12 text-dore"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M10 45 Q25 20 40 35 T70 30 Q85 25 100 35 T130 28" />
                                    <path d="M90 40 Q100 45 115 40" />
                                    <path d="M140 25 Q155 20 165 35 Q175 45 190 40" />
                                </svg>
                                <p className="text-sm text-bleu-nuit/60 mt-2">
                                    <span className="font-semibold text-noir">
                                        L&apos;équipe Housewise
                                    </span>
                                    <br />
                                    Les Fondateurs
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
});
