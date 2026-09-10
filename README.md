# Vedastro.ai — Tarot · Astrology · Healing

Marketing site. Vite + React + TypeScript + Tailwind. Fully static — no backend, no database.

## Local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build → dist/
npm run preview     # serve the built dist/
```

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. Vercel → **Add New → Project** → import the repo.
   - Framework: **Vite** (auto-detected)
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy. `vercel.json` already handles SPA routing.

Every `git push` to the main branch redeploys automatically.

## Editing content

| What | Where |
| --- | --- |
| Tarot prices / names | `src/data/tarotPlans.ts` |
| Spell cards | `src/data/spells.ts` |
| Written testimonials | `src/data/testimonials.ts` |
| WhatsApp number, email, brand text | `src/data/site.ts` |
| Nav links | `src/data/nav.ts` |

## Adding client review screenshots

Drop image files into **`assets/images/proof/`** (`.jpg` / `.jpeg` / `.png` / `.webp` — not `.heic`).
They appear in the "Real Reviews From Real Clients" section automatically, newest first
(files are sorted by name, descending). Commit + push → the live site rebuilds in ~1 min.

To force a specific screenshot to the top, name it with a date/number prefix, e.g.
`2026-09-10-01.jpg`.

## Replacing images

Real photos live in `public/images/` (hero, astrology, tarot cards, spells, client avatars,
logo). Replace a file with the same name/path — no code change. Specs are in
`public/images/README.md`.
