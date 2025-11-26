export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Avançado' | 'Intermediário';
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  location: string;
}

