import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Share2, Sparkles, ZoomIn } from 'lucide-react';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Lightbox } from '@/components/ui/Lightbox';
import { JourneyCTA } from '@/components/sections/JourneyCTA';
import { cn } from '@/lib/cn';
import { site, whatsappLink } from '@/data/site';
import { spellPhotos, spellWork, type SpellWork } from '@/data/spellWork';

/** mobile: swipeable row that bleeds to the screen edge · sm+: grid */
const photoRow =
  'flex snap-x snap-mandatory gap-3 overflow-x-auto mx-[calc(var(--gutter)*-1)] px-[var(--gutter)] scroll-px-[var(--gutter)] pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-5';
const photoItem = 'w-[68%] shrink-0 snap-start xs:w-[60%] sm:w-auto';

function ShareButton({ spell }: { spell: SpellWork }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = `${window.location.origin}/spells#${spell.id}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: `${spell.name} — ${site.name}`, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // share sheet dismissed — nothing to do
    }
  };

  return (
    <button type="button" onClick={share} className="btn-secondary btn-md">
      {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
      {copied ? 'Link copied' : 'Share'}
    </button>
  );
}

function SpellBlock({ spell, index }: { spell: SpellWork; index: number }) {
  const real = spellPhotos[spell.id] ?? [];
  const isSample = real.length === 0;
  const photos = isSample ? spell.samples : real;
  const [active, setActive] = useState<number | null>(null);

  return (
    <article
      id={spell.id}
      className={cn('scroll-mt-32 py-10 sm:py-14', index % 2 ? 'bg-cream/60' : 'bg-ivory')}
    >
      <div className="container-page">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <div>
            <span className="eyebrow">Spell {String(index + 1).padStart(2, '0')}</span>
            <h2 className="mt-2 text-[1.7rem] leading-tight sm:text-[2rem]">{spell.name}</h2>
            <p className="mt-3 max-w-2xl body-text">{spell.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink(`Hi ${site.name}, I'm interested in the ${spell.name}.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-md"
            >
              Ask on WhatsApp
            </a>
            <ShareButton spell={spell} />
          </div>
        </div>

        <div className={cn(photoRow, 'mt-6')}>
          {photos.length > 0
            ? photos.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    photoItem,
                    'group/photo relative overflow-hidden rounded-card border border-gold/20 bg-white shadow-card',
                  )}
                >
                  <img
                    src={src}
                    alt={`${spell.name} — photo ${i + 1}`}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover/photo:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-plum/0 opacity-0 transition-all duration-300 group-hover/photo:bg-plum/20 group-hover/photo:opacity-100">
                    <ZoomIn className="h-6 w-6 text-white drop-shadow" />
                  </span>
                  {isSample && (
                    <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[0.62rem] font-medium uppercase tracking-wider text-plum-soft">
                      Sample
                    </span>
                  )}
                </button>
              ))
            : Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className={cn(
                    photoItem,
                    'grid aspect-[4/5] place-items-center rounded-card border border-dashed border-gold/35 bg-gold-tint/40 text-gold-deep',
                  )}
                >
                  <span className="flex flex-col items-center gap-2 text-caption">
                    <Sparkles className="h-6 w-6" strokeWidth={1.4} />
                    Photos coming soon
                  </span>
                </div>
              ))}
        </div>
      </div>

      <Lightbox
        images={photos}
        index={active}
        onChange={setActive}
        alt={`${spell.name} photo`}
      />
    </article>
  );
}

export function SpellsPage() {
  // shared link /spells#love-spell → jump to that spell, otherwise start at the top
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }
    const t = setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }),
      120,
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <section className="bg-blush pb-8 pt-10 sm:pt-14">
          <div className="container-page">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-gold-deep hover:text-plum"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <SectionHeader
              eyebrow="Spells & Rituals"
              title="Our Spell Work"
              subtitle="Real photos from rituals we have performed for our clients. Tap any photo to see it full-size."
            />
          </div>
        </section>

        {/* quick jump — sticks under the header, swipeable on mobile */}
        <nav className="sticky top-16 z-40 border-y border-line bg-ivory/95 backdrop-blur-md">
          <div className="container-page flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center">
            {spellWork.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.replaceState(null, '', `#${s.id}`);
                  document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="shrink-0 whitespace-nowrap rounded-full border border-line bg-white px-3.5 py-1.5 text-[0.8rem] font-medium text-plum-soft transition-colors hover:border-gold hover:bg-gold-tint hover:text-gold-deep"
              >
                {s.name}
              </a>
            ))}
          </div>
        </nav>

        {spellWork.map((spell, i) => (
          <SpellBlock key={spell.id} spell={spell} index={i} />
        ))}

        <JourneyCTA />
      </main>
    </>
  );
}
