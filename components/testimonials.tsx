import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initial: string;
  avatar: string;
  link: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "El curso explicó la IA desde el desarrollo hasta sus usos prácticos. Ahora la uso de forma responsable como una herramienta en mi profesión.",
    name: "Cris M.",
    role: "Egresada · IA aplicada",
    initial: "C",
    avatar: "bg-iris-500 text-white",
    link: "Ver cursos de IA",
  },
  {
    quote:
      "cudmy marcó un antes y un después en mi carrera y me ayudó a hacer realidad la idea de mi startup.",
    name: "Alvin Lim",
    role: "Cofundador técnico en Dimensional",
    initial: "A",
    avatar: "bg-honey-500 text-ink",
    link: "Ver este curso de iOS",
  },
  {
    quote:
      "Aprendí exactamente lo que necesitaba para el mundo real. Me ayudó a venderme mejor y conseguir un nuevo puesto.",
    name: "William W.",
    role: "Gestor de cuentas · AWS",
    initial: "W",
    avatar: "bg-fern text-white",
    link: "Ver este curso de AWS",
  },
  {
    quote:
      "Me encantó el curso de IA. En 24 horas ya tenía una aplicación funcional y muy útil para mi despacho.",
    name: "Ben C.",
    role: "Egresado · Certificación IA",
    initial: "B",
    avatar: "bg-ink text-white",
    link: "Ver la certificación",
  },
];

export function Testimonials() {
  return (
    <section
      aria-label="Historias de estudiantes"
      className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16"
    >
      <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
        Únete a miles de personas que transforman su vida a través del
        aprendizaje
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl bg-surface p-6 shadow-soft ring-1 ring-border"
          >
            <span
              aria-hidden
              className="font-display text-5xl font-extrabold leading-none text-iris-500"
            >
              &ldquo;
            </span>
            <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-foreground/80">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  t.avatar,
                )}
              >
                {t.initial}
              </span>
              <div className="min-w-0 text-sm leading-tight">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-foreground/55">{t.role}</div>
              </div>
            </figcaption>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-iris-500 transition hover:gap-2.5 hover:text-iris-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.link}
              <span aria-hidden>→</span>
            </a>
          </figure>
        ))}
      </div>

      <a
        href="#"
        className="mt-10 inline-flex items-center gap-1.5 font-semibold text-iris-500 transition hover:gap-2.5 hover:text-iris-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Ver todas las historias
        <span aria-hidden>→</span>
      </a>
    </section>
  );
}
