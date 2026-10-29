/**
 * Spell work gallery — the /spells page.
 *
 * Each spell has its own photo folder:  assets/images/spell-work/<id>/
 * Drop 4–5 photos into that folder and they appear on the page, no code edit.
 * Photos are shown in filename order — name them 1.jpg, 2.jpg, 3.jpg … to control it.
 *
 * To add / remove / reorder spells, edit the list below. The `id` must match
 * the folder name, and is also the share link:  /spells#<id>
 */
export type SpellWork = {
  id: string;
  name: string;
  description: string;
};

export const spellWork: SpellWork[] = [
  {
    id: 'love-spell',
    name: 'Love Spell',
    description:
      'A heart-centred ritual to attract true love or deepen the bond you already share. Performed with rose, honey and candle work on an auspicious day chosen from your chart. Brings warmth, attraction and harmony back into your love life.',
  },
  {
    id: 'obsession-spell',
    name: 'Obsession Spell',
    description:
      'For when you want someone to think of you constantly and feel a strong pull towards you. This focused ritual binds their attention and emotions to you. Done with personal details and photo for the strongest connection.',
  },
  {
    id: 'ex-back-spell',
    name: 'Ex Back Spell',
    description:
      'Reunite with a lost love and heal what pulled you apart. The ritual softens anger, ego and misunderstanding on both sides. Opens the door for communication and a fresh start together.',
  },
  {
    id: 'marriage-spell',
    name: 'Marriage Spell',
    description:
      'Removes delays and blockages around marriage and brings family approval. Helps a partner commit and moves the relationship towards a wedding. Also used to bring peace and stability into an existing marriage.',
  },
  {
    id: 'money-spell',
    name: 'Money & Abundance Spell',
    description:
      'Clears money blockages and opens new channels of income. Performed with green candles, coins and abundance herbs. Helps stuck payments come through and attracts steady financial growth.',
  },
  {
    id: 'career-spell',
    name: 'Career & Job Spell',
    description:
      'For a new job, promotion or business success. Removes obstacles at the workplace and attracts the right opportunities. Builds confidence and luck for interviews and important decisions.',
  },
  {
    id: 'protection-spell',
    name: 'Protection Spell',
    description:
      'A shield against evil eye, jealousy and negative energy sent your way. Protects you, your home and your family. Recommended when you feel drained, unlucky or watched for no clear reason.',
  },
  {
    id: 'bayleaf-ritual',
    name: 'Bay Leaf Ritual',
    description:
      'A simple but powerful ritual to release negativity and manifest one clear wish. Your intention is written on bay leaves and burned under the right moon phase. Clears your path and brings fast, visible results.',
  },
  {
    id: 'candle-healing',
    name: 'Candle Healing',
    description:
      'Seven-chakra candle work to balance your energy and calm the mind. Releases stress, heaviness and emotional pain. Leaves you feeling lighter, clearer and more at peace.',
  },
  {
    id: 'success-spell',
    name: 'Success Spell',
    description:
      'For exams, court cases, competitions or any goal that matters to you. Strengthens focus and removes hidden obstacles. Brings luck and positive outcomes on the days that count.',
  },
];

const modules = import.meta.glob(
  '/assets/images/spell-work/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP,jfif,JFIF}',
  { eager: true, import: 'default' },
) as Record<string, string>;

/** Photo URLs per spell id, in filename order (1.jpg, 2.jpg, …). */
export const spellPhotos: Record<string, string[]> = {};
Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .forEach(([path, url]) => {
    // /assets/images/spell-work/<id>/<file>
    const id = path.split('/')[4];
    (spellPhotos[id] ??= []).push(url);
  });
