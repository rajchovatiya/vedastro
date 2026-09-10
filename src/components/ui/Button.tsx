import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type BaseProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  icon?: ReactNode;
};

/** Maps to the `.btn-*` component tokens defined in styles/index.css. */
const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

const sizeClass: Record<Size, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

function ArrowChip() {
  return (
    <span
      className="grid h-5 w-5 place-items-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5"
      style={{ backgroundColor: 'color-mix(in srgb, currentColor 16%, transparent)' }}
    >
      <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
    </span>
  );
}

export type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', withArrow = true, icon, className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn('group', variantClass[variant], sizeClass[size], className)}
      {...props}
    >
      {icon}
      {children}
      {withArrow && <ArrowChip />}
    </button>
  );
});

type LinkButtonProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode };

export function LinkButton({
  variant = 'primary',
  size = 'md',
  withArrow = true,
  icon,
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a className={cn('group', variantClass[variant], sizeClass[size], className)} {...props}>
      {icon}
      {children}
      {withArrow && <ArrowChip />}
    </a>
  );
}
