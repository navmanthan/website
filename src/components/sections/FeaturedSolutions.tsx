import { ArrowRight } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';
import { type KeyboardEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckList } from '@/components/common/CheckList';
import { Section, SectionHeading } from '@/components/common/Section';
import { aiSolutions } from '@/data/aiSolutions';
import { cn } from '@/utils/cn';

export function FeaturedSolutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = aiSolutions[activeIndex];

  const onKeyDown = (event: KeyboardEvent) => {
    const direction = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (!direction) return;
    event.preventDefault();
    const next = (activeIndex + direction + aiSolutions.length) % aiSolutions.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <Section tone="dark" className="hero-backdrop">
      <SectionHeading
        eyebrow="Featured solutions"
        title="AI capabilities, shaped into working systems"
        description="Each solution follows a defined path from input to outcome, and connects to the tools your business already relies on."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-10">
        <div
          role="tablist"
          aria-label="AI solutions"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="-mx-5 flex gap-1 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible lg:pb-0"
        >
          {aiSolutions.map((solution, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={solution.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                id={`solution-tab-${solution.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="solution-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors lg:text-[0.9375rem]',
                  selected ? 'bg-surface-raised text-fg' : 'text-fg-muted hover:bg-surface hover:text-fg',
                )}
              >
                <solution.icon
                  aria-hidden
                  className={cn('size-5 shrink-0', selected && 'text-accent')}
                  strokeWidth={1.75}
                />
                <span className="whitespace-nowrap lg:whitespace-normal">{solution.title}</span>
              </button>
            );
          })}
        </div>

        <div
          id="solution-panel"
          role="tabpanel"
          aria-labelledby={`solution-tab-${active.id}`}
          className="min-h-[420px] rounded-2xl border border-line bg-surface p-6 sm:p-9"
        >
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="grid gap-10 md:grid-cols-[1.15fr_1fr]"
            >
              <div>
                <h3 className="font-display text-2xl font-semibold text-fg">{active.title}</h3>
                <p className="mt-3 leading-relaxed text-fg-muted">{active.summary}</p>
                <CheckList items={active.capabilities} className="mt-6" />
                <Link
                  to="/services/artificial-intelligence#ai-solutions"
                  className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  Explore AI services
                  <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div>
                <p className="text-sm font-medium text-fg-subtle">Typical flow</p>
                <div className="relative mt-5">
                  <div aria-hidden className="absolute top-3 bottom-3 left-[5px] w-px bg-line">
                    <span className="animate-flow absolute -left-[2px] h-8 w-[5px] -translate-y-1/2 rounded-full bg-gradient-to-b from-transparent via-cyan-brand to-transparent" />
                  </div>
                  <ol className="space-y-5">
                    {active.flow.map((step) => (
                      <li key={step} className="relative flex items-start gap-4 text-sm leading-snug text-fg">
                        <span
                          aria-hidden
                          className="relative mt-1 size-[11px] shrink-0 rounded-full border border-accent/60 bg-ink-850"
                        />
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
