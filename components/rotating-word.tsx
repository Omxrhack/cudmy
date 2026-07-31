"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Una sola voz tipográfica (Bricolage, un peso). La rotación se mantiene como
// firma de marca, pero sin el circo de 5 fuentes: la personalidad la pone el
// marcador honey dibujado a mano, no un cambio de familia por palabra.
const WORDS = ["aprender", "crear", "crecer", "avanzar", "mejorar"];

// Marcador tipo rotulador: trazo irregular que se "pinta" de izquierda a
// derecha animando strokeDashoffset. preserveAspectRatio="none" lo estira al
// ancho exacto de la palabra activa.
const MARKER_PATH = "M3 7.5C42 3.5 92 2.8 140 4.6 173 5.9 197 6.2 197 6.2";

export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const wordRef = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const reduced = useRef(false);

  // Auto-rotación (pausada si el usuario pide menos movimiento).
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = mq.matches;
    if (mq.matches) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % WORDS.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  // Swap: la palabra sube a foco (yPercent 40→0 + opacity), el marcador se pinta.
  useEffect(() => {
    if (reduced.current) return;
    const word = wordRef.current;
    const path = pathRef.current;
    if (word) {
      gsap.fromTo(
        word,
        { yPercent: 40, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
      );
    }
    if (path) {
      const len = path.getTotalLength();
      gsap.fromTo(
        path,
        { strokeDasharray: len, strokeDashoffset: len },
        { strokeDashoffset: 0, duration: 0.55, ease: "power2.out", delay: 0.12 },
      );
    }
  }, [index]);

  return (
    <span className="relative inline-grid align-baseline leading-[1.05]">
      {/* Reserva de ancho: todas las palabras apiladas en la misma celda,
          invisibles → el ancho = palabra más larga, cero reflujo/CLS. */}
      {WORDS.map((w) => (
        <span
          key={w}
          aria-hidden
          className="invisible col-start-1 row-start-1 font-display font-semibold"
        >
          {w}
        </span>
      ))}

      {/* Palabra activa, encima, alineada a la izquierda de la celda. */}
      <span className="col-start-1 row-start-1 inline-flex justify-start">
        <span className="relative inline-block">
          <span
            ref={wordRef}
            key={index}
            className="relative z-10 inline-block font-display font-semibold text-iris-600 dark:text-iris-400"
          >
            {WORDS[index]}
          </span>
          {/* Marcador honey dibujado a mano */}
          <svg
            aria-hidden
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            className="absolute -bottom-1 left-0 h-[0.32em] w-full overflow-visible"
          >
            <path
              ref={pathRef}
              d={MARKER_PATH}
              fill="none"
              stroke="var(--color-honey-400)"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </span>
    </span>
  );
}
