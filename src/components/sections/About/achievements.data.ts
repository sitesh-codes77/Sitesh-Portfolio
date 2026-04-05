import { Trophy, Award, Star, Target, Zap, Code, Users, BookOpen } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
  color: string;
  year?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'thingqbator',
    title: 'thingqbator Selected',
    description: 'Cisco-backed incubation student-body',
    details: 'Selected for the thingqbator student-body at college, a Cisco-backed incubation program. Contributing to the innovation and startup ecosystem, supporting early-stage ideas and technical execution.',
    icon: Trophy,
    color: '#F97316',
    year: '2025'
  },
  {
    id: 'roamreserve',
    title: 'RoamReserve Built',
    description: 'Full-scale Airbnb clone in MERN Stack',
    details: 'Completed RoamReserve — a full-scale Airbnb clone built with the MERN Stack. Covered authentication, listings, booking, maps integration, and image uploads in a production-quality codebase.',
    icon: Code,
    color: '#3B82F6',
    year: '2024'
  },
  {
    id: 'civilintel',
    title: 'Civil Intel',
    description: 'Startup selected for Innovation Mela',
    details: 'Civil Intel — a startup project — was selected for the college Innovation Mela. Focused on defining the business model, technical architecture, and real-world problem-solving.',
    icon: Award,
    color: '#EC4899',
    year: '2025'
  },
  {
    id: 'dsa',
    title: 'DSA with Java',
    description: 'Sharping logic for top-tier placements',
    details: 'Deeply focused on Data Structures & Algorithms using Java. Consistently solving problems across arrays, trees, graphs, and dynamic programming to sharpen problem-solving for competitive placements.',
    icon: Target,
    color: '#06B6D4',
  },
  {
    id: 'globalstandards',
    title: 'Global Standards',
    description: 'Building in English for a global career',
    details: 'Coming from an Odia medium school background, intentionally building portfolio, communication, and professional presence fully in English to achieve global professional standards.',
    icon: Star,
    color: '#F59E0B',
  },
  {
    id: 'devops',
    title: 'DevOps Explorer',
    description: 'Learning Docker & CI/CD pipelines',
    details: 'Actively learning DevOps practices including Docker containerization and CI/CD pipelines to become a complete engineer capable of shipping and scaling production systems independently.',
    icon: Zap,
    color: '#EF4444',
  },
  {
    id: 'philosophy',
    title: 'Silent Hard Work',
    description: 'Progress over showoff, discipline over hype',
    details: 'Core philosophy: believe in silent hard work and consistent progress. Self-driven, disciplined, and focused on building real-world value rather than collecting certificates.',
    icon: BookOpen,
    color: '#8B5CF6',
  },
  {
    id: 'codequality',
    title: 'Clean Code',
    description: 'Maintainable & scalable architecture',
    details: 'Committed to writing clean, readable, and maintainable code. Applies best practices in architecture, code organization, and documentation across every project.',
    icon: Users,
    color: '#10B981',
  },
];
