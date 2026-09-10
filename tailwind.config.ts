import type { Config } from 'tailwindcss';

/**
 * Single source of truth for the Vedastro design system.
 * Raw values live as CSS custom properties in src/styles/index.css
 * (channel form, e.g. "217 169 40") so Tailwind opacity modifiers
 * like `border-gold/20` keep working. This file only maps them.
 */
const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // ---- Breakpoints (mobile-first) ----
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '2.25rem',
      },
      screens: {
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        ivory: withAlpha('--c-ivory'), //   #FFFDF8  page base
        cream: withAlpha('--c-cream'), //   #F8F1E3  alt sections / tints
        gold: {
          DEFAULT: withAlpha('--c-gold'), //      #D9A928  primary accent
          champagne: withAlpha('--c-champagne'), // #E8C96A  soft accent / borders
          deep: withAlpha('--c-gold-deep'), //    #A9781A  gold text on light (AA)
          tint: withAlpha('--c-gold-tint'), //    #F4E9CC  wash for chips / medallions
        },
        plum: {
          DEFAULT: withAlpha('--c-plum'), //   #24152F  headings
          soft: withAlpha('--c-plum-soft'), // #574A61  muted headings / nav
        },
        charcoal: withAlpha('--c-charcoal'), // #29252A  strong text
        ink: withAlpha('--c-plum'), //          alias -> plum (headings)
        'ink-soft': withAlpha('--c-plum-soft'),
        body: withAlpha('--c-body'), //         #46414A  paragraph text
        line: withAlpha('--c-line'), //         #ECE0C6  warm hairline
        sage: withAlpha('--c-sage'), //         #5F7A5B  success / trust only
        blush: withAlpha('--c-blush'), //       #F7EDE6  soft warm band
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        // [size, { lineHeight, letterSpacing }] — 'body'/'lead' are separate
        // from the `body` colour token to avoid a `text-body` class clash.
        display: ['clamp(2.2rem, 3.9vw, 3.4rem)', { lineHeight: '1.13', letterSpacing: '-0.012em' }],
        h1: ['clamp(2.1rem, 3.6vw, 3rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        h2: ['clamp(1.7rem, 2.8vw, 2.35rem)', { lineHeight: '1.16', letterSpacing: '-0.006em' }],
        h3: ['clamp(1.2rem, 1.8vw, 1.5rem)', { lineHeight: '1.24' }],
        base: ['1rem', { lineHeight: '1.66' }],
        lead: ['1.06rem', { lineHeight: '1.68' }],
        caption: ['0.85rem', { lineHeight: '1.5' }],
        label: ['0.72rem', { lineHeight: '1.4', letterSpacing: '0.18em' }],
        btn: ['0.9rem', { lineHeight: '1', letterSpacing: '0.01em' }],
      },
      letterSpacing: {
        eyebrow: '0.2em',
      },
      spacing: {
        'section-y': 'clamp(2.75rem, 5vw, 4.25rem)',
        'section-y-sm': 'clamp(2rem, 3.5vw, 3rem)',
      },
      borderRadius: {
        btn: '9999px',
        card: '20px',
        media: '24px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 20px 50px -28px rgb(var(--c-plum) / 0.22)',
        'card-hover': '0 28px 64px -26px rgb(var(--c-plum) / 0.28)',
        float: '0 14px 38px -14px rgb(var(--c-plum) / 0.20)',
        header: '0 10px 34px -20px rgb(var(--c-plum) / 0.22)',
        'gold-glow': '0 16px 40px -18px rgb(var(--c-gold) / 0.45)',
      },
      maxWidth: {
        prose: '36rem',
        content: '1320px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 120s linear infinite',
        marquee: 'marquee 34s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
} satisfies Config;
