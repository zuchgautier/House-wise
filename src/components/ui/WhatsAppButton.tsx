"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SPRING_HOVER } from "@/lib/animations";

export const WhatsAppButton = memo(function WhatsAppButton() {
    const phoneNumber = "33651589964";
    const message = encodeURIComponent("Bonjour Housewise, je souhaite avoir plus d'informations sur vos services de conciergerie.");

    return (
        <motion.a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 gpu-layer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, ...SPRING_HOVER }}
        >
            {/* Button with tooltip */}
            <motion.div
                className="relative w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg group"
                style={{ background: "#25D366" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={SPRING_HOVER}
            >
                <MessageCircle className="w-5 h-5 md:w-7 md:h-7 text-white" fill="white" />

                {/* Tooltip */}
                <span className="hidden md:block absolute right-16 bg-blanc text-bleu-nuit text-sm font-medium px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Discutons sur WhatsApp
                </span>
            </motion.div>

            {/* Pulse Animation */}
            <span className="absolute inset-0 w-11 h-11 md:w-14 md:h-14 rounded-full animate-ping opacity-20" style={{ background: "#25D366" }} />
        </motion.a>
    );
});
