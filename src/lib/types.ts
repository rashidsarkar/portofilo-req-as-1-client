export interface Project {
  id: string;
  title: string;
  image: string;
  overview: string;
  technologies: {
    frontend: string[];
    backend: string[];
    database: string;
  };
  links: {
    liveDemo: string;
    clientRepo: string;
    serverRepo: string;
  };
  features: {
    icon: string;
    label: string;
    gradient: string;
  }[];
  loginCredentials: {
    email: string;
    password: string;
  };
  featured: boolean;
  createdAt: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  tags: string[];
  author: string;
  createdAt: string;
  readTime: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  avatar: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
} 