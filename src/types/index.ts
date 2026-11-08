import type { LucideIcon } from 'lucide-react';

export interface ContentItem {
  title: string;
  description: string;
}

export interface IconContentItem extends ContentItem {
  icon: LucideIcon;
}

export interface TechGroup {
  label: string;
  items: string[];
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  /** One line, used in the mega menu and compact cards. */
  summary: string;
  description: string;
  capabilities: string[];
  benefits: string[];
  hero: {
    headline: string;
    intro: string;
  };
  problems: ContentItem[];
  solutions: ContentItem[];
  features: string[];
  outcomes: ContentItem[];
  technology: TechGroup[];
  /** Slugs of other services. */
  related: string[];
  /** Shows the AI solutions catalogue on the detail page. */
  showAiSolutions?: boolean;
}

export interface AiSolution {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  capabilities: string[];
  /** Ordered stages of a typical implementation. */
  flow: string[];
}

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  challenges: string[];
  applications: {
    ai: string;
    erp: string;
    automation: string;
    software: string;
  };
  /** Slugs of services most relevant to this industry. */
  relatedServices: string[];
}

export interface Technology {
  name: string;
  usage: string;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: Technology[];
}

export interface NavLinkItem {
  label: string;
  to: string;
}

export interface FooterLink {
  label: string;
  /** Internal route. */
  to?: string;
  /** External URL. A link with neither `to` nor `href` renders as "coming soon". */
  href?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface EnquiryPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  service: string;
  description: string;
}
