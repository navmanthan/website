import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { Section, type Tone } from '@/components/common/Section';

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  tone?: Tone;
}

export function CtaSection({
  title = 'Have a problem worth solving with technology?',
  description = 'Tell us what you want to improve. We will help you find a practical first step.',
  primaryLabel = "Let's Talk Business",
  primaryTo = '/contact#enquiry',
  secondaryLabel = 'Explore Our Solutions',
  secondaryTo = '/services',
  tone = 'light',
}: CtaSectionProps) {
  return (
    <Section tone={tone} className="!py-16 sm:!py-20">
      <Reveal>
        <div className="tone-dark hero-backdrop grid-lines relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 lg:py-20">
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl leading-[1.15] font-semibold text-fg text-balance sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-fg-muted">{description}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to={primaryTo} arrow>
                {primaryLabel}
              </Button>
              <Button to={secondaryTo} variant="secondary">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
