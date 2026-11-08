import { AudioLines, Bot, FileSearch, MessageCircle, MessagesSquare, SlidersHorizontal } from 'lucide-react';
import type { AiSolution } from '@/types';

export const aiSolutions: AiSolution[] = [
  {
    id: 'voice',
    title: 'AI Voice Solutions',
    icon: AudioLines,
    summary:
      'Voice agents that answer calls, place follow-ups and complete routine conversations in natural speech, then hand over to your team when a person is needed.',
    capabilities: [
      'AI voice assistants',
      'Automated inbound and outbound calling',
      'Speech-to-text and text-to-speech',
      'Conversational voice agents',
    ],
    flow: ['Incoming or scheduled call', 'Speech-to-text', 'LLM with business context', 'Text-to-speech reply', 'Call summary sent to CRM'],
  },
  {
    id: 'rag',
    title: 'RAG-Based Solutions',
    icon: FileSearch,
    summary:
      'Assistants that answer from your own policies, manuals and records, and cite the document each answer came from, so staff can check it.',
    capabilities: [
      'Enterprise knowledge assistants',
      'PDF and document-based question answering',
      'Internal company knowledge search',
      'Retrieval-augmented generation pipelines',
    ],
    flow: ['Documents ingested and chunked', 'Embeddings in vector database', 'Query retrieves relevant passages', 'LLM drafts a grounded answer', 'Answer returned with citations'],
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    icon: MessagesSquare,
    summary:
      'Assistants for your website and support channels that know your products and policies, and speak the languages your customers use.',
    capabilities: [
      'Website chatbots',
      'Customer support assistants',
      'Business-specific AI assistants',
      'Multilingual conversational interfaces',
    ],
    flow: ['Customer message', 'Language and intent detection', 'Knowledge and order lookup', 'Generated reply with guardrails', 'Escalation to a human agent'],
  },
  {
    id: 'fine-tuning',
    title: 'LLM Fine-tuning',
    icon: SlidersHorizontal,
    summary:
      'Open-source models adapted to your domain vocabulary and output formats, for cases where prompting and retrieval alone fall short.',
    capabilities: [
      'Custom model adaptation',
      'Domain-specific LLM solutions',
      'Open-source model customization',
      'Model evaluation and optimization',
    ],
    flow: ['Use case and baseline defined', 'Training data prepared', 'Fine-tuning runs', 'Evaluation against baseline', 'Optimized model deployed'],
  },
  {
    id: 'agents',
    title: 'AI Agents & Automation',
    icon: Bot,
    summary:
      'Agents that plan a task, call your systems through approved tools and pause for human sign-off where the process requires it.',
    capabilities: [
      'Multi-agent systems',
      'Workflow automation',
      'Tool-calling agents',
      'Enterprise process automation',
    ],
    flow: ['Business trigger', 'Agent plans the steps', 'Tools call approved systems', 'Human approval checkpoint', 'Result logged for audit'],
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Business Integrations',
    icon: MessageCircle,
    summary:
      'Support, notifications and AI assistance on the channel your customers already check, connected to the systems that hold their orders and bookings.',
    capabilities: [
      'WhatsApp Business API integrations',
      'Automated customer support',
      'Order and appointment notifications',
      'AI-powered WhatsApp assistants',
      'CRM and ERP integrations',
    ],
    flow: ['Customer message or system event', 'WhatsApp Business API webhook', 'AI assistant or template reply', 'CRM and ERP records updated', 'Delivery status tracked'],
  },
];
