"use client";

import { memo, useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import {
    staggerContainer,
    fadeInUp,
    viewportOnce,
} from "@/lib/animations";

const properties = [
    {
        title: "Villa Contemporaine",
        location: "Anfa, Casablanca",
        image: "/gallery/villa-1.jpg",
    },
    {
        title: "Appartement Design",
        location: "Gauthier, Casablanca",
        image: "/gallery/apt-1.jpg",
    },
    {
        title: "Penthouse Luxe",
        location: "Corniche, Casablanca",
        image: "/gallery/penthouse-1.jpg",
    },
    {
        title: "Studio Moderne",
        location: "Maarif, Casablanca",
        image: "/gallery/studio-1.jpg",
    },
];

export const Gallery = memo(function Gallery() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = useCallback(() => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    }, []);

    const scroll = useCallback((direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    }, []);

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener("scroll", checkScroll, { passive: true });
            checkScroll();
            return () => ref.removeEventListener("scroll", checkScroll);
        }
    }, [checkScroll]);

    return (
        <section className="section-light section-spacing overflow-hidden">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <span className="badge-subtle mb-6 inline-flex">
                        <Home className="w-4 h-4" />
                        Portfolio
                    </span>
                    <h2 className="text-section text-noir mb-4">
                        Nos <span className="text-gradient">propriétés</span> gérées
                    </h2>
                    <p className="text-bleu-nuit/70 text-lg max-w-lg mx-auto font-light">
                        Un aperçu des biens que nous gérons avec excellence
                    </p>
                </motion.div>

                {/* Gallery with Navigation */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll("left")}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-blanc shadow-lg flex items-center justify-center transition-opacity duration-300 ${canScrollLeft
                                ? "opacity-100 hover:scale-110"
                                : "opacity-0 pointer-events-none"
                            }`}
                    >
                        <ChevronLeft className="w-6 h-6 text-bleu-nuit" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-blanc shadow-lg flex items-center justify-center transition-opacity duration-300 ${canScrollRight
                                ? "opacity-100 hover:scale-110"
                                : "opacity-0 pointer-events-none"
                            }`}
                    >
                        <ChevronRight className="w-6 h-6 text-bleu-nuit" />
                    </button>

                    {/* Scrollable Container */}
                    <motion.div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        {properties.map((property) => (
                            <motion.div
                                key={property.title}
                                className="flex-shrink-0 w-80 group gpu-layer"
                                variants={fadeInUp}
                            >
                                <div className="glass-card overflow-hidden">
                                    {/* Image Placeholder */}
                                    <div className="relative h-56 bg-gradient-to-br from-bleu-nuit/10 to-bleu-nuit/5 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <Home className="w-12 h-12 text-dore/40 mx-auto mb-2" />
                                                <span className="text-bleu-nuit/40 text-sm">
                                                    Image à venir
                                                </span>
                                            </div>
                                        </div>
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-bleu-nuit/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    {/* Info */}
                                    <div className="p-5">
                                        <h3 className="font-semibold text-noir mb-1">
                                            {property.title}
                                        </h3>
                                        <p className="text-sm text-bleu-nuit/60">
                                            {property.location}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
});
