"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    staggerFast,
    fadeInUp,
    viewportOnce,
    EASE_OUT_EXPO,
} from "@/lib/animations";

const partners = [
    { name: "Airbnb", url: "https://www.airbnb.com" },
    { name: "Booking.com", url: "https://www.booking.com" },
];

export const PartnerLogos = memo(function PartnerLogos() {
    return (
        <section className="bg-bleu-nuit py-12 relative overflow-hidden">
            {/* Ambient decoration */}
            <div className="ambient-orb w-48 h-48 top-0 left-1/4 opacity-15" />

            <div className="section-container relative z-10">
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
                    variants={staggerFast}
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
                                <motion.span
                                    className="text-2xl md:text-3xl font-bold tracking-tight text-blanc/60 group-hover:text-dore inline-block"
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        transition: `color 400ms cubic-bezier(${EASE_OUT_EXPO.join(",")})`,
                                    }}
                                    whileHover={{ scale: 1.06, y: -2 }}
                                    transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                                >
                                    {partner.name}
                                </motion.span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
});
