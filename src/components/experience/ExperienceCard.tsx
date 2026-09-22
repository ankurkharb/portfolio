import { type Experience } from "@/config/Experience";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

import Skill from "../common/Skill";
import Github from "../svgs/Github";
import LinkedIn from "../svgs/LinkedIn";
import Website from "../svgs/Website";
import X from "../svgs/X";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ExperienceCardProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, "<b>$1</b>");
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="row-rule flex flex-col gap-3 py-5">
      {/* Company Header */}
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        {/* Left Side */}
        <div className="flex min-w-0 items-center gap-4">
          <Image
            src={experience.image}
            alt={experience.company}
            width={100}
            height={100}
            className="size-12 rounded-md border border-[var(--rule)]"
          />
          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-2">
              <h3
                className={cn(
                  "text-lg font-bold",
                  experience.isBlur ? "blur-[5px]" : "blur-none"
                )}
              >
                {experience.company}
              </h3>
              {experience.website && experience.website !== "#" && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.website}
                      target="_blank"
                      className="size-4 text-[var(--ash)] hover:text-[var(--blood-text)]"
                    >
                      <Website />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Visit Website</TooltipContent>
                </Tooltip>
              )}
              {experience.x && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.x}
                      target="_blank"
                      className="size-4 text-[var(--ash)] hover:text-[var(--blood-text)]"
                    >
                      <X />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Follow on X</TooltipContent>
                </Tooltip>
              )}
              {experience.linkedin && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.linkedin}
                      target="_blank"
                      className="size-4 text-[var(--ash)] hover:text-[var(--blood-text)]"
                    >
                      <LinkedIn />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Connect on LinkedIn</TooltipContent>
                </Tooltip>
              )}
              {experience.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.github}
                      target="_blank"
                      className="size-4 text-[var(--ash)] hover:text-[var(--blood-text)]"
                    >
                      <Github />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>View GitHub</TooltipContent>
                </Tooltip>
              )}
              {experience.isCurrent && (
                <div className="flex items-center gap-1.5 rounded-md border border-[var(--blood-text)]/40 bg-[var(--blood)]/15 px-2 py-1 text-xs font-semibold text-[var(--bone)]">
                  <div className="size-2 animate-pulse rounded-full bg-[var(--blood-text)]"></div>
                  Current
                </div>
              )}
            </div>
            <p className="text-secondary">{experience.position}</p>
          </div>
        </div>
        {/* Right Side — shrink-0 so a long position title can't squeeze the
            dates into wrapping. */}
        <div className="text-secondary flex shrink-0 flex-col text-sm whitespace-nowrap md:text-right">
          <p>
            {experience.startDate} —{" "}
            {experience.isCurrent ? "Present" : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-primary mt-2 mb-2 text-[11px] font-bold tracking-[0.2em] uppercase">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((technology, techIndex: number) => (
            <Skill
              key={techIndex}
              name={technology.name}
              href={technology.href}
            >
              {technology.icon}
            </Skill>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="text-secondary flex flex-col gap-1.5 leading-relaxed [&_b]:text-[var(--bone)]">
        {experience.description.map(
          (description: string, descIndex: number) => (
            <p
              key={descIndex}
              dangerouslySetInnerHTML={{
                __html: `• ${parseDescription(description)}`,
              }}
            />
          )
        )}
      </div>
    </div>
  );
}
