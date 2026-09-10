export type NavItem = { label: string; href: string };

/** Only links that actually go somewhere. `/#id` scrolls to a homepage section. */
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Tarot', href: '/#tarot' },
  { label: 'Spells', href: '/#spells' },
  { label: 'Reviews', href: '/reviews' },
];
