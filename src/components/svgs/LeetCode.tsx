import React from "react";

export default function LeetCode({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M13.5 3 6 10.6a2 2 0 0 0 0 2.8l4.6 4.7a2 2 0 0 0 2.8 0L16 15.5" />
      <path d="m9 7 3-3" />
      <path d="M10 12h9" />
    </svg>
  );
}
