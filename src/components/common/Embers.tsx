"use client";

import { useEffect, useRef } from "react";

interface EmbersProps {
  /** Embers on screen at once. */
  count?: number;
}

/** A soft glowing dot, drawn once so each frame is only drawImage calls. */
function createEmberSprite(hue: number) {
  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = 16;
  const ctx = sprite.getContext("2d");
  if (!ctx) return null;
  const glow = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
  glow.addColorStop(0, `hsla(${hue}, 100%, 72%, 1)`);
  glow.addColorStop(0.35, `hsla(${hue}, 100%, 55%, 0.8)`);
  glow.addColorStop(1, `hsla(${hue}, 100%, 45%, 0)`);
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 16, 16);
  return sprite;
}

/** Embers drifting up out of the ground across the banner. */
export default function Embers({ count = 36 }: EmbersProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const sprites = [18, 8, 28].map(createEmberSprite).filter(Boolean) as HTMLCanvasElement[];
    if (!sprites.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let frame: number | undefined;
    let visible = true;
    let running = false;

    type Ember = {
      x: number;
      y: number;
      size: number;
      vy: number;
      sway: number;
      phase: number;
      life: number;
      sprite: HTMLCanvasElement;
    };

    const spawn = (anywhere: boolean): Ember => ({
      x: Math.random() * width,
      y: anywhere ? Math.random() * height : height + Math.random() * 20,
      size: 2 + Math.random() * 5,
      vy: 0.25 + Math.random() * 0.7,
      sway: 0.2 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
      life: 0.4 + Math.random() * 0.6,
      sprite: sprites[Math.floor(Math.random() * sprites.length)],
    });

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = canvas.width = parent.clientWidth;
      height = canvas.height = parent.clientHeight;
    };

    resize();
    let embers = Array.from({ length: count }, () => spawn(true));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      for (const e of embers) {
        // Fade out as they climb, so they die before the top edge.
        ctx.globalAlpha = Math.max(0, Math.min(1, e.y / height)) * e.life;
        ctx.drawImage(e.sprite, e.x - e.size, e.y - e.size, e.size * 2, e.size * 2);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const step = (t: number) => {
      if (!visible) {
        running = false;
        return;
      }
      for (const e of embers) {
        e.y -= e.vy;
        e.x += Math.sin(t / 900 + e.phase) * e.sway;
      }
      embers = embers.map((e) => (e.y < -10 ? spawn(false) : e));
      draw();
      frame = requestAnimationFrame(step);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      frame = requestAnimationFrame(step);
    };

    if (reduceMotion) draw();
    else start();

    // Stop animating while the banner is scrolled out of view.
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    observer.observe(canvas);
    window.addEventListener("resize", resize);

    return () => {
      visible = false;
      observer.disconnect();
      window.removeEventListener("resize", resize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[4] h-full w-full"
    />
  );
}
