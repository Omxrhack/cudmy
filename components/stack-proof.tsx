"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button, Card } from "@heroui/react";
import { cn } from "@/lib/utils";

type Course = {
  title: string;
  author: string;
  price: string;
  tag: string;
};

const COURSES: Course[] = [
  {
    title: "Diseño de producto de 0 a 1",
    author: "Marina Ruiz",
    price: "$24.99",
    tag: "Diseño",
  },
  {
    title: "TypeScript práctico para equipos",
    author: "Diego Fuentes",
    price: "$19.99",
    tag: "Desarrollo",
  },
  {
    title: "Growth marketing sin humo",
    author: "Ana Losada",
    price: "$29.99",
    tag: "Marketing",
  },
];

export function StackProof() {
  const scope = useRef<HTMLDivElement>(null);

  // Reveal al montar. Progressive enhancement: sin JS los elementos ya son
  // visibles; con prefers-reduced-motion no animamos.
  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      gsap.from(".reveal", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className="flex flex-col gap-12">
      {/* Tarjetas de curso (markup de marca + micro-interacción de hover) */}
      <section aria-label="Cursos destacados">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <article
              key={course.title}
              tabIndex={0}
              className={cn(
                "reveal group flex flex-col gap-4 rounded-3xl bg-surface p-6 shadow-soft",
                "outline-none ring-1 ring-border transition duration-300",
                "hover:-translate-y-1 hover:shadow-lift hover:ring-2 hover:ring-iris-500",
                "focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-iris-500",
              )}
            >
              <div className="flex aspect-video items-center justify-center rounded-2xl bg-mist">
                <span className="font-display text-4xl font-extrabold text-iris-500/70">
                  {course.tag[0]}
                </span>
              </div>
              <span className="w-fit rounded-full bg-iris-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-iris-700">
                {course.tag}
              </span>
              <h3 className="text-lg font-bold text-foreground">
                {course.title}
              </h3>
              <p className="text-sm text-foreground/60">Por {course.author}</p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="font-display text-xl font-bold text-foreground">
                  {course.price}
                </span>
                <span className="text-sm font-semibold text-honey-700">
                  ★ 4.8
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Panel de comprobación: HeroUI v3 renderizando en marca */}
      <section
        aria-label="Componentes HeroUI en marca"
        className="reveal rounded-3xl border border-border bg-surface p-8 shadow-soft"
      >
        <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-foreground/50">
          HeroUI v3 · en marca
        </p>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Explorar cursos</Button>
            <Button variant="secondary">Ver planes</Button>
            <Button variant="outline">Soy instructor</Button>
            {/* CTA honey con utilidades de marca */}
            <button
              type="button"
              className={cn(
                "rounded-xl bg-honey-500 px-4 py-2 text-sm font-bold text-ink transition",
                "hover:bg-honey-400 focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-honey-600 focus-visible:ring-offset-2",
              )}
            >
              Prueba gratis
            </button>
          </div>

          <Card className="w-full max-w-sm">
            <Card.Header>
              <Card.Title>Ruta recomendada</Card.Title>
              <Card.Description>
                Componente Card de HeroUI usando el token accent = iris.
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-sm text-foreground/70">
                Los componentes de HeroUI leen los tokens semánticos que
                mapeamos a la paleta de cudmy.
              </p>
            </Card.Content>
            <Card.Footer>
              <Button variant="primary" size="sm">
                Empezar
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </section>
    </div>
  );
}
