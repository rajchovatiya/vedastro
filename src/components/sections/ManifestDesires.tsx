import { ChevronRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useBooking } from '@/components/booking/BookingProvider';
import { manifest, spells } from '@/data/spells';

const ritualImage = '/images/spells/ritual-still-life.svg';

export function ManifestDesires() {
  const ref = useReveal();
  const { open } = useBooking();

  return (
    <section id="spells" className="section relative overflow-hidden bg-blush">
      {/* warm ritual still-life bleeding off the right edge (wide screens) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[15%] min-[1180px]:block"
      >
        <img
          src={ritualImage}
          alt=""
          className="h-full w-full object-cover"
          style={{
            maskImage: 'linear-gradient(to right, transparent, #000 45%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, #000 45%)',
          }}
        />
      </div>

      <div ref={ref} className="reveal container-page relative">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-center lg:gap-8 min-[1180px]:pr-[12%]">
          {/* Left — intro */}
          <div>
            <span className="eyebrow">{manifest.eyebrow}</span>
            <h2 className="mt-3 text-[1.85rem] leading-tight sm:text-[2.1rem]">{manifest.title}</h2>
            <p className="mt-3 max-w-sm body-text">{manifest.description}</p>
            <button
              type="button"
              onClick={() => open('Spells & Rituals')}
              className="btn-secondary btn-md group mt-6"
            >
              {manifest.cta}
              <span
                className="grid h-5 w-5 place-items-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5"
                style={{ backgroundColor: 'color-mix(in srgb, currentColor 16%, transparent)' }}
              >
                <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </button>
          </div>

          {/* Right — spell cards */}
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {spells.map(({ id, name, price, note, image, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => open(`Spell — ${name}`)}
                className="flex flex-col items-center rounded-card border border-gold/15 bg-ivory p-3 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-card-hover"
              >
                <span className="block w-full overflow-hidden rounded-[14px]">
                  {image ? (
                    <img
                      src={image}
                      alt={name}
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="grid aspect-square w-full place-items-center bg-gold-tint text-gold-deep">
                      {Icon && <Icon className="h-8 w-8" strokeWidth={1.4} />}
                    </span>
                  )}
                </span>
                <span className="mt-3 font-display text-[1rem] font-semibold leading-tight text-plum">
                  {name}
                </span>
                <span className="mt-1 font-display text-lg font-semibold text-gold-deep">{price}</span>
                <span className="mt-1 pb-1 text-[0.72rem] text-body">{note}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
