"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Reveal por scroll con el vocabulario de movimiento único del sitio:
 * opacity 0→1 + y 20→0, 0.65s power3.out, una sola vez al entrar a viewport.
 *
 * - `stagger`: anima los hijos directos escalonados (each 0.07s) — para grids/filas.
 * - Todo va dentro de `gsap.matchMedia`: con prefers-reduced-motion NO se crea
 *   ningún tween, así que el contenido queda en su estado final (visible).
 */
export function Reveal({
  children,
  className,
  y = 20,
  delay = 0,
  stagger = false,
  start = "top 85%",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  stagger?: boolean;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const el = ref.current;
        if (!el) return;
        const targets = stagger ? Array.from(el.children) : el;
        gsap.from(targets, {
          opacity: 0,
          y,
          duration: 0.65,
          ease: "power3.out",
          delay,
          stagger: stagger ? { each: 0.07, from: "start" } : 0,
          scrollTrigger: { trigger: el, start, once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
