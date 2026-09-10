import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  featured?: boolean;
  tone?: 'white' | 'cream';
};

/** Thin card surface built on the `.card` design token. */
export function Card({
  children,
  className,
  interactive = false,
  featured = false,
  tone = 'white',
}: Props) {
  return (
    <div
      className={cn(
        'card p-7',
        tone === 'cream' && 'bg-cream',
        interactive && 'card-interactive',
        featured && 'card-featured',
        className,
      )}
    >
      {children}
    </div>
  );
}
