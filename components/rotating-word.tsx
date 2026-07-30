"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Verbos en infinitivo (encajan con "Empieza a ___"), cada uno con una
// tipografía distinta y todos con marcador honey.
// El tamaño en `em` compensa las métricas de cada fuente para que TODAS se
// vean del mismo porte y no rompan la línea.
const WORDS = [
  { text: "aprender", cls: "font-mono font-extrabold text-[0.82em]" },
  { text: "crear", cls: "font-display font-extrabold" },
  { text: "crecer", cls: "font-script font-bold text-[1.2em]" },
  { text: "avanzar", cls: "font-condensed text-[0.9em]" },
  { text: "mejorar", cls: "font-serif font-bold italic text-[1.02em]" },
];

export function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return; // sin auto-rotación si se pide menos movimiento
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % WORDS.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  const word = WORDS[index];

  return (
    <span className="relative inline-block leading-[1.05] align-baseline">
      {/* key fuerza el remount → re-dispara la animación de entrada */}
      <span
        key={index}
        className={cn(
          "relative z-10 inline-block leading-[1.05] animate-word-in",
          word.cls,
        )}
      >
        {word.text}
      </span>
      {/* Marcador honey */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-1 -z-0 h-4 rounded bg-honey-300/70"
      />
    </span>
  );
}
