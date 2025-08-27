
import { IconType } from 'react-icons';

export interface NavLink {
  id: string;
  title: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: IconType;
}

export interface SoftSkill {
  name: string;
  description: string;
  icon: IconType;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  repoUrl: string;
  demoUrl: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  institution: string;
  description: string;
}
