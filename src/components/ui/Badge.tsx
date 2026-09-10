import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/cn';

type Props = {
  children: ReactNode;
  icon?: ReactNode;
  tone?: 'check' | 'gold' | 'plain';
  className?: string;
};

export function Badge({ children, icon, tone = 'plain', className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full text-[0.8rem] font-medium',
        tone === 'gold' && 'bg-gold-tint px-3.5 py-1.5 text-gold-deep',
        tone !== 'gold' && 'text-plum-soft',
        className,
      )}
    >
      {tone === 'check' ? (
        <span className="grid h-4 w-4 place-items-center rounded-full bg-sage/15 text-sage">
          <Check className="h-3 w-3" strokeWidth={3} />
        </span>
      ) : (
        icon
      )}
      {children}
    </span>
  );
}
