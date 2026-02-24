"use client";

import { memo, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SPRING_MAGNETIC } from "@/lib/animations";

interface MagneticButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit";
    disabled?: boolean;
}

export const MagneticButton = memo(function MagneticButton({
    children,
    variant = "primary",
    size = "md",
    href,
    onClick,
    className = "",
    type = "button",
    disabled = false,
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = useCallback((e: React.MouseEvent) => {
        const currentRef = spanRef.current || buttonRef.current;
        if (!currentRef) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } =
            currentRef.getBoundingClientRect();
        const x = (clientX - left - width / 2) * 0.15;
        const y = (clientY - top - height / 2) * 0.15;
        setPosition({ x, y });
    }, []);

    const reset = useCallback(() => setPosition({ x: 0, y: 0 }), []);

    const baseStyles =
        "relative inline-flex items-center justify-center font-bold rounded-xl overflow-hidden cursor-pointer gpu-layer";

    const variants = {
        primary: "btn-gold",
        secondary:
            "glass-card-dark text-beige border border-dore/40 hover:border-dore",
        outline:
            "border-2 border-dore text-dore hover:bg-dore hover:text-bleu-nuit bg-transparent",
    };

    const sizes = {
        sm: "px-5 py-2.5 text-sm",
        md: "px-6 py-3.5 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const buttonContent = (
        <span className="relative z-10 flex items-center gap-2">{children}</span>
    );

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""
        }`;

    if (href && !disabled) {
        return (
            <Link href={href}>
                <motion.span
                    ref={spanRef}
                    className={combinedClassName}
                    onMouseMove={handleMouse}
                    onMouseLeave={reset}
                    animate={{ x: position.x, y: position.y }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={SPRING_MAGNETIC}
                >
                    {buttonContent}
                </motion.span>
            </Link>
        );
    }

    return (
        <motion.button
            ref={buttonRef}
            className={combinedClassName}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRING_MAGNETIC}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {buttonContent}
        </motion.button>
    );
});
