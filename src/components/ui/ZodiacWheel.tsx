import { cn } from '@/lib/cn';

/** Decorative concentric zodiac-wheel line art. Purely ornamental. */
export function ZodiacWheel({ className, spin = true }: { className?: string; spin?: boolean }) {
  const ticks = Array.from({ length: 12 });

  return (
    <svg
      viewBox="0 0 200 200"
      width="200"
      height="200"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className={cn(spin && 'animate-spin-slow', className)}
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <circle cx="100" cy="100" r="94" />
        <circle cx="100" cy="100" r="78" strokeDasharray="1 4" />
        <circle cx="100" cy="100" r="52" />
        <circle cx="100" cy="100" r="30" strokeOpacity="0.6" />
        {ticks.map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={100 + 52 * Math.cos(a)}
              y1={100 + 52 * Math.sin(a)}
              x2={100 + 78 * Math.cos(a)}
              y2={100 + 78 * Math.sin(a)}
            />
          );
        })}
      </g>
      <g fill="currentColor">
        {ticks.map((_, i) => {
          const a = ((i * 30 - 90) * Math.PI) / 180;
          return <circle key={i} cx={100 + 88 * Math.cos(a)} cy={100 + 88 * Math.sin(a)} r="1.6" />;
        })}
      </g>
    </svg>
  );
}
