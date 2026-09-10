/** Global brand + contact constants. */
export const site = {
  name: 'Shubhika',
  descriptor: 'Tarot • Astrology • Healing',
  tagline: 'Find Clarity When Life Feels Uncertain.',
  whatsappNumber: '917096165142',
  whatsappDisplay: '+91 70961 65142',
  email: 'hello@shubhika.com',
} as const;

/** Build a wa.me deep link with a prefilled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
