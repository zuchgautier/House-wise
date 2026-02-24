"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        const hash = window.location.hash;

        if (hash) {
            // Wait a bit for the page to render, then scroll to the element
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100);
        } else {
            // Only scroll to top if no hash
            window.scrollTo(0, 0);
        }

        // Also handle browser history scroll restoration
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
    }, [pathname]);

    return null;
}
