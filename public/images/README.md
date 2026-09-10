# Image assets

Files here are served as-is from the site root (e.g. `public/images/hero/tarot-reader.svg`
→ `/images/hero/tarot-reader.svg`). They are **never** inlined as base64 — always real files.

To replace a placeholder, drop a real file with the **same name and path**. No code change needed.

| Path | Used by | Spec |
| --- | --- | --- |
| `hero/tarot-reader.png` (currently in use) | `components/sections/Hero.tsx` (`heroImage` constant) | Portrait **2:3–4:5**, ≥ 1024×1536, premium Indian tarot reader — cream / soft‑gold / muted‑pink clothing, calm confident expression, fine jewellery, holding a fan of cards. Any background is fine — the hero feathers the photo's edges into the cream panel and lays a gold zodiac ring behind the subject, so a plain studio backdrop works. Keep the subject roughly centred with headroom above the hair. **Optimise**: current file is ~2.4 MB; export a WebP (~300 KB) and point `heroImage` at it. |
| `astrology/cosmic-wheel.jpeg` (currently in use) | `components/sections/AstrologySection.tsx` (`cosmicImage`) | Square–ish, ≥ 1000×1000. A zodiac wheel / kundali with crystals or brass objects. Any background works — the section feathers the photo edges into the cream panel with a radial `mask-image`. |
| `session/tarot-table.svg` → replace with `session/tarot-session.jpg` and update the constant in `SessionPreview.tsx` | `components/sections/SessionPreview.tsx` + `VideoThumb` | **16:9**, ≥ 1600×900. Cinematic tarot table — candles, crystals, a card spread, warm low light. Editorial, calm, premium. This is the poster frame for the session video. |
| _(optional)_ `testimonials/video-1..3.jpg` | `components/sections/VideoTestimonials.tsx` — pass as `src` to `VideoThumb` | **4:3**, ≥ 1000×750. Real client video stills or warm lifestyle frames. Currently render as tasteful gradient placeholders. |

Optimise before committing: long edge ≤ 2000 px, mozjpeg q≈80 or WebP.
