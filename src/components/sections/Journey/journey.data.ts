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
    year: '2025',
    title: 'DevOps & Advanced Engineering',
    organization: 'Self-Driven / Academic',
    description: 'Actively learning DevOps methodologies, focusing on AWS, Docker, and CI/CD pipelines to build scalable, production-ready software.',
    type: 'education',
    skills: ['AWS', 'Docker', 'CI/CD', 'System Design'],
  },
  {
    id: '3',
    year: '2024',
    title: 'Full Stack Development (MERN)',
    organization: 'B.Tech CS Student',
    description: 'Mastered the MERN stack and built RoamReserve (Airbnb clone). Deepened focus on Data Structures and Algorithms (DSA) in Java.',
    type: 'work',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Java (DSA)'],
  },
  {
    id: '4',
    year: '2023',
    title: 'Started B.Tech CSE',
    organization: 'Engineering College',
    description: 'Began academic journey in Computer Science. Reached milestone of consistent coding practice and fundamental logic building.',
    type: 'education',
    skills: ['C/C++', 'Logic Design', 'Mathematics for CS'],
  },
];
