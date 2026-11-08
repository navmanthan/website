import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Chip } from '@/components/common/Chip';
import { Reveal } from '@/components/common/Reveal';
import { Section, SectionHeading } from '@/components/common/Section';
import { technologyCategories } from '@/data/technologies';

export function TechStackPreview() {
  return (
    <Section tone="mist">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Our technology stack"
            title="Proven tools, chosen for the job"
            description="We work with established open technologies, so what we build stays maintainable long after launch."
          />
          <Link to="/technologies" className="group mt-7 inline-flex items-center gap-1.5 font-semibold text-accent">
            Explore our technologies
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <Reveal>
          <dl className="divide-y divide-line border-y border-line">
            {technologyCategories.map((category) => (
              <div key={category.id} className="grid gap-3 py-5 sm:grid-cols-[150px_1fr] sm:gap-6">
                <dt className="flex items-center gap-2.5 self-start pt-1.5 text-sm font-semibold text-fg">
                  <category.icon aria-hidden className="size-4 text-accent" strokeWidth={1.75} />
                  {category.id === 'ai' ? 'AI' : category.title}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Chip key={item.name}>{item.name}</Chip>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
