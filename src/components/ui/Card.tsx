"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
    delay?: number;
}

export function GlassCard({
    children,
    className = "",
    hover = true,
    glow = false,
    delay = 0,
}: GlassCardProps) {
    return (
        <motion.div
            className={`glass-card p-8 ${glow ? "border-glow-gold" : ""} ${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1] as const,
            }}
            whileHover={
                hover
                    ? {
                        y: -8,
                        transition: { duration: 0.3 },
                    }
                    : {}
            }
        >
            {children}
        </motion.div>
    );
}

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ${className}`}
        >
            {children}
        </div>
    );
}

interface BentoItemProps {
    children: ReactNode;
    className?: string;
    span?: "1" | "2" | "full";
    delay?: number;
}

export function BentoItem({
    children,
    className = "",
    span = "1",
    delay = 0,
}: BentoItemProps) {
    const spanClasses = {
        "1": "",
        "2": "md:col-span-2",
        full: "md:col-span-2 lg:col-span-3",
    };

    return (
        <motion.div
            className={`glass-card p-8 lg:p-10 ${spanClasses[span]} ${className}`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.22, 1, 0.36, 1] as const,
            }}
            whileHover={{
                y: -6,
                transition: { duration: 0.3 },
            }}
        >
            {children}
        </motion.div>
    );
}
