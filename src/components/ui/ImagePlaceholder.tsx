import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

/**
 * Warm-toned stand-in used until real photography is dropped into
 * public/images. Keeps correct aspect + rounding so swapping in
 * a real <img> is a one-line change.
 */
export function ImagePlaceholder({
  label,
  className,
  rounded = 'media',
}: {
  label: string;
  className?: string;
  rounded?: 'media' | 'card' | 'full' | 'none';
}) {
  const radius = {
    media: 'rounded-media',
    card: 'rounded-card',
    full: 'rounded-full',
    none: '',
  }[rounded];

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-ivory to-gold-tint text-gold-deep/70',
        radius,
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 25%, rgba(232,201,106,0.45), transparent 45%), radial-gradient(circle at 75% 70%, rgba(248,241,227,0.8), transparent 40%)',
        }}
      />
      <span className="relative flex flex-col items-center gap-2 text-center text-[0.75rem] font-medium uppercase tracking-eyebrow">
        <ImageIcon className="h-5 w-5" />
        {label}
      </span>
    </div>
  );
}
