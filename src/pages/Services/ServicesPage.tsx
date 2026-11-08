import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { CheckList } from '@/components/common/CheckList';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { Seo } from '@/components/common/Seo';
import { CtaSection } from '@/components/sections/CtaSection';
import { PageHero } from '@/components/sections/PageHero';
import { servicePath, services } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="AI and generative AI, ERP, healthcare and education technology, supply chain automation and custom software from Navmanthan."
      />
      <PageHero
        eyebrow="Services"
        title="Practical technology for complex businesses"
        description="Six connected practice areas. Engage us for one focused problem, or for a program that draws on several of them."
        actions={
          <Button to="/contact#enquiry" arrow>
            Let's Talk Business
          </Button>
        }
      />

      <Section tone="light" className="!pt-8 lg:!pt-10">
        <div className="divide-y divide-line">
          {services.map((service) => (
            <Reveal key={service.slug}>
              <article
                id={service.slug}
                className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-12 lg:py-16"
              >
                <div className="md:col-span-2 lg:col-span-1">
                  <span className="icon-tile size-12">
                    <service.icon aria-hidden className="size-6" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-5 font-display text-2xl leading-tight font-semibold text-fg sm:text-[1.75rem]">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-fg-muted">{service.description}</p>
                  <Link
                    to={servicePath(service.slug)}
                    className="group mt-6 inline-flex items-center gap-1.5 font-semibold text-accent"
                    aria-label={`Explore ${service.title}`}
                  >
                    Explore service
                    <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-normal text-fg">Key capabilities</h3>
                  <CheckList items={service.capabilities} className="mt-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-normal text-fg">Business benefits</h3>
                  <CheckList items={service.benefits} className="mt-4" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection tone="mist" title="Not sure which service fits?" description="Describe the outcome you want, and we will help you work out where to begin." secondaryLabel="View Industries" secondaryTo="/industries" />
    </>
  );
}
