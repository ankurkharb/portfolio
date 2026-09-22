"use client";

import { useEffect, useRef } from "react";

// Blade geometry in the SVG's own units; the blood rect grows along it.
const BLADE_TOP = 118;
const BLADE_LENGTH = 278;

/**
 * The Dragonslayer as a scroll gauge: the blade fills with blood as the page
 * is read. Desktop only, left of the content column (the index sits right).
 */
export default function SwordScroll() {
  const bloodRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    let queued = false;

    const update = () => {
      queued = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bloodRef.current?.setAttribute("height", (BLADE_LENGTH * progress).toFixed(1));
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-[22vh] right-[calc(50%+410px)] z-20 hidden h-[62vh] w-9 lg:block"
    >
      <svg viewBox="0 0 40 400" preserveAspectRatio="xMidYMin meet" className="h-full w-full">
        <defs>
          <clipPath id="dragonslayer-blade">
            <path d="M8 118 L32 118 L32 372 L20 396 L8 372 Z" />
          </clipPath>
          <linearGradient id="dragonslayer-steel" x1="0" x2="1">
            <stop offset="0" stopColor="#3a332e" />
            <stop offset="0.5" stopColor="#6b6158" />
            <stop offset="1" stopColor="#3a332e" />
          </linearGradient>
        </defs>
        {/* pommel, grip, guard */}
        <circle cx="20" cy="10" r="7" fill="#2b2521" stroke="#8a8076" strokeWidth="1.5" />
        <rect x="16" y="16" width="8" height="84" rx="2" fill="#3b1d12" />
        <path
          d="M16 26 L24 34 M16 40 L24 48 M16 54 L24 62 M16 68 L24 76 M16 82 L24 90"
          stroke="#1a0d08"
          strokeWidth="2"
        />
        <rect x="2" y="100" width="36" height="12" rx="2" fill="#2b2521" stroke="#8a8076" strokeWidth="1.5" />
        <rect x="6" y="112" width="28" height="6" fill="#1f1a17" />
        {/* blade */}
        <path d="M8 118 L32 118 L32 372 L20 396 L8 372 Z" fill="url(#dragonslayer-steel)" stroke="#8a8076" strokeWidth="1" />
        <rect
          ref={bloodRef}
          x="0"
          y={BLADE_TOP}
          width="40"
          height="0"
          fill="#c8161f"
          clipPath="url(#dragonslayer-blade)"
        />
        <path d="M20 124 L20 380" stroke="#1f1a17" strokeWidth="2" opacity="0.6" />
      </svg>
    </div>
  );
}
