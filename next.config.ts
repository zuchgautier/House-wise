import type { NextConfig } from "next";

// ---------------------------------------------------------------------------
// 🔒 Security Headers — Protection maximale
// ---------------------------------------------------------------------------
const securityHeaders = [
  // ✅ HSTS — Force HTTPS pendant 2 ans + inclut les sous-domaines + preload
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // ✅ Anti-Clickjacking — Empêche l'affichage dans un iframe externe
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // ✅ Anti-MIME sniffing — Empêche le navigateur de deviner le type de fichier
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // ✅ Referrer Policy — Protège les données de navigation des utilisateurs
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // ✅ Permissions Policy — Désactive caméra/micro/géoloc sauf si explicitement autorisé
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // ✅ XSS Protection — Couche supplémentaire pour les vieux navigateurs
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // ✅ CSP — Content Security Policy stricte
  // next/font télécharge les polices au build → pas besoin de fonts.googleapis.com
  // Framer Motion utilise inline styles → 'unsafe-inline' requis pour style-src
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self' https://api.resend.com https://wa.me",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  headers: async () => [
    {
      // Applique les headers de sécurité à TOUTES les routes
      source: "/(.*)",
      headers: securityHeaders,
    },
  ],
};

export default nextConfig;
