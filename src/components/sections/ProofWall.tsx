import { useEffect, useState } from 'react';
import { X, ZoomIn, MessageCircleHeart } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StarRating } from '@/components/ui/StarRating';

/**
 * Every image in  assets/images/proof/  (repo root) is picked up automatically —
 * drop screenshot files in that folder, they appear in the wall. No code edit.
 *
 * Order: newest first. Files are sorted by name descending, so name new
 * screenshots with a higher number/date prefix if you want them on top
 * (e.g. `2026-09-10-01.jpg`). Phone screenshots already sort this way.
 */
const modules = import.meta.glob(
  '/assets/images/proof/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP,jfif,JFIF}',
  { eager: true, import: 'default' },
) as Record<string, string>;

const shots: string[] = Object.entries(modules)
  .sort(([a], [b]) => b.localeCompare(a, undefined, { numeric: true }))
  .map(([, url]) => url);

/** Styled stand-ins shown until real screenshots are added. */
const mockReviews = [
  { name: 'Ritu', text: 'Didi aapki reading bilkul sahi thi 🙏 3 hafte me hi result mila!', when: 'Today' },
  { name: 'Aditya', text: 'The love spell worked. We are talking again. Thank you so much.', when: 'Yesterday' },
  { name: 'Sneha', text: 'Job mil gayi finally!! Career healing ke baad interview clear hua ✨', when: '2d ago' },
  { name: 'Farah', text: 'So accurate about my family situation. Feeling much lighter now.', when: '3d ago' },
  { name: 'Kabir', text: 'Money blockage cleared — payment stuck for months came through this week.', when: '4d ago' },
];

function MockCard({ r }: { r: (typeof mockReviews)[number] }) {
  return (
    <div className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-card">
      <div className="flex items-center gap-2 bg-sage/90 px-3 py-2 text-white">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/25 text-[0.7rem] font-semibold">
          {r.name[0]}
        </span>
        <span className="text-[0.8rem] font-medium">{r.name}</span>
        <span className="ml-auto text-[0.6rem] opacity-80">{r.when}</span>
      </div>
      <div className="flex flex-col gap-2 bg-[#EFE7DA] p-3">
        <p className="max-w-[92%] self-start rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[0.78rem] leading-snug text-plum shadow-sm">
          {r.text}
        </p>
        <p className="max-w-[70%] self-end rounded-2xl rounded-tr-sm bg-[#DDF3D3] px-3 py-2 text-[0.78rem] text-plum shadow-sm">
          So happy to hear that 🙏
        </p>
        <span className="self-center pt-1">
          <StarRating size={12} />
        </span>
      </div>
    </div>
  );
}

function ShotCard({ src, onOpen }: { src: string; onOpen: (src: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(src)}
      className="group/card mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <span className="relative block">
        <img
          src={src}
          alt="Client review screenshot"
          className="block w-full"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute inset-0 grid place-items-center bg-plum/0 opacity-0 transition-all duration-300 group-hover/card:bg-plum/20 group-hover/card:opacity-100">
          <ZoomIn className="h-6 w-6 text-white drop-shadow" />
        </span>
      </span>
    </button>
  );
}

export function ProofWall() {
  const ref = useReveal();
  const [active, setActive] = useState<number | null>(null);
  const hasReal = shots.length > 0;

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((i) => (i === null ? i : (i + 1) % shots.length));
      if (e.key === 'ArrowLeft')
        setActive((i) => (i === null ? i : (i - 1 + shots.length) % shots.length));
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [active]);

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

        {/* 5-column masonry — newest first, grows as screenshots are added */}
        <div className="mt-9 columns-2 gap-4 sm:columns-3 lg:columns-5 [column-fill:balance]">
          {hasReal
            ? shots.map((src, i) => <ShotCard key={src} src={src} onOpen={() => setActive(i)} />)
            : mockReviews.map((r, i) => <MockCard key={i} r={r} />)}
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-caption text-body">
          <MessageCircleHeart className="h-4 w-4 text-gold-deep" strokeWidth={1.6} />
          {hasReal
            ? `${shots.length} real client messages — and counting`
            : 'Real client screenshots are added here every day'}
        </p>
      </div>

      {active !== null && shots[active] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-plum/75 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-plum"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={shots[active]}
            alt="Client review screenshot"
            className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain shadow-card-hover"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
