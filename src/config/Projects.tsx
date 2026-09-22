import Celery from "@/components/technologies/Celery";
import Django from "@/components/technologies/Django";
import Docker from "@/components/technologies/Docker";
import NextJs from "@/components/technologies/NextJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import Redis from "@/components/technologies/Redis";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";
import { Project } from "@/types/project";

// The landing page shows the first four; /projects lists them all.
export const projects: Project[] = [
  {
    title: "GetHired",
    description:
      "Job aggregation and recruitment platform: scraped listings and recruiter-posted jobs normalized into one API, with Postgres full-text search, Celery ingestion with dedup and backoff, and a Next.js front end. Deployed on Vercel, Render, Neon and Upstash.",
    image: "/project/gethired.jpg",
    link: "https://get-hired-lemon.vercel.app",
    technologies: [
      { name: "Django", icon: <Django key="django" /> },
      { name: "PostgreSQL", icon: <PostgreSQL key="postgresql" /> },
      { name: "Redis", icon: <Redis key="redis" /> },
      { name: "Celery", icon: <Celery key="celery" /> },
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "Docker", icon: <Docker key="docker" /> },
    ],
    github: "https://github.com/ankurkharb/GetHired",
    live: "https://get-hired-lemon.vercel.app",
    details: false,
    projectDetailsPageSlug: "#",
    isWorking: true,
  },
  {
    title: "Buildr.ai",
    description:
      "Describe a website in plain English and an AI agent writes a working Next.js app, running the code in isolated E2B sandboxes with a live preview. tRPC, Prisma and PostgreSQL behind role-based auth.",
    image: "/project/buildr.jpg",
    link: "https://buildr-theta.vercel.app",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Prisma", icon: <Prisma key="prisma" /> },
      { name: "PostgreSQL", icon: <PostgreSQL key="postgresql" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
    ],
    github: "https://github.com/ankurkharb/Buildr",
    live: "https://buildr-theta.vercel.app",
    details: false,
    projectDetailsPageSlug: "#",
    isWorking: true,
  },
  {
    title: "NovaAI",
    description:
      "AI voice interview platform: real-time interviews through Vapi AI and OpenAI, with automated scoring, feedback, transcript analysis and a dashboard for tracking candidate performance.",
    image: "/project/nova.jpg",
    link: "https://ai-tutor-five-green.vercel.app",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Prisma", icon: <Prisma key="prisma" /> },
      { name: "PostgreSQL", icon: <PostgreSQL key="postgresql" /> },
    ],
    github: "https://github.com/ankurkharb/Nova-AI",
    live: "https://ai-tutor-five-green.vercel.app",
    details: false,
    projectDetailsPageSlug: "#",
    isWorking: true,
  },
  {
    title: "Explore the Music",
    description:
      "A full-bleed Seedhe Maut music player with YouTube playback, shuffled tracks, synced controls, MP4 motion loops, album-art fallbacks and keyboard shortcuts.",
    image: "/project/seedhemaut.jpg",
    link: "https://seedhe-maut-snowy.vercel.app",
    technologies: [
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
    ],
    github: "https://github.com/ankurkharb/SeedheMaut",
    live: "https://seedhe-maut-snowy.vercel.app",
    details: false,
    projectDetailsPageSlug: "#",
    isWorking: true,
  },
  {
    title: "Meet AI",
    description:
      "Custom AI agents that join video calls as live participants, talk in real time, then deliver transcripts, summaries and action items after the meeting.",
    image: "/project/meetai.jpg",
    // The deployment is down; restore the live link once it is redeployed.
    link: "#",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "PostgreSQL", icon: <PostgreSQL key="postgresql" /> },
    ],
    github: "https://github.com/ankurkharb/Meet-AI",
    live: "#",
    details: false,
    projectDetailsPageSlug: "#",
    isWorking: false,
  },
];
