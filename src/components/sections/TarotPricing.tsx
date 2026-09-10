import { useReveal } from '@/hooks/useReveal';
import { useBooking } from '@/components/booking/BookingProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PricingCard } from '@/components/ui/PricingCard';
import { tarotPlans } from '@/data/tarotPlans';

export function TarotPricing() {
  const ref = useReveal();
  const { open } = useBooking();

  return (
    <section id="tarot" className="section bg-ivory">
      <div className="container-page">
        <SectionHeader
          eyebrow="Tarot Readings"
          title="Choose Your Tarot Reading"
          subtitle="Get clear answers with a personalized tarot session."
        />

        <div ref={ref} className="reveal mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tarotPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} onBook={() => open(`Tarot — ${plan.name}`)} />
          ))}
        </div>
      </div>
    </section>
  );
}
