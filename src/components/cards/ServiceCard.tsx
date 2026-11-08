import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicePath } from '@/data/services';
import type { Service } from '@/types';
import { cn } from '@/utils/cn';

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_20px_40px_-28px_rgb(30_27_75/0.45)] sm:p-7',
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <span className="icon-tile size-11">
          <service.icon aria-hidden className="size-[22px]" strokeWidth={1.75} />
        </span>
        <ArrowUpRight
          aria-hidden
          className="size-5 text-fg-subtle transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold text-fg">
        <Link to={servicePath(service.slug)} className="after:absolute after:inset-0 after:rounded-2xl">
          {service.shortTitle}
        </Link>
      </h3>
      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-fg-muted">{service.summary}</p>
    </article>
  );
}
