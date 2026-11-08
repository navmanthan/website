import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/common/Reveal';
import { Section, SectionHeading } from '@/components/common/Section';
import { industries } from '@/data/industries';

export function IndustriesPreview() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Industries we serve"
        title="Technology applied to the way your sector actually works"
        description="We are not limited to a single industry. These are the areas where our experience with AI, ERP and automation applies most directly."
      />

      <Reveal className="mt-12">
        <ul className="grid overflow-hidden rounded-2xl border border-line bg-line [gap:1px] sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <li key={industry.slug} className="bg-canvas">
              <Link
                to={`/industries#${industry.slug}`}
                className="group flex h-full flex-col p-6 transition-colors hover:bg-surface-raised"
              >
                <industry.icon aria-hidden className="size-6 text-accent" strokeWidth={1.5} />
                <span className="mt-5 font-display text-[1.0625rem] font-semibold text-fg">{industry.name}</span>
                <span className="mt-1.5 text-sm leading-relaxed text-fg-muted">{industry.summary}</span>
              </Link>
            </li>
          ))}
          <li className="tone-dark bg-ink-850">
            <Link to="/industries" className="group flex h-full flex-col justify-between p-6">
              <span className="font-display text-[1.0625rem] font-semibold text-fg">See how we apply this by industry</span>
              <ArrowRight
                aria-hidden
                className="mt-6 size-5 text-accent transition-transform group-hover:translate-x-1"
              />
            </Link>
          </li>
        </ul>
      </Reveal>
    </Section>
  );
}
