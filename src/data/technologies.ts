import { BrainCircuit, Database, Monitor, Plug, Server } from 'lucide-react';
import type { TechnologyCategory } from '@/types';

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Monitor,
    description: 'Fast, accessible interfaces for portals, products and marketing sites.',
    items: [
      { name: 'React.js', usage: 'Component-based application interfaces' },
      { name: 'Next.js', usage: 'Server-rendered and SEO-sensitive applications' },
      { name: 'JavaScript', usage: 'Browser and full-stack application logic' },
      { name: 'TypeScript', usage: 'Type-safe code for long-lived products' },
      { name: 'Tailwind CSS', usage: 'Consistent, maintainable design systems' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    description: 'Reliable services and APIs that carry business logic and integrations.',
    items: [
      { name: 'Python', usage: 'AI services, automation and data workflows' },
      { name: 'FastAPI', usage: 'High-performance, well-documented Python APIs' },
      { name: 'Java', usage: 'Dependable enterprise application development' },
      { name: 'Spring Boot', usage: 'Production-grade enterprise services' },
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: BrainCircuit,
    description: 'The components behind assistants, agents and domain-specific models.',
    items: [
      { name: 'LLMs', usage: 'Language understanding and generation' },
      { name: 'RAG', usage: 'Answers grounded in your own knowledge' },
      { name: 'LangChain', usage: 'Composable LLM application pipelines' },
      { name: 'LangGraph', usage: 'Stateful, multi-step agent workflows' },
      { name: 'AI Agents', usage: 'Tool-using systems that complete tasks' },
      { name: 'Vector Databases', usage: 'Semantic search over documents and records' },
      { name: 'Model Fine-tuning', usage: 'Adapting open-source models to a domain' },
      { name: 'Speech AI', usage: 'Speech-to-text, text-to-speech and voice agents' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    description: 'Storage chosen to suit the shape of the data and how it is used.',
    items: [
      { name: 'PostgreSQL', usage: 'Relational core for business applications' },
      { name: 'MySQL', usage: 'Widely deployed transactional workloads' },
      { name: 'MongoDB', usage: 'Flexible, document-oriented data' },
      { name: 'Redis', usage: 'Caching, queues and fast session state' },
      { name: 'SQL', usage: 'Modeling, reporting and query optimization' },
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: Plug,
    description: 'Connections that let new software work with what you already run.',
    items: [
      { name: 'WhatsApp Business API', usage: 'Messaging, notifications and assistants' },
      { name: 'REST APIs', usage: 'Clean contracts between systems' },
      { name: 'Third-party enterprise systems', usage: 'ERP, CRM and line-of-business tools' },
      { name: 'Payment gateways', usage: 'Online collection and reconciliation' },
      { name: 'Cloud services', usage: 'Hosting, storage and managed infrastructure' },
    ],
  },
];
