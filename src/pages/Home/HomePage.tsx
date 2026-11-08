import { Seo } from '@/components/common/Seo';
import { CtaSection } from '@/components/sections/CtaSection';
import { DevelopmentApproach } from '@/components/sections/DevelopmentApproach';
import { FeaturedSolutions } from '@/components/sections/FeaturedSolutions';
import { HeroSection } from '@/components/sections/HeroSection';
import { IndustriesPreview } from '@/components/sections/IndustriesPreview';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { TechStackPreview } from '@/components/sections/TechStackPreview';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { site } from '@/data/site';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  description: site.description,
  areaServed: 'IN',
};

export default function HomePage() {
  return (
    <>
      <Seo jsonLd={organizationSchema} />
      <HeroSection />
      <ValueProposition />
      <ServicesOverview />
      <IndustriesPreview />
      <FeaturedSolutions />
      <TechStackPreview />
      <WhyChoose />
      <DevelopmentApproach />
      <CtaSection title="Ready to build something intelligent?" />
    </>
  );
}
