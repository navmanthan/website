import { CheckList } from '@/components/common/CheckList';
import { Reveal } from '@/components/common/Reveal';
import { Section, SectionHeading } from '@/components/common/Section';
import { aiSolutions } from '@/data/aiSolutions';

export function AiSolutionsGrid() {
  return (
    <Section tone="dark" id="ai-solutions" className="hero-backdrop">
      <SectionHeading
        eyebrow="AI solutions"
        title="Six ways we put AI to work"
        description="Each of these can stand alone, or combine into a larger system that shares the same data and guardrails."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {aiSolutions.map((solution, index) => (
          <Reveal key={solution.id} delay={(index % 3) * 0.06}>
            <article id={solution.id} className="h-full rounded-2xl border border-line bg-surface p-7">
              <span className="icon-tile size-11">
                <solution.icon aria-hidden className="size-[22px]" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-fg">{solution.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-fg-muted">{solution.summary}</p>
              <CheckList items={solution.capabilities} className="mt-5 border-t border-line pt-5" />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
