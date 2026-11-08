import { Button } from '@/components/common/Button';
import { Seo } from '@/components/common/Seo';
import { PageHero } from '@/components/sections/PageHero';

export default function CareersPage() {
  return (
    <>
      <Seo title="Careers" description="Careers at Navmanthan, a technology and AI solutions company." />
      <PageHero
        eyebrow="Careers"
        title="Open roles will be listed here"
        description="We have no positions listed at the moment. If you build thoughtful software or practical AI systems and would like to introduce yourself, please get in touch."
        actions={<Button to="/contact" arrow>Contact Us</Button>}
      />
    </>
  );
}
