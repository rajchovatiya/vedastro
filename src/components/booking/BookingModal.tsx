import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useBooking } from '@/components/booking/BookingProvider';
import { Button } from '@/components/ui/Button';
import { site, whatsappLink } from '@/data/site';
import { cn } from '@/lib/cn';

const services = [
  'Tarot Reading',
  'Astrology Consultation',
  'Spells & Rituals',
  'Spiritual Guidance',
];

export function BookingModal() {
  const { isOpen, service, close } = useBooking();
  const [name, setName] = useState('');
  const [selected, setSelected] = useState(services[0]);
  const [preferredTime, setPreferredTime] = useState('');
  const [note, setNote] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && service) {
      const match = services.find((s) => service.toLowerCase().includes(s.split(' ')[0].toLowerCase()));
      setSelected(match ?? services[0]);
    }
  }, [isOpen, service]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const message = [
    `Hi ${site.name}, I'd like to book a session.`,
    ``,
    `Name: ${name || '—'}`,
    `Service: ${service ?? selected}`,
    `Preferred time: ${preferredTime || 'flexible'}`,
    note ? `Note: ${note}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center">
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={close} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        tabIndex={-1}
        className="card relative w-full max-w-md bg-ivory p-7 focus:outline-none"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-line text-ink hover:bg-gold-tint"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="eyebrow">Book a Session</span>
        <h2 id="booking-title" className="mt-2 text-[1.6rem]">
          Begin Your Journey to Clarity
        </h2>
        <p className="mt-2 text-[0.88rem] text-body">
          Share a few details and we&rsquo;ll continue on WhatsApp to confirm your slot.
        </p>

        <div className="mt-5 space-y-4">
          <Field label="Your name">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Priya Sharma"
              className={inputCls}
            />
          </Field>

          <Field label="Service">
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelected(s)}
                  className={cn(
                    'rounded-full border px-3.5 py-1.5 text-[0.8rem] transition-colors',
                    (service ?? selected) === s
                      ? 'border-gold bg-gold-tint text-gold-deep'
                      : 'border-line text-body hover:border-gold-champagne',
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Preferred time">
            <input
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              placeholder="e.g. Weekday evenings"
              className={inputCls}
            />
          </Field>

          <Field label="Anything you'd like us to know? (optional)">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              className={cn(inputCls, 'resize-none')}
            />
          </Field>
        </div>

        <a href={whatsappLink(message)} target="_blank" rel="noreferrer" className="mt-6 block">
          <Button className="w-full" withArrow>
            Continue on WhatsApp
          </Button>
        </a>
        <p className="mt-3 text-center text-[0.72rem] text-body">
          Private & confidential · No payment required to enquire
        </p>
      </div>
    </div>
  );
}

const inputCls =
  'w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[0.88rem] text-plum placeholder:text-body/60 focus:border-gold focus:outline-none';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.78rem] font-medium text-ink-soft">{label}</span>
      {children}
    </label>
  );
}
