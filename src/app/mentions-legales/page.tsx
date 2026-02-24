"use client";

import { useState, Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Shield, FileText, ArrowLeft, Copy, Check, Mail, Phone, Globe, Building2, User, MapPin } from "lucide-react";
import Link from "next/link";

// ⚠️ ACCÈS TEMPORAIREMENT BLOQUÉ - Mettre à false pour réactiver
const ACCESS_BLOCKED = false;

const tabs = [
    { id: "mentions", label: "Mentions Légales", icon: Scale },
    { id: "confidentialite", label: "Confidentialité", icon: Shield },
    { id: "cgu", label: "CGU", icon: FileText },
];

// Loading fallback
function LoadingFallback() {
    return (
        <div className="min-h-screen bg-[#0A1A33] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#C6A667] border-t-transparent rounded-full animate-spin" />
        </div>
    );
}

// Main export
export default function MentionsLegalesPage() {
    const router = useRouter();

    useEffect(() => {
        if (ACCESS_BLOCKED) {
            router.replace('/');
        }
    }, [router]);

    if (ACCESS_BLOCKED) {
        return <LoadingFallback />;
    }

    return (
        <Suspense fallback={<LoadingFallback />}>
            <MentionsLegalesContent />
        </Suspense>
    );
}

// Animated Background Orbs
function BackgroundOrbs() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Orb 1 - Top Right */}
            <motion.div
                className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(198, 166, 103, 0.15) 0%, transparent 70%)",
                }}
                animate={{
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Orb 2 - Bottom Left */}
            <motion.div
                className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(198, 166, 103, 0.1) 0%, transparent 70%)",
                }}
                animate={{
                    x: [0, -20, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Orb 3 - Center */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 60%)",
                }}
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}

// Copy Button Component
function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="ml-2 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
            title="Copier"
        >
            {copied ? (
                <Check className="w-3.5 h-3.5 text-green-400" />
            ) : (
                <Copy className="w-3.5 h-3.5 text-white/90 group-hover:text-white" />
            )}
        </button>
    );
}

// Main Content Component
function MentionsLegalesContent() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState(() => {
        const tabParam = searchParams.get("tab");
        return tabParam && tabs.some(t => t.id === tabParam) ? tabParam : "mentions";
    });

    return (
        <div className="min-h-screen bg-[#0A1A33] relative overflow-hidden">
            <BackgroundOrbs />

            {/* Main Content - uses global header from layout */}
            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Back Link - Discrete */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:text-white hover:bg-white/10 transition-all text-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="font-medium">Retour à l'accueil</span>
                        </Link>
                    </motion.div>

                    {/* Title - Cormorant Garamond Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center mb-12"
                    >
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                color: '#C6A667',
                            }}
                        >
                            Informations Légales
                        </h1>
                        <p className="text-white/90 text-sm tracking-widest uppercase">
                            Transparence & Conformité
                        </p>
                    </motion.div>

                    {/* Floating Pill Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center mb-10"
                    >
                        <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300"
                                >
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                                background: "linear-gradient(135deg, #C6A667 0%, #d4bc8a 100%)",
                                                boxShadow: "0 0 30px rgba(198, 166, 103, 0.4), 0 0 60px rgba(198, 166, 103, 0.2)",
                                            }}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${activeTab === tab.id ? "text-[#0A1A33]" : "text-white hover:text-white/90"
                                        }`}>
                                        <tab.icon className="w-4 h-4" />
                                        <span className="hidden sm:inline">{tab.label}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Glass Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative rounded-3xl overflow-hidden"
                        style={{
                            background: "rgba(255, 255, 255, 0.03)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 20px 50px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        {/* Inner glow top edge */}
                        <div
                            className="absolute top-0 left-0 right-0 h-px"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }}
                        />

                        <div className="p-8 md:p-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {activeTab === "mentions" && <MentionsSection />}
                                    {activeTab === "confidentialite" && <ConfidentialiteSection />}
                                    {activeTab === "cgu" && <CGUSection />}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 py-8 text-center">
                <p className="text-white/30 text-sm">
                    © {new Date().getFullYear()} HOUSEWISE. Tous droits réservés.
                </p>
            </footer>
        </div>
    );
}

/* ============================================
   BENTO CARD COMPONENT
   ============================================ */
function BentoCard({ children, className = "", span = 1 }: { children: React.ReactNode; className?: string; span?: 1 | 2 }) {
    return (
        <div
            className={`rounded-2xl p-5 ${span === 2 ? "md:col-span-2" : ""} ${className}`}
            style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
        >
            {children}
        </div>
    );
}

function CardHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(198, 166, 103, 0.15)" }}
            >
                <Icon className="w-5 h-5 text-[#C6A667]" />
            </div>
            <h3 className="font-semibold text-lg" style={{ color: "#FFFFFF" }}>{title}</h3>
        </div>
    );
}

function InfoRow({ label, value, copyable = false }: { label: string; value: string; copyable?: boolean }) {
    const isPlaceholder = value.startsWith("[") && value.endsWith("]");
    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 py-2 border-b border-white/5 last:border-0">
            <span className="text-white/90 text-sm min-w-[120px]">{label}</span>
            <div className="flex items-center">
                <span className={`text-sm ${isPlaceholder ? "text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded" : "text-white"}`}>
                    {value}
                </span>
                {copyable && !isPlaceholder && <CopyButton text={value} />}
            </div>
        </div>
    );
}

/* ============================================
   MENTIONS LÉGALES
   ============================================ */
function MentionsSection() {
    return (
        <div className="space-y-8">
            {/* Bento Grid */}
            <div className="grid md:grid-cols-2 gap-4">
                <BentoCard>
                    <CardHeader icon={Building2} title="Éditeur du site" />
                    <div className="space-y-1">
                        <InfoRow label="Raison sociale" value="HOUSEWISE" />
                        <InfoRow label="Forme juridique" value="Micro-entreprise" />
                        <InfoRow label="Statut" value="En cours d'immatriculation" />
                    </div>
                </BentoCard>

                <BentoCard>
                    <CardHeader icon={MapPin} title="Siège social" />
                    <div className="space-y-1">
                        <InfoRow label="Ville" value="Casablanca, Maroc" />
                    </div>
                </BentoCard>

                <BentoCard>
                    <CardHeader icon={User} title="Fondateurs" />
                    <div className="space-y-1">
                        <InfoRow label="Co-fondateur" value="Gautier ZUCH" />
                        <InfoRow label="Co-fondateur" value="Mehdi CHAKROUNE" />
                    </div>
                </BentoCard>

                <BentoCard>
                    <CardHeader icon={Mail} title="Contact" />
                    <div className="space-y-1">
                        <InfoRow label="Email" value="housewisecontactpro@gmail.com" copyable />
                        <InfoRow label="Téléphone" value="+212 7 26 39 46 74" copyable />
                    </div>
                </BentoCard>

                <BentoCard span={2}>
                    <CardHeader icon={Globe} title="Hébergement" />
                    <div className="grid sm:grid-cols-3 gap-4">
                        <InfoRow label="Hébergeur" value="Vercel Inc." />
                        <InfoRow label="Adresse" value="340 S Lemon Ave, Walnut, CA, USA" />
                        <InfoRow label="Site" value="vercel.com" />
                    </div>
                </BentoCard>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mt-8">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2" style={{ color: "#FFFFFF" }}>
                    <Scale className="w-5 h-5 text-[#C6A667]" />
                    Propriété intellectuelle
                </h3>
                <div className="text-white text-sm leading-relaxed space-y-3 pl-7">
                    <p>
                        L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, photographies, vidéos)
                        est la propriété exclusive de <strong className="text-[#C6A667]">HOUSEWISE</strong> et est protégé
                        par les lois marocaines et internationales relatives à la propriété intellectuelle.
                    </p>
                    <p className="text-white/90 text-xs">
                        Toute exploitation non autorisée sera considérée comme constitutive d'une contrefaçon
                        (Articles 575+ du Code Pénal marocain).
                    </p>
                </div>
            </div>
        </div>
    );
}

/* ============================================
   CONFIDENTIALITÉ
   ============================================ */
