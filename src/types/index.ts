export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  category: 'ai-fullstack' | 'cloud-devops' | 'ml-research' | 'frontend';
  featured: boolean;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    tag?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
  modules: string[];
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  username: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  preferredName: string;
  title: string;
  badge: string;
  tagline: string;
  domain: string;
  email: string;
  location: string;
  availability: string;
  shortBio: string;
  fullBio: string[];
  coreCompetencies: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface ArticleSection {
  heading: string;
  id: string;
  paragraphs: string[];
  codeBlock?: {
    language: string;
    code: string;
    caption?: string;
  };
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  callout?: {
    type: 'note' | 'tip' | 'warning' | 'info';
    text: string;
  };
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  publishedDate: string;
  lastUpdated: string;
  author: {
    name: string;
    title: string;
    bio: string;
  };
  category: 'Voice Logistics' | 'Algorithms & Verification' | 'Acoustic Reliability' | 'Systems Architecture';
  readTimeMinutes: number;
  tags: string[];
  sections: ArticleSection[];
  relatedProject?: {
    title: string;
    url: string;
    label: string;
  };
}
