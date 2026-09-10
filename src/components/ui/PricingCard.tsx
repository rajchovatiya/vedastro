import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import type { TarotPlan } from '@/data/tarotPlans';

type Props = {
  plan: TarotPlan;
  onBook: () => void;
};

export function PricingCard({ plan, onBook }: Props) {
  return (
    <div
      className={cn(
        'card card-interactive relative flex h-full flex-col items-center px-6 pb-6 pt-9 text-center',
        plan.featured && 'card-featured',
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill bg-gold px-4 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white shadow-gold-glow">
          Most Popular
        </span>
      )}

      {/* tarot card image — identical frame for every plan */}
      <span className="block w-[92px] overflow-hidden rounded-lg border border-gold/25 shadow-float">
        <img
          src={plan.image}
          alt={`${plan.name} tarot card`}
          className="aspect-[7/12] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </span>

      <h3 className="mt-5 text-h3">{plan.name}</h3>
      <span className="mt-1 font-display text-2xl font-semibold text-plum">{plan.price}</span>
      <p className="mt-2 flex-1 text-caption text-body">{plan.description}</p>

      <Button
        className="mt-6 w-full"
        size="sm"
        variant={plan.featured ? 'primary' : 'secondary'}
        onClick={onBook}
      >
        Book Reading
      </Button>
    </div>
  );
}
