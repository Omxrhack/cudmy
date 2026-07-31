// Set único de íconos de línea (mismo viewBox, mismo grosor) para categorías.
// Se usa como glifo de las miniaturas y en los chips de categoría, así todo el
// catálogo lee como "un sistema diseñado" en vez de clip-art suelto.

const PATHS: Record<string, string> = {
  diseno:
    "M4 20l4-1 9.5-9.5a2.1 2.1 0 0 0-3-3L5 16l-1 4z M13.5 6.5l3 3",
  desarrollo: "M8 9l-4 3 4 3 M16 9l4 3-4 3 M13.5 6l-3 12",
  ia: "M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6z M18.5 15l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6z",
  datos: "M5 21V11 M12 21V4 M19 21v-6 M3 21h18",
  marketing: "M3 17l6-6 4 4 8-8 M15 7h6v6",
  negocio:
    "M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M8 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1 M3 12h18",
  foto: "M3 8a2 2 0 0 1 2-2h2l1.5-2h5L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  nube: "M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17.5 18H7z",
  default: "M3 9l9-4 9 4-9 4-9-4z M7 11.5V16c0 1.6 2.5 2.5 5 2.5s5-.9 5-2.5v-4.5",
};

// Mapea etiquetas de categoría en español a un glifo.
const ALIAS: Record<string, keyof typeof PATHS> = {
  Diseño: "diseno",
  Desarrollo: "desarrollo",
  IA: "ia",
  Datos: "datos",
  Marketing: "marketing",
  Negocio: "negocio",
  Foto: "foto",
  Nube: "nube",
};

export function categoryGlyph(category: string): string {
  return ALIAS[category] ?? "default";
}

export function CategoryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const key = PATHS[name] ? name : (ALIAS[name] ?? "default");
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={PATHS[key]} />
    </svg>
  );
}
