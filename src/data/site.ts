/** Global brand + contact constants. */
export const site = {
  name: 'Vedastro.ai',
  descriptor: 'Tarot • Astrology • Healing',
  tagline: 'Know Your Stars. Transform Your Life.',
  whatsappNumber: '917096165142',
  whatsappDisplay: '+91 70961 65142',
  email: 'hello@vedastro.ai',
} as const;

/** Build a wa.me deep link with a prefilled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
