import "../globals.css";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-cormorant",
    display: "swap",
});

export default function MentionsLegalesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${cormorant.variable} legal-page-wrapper`}>
            {children}
        </div>
    );
}

