"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Check,
    Zap,
    Shield,
    Crown,
    ArrowLeft,
    ArrowRight,
    Sparkles,
    Calendar,
    MessageCircle,
    Key,
    Sparkle,
    Wrench,
    Phone,
    ShowerHead,
    Coffee,
    Package,
    X
} from "lucide-react";
import Link from "next/link";

// Pack data
const packsData = [
    {
        id: "digital",
        name: "Digital",
        rate: "8",
        tagline: "Pour les propriétaires autonomes sur place.",
        icon: Zap,
        description: "La visibilité maximale pour votre bien, sans vous soucier de la partie digitale.",
        inclusions: [
            {
                category: "Visibilité & Annonce",
                icon: Sparkles,
                items: [
                    "Création d'annonce professionnelle multi-plateformes",
                    "Photos optimisées et description SEO",
                    "Publication sur Airbnb, Booking.com, Expedia...",
                    "Mise à jour et optimisation continue"
                ]
            },
            {
                category: "Tarification Dynamique",
                icon: Calendar,
                items: [
                    "Tarification dynamique algorithmique",
                    "Analyse de la concurrence locale",
                    "Ajustement saisonnier automatique",
                    "Maximisation du taux d'occupation"
                ]
            },
            {
                category: "Gestion Voyageurs",
                icon: MessageCircle,
                items: [
                    "Sélection stricte des profils",
                    "Communication 24/7 avec les invités",
                    "Réponses en moins de 15 minutes",
                    "Gestion des avis et réputation"
                ]
            }
        ],
        notIncluded: [
            "Check-in / Check-out physiques",
            "Coordination ménage",
            "Gestion maintenance",
            "Linge de maison",
            "Consommables"
        ]
    },
    {
        id: "essential",
        name: "Essential",
        rate: "15",
        tagline: "La gestion complète, sans tracas.",
        icon: Shield,
        description: "Tout le digital, plus la gestion terrain. Vous n'avez plus rien à faire.",
        inclusions: [
            {
                category: "Tout le Pack Digital",
                icon: Zap,
                items: [
                    "Création & diffusion annonce",
                    "Tarification Dynamique avancée",
                    "Communication 24/7",
                    "Sélection des voyageurs"
                ]
            },
            {
                category: "Accueil Voyageurs",
                icon: Key,
                items: [
                    "Check-in physique personnalisé",
                    "Présentation du logement",
                    "Remise des clés sécurisée",
                    "Check-out et état des lieux"
                ]
            },
            {
                category: "Ménage & Entretien",
                icon: Sparkle,
                items: [
                    "Coordination équipe ménage pro",
                    "Nettoyage entre chaque séjour",
                    "Contrôle qualité systématique",
                    "Standards hôteliers"
                ]
            },
            {
                category: "Maintenance",
                icon: Wrench,
                items: [
                    "Gestion des interventions techniques",
                    "Réseau d'artisans qualifiés",
                    "Petites réparations incluses",
                    "Reporting transparent"
                ]
            },
            {
                category: "Support Dédié",
                icon: Phone,
                items: [
                    "Assistance technique dédiée",
                    "Ligne propriétaire prioritaire",
                    "Rapport mensuel détaillé"
                ]
            }
        ],
        notIncluded: [
            "Linge de maison (fourni par le propriétaire)",
            "Consommables (café, savon, kits...)"
        ]
    },
    {
        id: "serenite",
        name: "Sérénité",
        rate: "20",
        tagline: "All-Inclusive • Zéro gestion, Zéro frais cachés.",
        icon: Crown,
        popular: true,
        badge: "LE CHOIX DES INVESTISSEURS",
        description: "L'expérience hôtelière complète. La qualité premium pour vos invités, la tranquillité absolue pour vous.",
        inclusions: [
            {
                category: "Tout le Pack Essential",
                icon: Shield,
                items: [
                    "Gestion digitale complète",
                    "Check-in / Check-out physiques",
                    "Coordination ménage professionnel",
                    "Gestion maintenance",
                    "Assistance technique"
                ]
            },
            {
                category: "Linge Hôtelier FOURNI",
                icon: ShowerHead,
                highlight: true,
                items: [
                    "Draps haute qualité (coton égyptien)",
                    "Serviettes de bain moelleuses",
                    "Peignoirs & chaussons",
                    "Linge de table raffiné",
                    "Blanchisserie professionnelle incluse"
                ]
            },
            {
                category: "Consommables INCLUS",
                icon: Coffee,
                highlight: true,
                items: [
                    "Café, thé, sucre de qualité",
                    "Gel douche & shampoing premium",
                    "Savon, crème hydratante",
                    "Kits d'accueil complets",
                    "Produits ménagers écologiques"
                ]
            },
            {
                category: "Avantages Exclusifs",
                icon: Package,
                highlight: true,
                items: [
                    "Zéro avance de frais",
                    "Facturation simplifiée mensuelle",
                    "Interlocuteur dédié premium",
                    "Reporting analytique avancé"
                ]
            }
        ],
        notIncluded: []
    }
];

