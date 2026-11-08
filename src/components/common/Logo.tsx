import { useId } from 'react';
import { cn } from '@/utils/cn';

export function LogoMark({ className }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className={className}>
      <defs>
        <linearGradient id={gradientId} x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B6DFF" />
          <stop offset="0.55" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <path d="M7.5 25V7" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M7.5 7 24.5 25" stroke={`url(#${gradientId})`} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M24.5 25V13" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="24.5" cy="6.5" r="2.6" fill="#22D3EE" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 text-fg', className)}>
      <LogoMark className="size-7" />
      <span className="font-display text-[0.9375rem] font-bold tracking-[0.16em]">NAVMANTHAN</span>
    </span>
  );
}
