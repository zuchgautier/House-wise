"use client";

import { memo } from "react";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const links = {
    nav: [
        { name: "Accueil", href: "#hero" },
        { name: "Services", href: "#services" },
        { name: "Packs", href: "#packs" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
    ],
    legal: [
        { name: "Mentions légales", href: "/mentions-legales" },
        { name: "Confidentialité", href: "/mentions-legales?tab=confidentialite" },
        { name: "CGU", href: "/mentions-legales?tab=cgu" },
    ],
};

export const Footer = memo(function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-bleu-nuit text-blanc relative z-10 mt-16 md:mt-24">
            <div className="section-container pb-28 md:pb-20" style={{ paddingTop: '120px' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/logo-light.svg"
                                alt="HOUSEWISE"
                                width={180}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <p className="text-blanc/50 text-sm leading-relaxed max-w-xs font-light">
                            Votre partenaire de confiance pour la gestion locative premium à Casablanca.
                        </p>
                    </div>

                    {/* Nav */}
                    <div>
                        <h4 className="text-lg mb-6 uppercase tracking-widest" style={{ color: '#C6A667', fontWeight: 700 }}>Navigation</h4>
                        <ul className="space-y-3">
                            {links.nav.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-blanc/60 hover:text-dore transition-colors duration-300 text-sm font-light inline-flex items-center group">
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg mb-6 uppercase tracking-widest" style={{ color: '#C6A667', fontWeight: 700 }}>Légal</h4>
                        <ul className="space-y-3">
                            {links.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-blanc/60 hover:text-dore transition-colors duration-300 text-sm font-light">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg mb-6 uppercase tracking-widest" style={{ color: '#C6A667', fontWeight: 700 }}>Contact</h4>
                        <ul className="space-y-4">
                            <li><a href="mailto:housewisecontactpro@gmail.com" className="flex items-center gap-3 text-blanc/60 hover:text-dore transition-colors duration-300 text-sm font-light"><Mail className="w-4 h-4 text-dore flex-shrink-0" /> housewisecontactpro@gmail.com</a></li>
                            <li><a href="tel:+212726394674" className="flex items-center gap-3 text-blanc/60 hover:text-dore transition-colors duration-300 text-sm font-light"><Phone className="w-4 h-4 text-dore flex-shrink-0" /> +212 7 26 39 46 74</a></li>
                            <li><a href="https://wa.me/33651589964" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blanc/60 hover:text-dore transition-colors duration-300 text-sm font-light"><svg className="w-4 h-4 text-dore flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg> WhatsApp</a></li>
                            <li><a href="https://www.google.com/maps/dir/?api=1&destination=Casablanca,Morocco" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blanc/60 hover:text-dore transition-colors duration-300 text-sm font-light"><MapPin className="w-4 h-4 text-dore flex-shrink-0" /> Casablanca, Maroc</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="divider !my-12" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-blanc/40 text-sm font-light">© {year} HOUSEWISE. Tous droits réservés.</p>
                    <p className="text-blanc/30 text-xs">Fait avec ❤️ à Casablanca</p>
                </div>
            </div>
        </footer>
    );
});
