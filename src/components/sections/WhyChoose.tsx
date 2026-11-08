import { Reveal } from '@/components/common/Reveal';
import { Section, SectionHeading } from '@/components/common/Section';
import { whyChoose } from '@/data/company';

export function WhyChoose() {
  return (
    <Section tone="light">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
        <SectionHeading
          eyebrow="Why choose Navmanthan?"
          title="Serious engineering, applied with common sense"
          className="lg:sticky lg:top-28 lg:self-start"
        />
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {whyChoose.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 2) * 0.06}>
              <reason.icon aria-hidden className="size-6 text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg font-semibold text-fg">{reason.title}</h3>
              <p className="mt-2 leading-relaxed text-fg-muted">{reason.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
