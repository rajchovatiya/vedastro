import { cn } from '@/lib/cn';

/** Decorative gold botanical corner flourish (matches the reference CTA band). */
export function LeafFlourish({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 120" fill="none" aria-hidden="true" className={cn(className)}>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.7">
        <path d="M8 112C40 108 78 88 96 54c8-16 12-34 12-50" />
        <path d="M96 54c-18 2-34-4-44-18M96 54c2-18-4-34-18-44" />
        <path d="M70 76c-14 4-28 0-38-12M70 76c4-14 0-28-12-38" />
        <path d="M44 96c-11 4-22 2-30-8M44 96c4-11 2-22-8-30" />
      </g>
      <circle cx="112" cy="8" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="126" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
