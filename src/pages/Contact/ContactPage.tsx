import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Section } from '@/components/common/Section';
import { Seo } from '@/components/common/Seo';

import { PageHero } from '@/components/sections/PageHero';
import { site } from '@/data/site';

const { email, phone, isPlaceholder, primaryMarket } = site.contact;

const nextSteps = [
  'We read your enquiry and clarify anything that is unclear.',
  'We arrange a conversation with someone who can discuss the technical details.',
  'If we are a good fit, we outline a practical scope for a first release.',
];

function ContactRow({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 py-5">
      <span className="icon-tile size-10 shrink-0">
        <Icon aria-hidden className="size-[18px]" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-fg-subtle">{label}</p>
        <div className="mt-0.5 font-medium break-words text-fg">{children}</div>
      </div>
    </div>
  );
}

function ContactValue({ value, href }: { value: string; href: string }) {
  if (isPlaceholder) {
    return (
      <span className="inline-flex flex-wrap items-center gap-2">
        {value}
        <span className="rounded border border-line px-1.5 py-px text-[0.6875rem] font-normal text-fg-subtle">Placeholder</span>
      </span>
    );
  }

  return (
    <a href={href} className="transition-colors hover:text-accent">
      {value}
    </a>
  );
}

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Start a conversation with Navmanthan about AI solutions, ERP, automation or custom software for your business."
      />
      <PageHero
        eyebrow="Contact us"
        title="Tell us what you want to build"
        description="Share a few details about your business and project. The more context you give us, the more useful our first conversation will be."
      />

      <Section tone="mist" id="enquiry">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        

          <aside className="space-y-10">
            <div>
              <h2 className="font-display text-xl font-semibold text-fg">Reach us directly</h2>
              <div className="mt-2 divide-y divide-line">
                <ContactRow icon={Mail} label="Business email">
                  <ContactValue value={email} href={`mailto:${email}`} />
                </ContactRow>
                <ContactRow icon={Phone} label="Phone">
                  <ContactValue value={phone} href={`tel:${phone.replace(/\s/g, '')}`} />
                </ContactRow>
                <ContactRow icon={MapPin} label="Primary market">
                  {primaryMarket}
                </ContactRow>
                <ContactRow icon={Globe} label="International projects">
                  We also welcome enquiries from international markets.
                </ContactRow>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-fg">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-3.5 leading-snug text-fg-muted">
                    <span className="font-display font-semibold text-accent">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
