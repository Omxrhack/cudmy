"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Course = {
  title: string;
  author: string;
  category: string;
  rating: string;
  reviews: string;
  price: string;
  badge?: string;
  thumb: string; // clases de gradiente para la miniatura
};

const COURSES: Course[] = [
  {
    title: "Diseño de producto de 0 a 1",
    author: "Marina Ruiz",
    category: "Diseño",
    rating: "4.8",
    reviews: "1,237",
    price: "MX$199",
    badge: "Más vendido",
    thumb: "from-iris-400 to-iris-700 text-white",
  },
  {
    title: "TypeScript práctico para equipos",
    author: "Diego Fuentes",
    category: "Desarrollo",
    rating: "4.7",
    reviews: "3,730",
    price: "MX$229",
    thumb: "from-ink to-iris-700 text-white",
  },
  {
    title: "IA generativa para creativos",
    author: "Iván Alsigo",
    category: "IA",
    rating: "4.7",
    reviews: "795",
    price: "MX$199",
    badge: "Nuevo",
    thumb: "from-honey-300 to-honey-600 text-ink",
  },
  {
    title: "Excel de cero a experto",
    author: "Federico Garay",
    category: "Datos",
    rating: "4.8",
    reviews: "45,166",
    price: "MX$299",
    badge: "Más vendido",
    thumb: "from-fern to-iris-600 text-white",
  },
  {
    title: "Growth marketing sin humo",
    author: "Ana Losada",
    category: "Marketing",
    rating: "4.6",
    reviews: "890",
    price: "MX$249",
    thumb: "from-honey-400 to-iris-500 text-white",
  },
  {
    title: "Finanzas personales que sí funcionan",
    author: "Lucía Prado",
    category: "Negocio",
    rating: "4.9",
    reviews: "2,410",
    price: "MX$179",
    thumb: "from-iris-500 to-fern text-white",
  },
  {
    title: "React desde cero",
    author: "Sofía Márquez",
    category: "Desarrollo",
    rating: "4.8",
    reviews: "5,120",
    price: "MX$259",
    badge: "Más vendido",
    thumb: "from-iris-600 to-ink text-white",
  },
  {
    title: "Fotografía con tu celular",
    author: "Carlos Vidal",
    category: "Foto",
    rating: "4.6",
    reviews: "1,050",
    price: "MX$149",
    thumb: "from-mist to-iris-300 text-iris-800",
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
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition",
        "hover:bg-foreground/5 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40",
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
        className={cn("h-5 w-5", dir === "prev" && "rotate-180")}
        aria-hidden
      >
        <path d="m9 6 6 6-6 6" />
      </svg>
    </button>
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
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      aria-label="Cursos en tendencia"
      className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Cursos en tendencia
          </h2>
          <p className="mt-2 text-foreground/60">
            Lo que más están aprendiendo en cudmy esta semana.
          </p>
        </div>
        <div className="hidden shrink-0 gap-2 sm:flex">
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
                  "group flex h-full cursor-pointer flex-col gap-3 rounded-3xl bg-surface p-4 shadow-soft outline-none ring-1 ring-border transition duration-300",
                  "hover:-translate-y-1 hover:shadow-lift hover:ring-2 hover:ring-iris-500",
                  "focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-iris-500",
                )}
              >
                <div
                  className={cn(
                    "relative flex aspect-video items-end overflow-hidden rounded-2xl bg-gradient-to-br p-3",
                    course.thumb,
                  )}
                >
                  <span className="font-display text-lg font-extrabold opacity-90">
                    {course.category}
                  </span>
                  {course.badge && (
                    <span className="absolute right-3 top-3 rounded-full bg-honey-500 px-2.5 py-1 text-xs font-bold text-ink">
                      {course.badge}
                    </span>
                  )}
                </div>

                <h3 className="line-clamp-2 text-base font-bold leading-snug text-foreground">
                  {course.title}
                </h3>
                <p className="text-sm text-foreground/60">Por {course.author}</p>

                <div className="flex items-center gap-1.5 text-sm">
                  <span className="font-bold text-honey-700">
                    {course.rating}
                  </span>
                  <span className="text-honey-500" aria-hidden>
                    ★★★★★
                  </span>
                  <span className="text-foreground/50">({course.reviews})</span>
                </div>

                <div className="mt-auto pt-1">
                  <span className="font-display text-lg font-extrabold text-foreground">
                    {course.price}
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
