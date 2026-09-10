import { cn } from '@/lib/cn';
import { site } from '@/data/site';

/**
 * Brand mark — the circular celestial emblem cropped out of the full logo
 * lockup at /images/brand/logo.png. Replace that file with a dedicated
 * square mark to drop the background-position tuning.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label={site.name}
      className={cn('block shrink-0 rounded-full bg-no-repeat', className)}
      style={{
        backgroundImage: 'url(/images/brand/logo.png)',
        backgroundSize: '270%',
        backgroundPosition: '50% 16%',
      }}
    />
  );
}
