// ============================================
// HOUSEWISE – Premium Animation System 2026
// Deep Blue #0A1A33 + Gold #C6A667
// GPU-Accelerated | 120fps Target | View Transitions
// ============================================

import type { Variants, Transition } from "framer-motion";

// === EASING CURVES ===
export const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT_CIRC = [0.85, 0, 0.15, 1] as const;

// === SPRING CONFIGS ===
export const SPRING_HOVER: Transition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
};

export const SPRING_BUTTON: Transition = {
    type: "spring",
    stiffness: 500,
    damping: 35,
};

export const SPRING_MAGNETIC: Transition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.1,
};

export const SPRING_BOUNCY: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 0.8,
};

export const SPRING_SNAPPY: Transition = {
    type: "spring",
    stiffness: 600,
    damping: 40,
};

// === SCROLL-TRIGGERED REVEAL VARIANTS ===

/** Fade in + slide up – the default "graceful reveal" */
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: EASE_OUT_EXPO },
    },
};

/** Fade in from the left */
export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: EASE_OUT_EXPO },
    },
};

/** Fade in from the right */
export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: EASE_OUT_EXPO },
    },
};

/** Blur-heavy reveal for hero elements */
export const blurReveal: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: EASE_OUT_EXPO },
    },
};

/** Scale + fade for dramatic section entrances */
export const scaleReveal: Variants = {
    hidden: { opacity: 0, scale: 0.92, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: EASE_OUT_EXPO },
    },
};

/** Slide up from bottom with mask-like effect */
export const slideUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: EASE_OUT_QUINT },
    },
};

/** Parent stagger container */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05,
        },
    },
};

/** Faster stagger for grids */
export const staggerFast: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.02,
        },
    },
};

/** Slow stagger for dramatic reveals */
export const staggerSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.1,
        },
    },
};

/** Scale-in for success states, modals, cards */
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: EASE_OUT_EXPO },
    },
};

/** Card reveal with subtle rotation */
export const cardReveal: Variants = {
    hidden: { opacity: 0, y: 40, rotateX: 8 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.7, ease: EASE_OUT_EXPO },
    },
};

/** Float animation for decorative elements */
export const floatAnimation: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: EASE_OUT_EXPO,
            y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    },
};

// === HOVER PRESETS ===
export const hoverScale = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: SPRING_HOVER,
};

export const hoverLift = {
    whileHover: { y: -8 },
    transition: SPRING_HOVER,
};

export const hoverGlow = {
    whileHover: { scale: 1.03, y: -6 },
    whileTap: { scale: 0.98 },
    transition: SPRING_BOUNCY,
};

// === VIEWPORT CONFIG ===
export const viewportOnce = { once: true, margin: "-80px" as const };
export const viewportEarly = { once: true, margin: "-40px" as const };
export const viewportLate = { once: true, margin: "-120px" as const };