function DetailsOffresContent() {
    const searchParams = useSearchParams();

    // Initialize state from URL params directly
    const initialPack = searchParams.get("pack");
    const [activePack, setActivePack] = useState(() => {
        if (initialPack && packsData.some(p => p.id === initialPack)) {
            return initialPack;
        }
        return "serenite";
    });

    // Navigate to contact and scroll to section
    const handleChoosePack = (packId: string) => {
        window.location.href = `/?pack=${packId}#contact`;
    };

    const currentPack = packsData.find(p => p.id === activePack)!;
    const Icon = currentPack.icon;

    return (
        <div className="bg-beige min-h-screen">
            {/* Hero Section with background */}
            <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-bleu-nuit" />
                <div
                    className="absolute inset-0 opacity-25"
                    style={{
                        backgroundImage: 'url(/casablanca-bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 40%',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-bleu-nuit/50 via-bleu-nuit/70 to-bleu-nuit" />

                <div className="section-container relative z-10">
                    {/* Back link */}
                    <Link
                        href="/#packs"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6 sm:mb-8 md:mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Retour aux offres</span>
                    </Link>

                    {/* Title */}
                    <div className="text-center max-w-3xl mx-auto px-4">
                        <span className="inline-block px-4 sm:px-5 py-2 rounded-full bg-white/10 text-[#C6A667] text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-6 md:mb-8">
                            Détails des offres
                        </span>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6" style={{ letterSpacing: '-0.03em' }}>
                            <span className="text-white">Comparez nos</span> <span className="text-gradient">formules</span>
                        </h1>

                        <p className="text-white/60 text-base sm:text-lg font-light">
                            Découvrez en détail ce que chaque pack inclut.
                        </p>
                    </div>

                    {/* Pack Selector Tabs */}
                    <div className="flex justify-center mt-8 md:mt-12 px-4">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-2 rounded-2xl bg-white/10 backdrop-blur-sm w-full sm:w-auto">
                            {packsData.map((pack) => {
                                const PackIcon = pack.icon;
                                const isActive = activePack === pack.id;

                                return (
                                    <button
                                        key={pack.id}
                                        onClick={() => setActivePack(pack.id)}
                                        className={`
                                            px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl font-medium text-sm tracking-wide
                                            transition-all duration-300 flex items-center justify-center gap-2 sm:gap-2.5
                                            ${isActive
                                                ? 'bg-white text-bleu-nuit shadow-lg'
                                                : 'text-white/70 hover:text-white hover:bg-white/10'
                                            }
                                        `}
                                    >
                                        <PackIcon className="w-4 h-4" strokeWidth={2} />
                                        <span>{pack.name}</span>
                                        <span className={`text-xs font-bold ${isActive ? 'text-dore' : 'text-dore'}`}>
                                            {pack.rate}%
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section - BEIGE Background */}
            <section className="py-10 sm:py-14 md:py-20 bg-beige">
                <div className="section-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePack}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="max-w-6xl mx-auto"
                        >
                            {/* Pack Header Card - WHITE */}
                            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-14 shadow-lg mb-6 sm:mb-8 md:mb-10">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6 lg:gap-8">
                                    {/* Left: Icon & Info */}
                                    <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
                                        <div
                                            className={`
                                                w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0
                                                ${currentPack.popular
                                                    ? 'bg-gradient-to-br from-dore/20 to-dore/10 border-2 border-dore/30'
                                                    : 'bg-beige border-2 border-beige-warm'
                                                }
                                            `}
                                        >
                                            <Icon
                                                className={`w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 ${currentPack.popular ? 'text-dore' : 'text-bleu-nuit'}`}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            {currentPack.badge && (
                                                <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-dore tracking-[0.08em] sm:tracking-[0.1em] uppercase mb-1 sm:mb-2">
                                                    ⭐ {currentPack.badge}
                                                </span>
                                            )}
                                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bleu-nuit mb-1 sm:mb-2" style={{ letterSpacing: '-0.02em' }}>
                                                Pack {currentPack.name}
                                            </h2>
                                            <p className="text-bleu-nuit/50 text-sm sm:text-base">{currentPack.tagline}</p>
                                        </div>
                                    </div>

                                    {/* Right: Rate */}
                                    <div className="text-left lg:text-right mt-2 lg:mt-0">
                                        <div className="flex items-baseline gap-1 lg:justify-end">
                                            <span
                                                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${currentPack.popular ? 'text-dore' : 'text-bleu-nuit'}`}
                                            >
                                                {currentPack.rate}
                                            </span>
                                            <span className="text-xl sm:text-2xl text-bleu-nuit/40 font-light">%</span>
                                            <span className="text-bleu-nuit/40 text-xs sm:text-sm uppercase tracking-wider ml-1">TTC</span>
                                        </div>
                                        <p className="text-bleu-nuit/40 text-xs sm:text-sm mt-1 sm:mt-2">Commission sur revenus</p>
                                    </div>
                                </div>

                                <p className="text-bleu-nuit/60 text-sm sm:text-base mt-4 sm:mt-6 md:mt-8 max-w-2xl leading-relaxed">
                                    {currentPack.description}
                                </p>
                            </div>

                            {/* Inclusions Grid - WHITE Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 md:mb-10">
                                {currentPack.inclusions.map((category, idx) => {
                                    const CategoryIcon = category.icon;
                                    const isHighlight = 'highlight' in category && category.highlight;

                                    return (
                                        <motion.div
                                            key={category.category}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.08 }}
                                            className={`
                                                bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-md
                                                ${isHighlight ? 'ring-2 ring-dore/30' : ''}
                                            `}
                                        >
                                            {/* Category Header */}
                                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                                                <div
                                                    className={`
                                                        w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0
                                                        ${isHighlight
                                                            ? 'bg-gradient-to-br from-dore/20 to-dore/10'
                                                            : 'bg-beige'
                                                        }
                                                    `}
                                                >
                                                    <CategoryIcon
                                                        className={`w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 ${isHighlight ? 'text-dore' : 'text-bleu-nuit'}`}
                                                        strokeWidth={1.5}
                                                    />
                                                </div>
                                                <h3 className={`font-semibold text-base sm:text-lg ${isHighlight ? 'text-dore' : 'text-bleu-nuit'}`}>
                                                    {category.category}
                                                </h3>
                                            </div>

                                            {/* Items */}
                                            <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
                                                {category.items.map((item) => (
                                                    <li key={item} className="flex items-start gap-2.5 sm:gap-3 md:gap-4">
                                                        <div className={`
                                                            w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                                                            ${isHighlight ? 'bg-dore/20' : 'bg-beige'}
                                                        `}>
                                                            <Check
                                                                className={`w-3 h-3 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 ${isHighlight ? 'text-dore' : 'text-bleu-nuit'}`}
                                                                strokeWidth={3}
                                                            />
                                                        </div>
                                                        <span className="text-bleu-nuit/70 text-xs sm:text-sm leading-relaxed">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Not Included - if any */}
                            {currentPack.notIncluded.length > 0 && (
                                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-md mb-6 sm:mb-8 md:mb-10">
                                    <h4 className="text-xs sm:text-sm text-bleu-nuit/40 uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-3 sm:mb-4 md:mb-5 font-medium">
                                        Non inclus dans ce pack
                                    </h4>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {currentPack.notIncluded.map((item) => (
                                            <span
                                                key={item}
                                                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm bg-beige text-bleu-nuit/50"
                                            >
                                                <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="text-center pt-4 sm:pt-6">
                                <motion.button
                                    onClick={() => handleChoosePack(currentPack.id)}
                                    className="btn-gold text-sm sm:text-base px-8 sm:px-10 md:px-12 py-4 sm:py-5 w-full sm:w-auto"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Choisir ce pack
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </motion.button>

                                <p className="text-bleu-nuit/40 text-xs sm:text-sm mt-4 sm:mt-6">
                                    Une question ? <Link href="/#contact" className="text-dore hover:underline">Contactez-nous</Link>
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Bottom Note */}
            <section className="py-8 sm:py-10 md:py-12 bg-beige border-t border-bleu-nuit/5">
                <div className="section-container text-center px-4">
                    <p className="text-bleu-nuit/40 text-xs sm:text-sm font-light">
                        Commission prélevée uniquement sur les revenus générés. Sans engagement de durée.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default function DetailsOffresPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-beige" />}>
            <DetailsOffresContent />
        </Suspense>
    );
}
