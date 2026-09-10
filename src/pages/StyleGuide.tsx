import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StarRating } from '@/components/ui/StarRating';
import { Badge } from '@/components/ui/Badge';
import { IconMedallion } from '@/components/ui/IconMedallion';

const swatches = [
  ['Warm Ivory', '#FFFDF8', 'bg-ivory'],
  ['Soft Cream', '#F8F1E3', 'bg-cream'],
  ['Premium Gold', '#D9A928', 'bg-gold'],
  ['Champagne Gold', '#E8C96A', 'bg-gold-champagne'],
  ['Gold Deep (text)', '#A9781A', 'bg-gold-deep'],
  ['Deep Plum', '#24152F', 'bg-plum'],
  ['Charcoal', '#29252A', 'bg-charcoal'],
  ['Sage (success)', '#5F7A5B', 'bg-sage'],
];

export function StyleGuide() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="container-page section space-y-20">
        <header className="space-y-2">
          <span className="eyebrow">Vedastro Design System</span>
          <h1 className="text-display">The Premium Kit</h1>
          <p className="body-lg max-w-prose">
            Centralised tokens — colour, type, spacing, cards, buttons and motion. Light, editorial,
            restrained gold.
          </p>
        </header>

        {/* Colour */}
        <section className="space-y-6">
          <SectionHeader align="left" eyebrow="01" title="Colour palette" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {swatches.map(([name, hex, cls]) => (
              <div key={name} className="card overflow-hidden">
                <div className={`${cls} h-24 w-full`} />
                <div className="p-3">
                  <p className="text-caption font-medium text-plum">{name}</p>
                  <p className="text-caption text-body">{hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Type */}
        <section className="space-y-6">
          <SectionHeader align="left" eyebrow="02" title="Typography scale" />
          <div className="space-y-5 border-t border-line pt-6">
            <p className="text-display">Display — Cormorant Garamond</p>
            <p className="heading-1">Heading 1 — editorial serif</p>
            <p className="heading-2">Heading 2 — editorial serif</p>
            <p className="heading-3">Heading 3 — editorial serif</p>
            <p className="body-lg max-w-prose">
              Body large (Poppins) — used for hero supporting copy and lead paragraphs. Excellent
              readability with a 1.72 line height.
            </p>
            <p className="body-text max-w-prose">
              Body (Poppins) — default paragraph text at a 1.7 line height for comfortable reading
              across long sections.
            </p>
            <p className="caption">Caption — supporting metadata and fine print.</p>
            <p className="eyebrow">Eyebrow label · uppercase · tracked</p>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <SectionHeader align="left" eyebrow="03" title="Buttons" />
          <div className="flex flex-wrap items-center gap-4">
            <Button>Book a Session</Button>
            <Button variant="secondary">Explore Tarot</Button>
            <Button variant="ghost" withArrow={false} icon={<Sparkles className="h-4 w-4" />}>
              Ghost
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="btn-primary btn-md">
              Raw .btn-primary <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="btn-secondary btn-md">
              Raw .btn-secondary
            </a>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-6">
          <SectionHeader align="left" eyebrow="04" title="Cards" />
          <div className="grid gap-6 sm:grid-cols-3">
            <Card interactive>
              <IconMedallion>
                <Sparkles className="h-5 w-5" />
              </IconMedallion>
              <h3 className="mt-4 text-h3">Interactive card</h3>
              <p className="mt-2 body-text">Thin gold border, soft plum shadow, lift on hover.</p>
            </Card>
            <Card tone="cream">
              <h3 className="text-h3">Cream card</h3>
              <p className="mt-2 body-text">For nested panels on white sections.</p>
            </Card>
            <Card featured>
              <span className="eyebrow">Most Popular</span>
              <h3 className="mt-2 text-h3">Featured card</h3>
              <p className="mt-2 body-text">2px gold border + elevated shadow.</p>
            </Card>
          </div>
        </section>

        {/* Misc tokens */}
        <section className="space-y-6">
          <SectionHeader align="left" eyebrow="05" title="Indicators & spacing" />
          <div className="flex flex-wrap items-center gap-6">
            <StarRating />
            <Badge tone="check">Private &amp; Confidential</Badge>
            <Badge tone="gold">
              <ShieldCheck className="h-3.5 w-3.5" /> 100% Secure
            </Badge>
          </div>
          <div className="rounded-card border border-dashed border-gold/40 p-6">
            <p className="caption">
              <code>.container-page</code> max 1240px · <code>.section</code> vertical rhythm
              clamp(4rem, 9vw, 7.5rem) · <code>--radius-card</code> 20px · <code>--radius-btn</code>{' '}
              full pill
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
