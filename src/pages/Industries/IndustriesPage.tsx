import { BrainCircuit, Boxes, CodeXml, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CheckList } from '@/components/common/CheckList';
import { Reveal } from '@/components/common/Reveal';
import { Container, Section } from '@/components/common/Section';
import { Seo } from '@/components/common/Seo';
import { CtaSection } from '@/components/sections/CtaSection';
import { PageHero } from '@/components/sections/PageHero';
import { industries } from '@/data/industries';
import { getService, servicePath } from '@/data/services';
import { useActiveSection } from '@/hooks/useActiveSection';
import type { Industry } from '@/types';
import { cn } from '@/utils/cn';

const applicationTypes = [
  { key: 'ai', label: 'AI', icon: BrainCircuit },
  { key: 'erp', label: 'ERP', icon: Boxes },
  { key: 'automation', label: 'Automation', icon: Workflow },
  { key: 'software', label: 'Custom software', icon: CodeXml },
] as const;

function IndustrySection({ industry, index }: { industry: Industry; index: number }) {
  const relatedServices = industry.relatedServices.map(getService).filter((service) => service !== undefined);

  return (
    <Section tone={index % 2 === 0 ? 'light' : 'mist'} id={industry.slug} className="scroll-mt-32 !py-16 lg:!py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <Reveal>
          <span className="icon-tile size-12">
            <industry.icon aria-hidden className="size-6" strokeWidth={1.75} />
          </span>
          <h2 className="mt-5 font-display text-3xl leading-tight font-semibold text-fg">{industry.name}</h2>
          <p className="mt-2.5 text-lg leading-relaxed text-fg-muted">{industry.summary}</p>

          <h3 className="mt-8 text-sm font-semibold tracking-normal text-fg">Common challenges</h3>
          <CheckList items={industry.challenges} className="mt-4" />

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {relatedServices.map((service) => (
              <Link key={service.slug} to={servicePath(service.slug)} className="font-semibold text-accent hover:underline">
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <dl className="grid gap-4 sm:grid-cols-2">
            {applicationTypes.map(({ key, label, icon: Icon }) => (
              <div key={key} className="rounded-2xl border border-line bg-surface p-6">
                <dt className="flex items-center gap-2.5 font-display font-semibold text-fg">
                  <Icon aria-hidden className="size-[18px] text-accent" strokeWidth={1.75} />
                  {label}
                </dt>
                <dd className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">{industry.applications[key]}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

export default function IndustriesPage() {
  const active = useActiveSection(industries.map((industry) => industry.slug));

  return (
    <>
      <Seo
        title="Industry Solutions"
        description="How Navmanthan applies AI, ERP, automation and custom software in healthcare, education, retail, hospitality, logistics and professional services."
      />
      <PageHero
        eyebrow="Industry solutions"
        title="The same engineering discipline, applied to your sector"
        description="Each industry has its own workflows, pressures and rules. Here is how we apply AI, ERP, automation and custom software to the challenges specific to yours."
      />

      <nav aria-label="Industries" className="tone-light sticky top-[72px] z-30 border-b border-line bg-canvas/95 backdrop-blur">
        <Container>
          <ul className="-mx-5 flex gap-1 overflow-x-auto px-5 py-2.5 [scrollbar-width:none] sm:mx-0 sm:px-0">
            {industries.map((industry) => (
              <li key={industry.slug} className="shrink-0">
                <Link
                  to={`#${industry.slug}`}
                  aria-current={active === industry.slug ? 'true' : undefined}
                  className={cn(
                    'block rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors',
                    active === industry.slug ? 'bg-accent-soft text-accent' : 'text-fg-muted hover:text-fg',
                  )}
                >
                  {industry.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {industries.map((industry, index) => (
        <IndustrySection key={industry.slug} industry={industry} index={index} />
      ))}

      <CtaSection
        tone={industries.length % 2 === 0 ? 'light' : 'mist'}
        title="Working in a different sector?"
        description="The problems are often familiar even when the industry is new to us. Tell us about yours."
      />
    </>
  );
}
