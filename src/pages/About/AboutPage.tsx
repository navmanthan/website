import { Reveal } from '@/components/common/Reveal';
import { Section, SectionHeading } from '@/components/common/Section';
import { Seo } from '@/components/common/Seo';
import { CtaSection } from '@/components/sections/CtaSection';
import { PageHero } from '@/components/sections/PageHero';
import { about, commitments, engagementSteps, innovationPrinciples, values } from '@/data/company';
import { site } from '@/data/site';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Navmanthan is a technology and AI solutions company helping businesses transform operations through intelligent software, enterprise applications and automation."
      />
      <PageHero
        eyebrow="About Navmanthan"
        title="Technology that earns its place in your business"
        description={site.tagline}
      />

      <Section tone="light">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
          <SectionHeading eyebrow="Who we are" title="An AI and enterprise technology company" />
          <Reveal className="space-y-5 text-lg leading-relaxed text-fg-muted lg:pt-9">
            {about.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" className="hero-backdrop">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 className="text-sm font-semibold tracking-normal text-accent">Our mission</h2>
            <p className="mt-4 font-display text-2xl leading-snug font-medium text-fg sm:text-3xl">{about.mission}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-sm font-semibold tracking-normal text-accent">Our vision</h2>
            <p className="mt-4 font-display text-2xl leading-snug font-medium text-fg sm:text-3xl">{about.vision}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Our values" title="What guides how we work" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={(index % 3) * 0.06}>
              <article className="h-full rounded-2xl border border-line bg-surface p-7">
                <value.icon aria-hidden className="size-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg font-semibold text-fg">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-fg-muted">{value.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="light" id="approach">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
          <SectionHeading
            eyebrow="Our approach to innovation"
            title="Ambitious in what we try, disciplined in how we test it"
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {innovationPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={(index % 2) * 0.06} className="border-t border-line pt-6">
                <h3 className="font-display text-lg font-semibold text-fg">{principle.title}</h3>
                <p className="mt-2 leading-relaxed text-fg-muted">{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="How we work with businesses" title="A straightforward way of working together" />
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {engagementSteps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 0.06}>
                <span className="font-display text-sm font-semibold text-accent">Step {index + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-fg">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-fg-muted">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="dark">
        <SectionHeading
          eyebrow="Our commitment"
          title="Scalable, practical technology"
          description="We want what we build to remain useful as your business changes."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((commitment, index) => (
            <Reveal key={commitment.title} delay={index * 0.06} className="border-t border-line pt-6">
              <h3 className="font-display text-lg font-semibold text-fg">{commitment.title}</h3>
              <p className="mt-2 leading-relaxed text-fg-muted">{commitment.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
