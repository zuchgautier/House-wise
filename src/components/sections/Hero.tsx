"use client";

import { memo, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { TrustBadges } from "@/components/ui/TrustBadges";

import {
    staggerSlow,
    blurReveal,
    SPRING_BOUNCY,
    EASE_OUT_EXPO,
} from "@/lib/animations";

const rotatingPhrases = [
    "Tranquillité et sérénité des propriétaires",
    "Transparence",
    "Optimisation des revenus",
];

const TextRotator = memo(function TextRotator() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-[80px]">
            <AnimatePresence mode="wait">
                <motion.h2
                    key={currentIndex}
                    className="text-2xl md:text-3xl lg:text-4xl font-normal text-center px-4"
                    style={{ color: "#FFFFFF" }}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                    transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                >
                    {rotatingPhrases[currentIndex]}
                </motion.h2>
            </AnimatePresence>
        </div>
    );
});

export const Hero = memo(function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const blur = useTransform(scrollYProgress, [0, 0.5], [0, 6]);

    const handleScrollDown = () => {
        const target = document.getElementById("services");
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section
            ref={ref}
            id="hero"
            className="section-hero min-h-screen flex items-center justify-center pt-20 pb-12 md:pt-24 md:pb-16 px-5 md:px-0"
        >
            {/* Ambient gold orbs */}
            <div className="ambient-orb w-96 h-96 -top-48 -right-48 opacity-30" />
            <div className="ambient-orb w-64 h-64 bottom-20 -left-32 opacity-20" style={{ animationDelay: "2s" }} />

            {/* Content */}
            <motion.div
                className="section-container relative z-10 text-center gpu-layer"
                style={{
                    y,
                    opacity,
                    scale,
                }}
            >
                <motion.div
                    style={{ filter: useTransform(blur, (v) => `blur(${v}px)`) }}
                >
                    <motion.div
                        className="max-w-4xl mx-auto"
                        variants={staggerSlow}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Subtle Badge - Above H1 */}
                        <motion.div variants={blurReveal} className="mb-8">
                            <span className="badge-subtle">
                                Conciergerie Premium à Casablanca
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1 variants={blurReveal} className="text-display mb-8">
                            <span style={{ color: "#FFFFFF" }}>Votre bien,{" "}</span>
                            <span className="block" style={{ color: "#FFFFFF" }}>
                                notre expertise,
                            </span>
                            <span className="text-gradient">votre liberté.</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={blurReveal}
                            className="text-base md:text-xl text-blanc/70 max-w-2xl mx-auto mb-6 leading-relaxed font-light px-2"
                        >
                            Déléguez la gestion de votre bien à des experts. Maximisez vos
                            revenus locatifs sans aucun effort.
                        </motion.p>

                        {/* Geographic Expertise */}
                        <motion.p
                            variants={blurReveal}
                            className="text-sm text-dore/80 mb-12 font-medium tracking-wide"
                        >
                            Expertise dédiée : Gauthier, Racine, Anfa, Ain Diab et Californie
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={blurReveal}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link href="#contact">
                                <motion.button
                                    className="btn-gold"
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={SPRING_BOUNCY}
                                >
                                    Estimer mes revenus
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                            </Link>
                            <Link href="#packs">
                                <motion.button
                                    className="btn-outline"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={SPRING_BOUNCY}
                                >
                                    Découvrir nos packs
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Text Rotator */}
                        <motion.div
                            variants={blurReveal}
                            className="mt-14 pt-8 border-t border-blanc/10"
                        >
                            <TextRotator />
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div variants={blurReveal} className="mt-8">
                            <TrustBadges />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8, ease: EASE_OUT_EXPO }}
                onClick={handleScrollDown}
            >
                <span className="text-blanc/40 text-xs font-medium tracking-wider uppercase">
                    Découvrir
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-blanc/50" />
                </motion.div>
            </motion.div>
        </section>
    );
});
