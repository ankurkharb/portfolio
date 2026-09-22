import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Paint the solid page panel behind the content. Off lets art beneath show through. */
  panel?: boolean;
}

export default function Container({ children, className, id, panel = true }: ContainerProps) {
  return (
    <div
      id={id}
      className={cn(
        panel && "content-panel",
        "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
