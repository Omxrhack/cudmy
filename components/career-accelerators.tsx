import { cn } from "@/lib/utils";

type Accelerator = {
  role: string;
  rating: string;
  reviews: string;
  hours: string;
  thumb: string;
};

const ACCELERATORS: Accelerator[] = [
  {
    role: "Ingeniero de la nube",
    rating: "4.8",
    reviews: "12K",
    hours: "22.8",
    thumb: "from-fern to-iris-600",
  },
  {
    role: "Científico de datos",
    rating: "4.7",
    reviews: "26K",
    hours: "53.5",
    thumb: "from-iris-500 to-honey-500",
  },
  {
    role: "Marketing digital",
    rating: "4.6",
    reviews: "18K",
    hours: "51.5",
    thumb: "from-iris-600 to-ink",
  },
];

function Meta({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground/70">
      {children}
    </span>
  );
}

export function CareerAccelerators() {
  return (
    <section
      aria-label="Aceleradores para carreras profesionales"
      className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16"
    >
      <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
        ¿Listo para reimaginar tu carrera?
      </h2>
      <p className="mt-3 max-w-2xl text-foreground/60">
        Consigue las habilidades y la experiencia real que buscan los
        empleadores con nuestros aceleradores de carrera.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ACCELERATORS.map((item) => (
          <article
            key={item.role}
            tabIndex={0}
            className={cn(
              "group flex cursor-pointer flex-col gap-4 rounded-3xl bg-surface p-5 shadow-soft outline-none ring-1 ring-border transition duration-300",
              "hover:-translate-y-1 hover:shadow-lift hover:ring-2 hover:ring-iris-500",
              "focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-iris-500",
            )}
          >
            <div
              className={cn(
                "flex aspect-[16/10] items-end rounded-2xl bg-gradient-to-br p-5",
                item.thumb,
              )}
            >
              <span className="font-display text-2xl font-extrabold text-white/90">
                {item.role}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1 text-sm font-bold text-honey-700">
                <span className="text-honey-500" aria-hidden>
                  ★
                </span>
                {item.rating}
              </span>
              <Meta>{item.reviews} calificaciones</Meta>
              <Meta>Horas totales: {item.hours}</Meta>
            </div>
          </article>
        ))}
      </div>

      <a
        href="#"
        className="mt-8 inline-flex items-center gap-1.5 font-semibold text-iris-500 transition hover:gap-2.5 hover:text-iris-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Ver todos los aceleradores
        <span aria-hidden>→</span>
      </a>
    </section>
  );
}
