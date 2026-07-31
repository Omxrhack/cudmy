import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initial: string;
  result: string;
  link: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "El curso explicó la IA desde el desarrollo hasta sus usos prácticos. Ahora la uso de forma responsable como una herramienta en mi día a día.",
    name: "Cris M.",
    role: "Diseñadora de producto",
    initial: "C",
    result: "Ascendió a lead en 6 meses",
    link: "Ver cursos de IA",
  },
  {
    quote:
      "cudmy marcó un antes y un después en mi carrera y me ayudó a hacer realidad la idea de mi startup, de la primera línea de código al primer cliente.",
    name: "Alvin Lim",
    role: "Cofundador técnico, Dimensional",
    initial: "A",
    result: "Lanzó su app en 8 semanas",
    link: "Ver el curso de iOS",
  },
  {
    quote:
      "Aprendí exactamente lo que necesitaba para el mundo real. Me ayudó a venderme mejor y conseguir un nuevo puesto con mejor sueldo.",
    name: "William W.",
    role: "Gestor de cuentas, nube",
    initial: "W",
    result: "Nuevo empleo en 3 meses",
    link: "Ver el curso de AWS",
  },
];

export function Testimonials() {
  return (
    <section
      aria-label="Historias de estudiantes"
      className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <Reveal className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-iris-600 dark:text-iris-400">
          Historias reales
        </span>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Miles de personas transforman su carrera aprendiendo con cudmy
        </h2>
      </Reveal>

      <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-xl border border-ink/8 bg-surface p-6 dark:border-white/10"
          >
            <span
              aria-hidden
              className="font-display text-5xl font-bold leading-[0.6] text-iris-500/25"
            >
              &ldquo;
            </span>
            <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-foreground/85">
              {t.quote}
            </blockquote>

            <span className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-iris-50 px-3 py-1 text-xs font-semibold text-iris-700 dark:bg-iris-500/15 dark:text-iris-200">
              <span className="text-fern" aria-hidden>
                ↑
              </span>
              {t.result}
            </span>

            <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/8 pt-5 dark:border-white/10">
              <span
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  "bg-iris-100 text-iris-700 dark:bg-iris-500/20 dark:text-iris-200",
                )}
              >
                {t.initial}
              </span>
              <div className="min-w-0 text-sm leading-tight">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-foreground/55">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </Reveal>

      <Reveal>
        <a
          href="#"
          className="mt-10 inline-flex items-center gap-1.5 font-semibold text-iris-600 transition hover:gap-2.5 hover:text-iris-700 dark:text-iris-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Ver todas las historias
          <span aria-hidden>→</span>
        </a>
      </Reveal>
    </section>
  );
}
