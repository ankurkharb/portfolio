import Container from "@/components/common/Container";
import { Quote } from "@/components/common/Quote";
import { ProjectList } from "@/components/projects/ProjectList";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/config/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Ankur Kharb",
  description:
    "Projects by Ankur Kharb: backend platforms, AI products and full-stack apps.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="font-display text-4xl font-bold tracking-wide lg:text-5xl">
            Projects
          </h1>
          <p className="text-secondary mx-auto max-w-2xl text-lg">
            Backend platforms, AI products and full-stack apps.
          </p>
        </div>

        <Separator />

        {/* Projects */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Projects
              {projects.length > 0 && (
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({projects.length}{" "}
                  {projects.length === 1 ? "project" : "projects"})
                </span>
              )}
            </h2>
          </div>

          <ProjectList projects={projects} />
        </div>
      </div>
      <Quote quote="Every project here was a battle. Some left scars; all of them left lessons." />
    </Container>
  );
}
