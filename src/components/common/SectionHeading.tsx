import React from "react";

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

export default function SectionHeading({
  subHeading,
  heading,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-start">
      <p className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase">
        {subHeading}
      </p>
      <h2 className="font-display mt-1 text-xl font-bold tracking-wide">{heading}</h2>
    </div>
  );
}
