import { mySkills } from "@/config/About";
import { heroConfig, skillComponents, socialLinks } from "@/config/Hero";
import { parseTemplate } from "@/lib/hero";
import Image from "next/image";
import { Link } from "next-view-transitions";
import React from "react";

import BrandMark from "../common/BrandMark";
import Container from "../common/Container";
import Skill from "../common/Skill";
import CV from "../svgs/CV";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const buttonIcons = {
  CV: CV,
};

export default function Hero() {
  const { name, title, avatar, epithet, skills, description, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === "skill" && "skill" in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === "bold" && "text" in part) {
        return (
          <b key={part.key} className="text-foreground whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === "text" && "text" in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    // No panel and a higher z-index: the avatar row sits over the banner's
    // lower edge (the banner has a negative bottom margin).
    <Container panel={false} className="row-rule row-rule-wide relative z-20 mx-auto px-8 pt-6 pb-8">
      {/* Avatar row, ruled like the banner cell above it. */}
      <div className="row-rule row-rule-wide relative flex items-start justify-between pb-5">
        <div className="relative shrink-0 rounded-[8px] border-[1.5px] border-[var(--rule)] bg-[var(--background)]/60 p-[3px] backdrop-blur-sm">
          <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[5px] bg-[var(--iron)] sm:h-20 sm:w-20">
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                width={240}
                height={240}
                quality={90}
                priority
                sizes="(min-width: 640px) 80px, 64px"
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <BrandMark className="h-3/4 w-3/4 text-[#dc1d27]" />
            )}
          </div>
        </div>
        <p className="text-primary pt-1 text-[11px] font-bold tracking-[0.28em] uppercase [text-shadow:0_1px_10px_#000,0_0_2px_#000]">
          {epithet}
        </p>
      </div>

      {/* Text Area */}
      <div className="mt-5 flex flex-col gap-2">
        <h1 className="text-2xl leading-snug font-bold tracking-tight sm:text-[1.7rem]">
          Hi, I&apos;m <span className="font-display tracking-wide">{name}</span> —{" "}
          <span className="text-primary">{title}</span>
        </h1>

        {/* Inline flow, not flex: punctuation after a skill badge then stays
            attached to it instead of wrapping onto its own line. */}
        <p className="text-secondary mt-3 text-[16px] leading-[2.2]">
          {renderDescription()}
        </p>
      </div>

      {/* Buttons, with the social icons sharing the row. */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as "outline" | "default"}
              asChild
              className="font-semibold"
            >
              {/* Files and external URLs need a plain anchor; the router
                  Link is for in-app routes. */}
              {button.href.startsWith("/") && !button.href.includes(".") ? (
                <Link href={button.href}>
                  {IconComponent && <IconComponent />}
                  {button.text}
                </Link>
              ) : (
                <a
                  href={button.href}
                  {...(button.href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {IconComponent && <IconComponent />}
                  {button.text}
                </a>
              )}
            </Button>
          );
        })}

        <div className="flex flex-wrap items-center gap-2">
          {socialLinks.map((link) => (
            <Tooltip key={link.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <a
                  href={link.href}
                  aria-label={link.name}
                  {...(link.href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="text-foreground flex items-center gap-2 rounded-lg border border-[var(--rule)] p-2 transition-colors hover:border-[var(--blood-text)] hover:text-[var(--blood-text)]"
                >
                  <span className="size-5">{link.icon}</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Arsenal */}
      <div className="mt-6 rounded-lg border border-[var(--rule)] p-3">
        <p className="text-primary mb-2 text-[11px] font-bold tracking-[0.2em] uppercase">
          Arsenal
        </p>
        <div className="flex flex-wrap gap-4">
          {mySkills.map((skill) => (
            <div key={skill.key} className="flex flex-col items-center gap-1.5">
              <div className="box-content size-6 rounded-lg border border-[var(--rule)] bg-[var(--iron-2)] p-2 transition-colors hover:border-[var(--blood-text)]">
                {skill}
              </div>
              <span className="text-secondary text-[11px] font-semibold">
                {skill.key}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
