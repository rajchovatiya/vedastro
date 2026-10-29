import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  images: string[];
  /** index of the open image, or null when closed */
  index: number | null;
  onChange: (index: number | null) => void;
  alt?: string;
};

/** Full-screen image viewer — tap outside / Esc to close, arrows to flip. */
export function Lightbox({ images, index, onChange, alt = '' }: Props) {
  const count = images.length;
  const prev = () => index !== null && onChange((index - 1 + count) % count);
  const next = () => index !== null && onChange((index + 1) % count);

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null);
      if (e.key === 'ArrowRight') onChange((index + 1) % count);
      if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [index, count, onChange]);

  if (index === null || !images[index]) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-plum/80 p-4 backdrop-blur-sm"
      onClick={() => onChange(null)}
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-plum"
        onClick={() => onChange(null)}
      >
        <X className="h-5 w-5" />
      </button>
      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-plum sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              prev();
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
              next();
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
      <img
        src={images[index]}
        alt={alt}
        className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain shadow-card-hover"
        onClick={(e) => e.stopPropagation()}
      />
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-[0.75rem] font-medium text-plum">
        {index + 1} / {count}
      </span>
    </div>
  );
}
