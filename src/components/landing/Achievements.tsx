import { achievements } from "@/config/Achievements";
import React from "react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function Achievements() {
  return (
    <Container id="achievements" className="row-rule row-rule-wide mt-10 scroll-mt-8 pb-10">
      <SectionHeading subHeading="Scars & trophies" heading="Achievements" />
      <div className="mt-4 flex flex-col gap-3">
        {achievements.map((achievement) => {
          const body = (
            <>
              <span className="mt-2 size-2 shrink-0 rotate-45 bg-[var(--blood-text)]" />
              <span>{achievement.text}</span>
              {achievement.link && (
                <span className="text-primary ml-auto shrink-0 text-sm font-semibold">
                  View ↗
                </span>
              )}
            </>
          );
          const className =
            "text-foreground flex items-start gap-3 rounded-lg border border-[var(--rule)] bg-[var(--char)] p-4 leading-relaxed transition-colors";

          return achievement.link ? (
            <a
              key={achievement.text}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${className} hover:border-[var(--blood-text)]/60`}
            >
              {body}
            </a>
          ) : (
            <div key={achievement.text} className={className}>
              {body}
            </div>
          );
        })}
      </div>
    </Container>
  );
}
