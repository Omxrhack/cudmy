"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CategoryIcon } from "@/components/category-icon";

const CATEGORIES = [
  "Todos",
  "Diseño",
  "Desarrollo",
  "IA",
  "Datos",
  "Marketing",
  "Negocio",
  "Foto",
];

/**
 * Rail de categorías bajo el hero: navegación de bajo compromiso. Scroll
 * horizontal en móvil (la scrollbar está oculta globalmente). El chip activo
 * usa el único acento interactivo (iris).
 */
export function CategoryChips() {
  const [active, setActive] = useState("Todos");

  return (
    <nav
      aria-label="Explorar por categoría"
      className="border-y border-ink/8 bg-background/60 dark:border-white/10"
    >
      <ul className="mx-auto flex max-w-7xl gap-2.5 overflow-x-auto px-6 py-4 sm:px-10 lg:px-16">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat;
          return (
            <li key={cat} className="shrink-0">
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(cat)}
                className={cn(
                  "inline-flex h-9 items-center gap-2 rounded-full border px-4 text-sm font-medium transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "border-iris-300 bg-iris-50 text-iris-700 dark:border-iris-500/40 dark:bg-iris-500/15 dark:text-iris-200"
                    : "border-ink/10 text-foreground/70 hover:border-ink/25 hover:text-foreground dark:border-white/10 dark:hover:border-white/25",
                )}
              >
                {cat !== "Todos" && (
                  <CategoryIcon name={cat} className="h-4 w-4" />
                )}
                {cat}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
