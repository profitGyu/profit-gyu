export interface HeaderProps {
  name: string;
  title: string;
  summary: string;
}

export interface ContactProps {
  email: string;
  phone: string;
  github: string;
}

export interface SkillsProps {
  frontend: string[];
  backend: string[];
  devops: string[];
  database: string[];
  collaboration: string[];
}

export interface Project {
  name: string;
  period?: string;
  role: string;
  stack: string[];
  achievements: string[];
}

export interface Experience {
  company: string;
  period: string;
  projects: Project[];
}

export interface WorkExperienceProps {
  experiences: Experience[];
}

export interface EducationItem {
  name: string;
  period?: string;
  description?: string;
}

export interface EducationProps {
  items: EducationItem[];
}
