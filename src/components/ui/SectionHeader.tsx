import { cn } from '@/lib/cn';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  as?: 'h2' | 'h3';
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  as: Heading = 'h2',
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading
        className={cn('text-balance', align === 'center' && 'mx-auto max-w-2xl')}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className={cn('body-text', align === 'center' && 'mx-auto max-w-prose')}>{subtitle}</p>
      )}
    </div>
  );
}
