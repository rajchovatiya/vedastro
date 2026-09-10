import { Briefcase, type LucideIcon } from 'lucide-react';

export const manifest = {
  eyebrow: 'Spells & Rituals',
  title: 'Manifest Your Desires',
  description:
    'Powerful and positive spiritual rituals to help you attract love, abundance, success and happiness.',
  cta: 'Explore Spells & Rituals',
} as const;

export type Spell = {
  id: string;
  name: string;
  price: string;
  note: string;
  image?: string;
  icon?: LucideIcon;
};

export const spells: Spell[] = [
  {
    id: 'love-spell',
    name: 'Love Spell',
    price: '₹4,444',
    note: 'Attract love & harmony',
    image: '/images/spells/love-spell.jpg',
  },
  {
    id: 'bayleaf',
    name: 'Bayleaf Ritual',
    price: '₹444',
    note: 'Remove negativity',
    image: '/images/spells/bayleaf.jpg',
  },
  {
    id: 'candle',
    name: 'Candle Healing',
    price: '₹999',
    note: 'Balance your energy',
    image: '/images/spells/candle-healing.jpg',
  },
  {
    id: 'career-job',
    name: 'Career/Job Healing',
    price: '₹1,111',
    note: 'New opportunities',
    icon: Briefcase,
    image: '/images/spells/career-job.jpg',
  },
];
