import Django from "@/components/technologies/Django";
import ExpressJs from "@/components/technologies/ExpressJs";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import MySQL from "@/components/technologies/MySQL";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Python from "@/components/technologies/Python";
import ReactIcon from "@/components/technologies/ReactIcon";

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

// *text* renders bold in the card.
export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: "Plutonic Services",
    position: "Backend Developer Intern",
    location: "Noida, Uttar Pradesh",
    image: "/company/plutonic.svg",
    description: [
      "Engineered an end-to-end *employee monitoring module* with Python and Django REST Framework, integrating Windows/macOS desktop agents with APIs for screenshot capture, idle-time tracking, live presence and manager productivity reports.",
      "Developed backend services for a *ride-hailing and logistics platform* and an *ERP for law firms* using Node.js, Express.js, Python, Django and DRF.",
      "Built secure *REST APIs* for authentication, booking, wallet, cargo, customer management and reporting with Sequelize, Django ORM and PostgreSQL/MySQL.",
    ],
    startDate: "June 2026",
    endDate: "Present",
    website: "#",
    technologies: [
      { name: "Python", href: "https://www.python.org", icon: <Python /> },
      { name: "Django", href: "https://www.djangoproject.com", icon: <Django /> },
      { name: "Node.js", href: "https://nodejs.org", icon: <NodeJs /> },
      { name: "Express", href: "https://expressjs.com", icon: <ExpressJs /> },
      { name: "PostgreSQL", href: "https://www.postgresql.org", icon: <PostgreSQL /> },
      { name: "MySQL", href: "https://www.mysql.com", icon: <MySQL /> },
    ],
  },
  {
    isCurrent: false,
    company: "TCIL",
    position: "Full Stack Developer Intern",
    location: "Chandigarh, Punjab",
    image: "/company/tcil.svg",
    description: [
      "Built and optimized full-stack web applications on the *MERN stack*, improving overall application performance by *25%*.",
      "Designed *RESTful APIs* with Node.js and Express.js, cutting API response time by *30%* through efficient routing and optimized MongoDB queries.",
      "Refactored React components and state management, raising UI responsiveness and code reuse by *20%*.",
      "Worked in an *Agile* team on bugs and feature requests, contributing to a *15%* drop in reported issues.",
    ],
    startDate: "June 2024",
    endDate: "Dec 2024",
    website: "#",
    technologies: [
      { name: "React", href: "https://react.dev", icon: <ReactIcon /> },
      { name: "Node.js", href: "https://nodejs.org", icon: <NodeJs /> },
      { name: "Express", href: "https://expressjs.com", icon: <ExpressJs /> },
      { name: "MongoDB", href: "https://www.mongodb.com", icon: <MongoDB /> },
      {
        name: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: <JavaScript />,
      },
    ],
  },
];
