import { cn } from "@/lib/utils";
import { CategoryIcon } from "@/components/category-icon";

// Patrón de puntos sutil (misma familia, solo lightness) — da textura sin
// meter otro hue. Se inyecta como background-image para no ensuciar el DOM.
const DOT_PATTERN =
  "radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.07) 1px, transparent 0)";

/**
 * Miniatura de curso: sistema ÚNICO y monocromo iris (nunca gradientes
 * arcoíris). Superficie oscura de una sola familia + etiqueta de categoría +
 * glifo de línea grande como marca de agua. `tone="deep"` la vuelve casi ink
 * para diferenciar los aceleradores de carrera de las cards de curso.
 */
export function CourseThumb({
  category,
  className,
  tone = "default",
  rounded = "rounded-xl",
}: {
  category: string;
  className?: string;
  tone?: "default" | "deep";
  rounded?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-end overflow-hidden",
        rounded,
        tone === "deep"
          ? "bg-gradient-to-br from-ink to-iris-950"
          : "bg-gradient-to-br from-iris-800 to-iris-950",
        className,
      )}
    >
      {/* Textura de puntos */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: DOT_PATTERN, backgroundSize: "16px 16px" }}
      />
      {/* Glifo watermark de la categoría */}
      <CategoryIcon
        name={category}
        className="absolute -right-4 -top-4 h-32 w-32 text-white/[0.08]"
      />
      {/* Etiqueta de categoría */}
      <span className="relative z-10 m-4 text-xs font-semibold uppercase tracking-[0.1em] text-white/70">
        {category}
      </span>
    </div>
  );
}
