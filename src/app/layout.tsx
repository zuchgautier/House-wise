import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageLoader } from "@/components/ui/PageLoader";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { SmartStickyBar } from "@/components/ui/SmartStickyBar";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://housewise.fr"),
  title: {
    default: "Conciergerie Airbnb Casablanca | HOUSEWISE – Gestion Locative Premium",
    template: "%s | HOUSEWISE",
  },
  description:
    "HOUSEWISE, votre conciergerie Airbnb à Casablanca. Gestion locative courte durée haut de gamme : optimisation des revenus, accueil voyageurs, ménage et linge premium. Gauthier, Racine, Anfa, Ain Diab.",
  keywords: [
    "conciergerie airbnb casablanca",
    "gestion locative casablanca",
    "conciergerie airbnb maroc",
    "gestion locative courte durée casablanca",
    "location courte durée casablanca",
    "airbnb casablanca",
    "gestion airbnb casablanca",
    "conciergerie premium casablanca",
    "housewise",
  ],
  authors: [{ name: "HOUSEWISE" }],
  creator: "HOUSEWISE",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://housewise.fr",
    siteName: "HOUSEWISE",
    title: "Conciergerie Airbnb Casablanca | HOUSEWISE – Gestion Locative Premium",
    description:
      "Confiez la gestion de votre bien à Casablanca à des experts. Maximisez vos revenus Airbnb avec HOUSEWISE, conciergerie premium.",
    images: [
      {
        url: "/casablanca-bg.png",
        width: 1200,
        height: 630,
        alt: "HOUSEWISE – Conciergerie Airbnb Premium à Casablanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conciergerie Airbnb Casablanca | HOUSEWISE",
    description:
      "Gestion locative courte durée haut de gamme à Casablanca. Maximisez vos revenus avec HOUSEWISE.",
    images: ["/casablanca-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://housewise.fr",
  },
  verification: {
    google: "HWq_8asiGgmXUiIj4Dk20_rsvr5VHJ4c4L82AFb0-qc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <SmoothScrollProvider>
          <ScrollToTop />
          <PageLoader />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <SmartStickyBar />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
