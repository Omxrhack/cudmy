import { cn } from "@/lib/utils";

/**
 * Rating con relleno fraccional real (no cinco ★ estampadas): una capa vacía y
 * una capa honey recortada al porcentaje exacto. Decorativo (aria-hidden): el
 * número de rating acompaña como texto accesible al lado.
 */
export function Stars({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const pct = (Math.max(0, Math.min(5, value)) / 5) * 100;
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-block select-none whitespace-nowrap leading-none tracking-[0.08em]",
        className,
      )}
    >
      <span className="text-foreground/20">★★★★★</span>
      <span
        className="absolute inset-0 overflow-hidden whitespace-nowrap text-honey-500"
        style={{ width: `${pct}%` }}
      >
        ★★★★★
      </span>
    </span>
  );
}
