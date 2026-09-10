import type { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  float?: boolean;
};

export function FloatingCard({ children, className, style, float = true }: Props) {
  return (
    <div
      style={style}
      className={cn(
        'rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-float backdrop-blur-sm',
        float && 'animate-floaty',
        className,
      )}
    >
      {children}
    </div>
  );
}
