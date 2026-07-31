import { cn } from "@/lib/utils";
import { CourseThumb } from "@/components/course-thumb";
import { Reveal } from "@/components/reveal";

type Accelerator = {
  role: string;
  discipline: string;
  description: string;
  rating: string;
  reviews: string;
  hours: string;
  outcome: string;
};

const ACCELERATORS: Accelerator[] = [
  {
    role: "Ingeniero de la nube",
    discipline: "Nube",
    description:
      "De los fundamentos de infraestructura a desplegar en AWS y Azure con confianza.",
    rating: "4.8",
    reviews: "12K",
    hours: "22.8 h",
    outcome: "Listo para empleo en ~5 meses",
  },
  {
    role: "Científico de datos",
    discipline: "Datos",
    description:
      "Python, estadística y machine learning aplicados a problemas reales de negocio.",
    rating: "4.7",
    reviews: "26K",
    hours: "53.5 h",
    outcome: "Portafolio con 6 proyectos",
  },
  {
    role: "Marketing digital",
    discipline: "Marketing",
    description:
      "SEO, performance y analítica para hacer crecer productos con presupuesto real.",
    rating: "4.6",
    reviews: "18K",
    hours: "51.5 h",
    outcome: "Certificación al finalizar",
  },
];

function Meta({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-ink/10 px-2 py-1 text-xs font-medium text-foreground/65 dark:border-white/12">
      {children}
    </span>
  );
}

export function CareerAccelerators() {
  return (
    <section
      aria-label="Aceleradores para carreras profesionales"
      className="bg-gradient-to-b from-iris-50/70 to-background py-20 dark:from-iris-500/[0.06] lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-iris-600 dark:text-iris-400">
            Rutas de carrera
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            ¿Listo para reimaginar tu carrera?
          </h2>
          <p className="mt-3 text-foreground/65">
            Consigue las habilidades y la experiencia real que buscan los
            empleadores con nuestros aceleradores de carrera.
          </p>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ACCELERATORS.map((item) => (
            <article
              key={item.role}
              tabIndex={0}
              className={cn(
                "group flex cursor-pointer flex-col rounded-2xl border border-ink/8 bg-surface p-4 outline-none transition duration-300 dark:border-white/10",
                "hover:-translate-y-1 hover:border-transparent hover:shadow-md",
                "focus-visible:-translate-y-1 focus-visible:border-transparent focus-visible:shadow-md focus-visible:ring-2 focus-visible:ring-iris-500",
              )}
            >
              <CourseThumb
                category={item.discipline}
                tone="deep"
                className="aspect-[16/10]"
              />
              <div className="flex flex-1 flex-col px-1.5 pt-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 text-sm font-semibold text-honey-700 dark:text-honey-300">
                    <span className="text-honey-500" aria-hidden>
                      ★
                    </span>
                    {item.rating}
                  </span>
                  <Meta>{item.reviews} valoraciones</Meta>
                  <Meta>{item.hours}</Meta>
                </div>

                <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-medium text-fern">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0"
                    aria-hidden
                  >
                    <path d="m4 10.5 3.5 3.5L16 6" />
                  </svg>
                  {item.outcome}
                </div>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-1.5 font-semibold text-iris-600 transition hover:gap-2.5 hover:text-iris-700 dark:text-iris-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Ver todos los aceleradores
            <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
