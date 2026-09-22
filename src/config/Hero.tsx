import Github from "@/components/svgs/Github";
import LeetCode from "@/components/svgs/LeetCode";
import LinkedIn from "@/components/svgs/LinkedIn";
import Mail from "@/components/svgs/Mail";
import Django from "@/components/technologies/Django";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Python from "@/components/technologies/Python";
import Redis from "@/components/technologies/Redis";

// Component mapping for the skills named inside the description.
export const skillComponents = {
  NodeJs: NodeJs,
  Python: Python,
  Django: Django,
  PostgreSQL: PostgreSQL,
  Redis: Redis,
};

export const heroConfig = {
  name: "Ankur Kharb",
  title: "Backend Developer.",
  // The Brand of Sacrifice stands in for a photo. To use a photo instead,
  // drop it in public/assets/ and set its path here (e.g. "/assets/me.jpg").
  avatar: null as string | null,
  epithet: "The Struggler",

  skills: [
    { name: "Node.js", component: "NodeJs" },
    { name: "Python", component: "Python" },
    { name: "Django", component: "Django" },
    { name: "PostgreSQL", component: "PostgreSQL" },
    { name: "Redis", component: "Redis" },
  ],

  description: {
    template:
      "I forge backend systems that stay standing when the load hits, with {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. Backend Developer Intern at <b>Plutonic Services</b>, building <b>REST APIs</b>, <b>async pipelines</b> and <b>AI products</b>.",
  },

  buttons: [
    {
      variant: "default",
      text: "Resume / CV",
      href: "/Ankur_Kharb_Resume.pdf",
      icon: "CV",
    },
  ],
};

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ankurkharb",
    icon: <LinkedIn />,
  },
  {
    name: "GitHub",
    href: "https://github.com/ankurkharb",
    icon: <Github />,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/ankurkharb1234/",
    icon: <LeetCode />,
  },
  {
    name: "Email me",
    href: "mailto:ankurkharb1234@gmail.com",
    icon: <Mail />,
  },
];
