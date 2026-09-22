import { education } from "@/config/Achievements";
import React from "react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function Education() {
  return (
    <Container id="education" className="row-rule row-rule-wide mt-10 scroll-mt-8 pb-10">
      <SectionHeading subHeading="Training grounds" heading="Education" />
      <div className="mt-4 flex flex-col gap-1 rounded-lg border border-[var(--rule)] bg-[var(--char)] p-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-bold">{education.school}</h3>
          <p className="text-secondary">{education.degree}</p>
        </div>
        <div className="text-secondary text-sm sm:text-right">
          <p>{education.period}</p>
          <p className="text-foreground font-semibold">{education.grade}</p>
        </div>
      </div>
    </Container>
  );
}
