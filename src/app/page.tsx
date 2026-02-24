import { Hero } from "@/components/sections/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { SecretSauce } from "@/components/sections/SecretSauce";
import { FounderMessage } from "@/components/sections/FounderMessage";
import { Packs } from "@/components/sections/Packs";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Hero Section - Above the fold */}
      <Hero />

      {/* Partner Logos - Authority Transfer */}
      <PartnerLogos />

      {/* Why Choose Us - Services */}
      <SecretSauce />

      {/* Founder Message - Human Factor */}
      <FounderMessage />

      {/* Pricing Packs */}
      <Packs />

      {/* Market Stats */}
      <Stats />

      {/* How It Works */}
      <Process />

      {/* FAQ */}
      <FAQ />

      {/* Contact Form */}
      <Contact />
    </>
  );
}
