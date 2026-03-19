"use client";

import { memo, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeInUp, viewportOnce, EASE_OUT_EXPO } from "@/lib/animations";

interface AnimateOnScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    variants?: Variants;
    tag?: "div" | "section" | "article" | "li";
}

/**
 * Reusable scroll-triggered reveal wrapper.
 * Default: fade-in + blur + slide-up (y: 30 → 0) over 0.7s with expo easing.
 */
export const AnimateOnScroll = memo(function AnimateOnScroll({
    children,
    className = "",
    delay = 0,
    variants,
    tag = "div",
}: AnimateOnScrollProps) {
    const Component = motion[tag] as typeof motion.div;

    const customVariants: Variants = variants ?? {
        hidden: fadeInUp.hidden,
        visible: {
            ...fadeInUp.visible,
            transition: {
                duration: 0.7,
                ease: EASE_OUT_EXPO,
                delay,
            },
        },
    };

    return (
        <Component
            className={className}
            variants={customVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
        >
            {children}
        </Component>
    );
});
