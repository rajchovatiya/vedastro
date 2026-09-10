import { Star } from 'lucide-react';
import { cn } from '@/lib/cn';

type Props = {
  value?: number;
  count?: number;
  size?: number;
  className?: string;
};

export function StarRating({ value = 5, count = 5, size = 16, className }: Props) {
  return (
    <span className={cn('inline-flex items-center gap-0.5 text-gold', className)} aria-label={`${value} out of ${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={i < Math.round(value) ? 'fill-current' : 'fill-transparent opacity-40'}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}
