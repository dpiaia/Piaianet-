export interface Project {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  coverImage: string;
  gallery: string[]; // URLs for wireframes, mockups, etc.
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  link?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  quote: string;
}

export interface NavItem {
  label: string;
  href: string;
}