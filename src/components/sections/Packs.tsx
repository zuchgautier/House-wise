"use client";

import { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Zap, Shield, Crown, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import {
    fadeInUp,
    viewportOnce,
    SPRING_HOVER,
    LUXURY_EASE,
} from "@/lib/animations";

// Feature types
type FeatureType = {
    text: string;
    style: "normal" | "muted" | "gold";
    icon: "check" | "plus";
};

const packs = [
    {
        id: "digital",
        name: "Digital",
        rate: "8",
        description: "Pour les propriétaires autonomes sur place.",
        icon: Zap,
        popular: false,
        features: [
            { text: "Diffusion & Visibilité Maximale", style: "normal", icon: "check" },
            { text: "Communication Voyageurs 7j/7", style: "normal", icon: "check" },
            { text: "Stratégie de Revenus (Pricing Dynamique)", style: "normal", icon: "check" },
            { text: "Guide Digital Personnalisé", style: "normal", icon: "check" },
        ] as FeatureType[],
    },
    {
        id: "essential",
        name: "Essential",
        rate: "15",
        description: "La gestion complète, sans tracas.",
        icon: Shield,
        popular: false,
        features: [
            { text: "Tout le Pack Digital inclus", style: "muted", icon: "plus" },
            { text: "Gestion Opérationnelle Complète", style: "normal", icon: "check" },
            { text: "Maintenance & Réapprovisionnement", style: "normal", icon: "check" },
        ] as FeatureType[],
    },
    {
        id: "serenite",
        name: "Sérénité",
        subtitle: "All-Inclusive",
        rate: "20",
        description: "Service premium. Zéro gestion, Zéro tracas.",
        badge: "LE CHOIX DES INVESTISSEURS",
        icon: Crown,
        popular: true,
        features: [
            { text: "Tout le Pack Essential inclus", style: "muted", icon: "plus" },
            { text: "Services VIP & Photos Pro", style: "gold", icon: "check" },
            { text: "Guide Digital Personnalisé", style: "normal", icon: "check" },
            { text: "Support Prioritaire & Conseil Stratégique", style: "normal", icon: "check" },
        ] as FeatureType[],
    },
];

// Modal detailed content
const modalContent = {
    digital: {
        tagline: "Pour maximiser la visibilité sans gérer l'opérationnel.",
        items: [
            "Création d'annonce optimisée (SEO, rédaction, visuels)",
            "Synchronisation multi-plateformes (Airbnb, Booking...)",
            "Tarification intelligente pour maximiser vos revenus",
            "Réponses rapides et personnalisées 7j/7",
            "Guide digital : accès, équipements, vidéos, restaurants, activités",
            "Compte rendu mensuel des performances",
        ],
    },
    essential: {
        tagline: "La gestion opérationnelle déléguée, transparence totale.",
        items: [
            "Tout le Pack Digital inclus",
            "Ménage professionnel coordonné",
            "Gestion du linge (blanchisserie et mise en place)",
            "Installation boîte à clés et check-in/out",
            "Suivi qualité et gestion des consommables",
            "Réapprovisionnement régulier",
            "Compte rendu mensuel détaillé",
        ],
    },
    serenite: {
        tagline: "Service clé en main haut de gamme. Zéro charge mentale.",
        items: [
            "Tous les services du Pack Essential inclus",
            "Photos professionnelles incluses",
            "Support prioritaire propriétaire",
            "Conseil en stratégie locative",
            "Optimisation avancée du pricing (PriceLabs + analyse concurrentielle)",
            "Création d'un guide digital personnalisé voyageurs",
            "Suivi qualité renforcé (contrôle ménage, maintenance)",
            "Optimisation mensuelle de l'annonce",
        ],
    },
};

export const Packs = memo(function Packs() {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"digital" | "essential" | "serenite">("digital");

    const openModal = useCallback((packId: string) => {
        setActiveTab(packId as "digital" | "essential" | "serenite");
        setModalOpen(true);
    }, []);

    const closeModal = useCallback(() => setModalOpen(false), []);

    const currentModalData = modalContent[activeTab];
    const currentPack = packs.find(p => p.id === activeTab)!;

    return (
        <>
            <section id="packs" className="relative py-16 lg:py-20 pb-0 overflow-hidden">
                {/* Dark Background with Ambient Glow */}
                <div className="absolute inset-0 bg-bleu-nuit" />

                {/* Ambient Light Gradient */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30, 50, 100, 0.5) 0%, transparent 70%)'
                    }}
                />

                {/* Secondary Glow for depth */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: 'radial-gradient(ellipse 50% 50% at 70% 60%, rgba(198, 166, 103, 0.15) 0%, transparent 60%)'
                    }}
                />

                <div className="section-container relative z-10">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-10 lg:mb-12"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-dore text-sm font-medium tracking-wider uppercase mb-4">
                            Nos Offres
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" style={{ letterSpacing: '-0.03em', color: '#FFFFFF' }}>
                            Choisissez votre niveau de <span className="text-gradient">sérénité</span>
                        </h2>
                        <p className="text-white/50 text-lg max-w-lg mx-auto font-light">
                            Commission uniquement sur les revenus générés. Pas de frais fixes.
                        </p>
                    </motion.div>

                    {/* Packs Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
                        {packs.map((pack, index) => {
                            const Icon = pack.icon;
                            const isPopular = pack.popular;

                            return (
                                <motion.div
                                    key={pack.id}
                                    className={`relative ${isPopular ? "lg:scale-105 z-10" : "z-0"}`}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={viewportOnce}
                                    transition={{ delay: index * 0.15, duration: 0.7, ease: LUXURY_EASE }}
                                >
                                    {/* Popular Badge */}
                                    {isPopular && (
                                        <motion.div
                                            className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-dore to-dore-light text-bleu-nuit text-xs font-bold uppercase tracking-widest shadow-xl whitespace-nowrap">
                                                Recommandé
                                            </span>
                                        </motion.div>
                                    )}

                                    {/* Glass Card */}
                                    <motion.div
                                        className={`
                                            relative h-full p-5 md:p-6 lg:p-8 rounded-3xl
                                            backdrop-blur-3xl gpu-layer
                                            ${isPopular
                                                ? "bg-white/[0.08]"
                                                : "bg-white/[0.04]"
                                            }
                                            shadow-2xl
                                        `}
                                        style={{
                                            boxShadow: isPopular
                                                ? '0 25px 80px -20px rgba(0,0,0,0.5), 0 0 60px -10px rgba(198, 166, 103, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
                                                : '0 25px 60px -20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                                        }}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        transition={SPRING_HOVER}
                                    >
                                        {/* Gradient Border */}
                                        <div
                                            className="absolute inset-0 rounded-3xl pointer-events-none"
                                            style={{
                                                padding: '1px',
                                                background: isPopular
                                                    ? 'linear-gradient(135deg, rgba(198, 166, 103, 0.6) 0%, rgba(198, 166, 103, 0.1) 50%, rgba(198, 166, 103, 0.4) 100%)'
                                                    : 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.08) 100%)',
                                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                WebkitMaskComposite: 'xor',
                                                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                maskComposite: 'exclude',
                                            }}
                                        />

                                        {/* Inner Glow for Popular */}
                                        {isPopular && (
                                            <div
                                                className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none"
                                                style={{
                                                    background: 'radial-gradient(ellipse at 50% 0%, rgba(198, 166, 103, 0.3) 0%, transparent 60%)'
                                                }}
                                            />
                                        )}

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Badge for Sérénité */}
                                            {pack.badge && (
                                                <div className="mb-6">
                                                    <span className="text-xs font-semibold text-dore tracking-widest uppercase flex items-center gap-2">
                                                        <span className="text-sm">⭐</span> {pack.badge}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Icon & Name */}
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`
                                                    w-12 h-12 rounded-2xl flex items-center justify-center
                                                    ${isPopular
                                                        ? "bg-dore/20 border border-dore/30"
                                                        : "bg-white/10 border border-white/10"
                                                    }
                                                `}>
                                                    <Icon className={`w-6 h-6 ${isPopular ? "text-dore" : "text-white/70"}`} strokeWidth={1.5} />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>{pack.name}</h3>
                                                    {pack.subtitle && (
                                                        <span className="text-sm text-dore font-medium">{pack.subtitle}</span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Giant Rate */}
                                            <div className="mb-6">
                                                <span
                                                    className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${isPopular ? "text-dore" : "text-white"}`}
                                                    style={{ lineHeight: 1 }}
                                                >
                                                    {pack.rate}
                                                </span>
                                                <span className="text-2xl text-white/40 ml-1">%</span>
                                                <span className="text-white/40 ml-3 text-sm uppercase tracking-wider">TTC</span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-white/50 text-sm mb-8 font-light leading-relaxed">{pack.description}</p>

                                            {/* Features */}
                                            <ul className="space-y-3 mb-8">
                                                {pack.features.map((feature) => (
                                                    <li key={feature.text} className="flex items-start gap-4">
                                                        <div className={`
                                                            w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                                                            ${feature.style === "gold"
                                                                ? "bg-dore/30 shadow-lg shadow-dore/20"
                                                                : feature.style === "muted"
                                                                    ? "bg-white/10"
                                                                    : "bg-dore/20"
                                                            }
                                                        `}>
                                                            {feature.icon === "plus" ? (
                                                                <Plus className="w-3 h-3 text-white/50" strokeWidth={3} />
                                                            ) : (
                                                                <Check className={`w-3 h-3 text-dore`} strokeWidth={3} />
                                                            )}
                                                        </div>
                                                        <span className={`
                                                            text-sm leading-relaxed
                                                            ${feature.style === "gold"
                                                                ? "text-dore font-semibold"
                                                                : feature.style === "muted"
                                                                    ? "text-white/40 italic"
                                                                    : "text-white/70"
                                                            }
                                                        `}>
                                                            {feature.text}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* CTA Button */}
                                            <motion.button
                                                onClick={() => openModal(pack.id)}
                                                className={`
                                                    w-full py-4 rounded-full font-semibold text-sm tracking-wide
                                                    flex items-center justify-center gap-2
                                                    ${isPopular
                                                        ? "bg-gradient-to-r from-dore to-dore-light text-bleu-nuit shadow-lg shadow-dore/30"
                                                        : "bg-white/10 text-white border border-white/20"
                                                    }
                                                `}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                transition={SPRING_HOVER}
                                            >
                                                Voir le détail
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Footer Note */}
                    <motion.p
                        className="text-center text-white/30 text-sm mt-16 font-light tracking-wide"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        Sans engagement de durée. TVA en vigueur applicable.
                    </motion.p>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence mode="wait">
                {modalOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: LUXURY_EASE }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-bleu-nuit/80 backdrop-blur-md"
                            onClick={closeModal}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: LUXURY_EASE }}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-3xl gpu-layer"
                            initial={{ scale: 0.92, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.5,
                                ease: LUXURY_EASE,
                                opacity: { duration: 0.3 }
                            }}
                        >
                            {/* Glass Background */}
                            <div
                                className="absolute inset-0 bg-bleu-nuit/95 backdrop-blur-3xl"
                                style={{
                                    boxShadow: '0 25px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)'
                                }}
                            />

                            {/* Gradient Border */}
                            <div
                                className="absolute inset-0 rounded-3xl pointer-events-none"
                                style={{
                                    padding: '1px',
                                    background: 'linear-gradient(135deg, rgba(198, 166, 103, 0.4) 0%, rgba(198, 166, 103, 0.1) 50%, rgba(198, 166, 103, 0.3) 100%)',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    maskComposite: 'exclude',
                                }}
                            />

                            {/* Inner Glow */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(ellipse at 50% 0%, rgba(198, 166, 103, 0.3) 0%, transparent 60%)'
                                }}
                            />

                            {/* Content Container */}
                            <div className="relative z-10 p-6 md:p-8">
                                {/* Close Button */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-20 border border-white/20"
                                >
                                    <X className="w-4 h-4" />
                                </button>

                                {/* Tabs */}
                                <motion.div
                                    className="flex gap-2 mb-8"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.15, ease: LUXURY_EASE }}
                                >
                                    {packs.map((pack, index) => {
                                        const Icon = pack.icon;
                                        const isActive = activeTab === pack.id;

                                        return (
                                            <motion.button
                                                key={pack.id}
                                                onClick={() => setActiveTab(pack.id as "digital" | "essential" | "serenite")}
                                                className={`
                                                    flex-1 py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors duration-300
                                                    ${isActive
                                                        ? "bg-dore/20 text-white border border-dore/30"
                                                        : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white/70"
                                                    }
                                                `}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.2 + index * 0.05, ease: LUXURY_EASE }}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Icon className="w-4 h-4" strokeWidth={2} />
                                                <span className="hidden sm:inline">{pack.name}</span>
                                                <span className="font-bold">{pack.rate}%</span>
                                            </motion.button>
                                        );
                                    })}
                                </motion.div>

                                {/* Scrollable Content */}
                                <div className="overflow-y-auto h-[50vh] pr-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -12 }}
                                            transition={{ duration: 0.35, ease: LUXURY_EASE }}
                                        >
                                            {/* Pack Header */}
                                            <motion.div
                                                className="mb-6"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                            >
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                    <span className="text-white">Pack {currentPack.name}</span>
                                                    <span className="text-dore ml-2">{currentPack.rate}%</span>
                                                </h3>
                                                <p className="text-dore/80 text-sm italic">
                                                    {currentModalData.tagline}
                                                </p>
                                            </motion.div>

                                            {/* Items List */}
                                            <ul className="space-y-4">
                                                {currentModalData.items.map((item, idx) => (
                                                    <motion.li
                                                        key={item}
                                                        className="flex items-start gap-4"
                                                        initial={{ opacity: 0, x: -8 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            duration: 0.35,
                                                            delay: 0.08 + idx * 0.04,
                                                            ease: LUXURY_EASE,
                                                        }}
                                                    >
                                                        <motion.div
                                                            className="w-6 h-6 rounded-full bg-dore/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                                                            initial={{ scale: 0.5, opacity: 0 }}
                                                            animate={{ scale: 1, opacity: 1 }}
                                                            transition={{
                                                                duration: 0.3,
                                                                delay: 0.12 + idx * 0.04,
                                                                ease: LUXURY_EASE,
                                                            }}
                                                        >
                                                            <Check className="w-3.5 h-3.5 text-dore" strokeWidth={3} />
                                                        </motion.div>
                                                        <span className="text-white/80 text-sm leading-relaxed">
                                                            {item}
                                                        </span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* CTA */}
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <Link href={`/?pack=${activeTab}#contact`} onClick={closeModal}>
                                        <motion.button
                                            className="w-full py-4 rounded-full font-semibold text-sm bg-gradient-to-r from-dore to-dore-light text-bleu-nuit shadow-lg shadow-dore/30 flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={SPRING_HOVER}
                                        >
                                            Choisir ce pack
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
});
