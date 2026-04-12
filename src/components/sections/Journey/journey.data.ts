export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
  skills?: string[];
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: '1',
    year: '2026',
    title: 'thingqbator Student Body',
    organization: 'Cisco-backed Incubation',
    description: 'Selected as a Web Developer and Debugger for the student body. Responsible for maintaining internal platforms and supporting early-stage startup prototypes.',
    type: 'achievement',
    skills: ['Web Development', 'Debugging', 'Team Leadership', 'Startup Incubation'],
  },
  {
    id: '2',
    year: '2026',
    title: 'DevOps & Advanced Engineering',
    organization: 'Self-Driven / Academic',
    description: 'Actively learning DevOps methodologies, focusing on AWS, Docker, and CI/CD pipelines to build scalable, production-ready software.',
    type: 'education',
    skills: ['AWS', 'Docker', 'CI/CD', 'System Design'],
  },
  {
    id: '3',
    year: '2025',
    title: 'Full Stack Development (MERN)',
    organization: 'B.Tech CS Student',
    description: 'Mastered the MERN stack and built RoamReserve (Airbnb clone). Deepened focus on Data Structures and Algorithms (DSA) in Java.',
    type: 'work',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Java (DSA)'],
  },
  {
    id: '4',
    year: '2024',
    title: 'Engineering Begins',
    organization: 'B.Tech Computer Science',
    description: 'Started academic journey in Computer Science. Dove into core fundamentals — Data Structures & Algorithms using Java, web development basics, and the discipline of writing clean, logical code.',
    type: 'education',
    skills: ['C/C++', 'Java (DSA)', 'Logic Design', 'Web Development Basics'],
  },
  {
    id: '5',
    year: '2022',
    title: 'The Spark',
    organization: 'Self-Learning',
    description: 'Growing up through an Odia medium school, discovered a passion for computers and technology. This planted the seed of a dream — to build a global career in software engineering through relentless self-learning.',
    type: 'achievement',
    skills: ['Self-Learning', 'Problem Solving', 'Passion for Tech'],
  },
];
