"use client";

import Image from "next/image";

interface LogoProps {
    variant?: "light" | "dark";
    size?: "sm" | "md" | "lg";
    showIcon?: boolean;
    className?: string;
}

const sizes = {
    sm: { width: 120, height: 20 },
    md: { width: 160, height: 26 },
    lg: { width: 200, height: 32 },
};

const iconSizes = {
    sm: 32,
    md: 48,
    lg: 64,
};

export function Logo({ variant = "light", size = "md", showIcon = false, className = "" }: LogoProps) {
    const { width, height } = sizes[size];
    const iconSize = iconSizes[size];
    const logoSrc = variant === "light" ? "/logo-light.svg" : "/logo-dark.svg";

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {showIcon && (
                <Image
                    src="/icon-house.svg"
                    alt="Housewise Icon"
                    width={iconSize}
                    height={iconSize}
                    className="flex-shrink-0"
                />
            )}
            <Image
                src={logoSrc}
                alt="HOUSEWISE"
                width={width}
                height={height}
                priority
                className="h-auto"
                style={{ width: "auto", height: "auto", maxWidth: width, maxHeight: height }}
            />
        </div>
    );
}

// Standalone icon component
export function HouseIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
    return (
        <Image
            src="/icon-house.svg"
            alt="Housewise"
            width={size}
            height={size}
            className={className}
        />
    );
}
