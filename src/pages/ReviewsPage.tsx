import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircleHeart } from 'lucide-react';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProofGrid } from '@/components/ui/ProofGrid';
import { JourneyCTA } from '@/components/sections/JourneyCTA';
import { proofShots } from '@/data/proof';

export function ReviewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <section className="section bg-cream/60">
          <div className="container-page">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-gold-deep hover:text-plum"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <SectionHeader
              eyebrow="Verified Results"
              title="Every Review, Unedited"
              subtitle="Real screenshots from client conversations. Tap any one to read it full-size — use the arrows to flip through."
            />

            {proofShots.length > 0 && (
              <p className="mt-3 flex items-center gap-2 text-caption text-body">
                <MessageCircleHeart className="h-4 w-4 text-gold-deep" strokeWidth={1.6} />
                {proofShots.length} client messages so far — more added every day
              </p>
            )}

            <div className="mt-8">
              <ProofGrid
                images={proofShots}
                columns="columns-2 gap-4 sm:columns-3 lg:columns-4 xl:columns-5"
                pageSize={30}
              />
            </div>
          </div>
        </section>

        <JourneyCTA />
      </main>
    </>
  );
}
