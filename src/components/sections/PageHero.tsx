import { ChevronRight } from 'lucide-react';
import { m } from 'motion/react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Section';
import { cn } from '@/utils/cn';

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
}

export function PageHero({ eyebrow, title, description, breadcrumbs, actions, aside }: PageHeroProps) {
  return (
    <section className="tone-dark hero-backdrop grid-lines relative overflow-hidden pt-36 pb-20 sm:pt-40 lg:pb-24">
      <Container className={cn('relative', Boolean(aside) && 'grid items-end gap-12 lg:grid-cols-[1.45fr_1fr] lg:gap-20')}>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {breadcrumbs && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-fg-subtle">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    {index > 0 && <ChevronRight aria-hidden className="size-3.5" />}
                    {crumb.to ? (
                      <Link to={crumb.to} className="transition-colors hover:text-fg">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-fg-muted">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && <p className="mb-4 text-sm font-semibold text-accent">{eyebrow}</p>}
          <h1 className="font-display text-4xl leading-[1.1] font-semibold tracking-[-0.03em] text-fg text-balance sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty">{description}</p>
          {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
        </m.div>
        {aside && (
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {aside}
          </m.div>
        )}
      </Container>
    </section>
  );
}
