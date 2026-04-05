export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  hoverImage: string;
  liveUrl?: string;
  githubUrl?: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RoamReserve",
    tagline: "Full-Scale Airbnb Clone — MERN Stack",
    description: "RoamReserve is a production-quality Airbnb clone built with the MERN Stack. It covers end-to-end functionality including user authentication, property listings, booking system, interactive maps, and image uploads.",
    features: [
      "User authentication with JWT & session management",
      "Property listings with search, filter, and map integration",
      "Full booking system with review and rating functionality"
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Mapbox", "Cloudinary"],
    image: "/images/projects/project1.png",
    hoverImage: "/images/projects/project1-hover.png",
    liveUrl: "https://roamreserve-demo.com",
    githubUrl: "https://github.com/sitesh-codes77/roamreserve",
    color: "99, 102, 241"
  },
  {
    id: 2,
    title: "Civil Intel",
    tagline: "Startup — Selected for College Innovation Mela",
    description: "Civil Intel is a startup project focused on solving real civic and urban challenges. Selected for the college Innovation Mela, it involved defining a business model, identifying target users, and architecting a technical solution for social impact.",
    features: [
      "Business model definition and market research",
      "Technical architecture for civic data intelligence",
      "Presentation and validation at Innovation Mela"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "Python"],
    image: "/images/projects/project2.png",
    hoverImage: "/images/projects/project2-hover.png",
    liveUrl: "https://civilintel-demo.com",
    githubUrl: "https://github.com/sitesh-codes77/civil-intel",
    color: "0, 119, 182"
  },
  {
    id: 3,
    title: "Spam Message Detection",
    tagline: "Machine Learning-Based Text Classification System",
    description: "Developed a machine learning-based spam message detection system using Python to classify SMS and text messages as spam or legitimate using NLP techniques.",
    features: [
      "Text preprocessing using NLP techniques (tokenization, stemming)",
      "Trained and evaluated ML models (Naive Bayes, SVM) for spam classification",
      "Real-time message prediction with probability scoring"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLTK", "Matplotlib"],
    image: "/images/projects/project3.png",
    hoverImage: "/images/projects/project3-hover.png",
    liveUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/sitesh-codes77/spam-message-detection",
    color: "220, 53, 69"
  },
];
