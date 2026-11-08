import { m } from 'motion/react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Section';
import { ManthanField } from '@/components/sections/ManthanField';
import { heroCapabilities } from '@/data/company';
import { site } from '@/data/site';

const HEADLINE_LEAD = 'Building Intelligent Solutions for a'.split(' ');
const HEADLINE_HIGHLIGHT = 'Smarter Tomorrow.'.split(' ');
const EASE = [0.22, 1, 0.36, 1] as const;

function Word({ word, index, highlight }: { word: string; index: number; highlight?: boolean }) {
  return (
    <>
      <m.span
        className={highlight ? 'text-gradient inline-block pb-1' : 'inline-block'}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 + index * 0.05, ease: EASE }}
      >
        {word}
      </m.span>{' '}
    </>
  );
}

export function HeroSection() {
  return (
    <section className="tone-dark hero-backdrop grid-lines relative overflow-hidden">
      <div
        aria-hidden
        className="animate-drift absolute top-[12%] right-[6%] size-[46vw] max-h-[640px] max-w-[640px] rounded-full bg-[radial-gradient(circle,rgb(109_74_255/0.24),rgb(37_99_235/0.08)_50%,transparent_70%)]"
      />
      <ManthanField className="pointer-events-none absolute top-[44%] right-[-40%] aspect-square w-[130vw] opacity-45 sm:right-[-20%] sm:w-[90vw] lg:top-[-3%] lg:right-[-8%] lg:h-[106%] lg:w-[62vw] lg:opacity-100" />

      <Container className="relative flex min-h-[100svh] flex-col justify-between pt-32 lg:pt-36">
        <div className="max-w-[700px] pb-16">
          <m.p
            className="mb-6 text-sm font-semibold text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {site.tagline}
          </m.p>
          <h1 className="font-display text-[2.75rem] leading-[1.06] font-semibold tracking-[-0.035em] text-fg sm:text-6xl lg:text-[4.25rem]">
            {HEADLINE_LEAD.map((word, index) => (
              <Word key={word} word={word} index={index} />
            ))}
            {HEADLINE_HIGHLIGHT.map((word, index) => (
              <Word key={word} word={word} index={HEADLINE_LEAD.length + index} highlight />
            ))}
          </h1>
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          >
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl">
              From AI-powered innovation to enterprise software, Navmanthan helps businesses transform ideas into
              intelligent digital solutions.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact#enquiry" arrow>
                Let's Talk Business
              </Button>
              <Button to="/services" variant="secondary" className="bg-ink-900/40 backdrop-blur-sm">
                Explore Our Solutions
              </Button>
            </div>
          </m.div>
        </div>

        <div className="border-t border-line bg-ink-900/40 backdrop-blur-[2px]">
          <h2 className="pt-5 text-sm font-medium tracking-normal text-fg-subtle">Technology capabilities</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 py-5 sm:grid-cols-3 lg:grid-cols-6">
            {heroCapabilities.map((capability) => (
              <li key={capability.label} className="flex items-start gap-2.5 text-sm leading-snug text-fg-muted">
                <capability.icon aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.75} />
                {capability.label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
