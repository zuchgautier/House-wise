// ============================================
// HOUSEWISE – Shared Animation Constants & Variants
// Premium real estate: Deep Blue #0A1A33 + Gold #C6A667
// ============================================

import type { Variants, Transition } from "framer-motion";

// === EASING ===
export const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

// === SPRING CONFIGS ===
export const SPRING_HOVER: Transition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
};

export const SPRING_BUTTON: Transition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
};

export const SPRING_MAGNETIC: Transition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.1,
};

// === SCROLL-TRIGGERED REVEAL VARIANTS ===

/** Fade in + slide up – the default "graceful reveal" */
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: LUXURY_EASE },
    },
};

/** Fade in from the left */
export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: LUXURY_EASE },
    },
};

/** Fade in from the right */
export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 24 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: LUXURY_EASE },
    },
};

/** Parent stagger container */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

/** Scale-in for success states, modals, etc. */
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: LUXURY_EASE },
    },
};

// === HOVER PRESETS (for whileHover / whileTap) ===
export const hoverScale = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: SPRING_HOVER,
};

export const hoverLift = {
    whileHover: { y: -8 },
    transition: SPRING_HOVER,
};

// === VIEWPORT CONFIG ===
export const viewportOnce = { once: true, margin: "-100px" as const };
