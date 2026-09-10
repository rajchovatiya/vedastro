import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useScrolled } from '@/hooks/useScrolled';
import { useBooking } from '@/components/booking/BookingProvider';
import { navItems } from '@/data/nav';
import { site, whatsappLink } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { BrandMark } from '@/components/ui/BrandMark';

function WhatsappGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.24-8.23 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42l-.47-.01c-.16 0-.43.06-.66.31-.22.24-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

export function Header() {
  const scrolled = useScrolled(8);
  const { open } = useBooking();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-line bg-ivory/95 shadow-header backdrop-blur-md'
          : 'border-line/60 bg-ivory',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <BrandMark className="h-9 w-9 text-gold" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.4rem] font-semibold text-plum">{site.name}</span>
            <span className="mt-1 hidden whitespace-nowrap text-[0.52rem] font-medium uppercase tracking-[0.2em] text-gold-deep sm:block">
              {site.descriptor}
            </span>
          </span>
        </a>

        {/* Center nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'relative py-1 text-[0.85rem] font-medium text-plum-soft transition-colors hover:text-plum',
                i === 0 &&
                  'text-plum after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-gold',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            withArrow={false}
            className="hidden sm:inline-flex"
            onClick={() => open()}
          >
            Book a Session
          </Button>
          <a
            href={whatsappLink(`Hi ${site.name}, I'd like to book a session.`)}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-sage/25 bg-sage/10 text-sage transition-colors hover:bg-sage/20"
          >
            <WhatsappGlyph className="h-[18px] w-[18px]" />
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-plum lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden',
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-plum/40 transition-opacity duration-300',
            menuOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={cn(
            'absolute right-0 top-0 flex h-full w-[80%] max-w-xs flex-col gap-1 bg-ivory p-6 shadow-card transition-transform duration-300 ease-premium',
            menuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <BrandMark className="h-8 w-8 text-gold" />
              <span className="font-display text-xl font-semibold text-plum">{site.name}</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-plum"
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-[0.95rem] font-medium text-plum-soft transition-colors hover:bg-gold-tint/60 hover:text-plum"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button
            className="mt-5 w-full"
            withArrow={false}
            onClick={() => {
              setMenuOpen(false);
              open();
            }}
          >
            Book a Session
          </Button>
        </div>
      </div>
    </header>
  );
}
