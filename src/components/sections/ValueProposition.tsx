import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { valueProposition } from '@/data/company';

const pillars = [
  {
    title: 'Artificial intelligence',
    description: 'Assistants, agents and models that work on your data and within your rules.',
  },
  {
    title: 'Enterprise engineering',
    description: 'ERP, integrations and backend systems that hold up in everyday operations.',
  },
  {
    title: 'Digital experiences',
    description: 'Clear, fast interfaces that make powerful systems easy to use.',
  },
];

export function ValueProposition() {
  return (
    <Section tone="light">
      <Reveal>
        <p className="max-w-5xl font-display text-[1.75rem] leading-[1.25] font-medium tracking-[-0.025em] text-fg text-pretty sm:text-4xl lg:text-[2.875rem]">
          {valueProposition}
        </p>
      </Reveal>
      <div className="mt-14 grid gap-8 border-t border-line pt-8 md:grid-cols-3 lg:mt-20">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.08}>
            <h2 className="font-display text-lg font-semibold text-fg">{pillar.title}</h2>
            <p className="mt-2 max-w-sm leading-relaxed text-fg-muted">{pillar.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
