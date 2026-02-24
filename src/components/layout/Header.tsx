"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { SPRING_HOVER, LUXURY_EASE } from "@/lib/animations";

const navLinks = [
    { name: "Accueil", href: "/#hero" },
    { name: "Services", href: "/#services" },
    { name: "Packs", href: "/#packs" },
    { name: "Processus", href: "/#process" },
    { name: "Contact", href: "/#contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) =>
        setIsScrolled(latest > 50)
    );

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        const hash = href.split("#")[1];
        if (hash) {
            const target = document.getElementById(hash);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 gpu-layer ${isScrolled
                    ? "py-4 bg-bleu-nuit/95 backdrop-blur-xl shadow-lg"
                    : "py-6 bg-transparent"
                    }`}
                style={{ transition: "padding 500ms cubic-bezier(0.22, 1, 0.36, 1), background-color 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1)" }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: LUXURY_EASE }}
            >
                <nav className="section-container flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-10">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={SPRING_HOVER}
                            className="flex items-center"
                        >
                            <Image
                                src="/logo-light.svg"
                                alt="HOUSEWISE"
                                width={180}
                                height={28}
                                priority
                                className="h-7 w-auto"
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 0.3, ease: LUXURY_EASE }}
                            >
                                <Link
                                    href={link.href}
                                    className="nav-link"
                                    onClick={(e) => {
                                        if (window.location.pathname === "/") {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <motion.div
                            className="hidden md:block"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, ease: LUXURY_EASE }}
                        >
                            <Link href="/#contact">
                                <motion.button
                                    className="btn-gold"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={SPRING_HOVER}
                                >
                                    Estimer mes revenus
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Mobile Menu */}
                        <motion.button
                            className="lg:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center"
                            onClick={() => setIsOpen(!isOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                    >
                                        <X className="w-6 h-6 text-blanc" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                    >
                                        <Menu className="w-6 h-6 text-blanc" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-bleu-nuit/98 backdrop-blur-xl"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.nav
                            className="absolute inset-0 flex flex-col items-center justify-center bg-bleu-deep p-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col items-center gap-8">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1, ease: LUXURY_EASE }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-2xl font-semibold text-blanc hover:text-dore transition-colors min-h-[48px] flex items-center"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, ease: LUXURY_EASE }}
                                    className="mt-8"
                                >
                                    <Link
                                        href="/#contact"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <button className="btn-gold w-full min-h-[48px]">
                                            Estimer mes revenus
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
