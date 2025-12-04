export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
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


