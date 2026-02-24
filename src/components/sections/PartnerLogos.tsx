"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    staggerContainer,
    fadeInUp,
    viewportOnce,
} from "@/lib/animations";

const partners = [
    { name: "Airbnb", url: "https://www.airbnb.com" },
    { name: "Booking.com", url: "https://www.booking.com" },
];

export const PartnerLogos = memo(function PartnerLogos() {
    return (
        <section className="bg-bleu-nuit py-12 relative overflow-hidden">
            <div className="section-container">
                {/* Title */}
                <motion.p
                    className="text-center text-dore text-sm font-medium tracking-widest uppercase mb-10"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    Vos biens diffusés sur
                </motion.p>

                {/* Logos Row */}
                <motion.div
                    className="flex items-center justify-center gap-12 md:gap-20"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {partners.map((partner) => (
                        <motion.div key={partner.name} variants={fadeInUp}>
                            <Link
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group cursor-pointer"
                            >
                                <span
                                    className="text-2xl md:text-3xl font-bold tracking-tight text-blanc/60 group-hover:text-dore transition-colors duration-300"
                                    style={{ fontFamily: "var(--font-inter)" }}
                                >
                                    {partner.name}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
});
