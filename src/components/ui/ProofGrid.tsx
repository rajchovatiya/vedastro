import { useEffect, useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { StarRating } from '@/components/ui/StarRating';
import { mockReviews } from '@/data/proof';

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

type Props = {
  images: string[];
  /** masonry column classes; default is 2 → 3 → 5 */
  columns?: string;
  /** show this many first, with a "Load more" button for the rest */
  pageSize?: number;
};

export function ProofGrid({
  images,
  columns = 'columns-2 gap-4 sm:columns-3 lg:columns-5',
  pageSize,
}: Props) {
  const [shown, setShown] = useState(pageSize ?? images.length);
  const [active, setActive] = useState<number | null>(null);

  const visible = images.slice(0, shown);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === 'ArrowLeft')
        setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [active, images.length]);

  if (images.length === 0) {
    return (
      <div className={cn(columns, '[column-fill:balance]')}>
        {mockReviews.map((r, i) => (
          <MockCard key={i} r={r} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className={cn(columns, '[column-fill:balance]')}>
        {visible.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
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
        ))}
      </div>

      {shown < images.length && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShown((s) => s + (pageSize ?? 20))}
            className="btn-secondary btn-md"
          >
            Load more ({images.length - shown} left)
          </button>
        </div>
      )}

      {active !== null && images[active] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-plum/80 p-4 backdrop-blur-sm"
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
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous"
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-plum sm:left-6"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length));
                }}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-plum sm:right-6"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((i) => (i === null ? i : (i + 1) % images.length));
                }}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
          <img
            src={images[active]}
            alt="Client review screenshot"
            className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain shadow-card-hover"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-[0.75rem] font-medium text-plum">
            {active + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
