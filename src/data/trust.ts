import { Radio, Star, CalendarDays, ShieldCheck, type LucideIcon } from 'lucide-react';

export type TrustStat = { icon: LucideIcon; value: string; label: string };

export const trustStats: TrustStat[] = [
  { icon: Radio, value: '10,000+', label: 'Sessions' },
  { icon: Star, value: '4.9/5', label: 'Rating' },
  { icon: CalendarDays, value: '8+ Years', label: 'Experience' },
  { icon: ShieldCheck, value: '100%', label: 'Confidential' },
];
