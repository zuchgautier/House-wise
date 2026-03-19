"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 1.5,
            infinite: false,
            autoResize: true,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Handle anchor link clicks for smooth scrolling
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a[href*='#']");
            if (anchor) {
                const href = anchor.getAttribute("href");
                if (href) {
                    const hash = href.includes("#") ? href.split("#")[1] : null;
                    if (hash) {
                        const el = document.getElementById(hash);
                        if (el) {
                            e.preventDefault();
                            lenis.scrollTo(el, { offset: -80, duration: 1.6 });
                        }
                    }
                }
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
