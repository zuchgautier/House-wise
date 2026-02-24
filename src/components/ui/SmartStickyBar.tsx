"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SPRING_HOVER } from "@/lib/animations";

export function SmartStickyBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!isMobile) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-0 left-0 right-0 z-50 gpu-layer"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                    }}
                >
                    <div className="bg-bleu-nuit/95 backdrop-blur-xl border-t border-blanc/10 shadow-lg">
                        <div className="section-container pt-4 pb-4 flex items-center justify-center">
                            <Link href="/">
                                <motion.div whileHover={{ scale: 1.02 }} transition={SPRING_HOVER}>
                                    <Image
                                        src="/logo-light.svg"
                                        alt="HOUSEWISE"
                                        width={120}
                                        height={24}
                                        className="h-5 w-auto"
                                    />
                                </motion.div>
                            </Link>
                        </div>
                        <div className="pb-safe" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
