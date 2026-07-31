"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CourseThumb } from "@/components/course-thumb";
import { Stars } from "@/components/stars";
import { Reveal } from "@/components/reveal";

type Course = {
  title: string;
  author: string;
  category: string;
  rating: number;
  reviews: string;
  price: string;
  original?: string;
  badge?: "Bestseller" | "Nuevo";
};

const COURSES: Course[] = [
  {
    title: "Diseño de producto de 0 a 1",
    author: "Marina Ruiz",
    category: "Diseño",
    rating: 4.8,
    reviews: "1,237",
    price: "MX$199",
    original: "MX$899",
    badge: "Bestseller",
  },
  {
    title: "TypeScript práctico para equipos",
    author: "Diego Fuentes",
    category: "Desarrollo",
    rating: 4.7,
    reviews: "3,730",
    price: "MX$229",
    original: "MX$949",
  },
  {
    title: "IA generativa para creativos",
    author: "Iván Alsigo",
    category: "IA",
    rating: 4.7,
    reviews: "795",
    price: "MX$199",
    original: "MX$799",
    badge: "Nuevo",
  },
  {
    title: "Excel de cero a experto",
    author: "Federico Garay",
    category: "Datos",
    rating: 4.8,
    reviews: "45,166",
    price: "MX$299",
    original: "MX$1,199",
    badge: "Bestseller",
  },
  {
    title: "Growth marketing sin humo",
    author: "Ana Losada",
    category: "Marketing",
    rating: 4.6,
    reviews: "890",
    price: "MX$249",
    original: "MX$949",
  },
  {
    title: "Finanzas personales que sí funcionan",
    author: "Lucía Prado",
    category: "Negocio",
    rating: 4.9,
    reviews: "2,410",
    price: "MX$179",
    original: "MX$699",
  },
  {
    title: "React desde cero",
    author: "Sofía Márquez",
    category: "Desarrollo",
    rating: 4.8,
    reviews: "5,120",
    price: "MX$259",
    original: "MX$1,099",
    badge: "Bestseller",
  },
  {
    title: "Fotografía con tu celular",
    author: "Carlos Vidal",
    category: "Foto",
    rating: 4.6,
    reviews: "1,050",
    price: "MX$149",
    original: "MX$599",
  },
];

function Arrow({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={dir === "prev" ? "Anterior" : "Siguiente"}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 text-foreground transition dark:border-white/15",
        "hover:border-ink/30 hover:bg-foreground/[0.03] active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 dark:hover:border-white/30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("h-4.5 w-4.5", dir === "prev" && "rotate-180")}
        aria-hidden
      >
        <path d="m9 6 6 6-6 6" />
      </svg>
    </button>
  );
}

function Badge({ kind }: { kind: "Bestseller" | "Nuevo" }) {
  return (
    <span
      className={cn(
        "absolute left-2 top-2 rounded-md px-2 py-0.5 text-xs font-bold",
        kind === "Bestseller"
          ? "bg-honey-100 text-honey-800 dark:bg-honey-500/20 dark:text-honey-200"
          : "bg-iris-100 text-iris-700 dark:bg-iris-500/20 dark:text-iris-200",
      )}
    >
      {kind}
    </span>
  );
}

export function TrendingCourses() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Sincroniza estado inicial con Embla (sistema externo) al montar.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="cursos"
      aria-label="Cursos en tendencia"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <Reveal className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Cursos en tendencia
          </h2>
          <p className="mt-2 text-foreground/60">
            Lo que más están aprendiendo en cudmy esta semana.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          <a
            href="#"
            className="hidden text-sm font-semibold text-iris-600 transition hover:text-iris-700 dark:text-iris-400 sm:inline-flex sm:items-center sm:gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Ver todos
            <span aria-hidden>→</span>
          </a>
          <div className="hidden gap-2 sm:flex">
            <Arrow
              dir="prev"
              disabled={!canPrev}
              onClick={() => emblaApi?.scrollPrev()}
            />
            <Arrow
              dir="next"
              disabled={!canNext}
              onClick={() => emblaApi?.scrollNext()}
            />
          </div>
        </div>
      </Reveal>

      <div className="overflow-hidden" ref={emblaRef}>
        <ul className="flex gap-6">
          {COURSES.map((course) => (
            <li
              key={course.title}
              className="min-w-0 flex-[0_0_82%] sm:flex-[0_0_46%] lg:flex-[0_0_300px]"
            >
              <article
                tabIndex={0}
                className={cn(
                  "group flex h-full cursor-pointer flex-col rounded-2xl border border-ink/8 bg-surface p-3 outline-none transition duration-300 dark:border-white/10",
                  "hover:-translate-y-1 hover:border-transparent hover:shadow-md",
                  "focus-visible:-translate-y-1 focus-visible:border-transparent focus-visible:shadow-md focus-visible:ring-2 focus-visible:ring-iris-500",
                )}
              >
                <div className="relative">
                  <CourseThumb category={course.category} className="aspect-video" />
                  {course.badge && <Badge kind={course.badge} />}
                </div>

                <div className="flex flex-1 flex-col gap-1.5 px-1 pt-3">
                  <h3 className="line-clamp-2 text-base font-semibold leading-snug text-foreground">
                    {course.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {course.author}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm">
                    <span className="font-semibold text-honey-700 dark:text-honey-300">
                      {course.rating.toFixed(1)}
                    </span>
                    <Stars value={course.rating} className="text-sm" />
                    <span className="text-foreground/50">({course.reviews})</span>
                  </div>

                  <div className="mt-auto flex items-baseline gap-2 pt-2">
                    <span className="font-display text-lg font-bold text-foreground">
                      {course.price}
                    </span>
                    {course.original && (
                      <span className="text-sm text-foreground/45 line-through">
                        {course.original}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
