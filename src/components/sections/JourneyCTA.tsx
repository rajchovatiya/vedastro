import { useReveal } from '@/hooks/useReveal';
import { useBooking } from '@/components/booking/BookingProvider';
import { Button } from '@/components/ui/Button';
import { BrandMark } from '@/components/ui/BrandMark';
import { LeafFlourish } from '@/components/ui/LeafFlourish';

export function JourneyCTA() {
  const ref = useReveal();
  const { open } = useBooking();

  return (
    <section className="relative overflow-hidden border-t border-gold/15 bg-cream/70">
      <LeafFlourish className="pointer-events-none absolute -left-4 bottom-0 h-28 w-40 text-gold-champagne opacity-80" />
      <LeafFlourish className="pointer-events-none absolute -right-4 bottom-0 h-28 w-40 -scale-x-100 text-gold-champagne opacity-80" />

      <div
        ref={ref}
        className="reveal container-page flex flex-col items-center gap-5 py-9 text-center md:flex-row md:justify-center md:gap-8 md:py-10 md:text-left"
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-tint text-gold">
          <BrandMark className="h-7 w-7" />
        </span>

        <div>
          <h2 className="text-[1.7rem] leading-tight sm:text-[2rem]">
            Your Journey to Clarity
            <br />
            Starts Here
          </h2>
        </div>

        <span className="hidden h-16 w-px bg-gold/25 md:block" />

        <p className="max-w-xs text-[0.9rem] text-body">
          Get personalized guidance from experienced readers and discover the best path for your life.
        </p>

        <Button size="lg" className="shrink-0" onClick={() => open()}>
          Book a Session
        </Button>
      </div>
    </section>
  );
}
