"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

export function PageLoader() {
    // Check if we should show loader (no hash in URL) - computed once on mount
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Only show loader if no hash in URL (computed on client)
    const shouldShow = useMemo(() => {
        if (typeof window === 'undefined') return false;
        return !window.location.hash;
    }, []);

    useEffect(() => {
        setMounted(true);

        if (!shouldShow) {
            setIsLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [shouldShow]);

    if (!mounted || !shouldShow) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-bleu-nuit flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="text-center flex flex-col items-center justify-center">
                        <motion.div
                            className="flex items-center justify-center w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src="/logo-light.svg"
                                alt="HOUSEWISE"
                                width={200}
                                height={40}
                                className="h-10 w-auto mx-auto"
                            />
                        </motion.div>

                        <div className="mt-8 w-48 h-1 bg-blanc/10 rounded-full overflow-hidden mx-auto">
                            <motion.div
                                className="h-full bg-gradient-to-r from-dore to-dore-light rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.3, ease: "easeInOut" }}
                            />
                        </div>

                        <motion.p
                            className="mt-4 text-blanc/50 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Chargement...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
