import { useParams } from 'react-router-dom';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Button } from '@/components/common/Button';
import { CheckList } from '@/components/common/CheckList';
import { Chip } from '@/components/common/Chip';
import { Reveal } from '@/components/common/Reveal';
import { Section, SectionHeading } from '@/components/common/Section';
import { Seo } from '@/components/common/Seo';
import { AiSolutionsGrid } from '@/components/sections/AiSolutionsGrid';
import { CtaSection } from '@/components/sections/CtaSection';
import { PageHero } from '@/components/sections/PageHero';
import { getService } from '@/data/services';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import type { Service } from '@/types';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <NotFoundPage />;

  const contactPath = `/contact?service=${service.slug}#enquiry`;
  const related = service.related.map(getService).filter((item): item is Service => Boolean(item));

  return (
    <>
      <Seo title={service.title} description={service.description} />
      <PageHero
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: service.shortTitle }]}
        title={service.hero.headline}
        description={service.hero.intro}
        actions={
          <>
            <Button to={contactPath} arrow>
              Let's Talk Business
            </Button>
            <Button to="/services" variant="secondary">
              All Services
            </Button>
          </>
        }
        aside={
          <div className="rounded-2xl border border-line bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
            <div className="flex items-center gap-3">
              <span className="icon-tile size-10">
                <service.icon aria-hidden className="size-5" strokeWidth={1.75} />
              </span>
              <p className="font-display font-semibold text-fg">{service.shortTitle}</p>
            </div>
            <CheckList items={service.capabilities} className="mt-5" />
          </div>
        }
      />

      <Section tone="light">
        <SectionHeading eyebrow="Business problems we solve" title="Where organizations tend to get stuck" />
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {service.problems.map((problem, index) => (
            <Reveal key={problem.title} delay={(index % 2) * 0.06} className="border-t border-line pt-6">
              <h3 className="font-display text-xl font-semibold text-fg">{problem.title}</h3>
              <p className="mt-2 leading-relaxed text-fg-muted">{problem.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {service.showAiSolutions && <AiSolutionsGrid />}

      <Section tone="mist">
        <SectionHeading eyebrow="Our solutions" title="What we build" />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {service.solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={(index % 2) * 0.06}>
              <article className="h-full rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/40">
                <h3 className="font-display text-xl font-semibold text-fg">{solution.title}</h3>
                <p className="mt-2.5 leading-relaxed text-fg-muted">{solution.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionHeading eyebrow="Key features" title="Built in from the start" />
          <Reveal>
            <CheckList items={service.features} className="grid gap-x-10 gap-y-4 space-y-0 sm:grid-cols-2" />
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" className="hero-backdrop">
        <SectionHeading eyebrow="Benefits" title="What changes for your business" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {service.outcomes.map((outcome, index) => (
            <Reveal key={outcome.title} delay={index * 0.06} className="border-t border-line pt-6">
              <h3 className="font-display text-lg font-semibold text-fg">{outcome.title}</h3>
              <p className="mt-2 leading-relaxed text-fg-muted">{outcome.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="Technology capabilities" title="What we build it with" />
        <dl className="mt-10 divide-y divide-line border-y border-line">
          {service.technology.map((group) => (
            <div key={group.label} className="grid gap-3 py-5 sm:grid-cols-[220px_1fr] sm:gap-6">
              <dt className="pt-1.5 text-sm font-semibold text-fg">{group.label}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Related services" title="Often combined with" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <ServiceCard key={item.slug} service={item} />
          ))}
        </div>
      </Section>

      <CtaSection
        title={`Let's discuss your ${service.shortTitle} project`}
        description="Tell us what you want to improve, and we will suggest a practical first step."
        primaryTo={contactPath}
        secondaryLabel="View All Services"
      />
    </>
  );
}
