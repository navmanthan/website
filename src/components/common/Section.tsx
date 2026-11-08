import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export type Tone = 'light' | 'mist' | 'dark';

const toneClasses: Record<Tone, string> = {
  light: 'tone-light bg-canvas',
  mist: 'tone-mist bg-canvas',
  dark: 'tone-dark bg-canvas',
};

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1240px] px-5 sm:px-8', className)}>{children}</div>;
}

interface SectionProps {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ tone = 'light', id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn(toneClasses[tone], 'relative py-20 sm:py-24 lg:py-28', className)}>
      <Container className="relative">{children}</Container>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <p className="mb-4 text-sm font-semibold text-accent">{eyebrow}</p>}
      <h2 className="font-display text-3xl leading-[1.15] font-semibold text-fg text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-fg-muted text-pretty">{description}</p>}
    </div>
  );
}
