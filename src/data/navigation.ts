import { site } from '@/data/site';
import type { FooterColumn, NavLinkItem } from '@/types';

export const primaryNav: NavLinkItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Technologies', to: '/technologies' },
  { label: 'Contact', to: '/contact' },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Approach', to: '/about#approach' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI Solutions', to: '/services/artificial-intelligence' },
      { label: 'ERP Solutions', to: '/services/erp-enterprise-solutions' },
      { label: 'Healthcare Solutions', to: '/services/healthcare-technology' },
      { label: 'Education Solutions', to: '/services/education-technology' },
      { label: 'Custom Software', to: '/services/custom-software' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', to: '/industries#healthcare' },
      { label: 'Education', to: '/industries#education' },
      { label: 'Retail', to: '/industries#retail' },
      { label: 'Supply Chain', to: '/industries#supply-chain-logistics' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Business Enquiries', to: '/contact#enquiry' },
      { label: 'LinkedIn', href: site.social.linkedin || undefined },
      { label: 'GitHub', href: site.social.github || undefined },
    ],
  },
];