function ConfidentialiteSection() {
    return (
        <div className="space-y-8">
            {/* Données collectées */}
            <div className="grid md:grid-cols-2 gap-4">
                <BentoCard>
                    <CardHeader icon={Shield} title="Données collectées" />
                    <ul className="space-y-2 text-white text-sm">
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A667]" />
                            Nom et prénom
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A667]" />
                            Adresse email
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A667]" />
                            Numéro de téléphone
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A667]" />
                            Message de contact
                        </li>
                    </ul>
                </BentoCard>

                <BentoCard>
                    <CardHeader icon={FileText} title="Finalité" />
                    <ul className="space-y-2 text-white text-sm">
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A667]" />
                            Répondre à vos demandes
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A667]" />
                            Établir un devis personnalisé
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A667]" />
                            Gérer la relation commerciale
                        </li>
                    </ul>
                </BentoCard>
            </div>

            {/* Important Notice */}
            <div
                className="p-5 rounded-2xl"
                style={{
                    background: "linear-gradient(135deg, rgba(198, 166, 103, 0.1) 0%, rgba(198, 166, 103, 0.05) 100%)",
                    border: "1px solid rgba(198, 166, 103, 0.2)",
                }}
            >
                <p className="text-sm text-white">
                    <strong className="text-[#C6A667]">⚡ Important :</strong> Vos données ne sont jamais vendues,
                    louées ou cédées à des tiers. Conservation maximale : <strong className="text-white">3 ans</strong>.
                </p>
            </div>

            {/* Vos Droits */}
            <div>
                <h3 className="text-lg font-medium mb-4" style={{ color: "#FFFFFF" }}>Vos droits (RGPD & Loi 09-08)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                        { title: "Accès", desc: "Obtenir vos données" },
                        { title: "Rectification", desc: "Corriger vos données" },
                        { title: "Effacement", desc: "Supprimer vos données" },
                        { title: "Opposition", desc: "Refuser le traitement" },
                        { title: "Portabilité", desc: "Récupérer vos données" },
                        { title: "Retrait", desc: "Retirer le consentement" },
                    ].map((right) => (
                        <div
                            key={right.title}
                            className="p-4 rounded-xl text-center"
                            style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.05)" }}
                        >
                            <p className="text-[#C6A667] font-medium text-sm">{right.title}</p>
                            <p className="text-white/90 text-xs mt-1">{right.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact DPO */}
            <BentoCard>
                <CardHeader icon={Mail} title="Contact RGPD" />
                <div className="space-y-1">
                    <InfoRow label="Responsable" value="HOUSEWISE" />
                    <InfoRow label="Email" value="housewisecontactpro@gmail.com" copyable />
                    <InfoRow label="Ville" value="Casablanca, Maroc" />
                </div>
            </BentoCard>
        </div>
    );
}

/* ============================================
   CGU
   ============================================ */
function CGUSection() {
    return (
        <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-4">
                <BentoCard span={2}>
                    <CardHeader icon={FileText} title="Objet des CGU" />
                    <p className="text-white text-sm leading-relaxed">
                        Les présentes Conditions Générales d'Utilisation définissent les modalités d'accès
                        et d'utilisation du site <strong className="text-[#C6A667]">www.housewise.fr</strong>.
                        L'accès au site implique l'acceptation pleine et entière de ces conditions.
                    </p>
                </BentoCard>

                <BentoCard>
                    <CardHeader icon={Building2} title="Services proposés" />
                    <ul className="space-y-2 text-white text-sm">
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A667]" />
                            Gestion locative complète
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A667]" />
                            Accueil des locataires
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A667]" />
                            Ménage & entretien
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A667]" />
                            Optimisation des revenus
                        </li>
                    </ul>
                </BentoCard>

                <BentoCard>
                    <CardHeader icon={Globe} title="Accès au site" />
                    <p className="text-white text-sm leading-relaxed">
                        Le site est accessible gratuitement. HOUSEWISE ne garantit pas une disponibilité
                        permanente et peut interrompre l'accès pour maintenance.
                    </p>
                </BentoCard>
            </div>

            {/* Responsabilités */}
            <div>
                <h3 className="text-lg font-medium mb-4" style={{ color: "#FFFFFF" }}>Responsabilités</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div
                        className="p-5 rounded-2xl"
                        style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)" }}
                    >
                        <h4 className="font-medium mb-2" style={{ color: "#FFFFFF" }}>Éditeur</h4>
                        <p className="text-white/90 text-sm">
                            HOUSEWISE s'efforce d'assurer l'exactitude des informations mais ne peut
                            garantir leur exhaustivité.
                        </p>
                    </div>
                    <div
                        className="p-5 rounded-2xl"
                        style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)" }}
                    >
                        <h4 className="font-medium mb-2" style={{ color: "#FFFFFF" }}>Utilisateur</h4>
                        <p className="text-white/90 text-sm">
                            L'utilisateur s'engage à utiliser le site conformément à sa destination
                            et aux bonnes mœurs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Droit applicable */}
            <BentoCard>
                <CardHeader icon={Scale} title="Droit applicable" />
                <p className="text-white text-sm">
                    Les présentes CGU sont régies par le droit marocain. En cas de litige, les tribunaux de
                    <strong className="text-[#C6A667] ml-1">Casablanca</strong> seront compétents.
                </p>
                <p className="text-white/90 text-xs mt-4">
                    Dernière mise à jour : <span className="text-white/70">Février 2026</span>
                </p>
            </BentoCard>
        </div>
    );
}
