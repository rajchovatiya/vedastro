/**
 * Every image in  assets/images/proof/  (repo root) is picked up automatically.
 * Drop screenshot files in that folder — they appear on the site, no code edit.
 *
 * Order: newest first (sorted by filename, descending). Name a file with a
 * higher date/number prefix (e.g. `2026-09-10-01.jpg`) to force it to the top.
 */
const modules = import.meta.glob(
  '/assets/images/proof/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP,jfif,JFIF}',
  { eager: true, import: 'default' },
) as Record<string, string>;

export const proofShots: string[] = Object.entries(modules)
  .sort(([a], [b]) => b.localeCompare(a, undefined, { numeric: true }))
  .map(([, url]) => url);

/** Styled stand-ins shown only if the proof folder is empty. */
export const mockReviews = [
  { name: 'Ritu', text: 'Didi aapki reading bilkul sahi thi 🙏 3 hafte me hi result mila!', when: 'Today' },
  { name: 'Aditya', text: 'The love spell worked. We are talking again. Thank you so much.', when: 'Yesterday' },
  { name: 'Sneha', text: 'Job mil gayi finally!! Career healing ke baad interview clear hua ✨', when: '2d ago' },
  { name: 'Farah', text: 'So accurate about my family situation. Feeling much lighter now.', when: '3d ago' },
  { name: 'Kabir', text: 'Money blockage cleared — payment stuck for months came through this week.', when: '4d ago' },
];
