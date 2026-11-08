import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Reveal } from '@/components/common/Reveal';
import { Section, SectionHeading } from '@/components/common/Section';
import { aiSolutions } from '@/data/aiSolutions';
import { servicePath, services } from '@/data/services';

// The fifth card widens to complete the six-column grid beside the closing tile.
const cardSpan = (index: number) => (index === 4 ? 'lg:col-span-4' : 'lg:col-span-2');

export function ServicesOverview() {
  const [featured, ...rest] = services;

  return (
    <Section tone="mist">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Services"
          title="One partner across AI, enterprise systems and product engineering"
          description="Six practice areas, built to work together as your needs change."
        />
        <Link
          to="/services"
          className="group inline-flex shrink-0 items-center gap-1.5 font-semibold text-accent"
        >
          View all services
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <Reveal className="md:col-span-2 lg:col-span-4">
          <article className="tone-dark hero-backdrop group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-7 sm:p-9">
            <div>
              <div className="flex items-start justify-between">
                <span className="icon-tile size-11">
                  <featured.icon aria-hidden className="size-[22px]" strokeWidth={1.75} />
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="size-5 text-fg-subtle transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-fg">
                <Link to={servicePath(featured.slug)} className="after:absolute after:inset-0 after:rounded-2xl">
                  {featured.title}
                </Link>
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-fg-muted">{featured.description}</p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {aiSolutions.map((solution) => (
                <li
                  key={solution.id}
                  className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[0.8125rem] text-fg-muted"
                >
                  {solution.title}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        {rest.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.05} className={cardSpan(index)}>
            <ServiceCard service={service} />
          </Reveal>
        ))}

        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-line p-7">
            <p className="font-display text-lg font-semibold text-fg">Need something that spans several of these?</p>
            <Link to="/contact#enquiry" className="group mt-6 inline-flex items-center gap-1.5 font-semibold text-accent">
              Tell us about it
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
