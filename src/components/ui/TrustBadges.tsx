"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { SPRING_HOVER } from "@/lib/animations";

export const TrustBadges = memo(function TrustBadges() {
    return (
        <motion.div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <span className="text-blanc/40 text-sm uppercase tracking-wider">Partenaires</span>

            {/* Airbnb */}
            <motion.div
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-blanc/5 border border-blanc/10 gpu-layer"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
                transition={SPRING_HOVER}
            >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#FF5A5F]" fill="currentColor">
                    <path d="M12.001 18.275c-.9 0-1.629-.405-2.079-.81-.45-.405-.72-.81-.9-1.125l-.09-.18c-.18-.36-.27-.585-.27-.72 0-.315.09-.54.18-.675.18-.27.45-.54.81-.765.495-.315 1.035-.495 1.62-.495.585 0 1.125.18 1.62.495.36.225.63.495.81.765.09.135.18.36.18.675 0 .135-.09.36-.27.72l-.09.18c-.18.315-.45.72-.9 1.125-.45.405-1.179.81-2.079.81h-.063zm0-7.425c-1.944 0-3.645.855-4.725 2.205-.495.63-.855 1.35-1.035 2.115-.225.945-.135 1.935.27 2.79.675 1.44 2.025 2.565 3.6 3.015.54.135 1.08.225 1.62.225h.54c.54 0 1.08-.09 1.62-.225 1.575-.45 2.925-1.575 3.6-3.015.405-.855.495-1.845.27-2.79-.18-.765-.54-1.485-1.035-2.115-1.08-1.35-2.781-2.205-4.725-2.205zm7.11 4.32c.135-.54.18-1.08.135-1.62-.09-1.035-.45-2.025-1.035-2.88-1.395-2.025-3.735-3.24-6.21-3.24s-4.815 1.215-6.21 3.24c-.585.855-.945 1.845-1.035 2.88-.045.54 0 1.08.135 1.62.315 1.26.99 2.385 1.935 3.24.945.855 2.115 1.44 3.375 1.71.63.135 1.26.18 1.89.18h.12c.63 0 1.26-.045 1.89-.18 1.26-.27 2.43-.855 3.375-1.71.945-.855 1.62-1.98 1.935-3.24z" />
                </svg>
                <span className="text-blanc/70 font-medium text-sm">Airbnb</span>
            </motion.div>

            {/* Booking.com */}
            <motion.div
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-blanc/5 border border-blanc/10 gpu-layer"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
                transition={SPRING_HOVER}
            >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#003580]" fill="currentColor">
                    <path d="M2.273 6.727h3.91c1.94 0 3.272 1.364 3.272 3.182 0 1.273-.667 2.182-1.637 2.637v.06c1.212.303 2.091 1.394 2.091 2.849 0 2.06-1.454 3.454-3.757 3.454H2.273V6.727zm3.182 4.97c.97 0 1.545-.576 1.545-1.424 0-.849-.575-1.394-1.545-1.394H4.787v2.818h.668zm.243 5.242c1.06 0 1.697-.575 1.697-1.545s-.637-1.545-1.697-1.545H4.787v3.09h.911zM11.727 12.364c0-3.637 2.424-5.909 5.637-5.909 3.211 0 5.636 2.272 5.636 5.909 0 3.636-2.425 5.909-5.636 5.909-3.213 0-5.637-2.273-5.637-5.91zm8.728 0c0-2.182-1.152-3.606-3.091-3.606-1.94 0-3.091 1.424-3.091 3.606s1.151 3.606 3.09 3.606c1.94 0 3.092-1.424 3.092-3.606z" />
                </svg>
                <span className="text-blanc/70 font-medium text-sm">Booking.com</span>
            </motion.div>
        </motion.div>
    );
});
