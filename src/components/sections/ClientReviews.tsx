import { useReveal } from '@/hooks/useReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StarRating } from '@/components/ui/StarRating';
import { reviews } from '@/data/testimonials';

export function ClientReviews() {
  const ref = useReveal();

  return (
    <section id="reviews" className="section bg-ivory">
      <div className="container-page">
        <SectionHeader eyebrow="Kind Words" title="What Our Clients Say" align="left" />

        <div
          ref={ref}
          className="reveal reveal-stagger mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reviews.map((r) => (
            <figure
              key={r.id}
              className="flex flex-col rounded-card border border-gold/25 bg-cream/60 p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-gold/30"
                  loading="lazy"
                  decoding="async"
                />
                <StarRating size={14} />
              </div>
              <blockquote className="mt-4 flex-1 text-[0.92rem] italic leading-relaxed text-body">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[0.85rem] font-semibold text-plum">
                &mdash; {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
