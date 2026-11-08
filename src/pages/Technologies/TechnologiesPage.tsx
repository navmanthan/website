import { Reveal } from '@/components/common/Reveal';
import { Section, SectionHeading } from '@/components/common/Section';
import { Seo } from '@/components/common/Seo';
import { CtaSection } from '@/components/sections/CtaSection';
import { PageHero } from '@/components/sections/PageHero';
import { technologyCategories } from '@/data/technologies';

const selectionPrinciples = [
  {
    title: 'Fit for the problem',
    description: 'We pick tools based on the workload, the data and the team that will maintain them.',
  },
  {
    title: 'Maturity and community',
    description: 'Well-supported technology lowers risk and makes it easier to hire for later.',
  },
  {
    title: 'Clean boundaries',
    description: 'Well-defined interfaces let a model, database or service be replaced without rewriting the rest.',
  },
];

export default function TechnologiesPage() {
  return (
    <>
      <Seo
        title="Technology Stack"
        description="The frontend, backend, AI, database and integration technologies Navmanthan uses to build reliable business software."
      />
      <PageHero
        eyebrow="Technologies"
        title="A focused stack for intelligent, dependable systems"
        description="From interfaces to language models to the databases underneath, these are the tools we use to build software that performs in production."
      />

      <Section tone="light" className="!pt-8 lg:!pt-10">
        <div className="divide-y divide-line">
          {technologyCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-title`}
              className="grid gap-8 py-12 lg:grid-cols-[1fr_2.2fr] lg:gap-14 lg:py-16"
            >
              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <span className="icon-tile size-12">
                  <category.icon aria-hidden className="size-6" strokeWidth={1.75} />
                </span>
                <h2 id={`${category.id}-title`} className="mt-5 font-display text-2xl font-semibold text-fg">
                  {category.title}
                </h2>
                <p className="mt-2 leading-relaxed text-fg-muted">{category.description}</p>
              </Reveal>
              <ul className="grid gap-3 sm:grid-cols-2">
                {category.items.map((item, index) => (
                  <li key={item.name}>
                    <Reveal
                      delay={(index % 2) * 0.05}
                      className="h-full rounded-xl border border-line p-5 transition-colors duration-300 hover:border-accent/40 hover:bg-surface-raised"
                    >
                      <p className="font-display font-semibold text-fg">{item.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-fg-muted">{item.usage}</p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="mt-6 border-t border-line pt-6 text-sm text-fg-subtle">
          Product names are used only to describe the technologies we work with. They are the property of their respective
          owners, and no partnership, certification or endorsement is implied.
        </p>
      </Section>

      <Section tone="dark" className="hero-backdrop">
        <SectionHeading eyebrow="How we choose" title="Technology decisions you can explain" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {selectionPrinciples.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.06} className="border-t border-line pt-6">
              <h3 className="font-display text-lg font-semibold text-fg">{principle.title}</h3>
              <p className="mt-2 leading-relaxed text-fg-muted">{principle.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection title="Have a stack already in place?" description="We can build alongside it, integrate with it or help you plan its next stage." />
    </>
  );
}
