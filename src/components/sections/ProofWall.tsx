import { Link } from 'react-router-dom';
import { MessageCircleHeart } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProofGrid } from '@/components/ui/ProofGrid';
import { proofShots } from '@/data/proof';

const PREVIEW = 10;

export function ProofWall() {
  const ref = useReveal();
  const hasReal = proofShots.length > 0;

  return (
    <section id="proof" className="section bg-cream/60">
      <div className="container-page">
        <div ref={ref} className="reveal">
          <SectionHeader
            eyebrow="Verified Results"
            title="Real Reviews From Real Clients"
            subtitle="Unedited screenshots from client conversations — the newest are shown first."
          />
        </div>

        <div className="mt-9">
          <ProofGrid images={proofShots.slice(0, PREVIEW)} />
        </div>

        {hasReal && (
          <div className="mt-8 flex flex-col items-center gap-3">
            {proofShots.length > PREVIEW && (
              <Link to="/reviews" className="btn-primary btn-lg">
                See all {proofShots.length} reviews
              </Link>
            )}
            <p className="flex items-center gap-2 text-caption text-body">
              <MessageCircleHeart className="h-4 w-4 text-gold-deep" strokeWidth={1.6} />
              {proofShots.length} real client messages — and counting
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
