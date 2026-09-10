import { useReveal } from '@/hooks/useReveal';
import { trustStats } from '@/data/trust';

export function TrustStrip() {
  const ref = useReveal();

  return (
    <section className="bg-cream/60 pb-6 md:pb-8">
      <div className="container-page">
        <div
          ref={ref}
          className="reveal grid grid-cols-2 divide-y divide-gold/25 rounded-card border border-gold/45 bg-ivory/80 shadow-card backdrop-blur-sm sm:grid-cols-4 sm:divide-x sm:divide-y-0"
        >
          {trustStats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 px-4 py-4 text-center sm:flex-row sm:gap-3 sm:px-6 sm:py-5 sm:text-left"
            >
              <Icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
              <span className="leading-tight">
                <span className="block font-display text-xl font-semibold text-plum">{value}</span>
                <span className="block text-[0.78rem] text-body">{label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
