"use client";

import { memo, useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    staggerFast,
    scaleReveal,
    fadeInUp,
    viewportOnce,
    EASE_OUT_EXPO,
} from "@/lib/animations";

const stats = [
    { value: 7, suffix: "%", label: "du PIB marocain", desc: "Tourisme" },
    { value: 6.1, suffix: "M+", label: "touristes/an", desc: "Casablanca" },
    { value: 2, suffix: "ème", label: "destination", desc: "Nationale" },
    { value: 4.8, suffix: "+", label: "note moyenne", desc: "Satisfaction" },
];

const AnimatedCounter = memo(function AnimatedCounter({
    value,
    suffix = "",
    duration = 2,
}: {
    value: number;
    suffix?: string;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let startTime: number;
        let animationFrame: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min(
                (timestamp - startTime) / (duration * 1000),
                1
            );
            // Custom easing: exponential ease-out for snappy feel
            const eased = 1 - Math.pow(1 - progress, 5);
            setCount(eased * value);
            if (progress < 1) animationFrame = requestAnimationFrame(animate);
        };
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {value % 1 === 0 ? Math.round(count) : count.toFixed(1)}
            {suffix}
        </span>
    );
});

export const Stats = memo(function Stats() {
    return (
        <section
            className="parallax-section section-spacing relative overflow-visible"
            style={{ marginTop: "-2px", backgroundColor: "#0A1A33" }}
        >
            {/* Parallax Background with Villa Image */}
            <div
                className="parallax-bg"
                style={{ backgroundImage: "url('/villa.png')" }}
            />
            <div className="parallax-overlay" />

            <div className="section-container relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <span className="badge-subtle mb-6 inline-flex">Le marché</span>
                    <h2 className="text-section text-blanc mb-6">
                        <span style={{ color: "#FFFFFF" }}>Un potentiel</span>{" "}
                        <span className="text-gradient">exceptionnel</span>
                    </h2>
                    <p className="text-blanc/60 text-lg max-w-lg mx-auto font-light">
                        Casablanca est au cœur du tourisme marocain.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={staggerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="bg-blanc/95 rounded-3xl p-8 text-center shadow-lg gpu-layer"
                            variants={scaleReveal}
                            whileHover={{
                                scale: 1.04,
                                y: -4,
                                transition: { duration: 0.3, ease: EASE_OUT_EXPO },
                            }}
                            custom={i}
                        >
                            <div className="stat-number text-gradient mb-2">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-noir font-semibold mb-1">{stat.label}</div>
                            <div className="text-bleu-nuit/50 text-sm">{stat.desc}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
});
