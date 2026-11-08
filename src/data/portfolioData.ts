import type { PersonalInfo, Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Edit this file to update any personal information, project links, skills,
 * employment history, or education. All data is typed and validated.
 */

export const personalInfo: PersonalInfo = {
  name: 'Chandra Kiran Malkapuram',
  preferredName: 'Chandra Kiran',
  title: 'AI & Cloud / DevOps Engineer',
  badge: '📍 Greater London, UK · Open to Opportunities',
  tagline: 'Building resilient cloud-native architectures, conversational AI systems, and modern web applications.',
  domain: 'chandrakiran.dev',
  email: 'chandrakiranmalkapuram@gmail.com',
  location: 'Greater London, United Kingdom',
  availability: 'Available for full-time roles & engineering collaborations',
  shortBio:
    'Cloud & DevOps Engineer with hands-on internship and project experience deploying containerised microservices to Microsoft Azure, engineering automated CI/CD pipelines, and building grounded AI applications. MSc Cloud Computing candidate at the University of East London.',
  fullBio: [
    'I am an engineer focused on cloud infrastructure, container orchestration, and applied AI systems. Through hands-on internship and project work, my experience includes deploying containerised microservices on Microsoft Azure, authoring multi-job GitHub Actions pipelines, and building grounded conversational tools and warehouse logistics engines.',
    'I believe production discipline matters at every stage: clean architecture, deterministic builds, container security, comprehensive documentation, and accessible user interfaces that solve real-world operational problems.',
    'Currently reading for an MSc in Cloud Computing at the University of East London, deepening my formal grounding in distributed systems, cloud security, container orchestration, and DevOps engineering alongside practical shipping experience.'
  ],
  coreCompetencies: [
    'Cloud-Native Architecture',
    'CI/CD & Deployment Automation',
    'Containerisation (Docker)',
    'Generative AI & LLM Integration',
    'Prompt Engineering',
    'REST API Design',
    'System Design',
    'Infrastructure Security',
    'Agile Collaboration',
    'Technical Documentation',
    'Full-Stack TypeScript & Python'
  ],
  socials: {
    github: 'https://github.com/chandrakiranmalkapuram',
    linkedin: 'https://www.linkedin.com/in/chandra-kiran-malkapuram/',
    email: 'chandrakiranmalkapuram@gmail.com'
  }
};

export const projects: Project[] = [
  {
    id: 'check-character',
    title: 'Check Character & Voice Confusion Platform',
    subtitle: 'High-Volume Stockroom Validation & Acoustic Confusion Reporting System',
    category: 'ai-fullstack',
    categoryLabel: 'RETAIL & LOGISTICS SYSTEMS',
    featured: true,
    status: 'Production · Live Tool',
    problem:
      'Voice-directed picking in high-volume retail warehouses causes picking errors and inventory drift when acoustic noise or similar-sounding letters lead to misheard check characters.',
    solution:
      'Engineered an independent dual calculation engine for Store (modulo 26) and RFC (modulo 99) locations, NATO phonetic speech synthesis, client-side store coordinate inverted index (00AA–99ZZ), and an open voice confusion risk reporting platform with Supabase PostgreSQL and Vitest.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Supabase PostgreSQL', 'Web Speech API', 'Vitest'],
    githubUrl: 'https://github.com/chandrakiranmalkapuram/Argos-check-character',
    liveUrl: 'https://chandrakiran.dev/checkcharacter/',
    description:
      'A responsive stockroom shelf verification and voice confusion mitigation platform designed for voice-directed picking headsets in high-volume retail warehouse environments.',
    detailedDescription:
      'Engineered an independent calculation engine for Store location check characters (weighted ASCII modulo 26 mapped to NATO phonetics) and RFC Regional Fulfilment Centre locations. Built a community-powered Voice Confusion Risk reporting system backed by Supabase PostgreSQL featuring open public submissions, duplicate prevention, and authenticated moderator workflows.',
    highlights: [
      'Dual Store & RFC calculation engines decoupled from UI components',
      'NATO phonetic speech synthesis with Web Speech API audio playback',
      'Inverted index reverse lookup across standard warehouse store coordinates (00AA–99ZZ)',
      'Community Voice Confusion Risk reporting with anti-duplicate indexing & public moderation',
      'Strict TypeScript architecture with 80+ unit and integration tests (Vitest)'
    ]
  },
  {
    id: 'commitflow-ai',
    title: 'CommitFlow AI',
    subtitle: 'Autonomous Git-to-Social Engineering Narrative & Publishing Engine',
    category: 'ai-fullstack',
    categoryLabel: 'AI & DISTRIBUTED SYSTEMS',
    featured: true,
    status: 'Full-Stack Implementation',
    problem:
      'Software engineering teams lack an automated, grounded workflow to extract meaningful engineering updates from raw git commits and reliably distribute structured technical release narratives to developer networks.',
    solution:
      'Engineered an asynchronous content pipeline using BullMQ and Redis to process Git commit feeds, generate grounded technical posts using xAI Grok (grok-2-latest) with structured Zod schema validation, and publish directly via encrypted OAuth platform credentials (LinkedIn v2 API) with human approval workflows.',
    tags: ['React 19', 'TypeScript', 'Node.js', 'Express 5', 'BullMQ', 'Redis', 'PostgreSQL', 'Prisma', 'xAI Grok', 'LinkedIn API'],
    githubUrl: 'https://github.com/chandrakiranmalkapuram/commitflow-ai',
    description:
      'An automated engineering workflow platform that converts Git commits into grounded technical narratives and multi-platform publications with background queue processing and OAuth distribution.',
    detailedDescription:
      'Engineered an asynchronous content pipeline using BullMQ and Redis to process Git commit feeds, generate grounded technical posts using xAI Grok (grok-2-latest) with structured Zod schema validation, and publish directly to developer networks via encrypted OAuth tokens. Features review and approval workflows with automated status reconciliation.',
    highlights: [
      'Asynchronous job queue architecture with BullMQ & Redis handling background publishing',
      'xAI Grok (grok-2-latest) prompt synthesis with strict Zod schema validation',
      'Encrypted OAuth token management and platform publishing via LinkedIn v2 UGC API',
      'Monorepo architecture with React 19, Express 5, and Prisma ORM on PostgreSQL'
    ]
  },
  {
    id: 'create-rota',
    title: 'Create Rota',
    subtitle: 'Multi-Tenant Enterprise Workforce Scheduling & Roster Engine',
    category: 'cloud-devops',
    categoryLabel: 'CLOUD & ENTERPRISE SYSTEMS',
    featured: true,
    status: 'Full-Stack Implementation',
    problem:
      'Organizational shift scheduling requires optimal constraint allocation, strict multi-tenant workspace isolation, secure authentication, and prevention of fraudulent account creation via disposable email domains.',
    solution:
      'Built a multi-tenant roster management engine featuring Argon2id password hashing, time-limited single-use email verification tokens, server-side disposable email filtering, Google OR-Tools constraint satisfaction shift optimization, and database-level workspace tenancy via PostgreSQL and Alembic migrations.',
    tags: ['React 19', 'TypeScript', 'FastAPI', 'Python 3.11', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Google OR-Tools', 'Argon2id'],
    githubUrl: 'https://github.com/chandrakiranmalkapuram/create-rota',
    description:
      'An enterprise shift scheduling and workforce management system engineered with strict multi-tenant workspace isolation, secure authentication, and automated shift allocation.',
    detailedDescription:
      'Built a robust full-stack roster management engine featuring Argon2id password hashing, time-limited single-use email verification tokens, disposable email domain filtering, Google OR-Tools shift scheduling optimization, and strict database-level workspace tenancy isolation with foreign key constraints and Alembic migrations.',
    highlights: [
      'Multi-tenant workspace isolation preventing cross-tenant IDOR access at the query level',
      'Constraint satisfaction shift optimization powered by Google OR-Tools solver',
      'Cryptographically secure authentication with Argon2id and rate-limited token management',
      'Server-side disposable email filtering engine and automated database migrations with Alembic'
    ]
  },
  {
    id: 'retail-ai-assistant',
    title: 'Retail AI Conversational Platform',
    subtitle: 'Conversational Retail Intelligence & Product Compatibility Engine',
    category: 'ai-fullstack',
    categoryLabel: 'APPLIED CONVERSATIONAL AI',
    featured: true,
    status: 'Production Prototype',
    problem:
      'Frontline retail staff spend valuable minutes manually looking up accessory compatibility, order details, and inventory across fragmented store systems.',
    solution:
      'Built a modular Node.js/Express service integrating Google Gemini 2.5 Flash via OpenRouter with a dedicated prompt-builder grounding layer, hardware accessory compatibility matcher, and persistent session memory.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Google Gemini 2.5', 'OpenRouter'],
    githubUrl: 'https://github.com/chandrakiranmalkapuram/retail-ai-assistant',
    description:
      'A full-stack conversational AI assistant designed to resolve frontline retail queries — product compatibility, order lookup, and store stock — without pulling staff away from customer service.',
    detailedDescription:
      'Built a modular Node.js/Express service backend integrating Google Gemini 2.5 Flash via OpenRouter. Implemented a dedicated prompt-builder grounding layer with a retail knowledge base, accessory compatibility matcher, typing indicators, and local-storage conversation persistence.',
    highlights: [
      'Grounded prompt-builder layer preventing hallucination on inventory and compatibility data',
      'Retail accessory matching tool for printers, cables, and hardware accessories',
      'Modular service architecture architected for multi-step agentic tool-calling',
      'Responsive React/TypeScript interface with persistent session memory'
    ]
  },
  {
    id: 'location-recovery-assistant',
    title: 'Intelligent Location Recovery Assistant',
    subtitle: 'System Design for Warehouse Discrepancy Resolution',
    category: 'cloud-devops',
    categoryLabel: 'SYSTEM DESIGN & ARCHITECTURE',
    featured: false,
    status: 'System Design Specification',
    problem:
      'When warehouse location codes are mistyped or misheard, stock misallocations cause cancelled picks and warehouse inefficiencies.',
    solution:
      'Authored an architectural specification for a non-invasive read-only overlay using multi-factor phonetic similarity scoring to rank candidate locations without risking live inventory drift.',
    tags: ['System Design', 'React', 'FastAPI', 'PostgreSQL', 'Phonetic Scoring'],
    githubUrl: 'https://github.com/chandrakiranmalkapuram/Argos-check-character',
    description:
      'Architectural system design for a non-invasive warehouse discrepancy recovery tool that surfaces likely locations for misplaced stock using phonetic similarity scoring.',
    detailedDescription:
      'Authored a comprehensive system design specification covering a React, FastAPI, and PostgreSQL architecture. Formulated a six-factor confidence scoring model to rank candidate locations when warehouse location codes have been mistyped, misheard, or misremembered.',
    highlights: [
      'Designed strictly as a read-only, non-invasive overlay safe for live inventory operations',
      'Multi-factor acoustic confidence ranking for error recovery',
      'Scalable service topology specification with end-to-end API documentation'
    ]
  },
  {
    id: 'diabetic-retinopathy',
    title: 'Diabetic Retinopathy Fused ML Framework',
    subtitle: 'Automated Retinal Image Classification & Classifier Fusion Pipeline',
    category: 'ml-research',
    categoryLabel: 'MACHINE LEARNING & RESEARCH',
    featured: false,
    status: 'Research Pipeline',
    problem:
      'Single machine learning classifiers struggle with high variance when detecting subtle retinal lesions across diverse diagnostic imaging conditions.',
    solution:
      'Extracted texture features using Gray-Level Co-occurrence Matrix (GLCM) and combined CNN, SVM, and ANN models through fuzzy decision fusion to improve generalization on the APTOS dataset.',
    tags: ['Python', 'CNN', 'SVM', 'ANN', 'Fuzzy Fusion', 'GLCM', 'Scikit-Learn'],
    githubUrl: 'https://github.com/chandrakiranmalkapuram/A-Novel-Fused-Machine-Learning-Framework-For-Prediction-of-Diabetic-Retinopathy',
    description:
      'An end-to-end medical machine learning pipeline developed on the APTOS 2019 Kaggle dataset, combining multiple classifier models through fuzzy fusion for enhanced diagnostic robustness.',
    detailedDescription:
      'Extracted texture features using Gray-Level Co-occurrence Matrix (GLCM) and evaluated combinations of Convolutional Neural Networks (CNN), Support Vector Machines (SVM), and Artificial Neural Networks (ANN). Applied fuzzy fusion to mitigate individual classifier variance and improve test set generalisation.',
    highlights: [
      'Automated data preprocessing, feature extraction, and model evaluation pipeline',
      'Fuzzy decision fusion combining complementary classifier paradigms',
      'Comprehensive performance evaluation with ROC curves, confusion matrices, and precision-recall metrics'
    ]
  },
  {
    id: 'wedding-invitation',
    title: 'South Indian Temple Digital Invitation Platform',
    subtitle: 'Crafted Zero-Dependency Mobile Web Experience',
    category: 'frontend',
    categoryLabel: 'CREATIVE FRONTEND & CANVAS',
    featured: false,
    status: 'Live Web Experience',
    problem:
      'Standard event invitations are loaded with framework bloat, tracking scripts, and brittle mobile audio handling.',
    solution:
      'Designed and built completely in vanilla HTML5, CSS3, and JavaScript with scratch-to-reveal canvas physics, inline SVG art, and compliant audio handling.',
    tags: ['HTML5 Canvas', 'Modern CSS', 'Vanilla JavaScript', 'SVG Art'],
    githubUrl: 'https://github.com/chandrakiranmalkapuram/Wedding-invitation-in-2-min',
    description:
      'A distinctive, mobile-first digital wedding invitation reflecting a traditional South Indian Hindu temple aesthetic, featuring scratch-to-reveal card physics and ambient audio control.',
    detailedDescription:
      'Designed and hand-built completely in vanilla HTML, CSS, and JavaScript with zero framework overhead. Features custom CSS gradients and inline SVGs (temple gopuram silhouette, diyas, mandapa pillars), canvas pointer scratch physics, and ambient audio handling complying with strict browser autoplay policies.',
    highlights: [
      'Zero external JavaScript frameworks or bloated dependencies',
      'Real canvas touch/pointer scratch-to-reveal interaction',
      'Accessible smooth motion respecting prefers-reduced-motion media query',
      'Graceful audio playback fallback handling for mobile WebKit & Blink browsers'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Infrastructure',
    icon: 'Cloud',
    skills: [
      { name: 'Microsoft Azure' },
      { name: 'Azure Container Apps' },
      { name: 'Azure Container Registry' },
      { name: 'Azure Static Web Apps' },
      { name: 'Azure DB for PostgreSQL' },
      { name: 'Cloudflare Workers & Pages' },
      { name: 'Linux Administration' }
    ]
  },
  {
    title: 'DevOps & Automation',
    icon: 'Terminal',
    skills: [
      { name: 'Docker & Container Hardening' },
      { name: 'GitHub Actions (CI/CD)' },
      { name: 'YAML Pipeline Authoring' },
      { name: 'Git & Trunk-Based Workflows' },
      { name: 'Secret & Credential Management' },
      { name: 'Release Automation' }
    ]
  },
  {
    title: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'JavaScript (ESNext)' },
      { name: 'React (18 / 19)' },
      { name: 'Node.js & Express' },
      { name: 'FastAPI' },
      { name: 'HTML5 & Modern CSS' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: 'Cpu',
    skills: [
      { name: 'Large Language Models (LLMs)' },
      { name: 'xAI Grok (grok-2-latest)' },
      { name: 'Google Gemini 2.5' },
      { name: 'Prompt Engineering & Zod Grounding' },
      { name: 'OpenRouter Multi-Provider API' },
      { name: 'CNN, SVM & ANN Architectures' },
      { name: 'Fuzzy Classifier Fusion' }
    ]
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'Supabase' },
      { name: 'Redis (BullMQ Queue)' },
      { name: 'Prisma ORM & SQLAlchemy' },
      { name: 'Alembic Database Migrations' },
      { name: 'Row-Level Security (RLS)' }
    ]
  },
  {
    title: 'Development Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Vite & Modern Tooling' },
      { name: 'Vitest & Unit Testing' },
      { name: 'Docker CLI' },
      { name: 'BullMQ Queue System' },
      { name: 'Oxlint & Code Quality' },
      { name: 'Postman & REST Verification' }
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    id: 'cerevyn',
    role: 'DevOps / Cloud Engineering Intern',
    company: 'Cerevyn Solutions',
    location: 'Remote',
    period: 'June–July 2026',
    type: 'Internship',
    description:
      'Owned the delivery of production cloud infrastructure for CerevakyaNet, an enterprise multilingual text-to-speech application supporting all 22 scheduled Indian languages plus English, collaborating directly with the team lead and software developers.',
    achievements: [
      'Designed and implemented an automated end-to-end CI/CD deployment pipeline in GitHub Actions, transitioning the system from manual deployments to repeatable, multi-job cloud releases.',
      'Containerised backend Python services using hardened multi-stage Dockerfiles with python:3.11-slim, minimising image footprints and reducing vulnerability attack surfaces ahead of production rollout.',
      'Configured Azure Container Registry (ACR) for private container image hosting and deployed microservices to Azure Container Apps for autoscaling container workloads.',
      'Deployed the frontend application to Azure Static Web Apps, configured custom domain SSL bindings, and safeguarded API credentials via GitHub Secrets.',
      'Diagnosed and resolved PostgreSQL database restoration issues on Azure Database for PostgreSQL, resolving dump-format mismatches and cross-version compatibility barriers.',
      'Authored comprehensive technical documentation, architecture blueprints, and a formal internship handover report.'
    ],
    technologies: [
      'Microsoft Azure',
      'Azure Container Apps',
      'Azure Container Registry',
      'Azure Static Web Apps',
      'Docker (Slim Containers)',
      'GitHub Actions',
      'PostgreSQL',
      'Linux',
      'YAML'
    ]
  }
];

export const education: EducationItem[] = [
  {
    id: 'uel',
    degree: 'Master of Science (MSc) in Cloud Computing',
    institution: 'University of East London',
    location: 'London, United Kingdom',
    period: 'Expected Graduation: January 2027',
    status: 'In Progress',
    modules: [
      'Cloud Architecture & Infrastructure',
      'Cloud Security & Compliance',
      'Containerisation & Microservices',
      'Distributed Systems',
      'DevOps Engineering & Automation'
    ],
    description:
      'Deepening formal academic foundations in distributed cloud architectures, container orchestration, microservices communication, resilient system design, and security engineering.'
  },
  {
    id: 'jntu',
    degree: 'Bachelor of Technology (BTech) in Computer Science',
    institution: 'Jawaharlal Nehru Technological University',
    location: 'India',
    period: 'Graduated: 2024',
    status: 'Completed',
    modules: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Machine Learning & Artificial Intelligence',
      'Software Engineering Principles'
    ],
    description:
      'Graduated with strong foundations in computing theory, algorithm design, relational database systems, network protocols, and applied machine learning research.'
  }
];
