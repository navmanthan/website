import {
  AudioLines,
  Boxes,
  CodeXml,
  Compass,
  Eye,
  FileSearch,
  Handshake,
  Layers,
  Lightbulb,
  Plug,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react';
import type { ContentItem, IconContentItem } from '@/types';

export const heroCapabilities = [
  { label: 'Generative AI and LLMs', icon: Sparkles },
  { label: 'RAG and knowledge systems', icon: FileSearch },
  { label: 'Voice and conversational AI', icon: AudioLines },
  { label: 'ERP and enterprise platforms', icon: Boxes },
  { label: 'Workflow automation', icon: Workflow },
  { label: 'Custom digital products', icon: CodeXml },
];

export const valueProposition =
  'We combine artificial intelligence, enterprise engineering, and modern digital experiences to build technology that creates measurable business value.';

export const whyChoose: IconContentItem[] = [
  {
    icon: Target,
    title: 'We start with the business problem',
    description: 'Every engagement begins with the outcome you need and how it will be measured, before any technology is chosen.',
  },
  {
    icon: Layers,
    title: 'AI and enterprise engineering under one roof',
    description: 'Useful AI depends on sound data, integrations and applications. We build all of them together.',
  },
  {
    icon: Plug,
    title: 'Built to work with what you have',
    description: 'We connect to your existing ERP, CRM, WhatsApp and third-party systems instead of asking you to start over.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible by design',
    description: 'Access control, audit trails, evaluation and human approval steps are part of the initial design.',
  },
  {
    icon: Compass,
    title: 'Practical about scope',
    description: 'We recommend the smallest version that can prove value, then expand it on evidence.',
  },
  {
    icon: Handshake,
    title: 'Clear, direct collaboration',
    description: 'You work with the people building your system, and see progress in working software.',
  },
];

export const developmentApproach: ContentItem[] = [
  {
    title: 'Discover',
    description: 'We study your process, data and constraints, and agree on what success looks like.',
  },
  {
    title: 'Design',
    description: 'We define the architecture, integrations and user experience, along with a scoped first release.',
  },
  {
    title: 'Build',
    description: 'We work in short cycles, sharing working software and adjusting based on your feedback.',
  },
  {
    title: 'Validate',
    description: 'We test functionality, security and performance. AI systems are also evaluated for accuracy and safety.',
  },
  {
    title: 'Deploy',
    description: 'We release to your environment in stages, with monitoring and training for your team.',
  },
  {
    title: 'Evolve',
    description: 'We use real-world usage to prioritize improvements and extend the system as you grow.',
  },
];

export const about = {
  introduction: [
    'Navmanthan is a technology and AI solutions company that helps businesses transform their operations through intelligent software, enterprise applications, automation and next-generation AI.',
    'We work with organizations across healthcare, education, retail, supply chain, logistics and other industries. Our goal is to deliver practical, scalable technology that solves real business challenges.',
  ],
  mission:
    'To help businesses of every size put intelligent technology to practical use, through software that solves real problems and delivers value they can measure.',
  vision:
    'A future in which advanced technology is accessible and dependable for organizations in India and around the world, and where it strengthens the people who use it.',
};

export const values: IconContentItem[] = [
  {
    icon: Lightbulb,
    title: 'Purposeful innovation',
    description: 'We adopt new technology when it improves an outcome, and we are open about when it does not.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'We give honest assessments, realistic timelines and clear accounts of what a system can and cannot do.',
  },
  {
    icon: Target,
    title: 'Ownership',
    description: 'We take responsibility for whether the software works in production, beyond whether it was delivered.',
  },
  {
    icon: Eye,
    title: 'Clarity',
    description: 'We favor simple architecture, plain communication and decisions that can be explained.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'We work closely with the people who know your business best, and transfer knowledge along the way.',
  },
  {
    icon: Layers,
    title: 'Craft',
    description: 'We care about the details that make software reliable, maintainable and pleasant to use.',
  },
];

export const innovationPrinciples: ContentItem[] = [
  {
    title: 'Begin with a real use case',
    description: 'A clearly defined task, with users and data behind it, is the most reliable starting point for new technology.',
  },
  {
    title: 'Prove value on a small scale',
    description: 'A focused pilot shows what works in your context before larger investment is committed.',
  },
  {
    title: 'Measure before scaling',
    description: 'Evaluation criteria are agreed early, so decisions to expand rest on results.',
  },
  {
    title: 'Keep people in control',
    description: 'For consequential actions, AI recommends and prepares, and an accountable person decides.',
  },
];

export const engagementSteps: ContentItem[] = [
  {
    title: 'A focused first conversation',
    description: 'You tell us about the problem and the systems involved. We tell you honestly whether and how we can help.',
  },
  {
    title: 'A scoped proposal',
    description: 'We set out the first release, its assumptions, the team and what you can expect to see, and when.',
  },
  {
    title: 'Working together',
    description: 'Regular reviews of working software keep your stakeholders informed and priorities current.',
  },
  {
    title: 'Handover and ongoing support',
    description: 'Documentation, training and support arrangements ensure your team can run and extend what we built.',
  },
];

export const commitments: ContentItem[] = [
  {
    title: 'Modular architecture',
    description: 'Systems are composed of parts that can be changed, replaced or extended independently.',
  },
  {
    title: 'Sized to your needs',
    description: 'We match infrastructure and tooling to your actual load and budget, with a clear path to grow.',
  },
  {
    title: 'Open, proven technology',
    description: 'We favor established tools with healthy ecosystems, reducing long-term dependency risk.',
  },
  {
    title: 'Maintainable by your team',
    description: 'Readable code, documentation and automated checks keep the system manageable after launch.',
  },
];
