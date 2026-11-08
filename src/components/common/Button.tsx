import { ArrowRight } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary';
type Size = 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps &
  ({ to: string; onClick?: () => void } | (ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }));

const variants: Record<Variant, string> = {
  primary: 'btn-gradient text-white shadow-[0_8px_24px_-10px_rgb(109_74_255/0.7)] hover:brightness-110',
  secondary: 'border border-line text-fg hover:bg-surface-raised',
};

const sizes: Record<Size, string> = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-[0.9375rem]',
};

export function Button({ variant = 'primary', size = 'lg', arrow, className, children, ...props }: ButtonProps) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold whitespace-nowrap transition duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (props.to !== undefined) {
    return (
      <Link to={props.to} onClick={props.onClick} className={classes}>
        {content}
      </Link>
    );
  }

  const { to: _to, ...buttonProps } = props;
  return (
    <button {...buttonProps} className={classes}>
      {content}
    </button>
  );
}
