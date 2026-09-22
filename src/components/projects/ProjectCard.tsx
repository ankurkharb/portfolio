"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { type Project } from "@/types/project";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

import Github from "../svgs/Github";
import Website from "../svgs/Website";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group h-full w-full gap-4 overflow-hidden border-[var(--rule)] bg-[var(--char)] p-0 shadow-none transition-all hover:border-[var(--blood-text)]/60">
      <CardHeader className="p-0">
        <div className="group relative aspect-video overflow-hidden">
          <Image
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width={1280}
            height={720}
            sizes="(min-width: 768px) 360px, 100vw"
          />
        </div>
      </CardHeader>

      <CardContent className="px-6">
        <div className="space-y-4">
          {/* Project Header - Title and Icons */}
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-display group-hover:text-primary text-xl leading-tight font-bold tracking-wide transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              {project.link && project.link !== "#" && (
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                      href={project.link}
                      target="_blank"
                    >
                      <Website />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Website</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {project.github && (
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                      href={project.github}
                      target="_blank"
                    >
                      <Github />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View GitHub</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-secondary leading-relaxed">{project.description}</p>

          {/* Technologies */}
          <div>
            <h4 className="text-primary mb-2 text-[11px] font-bold tracking-[0.2em] uppercase">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <div className="size-6 transition-all duration-300 hover:scale-120 hover:cursor-pointer">
                      {technology.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{technology.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-6 pt-0">
        <div
          className={`flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-semibold ${
            project.isWorking
              ? "border-[var(--rule)] bg-white/5 text-[var(--bone)]"
              : "border-[var(--blood-text)]/40 bg-[var(--blood)]/15 text-[var(--bone)]"
          }`}
        >
          <div
            className={`size-2 rounded-full ${
              project.isWorking ? "animate-pulse bg-[var(--ember)]" : "bg-[var(--blood-text)]"
            }`}
          />
          {project.isWorking ? "Live" : "Demo offline"}
        </div>
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="text-foreground hover:text-primary flex items-center gap-2 text-sm font-semibold underline-offset-4 transition-colors hover:underline"
          >
            Source Code
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
