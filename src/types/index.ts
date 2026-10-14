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
