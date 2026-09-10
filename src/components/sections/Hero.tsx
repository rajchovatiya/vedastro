import { Sun } from 'lucide-react';
import { useBooking } from '@/components/booking/BookingProvider';
import { useReveal } from '@/hooks/useReveal';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { StarRating } from '@/components/ui/StarRating';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { ZodiacWheel } from '@/components/ui/ZodiacWheel';

/** Swap this file for a real photo (same path) — see public/images/README.md */
const heroImage = '/images/hero/tarot-reader.png';

const trustPoints = ['Private & Confidential', 'Personalized Guidance', 'Experienced Readers'];

export function Hero() {
  const { open } = useBooking();
  const copyRef = useReveal<HTMLDivElement>();
  const mediaRef = useReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream/60 lg:flex lg:min-h-[calc(100vh-var(--top-chrome))]"
    >
      <div className="grid w-full lg:flex-1 lg:grid-cols-[55%_45%]">
        {/* ---------- LEFT: copy ---------- */}
        <div className="pad-container-left flex flex-col justify-center py-8 pr-[var(--gutter)] sm:py-10 lg:py-8 lg:pr-12">
          <div ref={copyRef} className="reveal w-full max-w-[44rem]">
            <span className="eyebrow block">
              Astrology <span className="mx-1.5 text-gold/60">•</span> Tarot
              <span className="mx-1.5 text-gold/60">•</span> Spiritual Guidance
            </span>

            <h1 className="mt-4 text-display text-plum [text-wrap:pretty]">
              Find Clarity When
              <br className="hidden sm:block" /> Life Feels Uncertain.
            </h1>

            <p className="mt-4 max-w-[32rem] body-lg">
              Personalized tarot readings, astrology guidance and spiritual solutions designed around
              your journey.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => open()}>
                Book a Session
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={() => open('Tarot Reading')}
              >
                Explore Tarot
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <StarRating size={18} />
              <span className="text-caption text-body">
                Trusted by <strong className="font-semibold text-plum">10,000+ seekers</strong>
              </span>
            </div>

            <ul className="mt-3.5 flex flex-wrap gap-x-6 gap-y-2">
              {trustPoints.map((p) => (
                <li key={p}>
                  <Badge tone="check">{p}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- RIGHT: full photograph on a warm celestial panel ---------- */}
        <div
          ref={mediaRef}
          className="reveal group relative min-h-[95vw] overflow-hidden bg-cream sm:min-h-[440px] lg:min-h-0"
        >
          {/* warm panel wash */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(75% 65% at 52% 32%, rgb(var(--c-ivory)), rgb(var(--c-cream)) 60%, #EAD9B7 100%)',
            }}
          />

          {/* zodiac wheel behind the subject */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 w-[118%] -translate-x-1/2 -translate-y-[22%] sm:w-[98%] lg:w-[108%]"
          >
            <ZodiacWheel className="h-auto w-full text-gold-champagne/45" />
          </div>

          {/* the full photograph — fit entirely inside the panel */}
          <img
            src={heroImage}
            alt="Premium Indian tarot reader holding a fan of cards"
            width={1024}
            height={1536}
            className="absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.02]"
            loading="eager"
            decoding="async"
          />

          {/* floating cards — upper-right, clear of the subject */}
          <FloatingCard className="absolute right-4 top-6 w-max sm:right-6 sm:top-8 lg:right-8">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-tint text-gold-deep">
                <Sun className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <span className="leading-tight">
                <span className="block text-caption font-semibold text-plum">
                  Today&rsquo;s Guidance
                </span>
                <span className="block text-[0.72rem] text-body">
                  Love &middot; Career &middot; Energy
                </span>
              </span>
            </div>
          </FloatingCard>

          <FloatingCard
            className="absolute right-4 top-[6.5rem] w-max text-center sm:right-6 sm:top-[8.5rem] lg:right-8 lg:top-[9.5rem]"
            style={{ animationDelay: '-3s' }}
          >
            <StarRating size={13} className="justify-center" />
            <span className="mt-1 block font-display text-xl font-semibold leading-none text-plum">
              4.9/5
            </span>
            <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.18em] text-body">
              Client Rating
            </span>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}
