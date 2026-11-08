import { BrainCircuit, Boxes, CodeXml, GraduationCap, HeartPulse, Workflow } from 'lucide-react';
import type { Service } from '@/types';

// To add a service, append an entry here. Navigation, the overview page, the enquiry form
// and its /services/:slug route all read from this list.
export const services: Service[] = [
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence & Generative AI',
    shortTitle: 'AI & Generative AI',
    icon: BrainCircuit,
    summary: 'Voice agents, RAG assistants, chatbots, fine-tuning and AI agents.',
    description:
      'We build AI systems that work on your data and inside your processes: assistants that answer from company knowledge, agents that complete multi-step tasks, and voice and WhatsApp experiences your customers can use every day.',
    capabilities: [
      'AI voice assistants and calling',
      'RAG and enterprise knowledge search',
      'Website and support chatbots',
      'LLM fine-tuning and evaluation',
      'AI agents and tool calling',
      'WhatsApp AI assistants',
    ],
    benefits: [
      'Faster answers for customers and staff',
      'Less manual handling of repetitive work',
      'Company knowledge that is easy to find',
      'AI outputs you can review and audit',
    ],
    hero: {
      headline: 'Applied AI that works on your data and inside your processes',
      intro:
        'From a focused document assistant to multi-agent automation, we design generative AI around a specific business task, measure whether it performs, and connect it to the systems your teams already use.',
    },
    problems: [
      {
        title: 'Knowledge is scattered',
        description:
          'Policies, contracts and product details sit across PDFs, drives and inboxes. People spend time searching, or they ask the same few colleagues.',
      },
      {
        title: 'Support volumes outgrow the team',
        description:
          'Calls and messages peak outside working hours, and agents spend most of their day on questions that have standard answers.',
      },
      {
        title: 'Pilots do not reach production',
        description:
          'A demo impresses, then stalls on accuracy, data access, cost or the absence of a way to evaluate results.',
      },
      {
        title: 'Generic models miss your context',
        description:
          'Off-the-shelf assistants do not know your catalog, terminology or rules, and cannot act in your systems.',
      },
    ],
    solutions: [
      {
        title: 'Grounded knowledge assistants',
        description:
          'RAG pipelines over your documents and databases, with permissions respected and sources cited in every answer.',
      },
      {
        title: 'Conversational interfaces',
        description:
          'Chat, voice and WhatsApp assistants that handle routine requests in multiple languages and escalate with full context.',
      },
      {
        title: 'Agents that complete work',
        description:
          'Tool-calling and multi-agent workflows that read, decide and update systems, with approval steps where risk demands them.',
      },
      {
        title: 'Models adapted to your domain',
        description:
          'Fine-tuning and optimization of open-source models, evaluated against a baseline so the gain is measured.',
      },
    ],
    features: [
      'Retrieval with source citations',
      'Role-based access to knowledge',
      'Guardrails and output validation',
      'Human-in-the-loop approvals',
      'Multilingual text and speech',
      'Evaluation sets and regression checks',
      'Usage, latency and cost monitoring',
      'Cloud or private deployment options',
    ],
    outcomes: [
      {
        title: 'Shorter response times',
        description: 'Routine questions are answered immediately, on the channel the customer chose.',
      },
      {
        title: 'Better use of skilled staff',
        description: 'Your team spends more of its day on the cases that need judgment.',
      },
      {
        title: 'Knowledge that stays usable',
        description: 'New documents become searchable as they are added, and answers point back to the source.',
      },
      {
        title: 'Decisions based on evidence',
        description: 'Evaluation and monitoring show whether the system is working before you scale it.',
      },
    ],
    technology: [
      { label: 'Models and orchestration', items: ['LLMs', 'LangChain', 'LangGraph', 'AI Agents', 'Model Fine-tuning'] },
      { label: 'Retrieval and data', items: ['RAG', 'Vector Databases', 'PostgreSQL', 'Redis'] },
      { label: 'Channels and services', items: ['Speech AI', 'WhatsApp Business API', 'FastAPI', 'REST APIs'] },
    ],
    related: ['supply-chain', 'custom-software', 'erp-enterprise-solutions'],
    showAiSolutions: true,
  },
  {
    slug: 'erp-enterprise-solutions',
    title: 'ERP & Enterprise Solutions',
    shortTitle: 'ERP & Enterprise',
    icon: Boxes,
    summary: 'Unified finance, inventory, purchasing and operations platforms.',
    description:
      'We implement, customize and extend ERP and enterprise applications so finance, inventory, purchasing, sales and operations run from one reliable set of records.',
    capabilities: [
      'ERP customization and modules',
      'Finance, inventory and purchasing',
      'Sales, CRM and order management',
      'Reporting and management dashboards',
      'Data migration from legacy systems',
      'Integration with third-party platforms',
    ],
    benefits: [
      'One source of truth across departments',
      'Fewer spreadsheets and duplicate entries',
      'Clearer, faster management reporting',
      'Processes that fit how you operate',
    ],
    hero: {
      headline: 'Enterprise systems shaped around how your business operates',
      intro:
        'We map your real processes first, then build, customize and integrate the ERP and business applications that give every department the same accurate picture.',
    },
    problems: [
      {
        title: 'Departments work from different numbers',
        description:
          'Sales, stores and accounts each keep their own records, and month-end becomes an exercise in reconciliation.',
      },
      {
        title: 'Spreadsheets run critical processes',
        description:
          'Approvals, stock and costing depend on files that break, go out of date and leave no audit trail.',
      },
      {
        title: 'Packaged software does not fit',
        description:
          'Standard modules force workarounds for your pricing, documentation or approval rules.',
      },
      {
        title: 'Legacy systems block growth',
        description:
          'Older applications are hard to change, hard to connect and depend on a shrinking pool of knowledge.',
      },
    ],
    solutions: [
      {
        title: 'ERP implementation and customization',
        description:
          'Configured and extended modules for finance, inventory, purchasing, sales and delivery documentation.',
      },
      {
        title: 'Custom enterprise applications',
        description:
          'Purpose-built systems for operations your ERP does not cover, sharing the same data and sign-in.',
      },
      {
        title: 'Migration and modernization',
        description:
          'Planned data migration and phased replacement of legacy applications, with validation at each stage.',
      },
      {
        title: 'Integration and reporting',
        description:
          'Connections to payment, logistics and third-party systems, with dashboards that management can rely on.',
      },
    ],
    features: [
      'Role-based access and approvals',
      'Multi-branch and multi-warehouse support',
      'Configurable workflows and documents',
      'GST-ready invoicing workflows',
      'Audit trails on key transactions',
      'Management dashboards and exports',
      'API layer for integrations',
      'AI assistants over ERP data',
    ],
    outcomes: [
      {
        title: 'Consistent records',
        description: 'Each transaction is entered once and is visible to every team that needs it.',
      },
      {
        title: 'Quicker closing and reporting',
        description: 'Less reconciliation means figures are ready when decisions need them.',
      },
      {
        title: 'Stronger control',
        description: 'Approvals, permissions and audit history are built into daily work.',
      },
      {
        title: 'A platform that can grow',
        description: 'New branches, products and integrations extend the system without replacing it.',
      },
    ],
    technology: [
      { label: 'Application', items: ['Python', 'Java', 'Spring Boot', 'FastAPI', 'React.js'] },
      { label: 'Data', items: ['PostgreSQL', 'MySQL', 'SQL', 'Redis'] },
      { label: 'Integration', items: ['REST APIs', 'Payment gateways', 'Third-party enterprise systems', 'WhatsApp Business API'] },
    ],
    related: ['supply-chain', 'artificial-intelligence', 'custom-software'],
  },
  {
    slug: 'healthcare-technology',
    title: 'Healthcare Technology',
    shortTitle: 'Healthcare Technology',
    icon: HeartPulse,
    summary: 'Clinic, hospital and patient systems with AI assistance.',
    description:
      'We build software for clinics, hospitals, diagnostic centers and health startups, covering patient management, appointments, records, billing and AI assistance for administrative and clinical teams.',
    capabilities: [
      'Patient and appointment management',
      'Electronic medical records',
      'Billing and insurance workflows',
      'AI documentation assistance',
      'WhatsApp reminders and follow-ups',
      'Lab, pharmacy and device integration',
    ],
    benefits: [
      'Less administrative load on clinical staff',
      'Fewer missed appointments',
      'Patient information available when needed',
      'Controlled, auditable access to records',
    ],
    hero: {
      headline: 'Healthcare software that gives care teams more time with patients',
      intro:
        'We design systems around the realities of a busy clinic or hospital: quick data entry, clear patient histories, careful handling of sensitive information and AI that supports staff without replacing clinical judgment.',
    },
    problems: [
      {
        title: 'Front desks are overloaded',
        description:
          'Calls, walk-ins, rescheduling and paper forms create queues and booking errors.',
      },
      {
        title: 'Patient records are fragmented',
        description:
          'History, reports and prescriptions sit in separate systems or files, which slows consultations.',
      },
      {
        title: 'Documentation takes clinical time',
        description:
          'Doctors and nurses spend significant parts of their day writing notes and completing forms.',
      },
      {
        title: 'Follow-up depends on memory',
        description:
          'Without reminders and care plans in one place, patients miss visits and treatment continuity suffers.',
      },
    ],
    solutions: [
      {
        title: 'Practice and hospital management',
        description:
          'Registration, scheduling, consultation, billing and discharge workflows in a single application.',
      },
      {
        title: 'Clinical documentation assistance',
        description:
          'Speech and LLM tools that draft notes and summaries for a clinician to review and approve.',
      },
      {
        title: 'Patient engagement',
        description:
          'Appointment booking, reminders, report delivery and follow-ups over WhatsApp and web.',
      },
      {
        title: 'Interoperable data',
        description:
          'Integration with lab, pharmacy and imaging systems, using health-data standards such as HL7 FHIR where required.',
      },
    ],
    features: [
      'Role-based access to patient data',
      'Consent capture and audit logs',
      'Encrypted storage and transfer',
      'Designed with India’s DPDP Act in mind',
      'Multi-location clinic support',
      'Tele-consultation workflows',
      'Clinician review of all AI drafts',
      'Operational and revenue reports',
    ],
    outcomes: [
      {
        title: 'Smoother patient flow',
        description: 'Booking and registration take less time at the desk and fewer calls on the phone.',
      },
      {
        title: 'More complete information',
        description: 'Clinicians see a consolidated history at the point of care.',
      },
      {
        title: 'Reduced paperwork',
        description: 'Assisted documentation returns time to patient care, with a clinician in control.',
      },
      {
        title: 'Better continuity',
        description: 'Automated reminders and follow-ups help patients stay on their care plan.',
      },
    ],
    technology: [
      { label: 'Application', items: ['React.js', 'Next.js', 'FastAPI', 'Spring Boot'] },
      { label: 'AI', items: ['Speech AI', 'LLMs', 'RAG'] },
      { label: 'Data and integration', items: ['PostgreSQL', 'REST APIs', 'WhatsApp Business API', 'Payment gateways'] },
    ],
    related: ['artificial-intelligence', 'erp-enterprise-solutions', 'custom-software'],
  },
  {
    slug: 'education-technology',
    title: 'Education Technology',
    shortTitle: 'Education Technology',
    icon: GraduationCap,
    summary: 'Institution management, learning platforms and AI tutoring.',
    description:
      'We build digital systems for schools, colleges, training institutes and edtech companies, from admissions and fee collection to learning platforms, assessments and AI study assistants.',
    capabilities: [
      'Institution and student management',
      'Learning management systems',
      'Online assessments and results',
      'AI tutors and study assistants',
      'Admissions and fee workflows',
      'Parent and student communication',
    ],
    benefits: [
      'Less administrative work for faculty',
      'A clearer view of student progress',
      'Support for learners beyond class hours',
      'Better communication with parents',
    ],
    hero: {
      headline: 'Digital foundations for institutions and the people who learn in them',
      intro:
        'We connect admissions, academics, fees and communication in one system, and add AI where it helps teachers and learners, such as answering from approved course material.',
    },
    problems: [
      {
        title: 'Administration consumes teaching time',
        description:
          'Attendance, marks, circulars and fee follow-ups are handled by hand or across disconnected tools.',
      },
      {
        title: 'Learning content is hard to manage',
        description:
          'Materials are spread across messaging groups and drives, with no view of who has engaged with them.',
      },
      {
        title: 'One pace does not suit everyone',
        description:
          'Teachers have limited time to identify which students need help and with which topics.',
      },
      {
        title: 'Admissions leak enquiries',
        description:
          'Leads arrive from many channels, and follow-up is inconsistent during the busiest weeks of the year.',
      },
    ],
    solutions: [
      {
        title: 'Institution management platform',
        description:
          'Admissions, attendance, timetables, examinations, fees and reporting in one connected application.',
      },
      {
        title: 'Learning experience platforms',
        description:
          'Courses, video lessons, assignments and progress tracking for web and mobile learners.',
      },
      {
        title: 'AI study assistance',
        description:
          'Tutors grounded in approved syllabus material, with question generation and practice support.',
      },
      {
        title: 'Communication automation',
        description:
          'WhatsApp and app notifications for fees, attendance, results and admissions follow-ups.',
      },
    ],
    features: [
      'Separate portals by user role',
      'Online and hybrid assessments',
      'Fee collection and receipts',
      'Syllabus-grounded AI answers',
      'Multilingual content support',
      'Progress dashboards for teachers',
      'Parent notifications',
      'Mobile-friendly learning',
    ],
    outcomes: [
      {
        title: 'Time back for educators',
        description: 'Routine record-keeping is automated, leaving more time for teaching.',
      },
      {
        title: 'Earlier intervention',
        description: 'Progress data helps staff notice learners who are falling behind.',
      },
      {
        title: 'Learning support on demand',
        description: 'Students can get help from approved material at any hour.',
      },
      {
        title: 'Organized admissions',
        description: 'Every enquiry is tracked and followed up from first contact to enrollment.',
      },
    ],
    technology: [
      { label: 'Application', items: ['React.js', 'Next.js', 'TypeScript', 'FastAPI'] },
      { label: 'AI', items: ['LLMs', 'RAG', 'Vector Databases', 'Speech AI'] },
      { label: 'Data and integration', items: ['PostgreSQL', 'MongoDB', 'WhatsApp Business API', 'Payment gateways'] },
    ],
    related: ['artificial-intelligence', 'custom-software', 'supply-chain'],
  },
  {
    slug: 'supply-chain',
    title: 'Supply Chain & Business Automation',
    shortTitle: 'Supply Chain & Automation',
    icon: Workflow,
    summary: 'Inventory, logistics visibility and workflow automation.',
    description:
      'We digitize and automate the flow of goods, documents and approvals, giving operations teams real-time visibility and removing repetitive work from purchasing, warehousing and delivery.',
    capabilities: [
      'Inventory and warehouse management',
      'Order and delivery tracking',
      'Purchase and vendor workflows',
      'Document processing with AI',
      'Approval and workflow automation',
      'Demand and stock analytics',
    ],
    benefits: [
      'Better visibility of stock and shipments',
      'Fewer manual errors in documents',
      'Shorter order-to-delivery cycles',
      'Exceptions surfaced before they escalate',
    ],
    hero: {
      headline: 'See your operations clearly, then automate the repetitive parts',
      intro:
        'We connect warehouses, vendors, transporters and internal teams, then automate the routine steps between them so your people can concentrate on exceptions.',
    },
    problems: [
      {
        title: 'Stock figures cannot be trusted',
        description:
          'System quantities drift from physical stock, which causes shortages, excess buying and last-minute changes.',
      },
      {
        title: 'Shipment status needs phone calls',
        description:
          'Teams chase transporters for updates, and customers learn about delays too late.',
      },
      {
        title: 'Documents are handled by hand',
        description:
          'Invoices, purchase orders and delivery challans are re-typed from paper and PDFs.',
      },
      {
        title: 'Approvals stall in inboxes',
        description:
          'Requests wait on individuals, with no record of where they are or why they are stuck.',
      },
    ],
    solutions: [
      {
        title: 'Inventory and warehouse systems',
        description:
          'Batch, location and movement tracking with barcode-enabled operations and reorder rules.',
      },
      {
        title: 'Logistics visibility',
        description:
          'Order and delivery tracking with automated updates to customers and internal teams.',
      },
      {
        title: 'Intelligent document processing',
        description:
          'AI extraction from invoices and shipping documents, with validation against orders and a review queue.',
      },
      {
        title: 'Workflow automation',
        description:
          'Rule-based and agent-driven processes for purchasing, approvals and exception handling.',
      },
    ],
    features: [
      'Barcode and mobile scanning',
      'Multi-warehouse stock views',
      'Vendor and transporter portals',
      'Automated WhatsApp status updates',
      'Document extraction with review',
      'Configurable approval chains',
      'Exception alerts and escalation',
      'ERP and accounting integration',
    ],
    outcomes: [
      {
        title: 'Accurate availability',
        description: 'Sales and purchasing work from the same current stock position.',
      },
      {
        title: 'Fewer status calls',
        description: 'Customers and staff receive updates without having to ask for them.',
      },
      {
        title: 'Less re-keying',
        description: 'Document data is captured once and checked automatically.',
      },
      {
        title: 'Faster cycle times',
        description: 'Work moves to the next step as soon as its conditions are met.',
      },
    ],
    technology: [
      { label: 'Application', items: ['Python', 'FastAPI', 'Java', 'Spring Boot', 'React.js'] },
      { label: 'Automation and AI', items: ['AI Agents', 'LangGraph', 'LLMs'] },
      { label: 'Data and integration', items: ['PostgreSQL', 'MySQL', 'Redis', 'REST APIs', 'WhatsApp Business API'] },
    ],
    related: ['erp-enterprise-solutions', 'artificial-intelligence', 'custom-software'],
  },
  {
    slug: 'custom-software',
    title: 'Custom Software & Digital Experiences',
    shortTitle: 'Custom Software',
    icon: CodeXml,
    summary: 'Web applications, portals, APIs and product engineering.',
    description:
      'We design and engineer web applications, customer portals, internal tools and APIs, for organizations that need software built around their specific product or process.',
    capabilities: [
      'Web application development',
      'Customer and partner portals',
      'Internal tools and dashboards',
      'API and backend engineering',
      'UI/UX design and prototyping',
      'Modernization of existing products',
    ],
    benefits: [
      'Software that matches your process',
      'You own the product and its roadmap',
      'A better experience for your users',
      'Architecture that can scale with demand',
    ],
    hero: {
      headline: 'Software built around your product, process and customers',
      intro:
        'When off-the-shelf tools do not fit, we design and build applications that do, with clear architecture, maintainable code and interfaces people find easy to use.',
    },
    problems: [
      {
        title: 'Tools do not match the process',
        description:
          'Teams adapt their work to fit generic software, or fill gaps with manual steps.',
      },
      {
        title: 'Digital experience lags the business',
        description:
          'Slow websites and confusing portals cost enquiries and create extra work for support.',
      },
      {
        title: 'Existing code is hard to change',
        description:
          'Each new feature takes longer, and releases carry more risk than they should.',
      },
      {
        title: 'Good ideas need engineering capacity',
        description:
          'A product opportunity is clear, but the team to design and build it is not in place.',
      },
    ],
    solutions: [
      {
        title: 'Product design and engineering',
        description:
          'From a defined first release to an evolving product, with design and development working together.',
      },
      {
        title: 'Portals and business applications',
        description:
          'Secure web applications for customers, partners and internal teams.',
      },
      {
        title: 'APIs and platform engineering',
        description:
          'Well-documented backend services and integrations that other systems can depend on.',
      },
      {
        title: 'Application modernization',
        description:
          'Incremental rework of older products, improving performance and maintainability without a risky rewrite.',
      },
    ],
    features: [
      'Responsive, accessible interfaces',
      'Design systems and reusable components',
      'Secure authentication and roles',
      'REST API design and documentation',
      'Automated testing and CI/CD',
      'Performance and SEO optimization',
      'Cloud deployment and monitoring',
      'AI features where they add value',
    ],
    outcomes: [
      {
        title: 'A close fit to your work',
        description: 'Features are shaped by how your users actually operate.',
      },
      {
        title: 'Faster, clearer experiences',
        description: 'Well-designed interfaces help people finish what they came to do.',
      },
      {
        title: 'Confident releases',
        description: 'Automated checks and clean architecture lower the cost of change.',
      },
      {
        title: 'Room to grow',
        description: 'A modular foundation makes it practical to add products and integrations.',
      },
    ],
    technology: [
      { label: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Python', 'FastAPI', 'Java', 'Spring Boot'] },
      { label: 'Data and platform', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cloud services'] },
    ],
    related: ['artificial-intelligence', 'erp-enterprise-solutions', 'supply-chain'],
  },
];

export const getService = (slug: string | undefined) => services.find((service) => service.slug === slug);

export const servicePath = (slug: string) => `/services/${slug}`;
