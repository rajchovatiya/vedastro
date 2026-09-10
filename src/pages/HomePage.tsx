import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { TarotPricing } from '@/components/sections/TarotPricing';
import { ManifestDesires } from '@/components/sections/ManifestDesires';
import { ClientReviews } from '@/components/sections/ClientReviews';
import { ProofWall } from '@/components/sections/ProofWall';
import { JourneyCTA } from '@/components/sections/JourneyCTA';

export function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        {/* ---- LOCKED: do not modify ---- */}
        <Hero />
        <TrustStrip />
        <TarotPricing />

        {/* ---- Only these three sections after Tarot pricing ---- */}
        <ManifestDesires />
        <ClientReviews />
        <ProofWall />
        <JourneyCTA />
      </main>
    </>
  );
}
