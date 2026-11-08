import { m, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import { Section, SectionHeading } from '@/components/common/Section';
import { developmentApproach } from '@/data/company';

export function DevelopmentApproach() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 70%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <Section tone="dark">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeading
          eyebrow="Development approach"
          title="A clear path from first idea to dependable system"
          description="Six stages, with working software to review at each step and no long silences between them."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div ref={trackRef} className="relative">
          <div aria-hidden className="absolute top-2 bottom-2 left-[19px] w-px bg-line">
            <m.div
              style={{ scaleY: progress }}
              className="h-full w-px origin-top bg-gradient-to-b from-violet-brand via-blue-brand to-cyan-brand"
            />
          </div>
          <ol className="relative space-y-10">
            {developmentApproach.map((step, index) => (
              <li key={step.title} className="flex gap-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-ink-850 font-display text-sm font-semibold text-accent">
                  {index + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-xl font-semibold text-fg">{step.title}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-fg-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
