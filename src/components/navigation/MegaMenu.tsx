import { ArrowRight } from 'lucide-react';
import { m } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Section';
import { servicePath, services } from '@/data/services';

export function MegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <m.div
      id="services-mega-menu"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="absolute inset-x-0 top-full border-y border-line bg-ink-850 shadow-[0_32px_60px_-24px_rgb(0_0_0/0.7)]"
    >
      <Container className="grid gap-8 py-8 lg:grid-cols-[1fr_280px]">
        <ul className="grid grid-cols-2 gap-1 xl:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                to={servicePath(service.slug)}
                onClick={onNavigate}
                className="group flex h-full gap-3.5 rounded-xl p-3.5 transition-colors hover:bg-surface-raised"
              >
                <span className="icon-tile size-10 shrink-0">
                  <service.icon aria-hidden className="size-5" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-fg">{service.shortTitle}</span>
                  <span className="mt-1 block text-[0.8125rem] leading-snug text-fg-muted">{service.summary}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col justify-between rounded-xl border border-line bg-surface p-5">
          <div>
            <p className="font-display text-base font-semibold text-fg">Not sure where to begin?</p>
            <p className="mt-2 text-[0.8125rem] leading-relaxed text-fg-muted">
              Describe the problem you want to solve and we will suggest a sensible starting point.
            </p>
          </div>
          <div className="mt-5 space-y-3">
            <Button to="/contact#enquiry" size="md" onClick={onNavigate} className="w-full">
              Let's Talk Business
            </Button>
            <Link
              to="/services"
              onClick={onNavigate}
              className="group flex items-center justify-center gap-1.5 text-sm font-medium text-fg-muted hover:text-fg"
            >
              View all services
              <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </m.div>
  );
}
