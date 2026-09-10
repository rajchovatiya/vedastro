import { Sparkles } from 'lucide-react';

/** Slim premium strip above the header (fixed 36px — see --top-chrome). */
export function AnnouncementBar() {
  return (
    <div className="flex h-9 items-center justify-center bg-gold px-4 text-white">
      <Sparkles className="mr-2 h-3 w-3 shrink-0" strokeWidth={2} />
      <p className="truncate text-center text-[0.7rem] font-medium tracking-[0.08em] sm:text-[0.74rem] sm:tracking-[0.1em]">
        Trusted Spiritual Guidance
        <span className="hidden xs:inline">
          <span className="mx-1.5 text-white/55 sm:mx-2.5">•</span>
          Private &amp; Confidential Sessions
        </span>
      </p>
    </div>
  );
}
