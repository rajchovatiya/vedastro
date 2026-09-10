import { cn } from '@/lib/cn';
import { site } from '@/data/site';

/** The Vedastro.ai celestial emblem (cropped square from the full logo). */
export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src="/images/brand/logo-mark.png"
      alt={site.name}
      width={512}
      height={512}
      className={cn('block shrink-0 rounded-full object-cover', className)}
    />
  );
}
