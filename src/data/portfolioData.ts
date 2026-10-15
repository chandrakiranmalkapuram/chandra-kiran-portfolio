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
  email: 'chandrakiranmalkapuram2000@gmail.com',
  location: 'Greater London, United Kingdom',
  availability: 'Available for full-time roles & engineering collaborations',
  shortBio:
    'Early-career AI and Cloud/DevOps Engineer with hands-on experience designing and shipping production infrastructure on Microsoft Azure, containerised microservices, and conversational AI products using Google Gemini and modern web technologies. Currently pursuing an MSc in Cloud Computing at the University of East London.',
  fullBio: [
    'I am an engineer focused on the intersection of cloud infrastructure, applied artificial intelligence, and full-stack software development. My experience ranges from engineering multi-job CI/CD deployment pipelines on Azure with distroless Docker containers to building grounded conversational retail assistants and warehouse operational tools.',
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
    email: 'chandrakiranmalkapuram2000@gmail.com'
  }
};

export const projects: Project[] = [
  {
    id: 'check-character',
    title: 'Check Character & Voice Confusion Risk System',
    subtitle: 'High-Volume Stockroom Validation & Acoustic Confusion Reporting Platform',
    category: 'ai-fullstack',
    featured: true,
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
      'Inverted index reverse lookup across 67,600 warehouse store locations (00AA–99ZZ)',
      'Community Voice Confusion Risk reporting with anti-duplicate indexing & public moderation',
      'Strict TypeScript architecture with 80+ unit and integration tests (Vitest)'
    ]
  },
  {
    id: 'retail-ai-assistant',
    title: 'Retail AI Conversational Platform',
    subtitle: 'Conversational Retail Intelligence & Product Compatibility Engine',
    category: 'ai-fullstack',
    featured: true,
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Google Gemini 2.5 Flash', 'OpenRouter'],
    githubUrl: 'https://github.com/chandrakiranmalkapuram/retail-ai-assistant',
    liveUrl: undefined, // Optional live demo link
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
    featured: true,
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
    featured: false,
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
    featured: false,
    tags: ['HTML5', 'Modern CSS3', 'Vanilla JavaScript', 'Netlify', 'SVG Art'],
    githubUrl: 'https://github.com/chandrakiranmalkapuram/Wedding-invitation-in-2-min',
    liveUrl: 'https://chandrakiranmalkapuram.github.io/Wedding-invitation-in-2-min/',
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
      { name: 'Microsoft Azure', level: 'Production', tag: 'Core' },
      { name: 'Azure Container Apps', level: 'Production' },
      { name: 'Azure Container Registry', level: 'Production' },
      { name: 'Azure Static Web Apps', level: 'Production' },
      { name: 'Azure DB for PostgreSQL', level: 'Production' },
      { name: 'Cloudflare Pages', level: 'Deployment', tag: 'Web' },
      { name: 'Linux Administration', level: 'Proficient' }
    ]
  },
  {
    title: 'DevOps & Automation',
    icon: 'Terminal',
    skills: [
      { name: 'Docker & Distroless Containers', level: 'Production', tag: 'Core' },
      { name: 'GitHub Actions (CI/CD)', level: 'Production', tag: 'Core' },
      { name: 'YAML Pipeline Authoring', level: 'Production' },
      { name: 'Git & Trunk-Based Workflows', level: 'Advanced' },
      { name: 'Secret & Credential Management', level: 'Production' },
      { name: 'Release Automation', level: 'Proficient' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: 'Cpu',
    skills: [
      { name: 'Large Language Models (LLMs)', level: 'Applied', tag: 'Core' },
      { name: 'Google Gemini 2.5 Flash', level: 'Applied' },
      { name: 'Prompt Engineering & Grounding', level: 'Advanced', tag: 'Core' },
      { name: 'OpenRouter Multi-Provider API', level: 'Applied' },
      { name: 'Machine Learning Pipelines', level: 'Academic' },
      { name: 'CNN, SVM, ANN Classifier Fusion', level: 'Research' }
    ]
  },
  {
    title: 'Frontend Engineering',
    icon: 'Layout',
    skills: [
      { name: 'React (18 / 19)', level: 'Advanced', tag: 'Core' },
      { name: 'TypeScript', level: 'Advanced', tag: 'Core' },
      { name: 'JavaScript (ESNext)', level: 'Advanced' },
      { name: 'Vite & Modern Tooling', level: 'Advanced' },
      { name: 'Responsive Vanilla CSS & Tokens', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Proficient' },
      { name: 'Web Speech API', level: 'Proficient' }
    ]
  },
  {
    title: 'Backend & Data',
    icon: 'Database',
    skills: [
      { name: 'Python', level: 'Advanced', tag: 'Core' },
      { name: 'Node.js & Express', level: 'Proficient' },
      { name: 'FastAPI', level: 'Proficient' },
      { name: 'PostgreSQL & Supabase', level: 'Proficient', tag: 'Core' },
      { name: 'RESTful API Design', level: 'Advanced' },
      { name: 'Database Migrations & RLS', level: 'Proficient' }
    ]
  },
  {
    title: 'Engineering Practices',
    icon: 'ShieldCheck',
    skills: [
      { name: 'Cloud-Native Architecture', level: 'Applied' },
      { name: 'System Design', level: 'Applied' },
      { name: 'Unit Testing (Vitest)', level: 'Advanced' },
      { name: 'Security & Attack Surface Reduction', level: 'Applied' },
      { name: 'Agile Collaboration', level: 'Applied' },
      { name: 'Technical Documentation', level: 'Advanced' }
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    id: 'cerevyn',
    role: 'DevOps / Cloud Engineering Intern',
    company: 'Cerevyn Solutions',
    location: 'Remote',
    period: '2024',
    type: 'Internship',
    description:
      'Owned the delivery of production cloud infrastructure for CerevakyaNet, an enterprise multilingual text-to-speech application supporting all 22 scheduled Indian languages plus English, collaborating directly with the team lead and software developers.',
    achievements: [
      'Designed and implemented an automated end-to-end CI/CD deployment pipeline in GitHub Actions, transitioning the system from manual deployments to repeatable, multi-job cloud releases.',
      'Containerised backend Python services using distroless Docker images, minimising image footprints and drastically hardening security ahead of production rollout.',
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
      'Docker (Distroless)',
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
