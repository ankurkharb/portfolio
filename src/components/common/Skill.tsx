import { Link } from "next-view-transitions";
import React from "react";

interface SkillProps {
  name: string;
  href?: string;
  children: React.ReactNode;
}

const skillClassName =
  "skill-inner-shadow mx-0.5 inline-flex items-center align-middle rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black dark:border-white/30 dark:bg-white/15 dark:text-white";

export default function Skill({ name, href, children }: SkillProps) {
  const content = (
    <>
      <span className="inline-block size-4 flex-shrink-0">{children}</span>
      <span className="ml-1 text-sm font-bold">{name}</span>
    </>
  );

  if (!href) {
    return <span className={skillClassName}>{content}</span>;
  }

  return (
    <Link href={href} target="_blank" className={skillClassName}>
      {content}
    </Link>
  );
}
