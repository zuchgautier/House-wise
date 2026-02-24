"use client";

import { memo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Phone,
    MapPin,
    BarChart3,
    FileSignature,
    Wrench,
    Rocket,
    ChevronDown,
} from "lucide-react";
import {
    fadeInUp,
    viewportOnce,
} from "@/lib/animations";

const steps = [
    {
        icon: Phone,
        title: "Appel découverte",
        desc: "Premier échange pour comprendre votre projet et définir vos objectifs de rendement. Nous analysons ensemble votre situation et répondons à toutes vos questions sur notre service de conciergerie.",
    },
    {
        icon: MapPin,
        title: "Visite du bien",
        desc: "Déplacement de nos experts sur place pour évaluer le potentiel et les atouts de votre propriété. Nous étudions l'emplacement, l'aménagement et identifions les optimisations possibles pour maximiser l'attractivité.",
    },
    {
        icon: BarChart3,
        title: "Analyse & devis",
        desc: "Étude de marché approfondie et remise d'une proposition tarifaire personnalisée et détaillée. Nous estimons vos revenus potentiels et vous présentons le pack le plus adapté à vos besoins.",
    },
    {
        icon: FileSignature,
        title: "Signature",
        desc: "Validation du mandat de gestion en toute transparence pour officialiser notre partenariat. Un contrat clair, sans engagement caché, qui définit précisément nos engagements mutuels.",
    },
    {
        icon: Wrench,
        title: "Installation",
        desc: "Shooting photo professionnel, mise en place de la literie hôtelière et installation des solutions tech. Votre bien est préparé aux standards premium pour séduire les voyageurs les plus exigeants.",
    },
    {
        icon: Rocket,
        title: "Lancement",
        desc: "Diffusion de votre annonce optimisée sur Airbnb et Booking pour accueillir vos premiers guests. Notre algorithme de pricing dynamique se met en marche pour maximiser votre taux d'occupation dès le premier jour.",
    },
];

const carouselImages = [
    { src: "/process-keys.png", alt: "Remise des clés" },
    { src: "/process-bedroom.png", alt: "Chambre premium" },
    { src: "/villa.png", alt: "Propriété de luxe" },
    { src: "/process-living.png", alt: "Salon élégant" },
    { src: "/bedroom.png", alt: "Installation literie hôtelière" },
];

export const Process = memo(function Process() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = useCallback(() => {
        setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextImage, 4000);
        return () => clearInterval(interval);
    }, [nextImage]);

    const toggleStep = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="process"
            className="section-light section-spacing pb-10 overflow-hidden"
        >
            <div className="section-container">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <span className="badge-subtle mb-6 inline-flex">Processus</span>
                    <h2 className="text-section text-noir mb-4">
                        <span className="text-gradient">6 étapes</span> vers le succès
                    </h2>
                    <p className="text-bleu-nuit/70 text-lg max-w-lg mx-auto font-light">
                        De la première prise de contact au lancement en 2 semaines
                    </p>
                </motion.div>

                {/* Two-column layout */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                    {/* Left: Image Carousel */}
                    <motion.div
                        className="w-full lg:w-[45%] lg:sticky lg:top-28 flex-shrink-0"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            {/* All images stacked — crossfade via opacity */}
                            {carouselImages.map((img, i) => (
                                <div
                                    key={img.src}
                                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                                    style={{
                                        opacity: i === currentImage ? 1 : 0,
                                        zIndex: i === currentImage ? 2 : 1,
                                    }}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                        quality={90}
                                        priority
                                    />
                                </div>
                            ))}

                            {/* Bottom gradient overlay with caption */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                            <p
                                className="absolute bottom-5 left-6 text-white font-medium text-base z-20 transition-opacity duration-500"
                                key={`caption-${currentImage}`}
                            >
                                {carouselImages[currentImage].alt}
                            </p>

                            {/* Progress dots */}
                            <div className="absolute bottom-5 right-6 flex gap-2 z-20">
                                {carouselImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImage(i)}
                                        className="w-2 h-2 rounded-full transition-all duration-500"
                                        style={{
                                            backgroundColor: i === currentImage
                                                ? "#C6A667"
                                                : "rgba(255,255,255,0.4)",
                                            transform: i === currentImage ? "scale(1.3)" : "scale(1)",
                                        }}
                                        aria-label={`Image ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Accordion */}
                    <motion.div
                        className="w-full lg:w-[55%]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.08 },
                            },
                        }}
                    >
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isOpen = openIndex === index;

                            return (
                                <motion.div
                                    key={step.title}
                                    variants={fadeInUp}
                                    className="border-b border-bleu-nuit/10 last:border-b-0"
                                >
                                    <button
                                        onClick={() => toggleStep(index)}
                                        className="w-full flex items-center gap-4 py-5 md:py-6 text-left group transition-colors duration-300"
                                        aria-expanded={isOpen}
                                    >
                                        {/* Step Number */}
                                        <div
                                            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base font-bold transition-all duration-500"
                                            style={{
                                                background: isOpen
                                                    ? "linear-gradient(135deg, #C6A667, #d4bc8a)"
                                                    : "rgba(198, 166, 103, 0.12)",
                                                color: isOpen ? "#0A1A33" : "#C6A667",
                                                boxShadow: isOpen
                                                    ? "0 0 20px rgba(198, 166, 103, 0.3)"
                                                    : "none",
                                            }}
                                        >
                                            {index + 1}
                                        </div>

                                        {/* Title */}
                                        <span
                                            className="flex-1 text-base md:text-lg font-semibold tracking-tight transition-colors duration-300"
                                            style={{
                                                color: isOpen ? "#0A1A33" : "rgba(10, 26, 51, 0.7)",
                                            }}
                                        >
                                            {step.title}
                                        </span>

                                        {/* Chevron */}
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="flex-shrink-0"
                                        >
                                            <ChevronDown
                                                className="w-5 h-5 transition-colors duration-300"
                                                style={{
                                                    color: isOpen ? "#C6A667" : "rgba(10, 26, 51, 0.3)",
                                                }}
                                            />
                                        </motion.div>
                                    </button>

                                    {/* Expandable Content */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                                                    opacity: { duration: 0.3, delay: 0.1 },
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-6 pl-14 md:pl-16 pr-4 flex items-start gap-4">
                                                    {/* Icon */}
                                                    <div
                                                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                                                        style={{
                                                            background: "rgba(198, 166, 103, 0.1)",
                                                        }}
                                                    >
                                                        <Icon
                                                            className="w-5 h-5"
                                                            style={{ color: "#C6A667" }}
                                                            strokeWidth={1.5}
                                                        />
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-bleu-nuit/60 text-sm md:text-[15px] font-light leading-relaxed pt-2">
                                                        {step.desc}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
});
