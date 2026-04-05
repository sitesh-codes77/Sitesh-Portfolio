import { IconType } from 'react-icons';
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiDocker,
  SiPython,
  SiJavascript,
  SiGithub,
  SiVercel,
  SiPostman,
  SiFirebase,
  SiDjango,
  SiFlask,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const skills: Skill[] = [
  // Full Stack (MERN)
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  
  // Backend & Logic
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  
  // DevOps & Tools
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'VS Code', icon: VscCode, color: '#007ACC' },
  
  // Design & Deployment
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
];
