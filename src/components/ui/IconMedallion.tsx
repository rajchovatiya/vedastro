import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizes = {
  sm: 'h-10 w-10',
  md: 'h-14 w-14',
  lg: 'h-16 w-16',
};

export function IconMedallion({ children, size = 'md', className }: Props) {
  return (
    <span
      className={cn(
        'grid place-items-center rounded-full bg-gold-tint text-gold-deep ring-1 ring-gold-champagne/50',
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
