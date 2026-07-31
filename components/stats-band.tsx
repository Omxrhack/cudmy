import { Reveal } from "./reveal";

const STATS = [
  { value: "+50 mil", label: "Estudiantes activos" },
  { value: "4.8 / 5", label: "Valoración media" },
  { value: "+26 mil", label: "Cursos en catálogo" },
  { value: "92%", label: "Terminan lo que empiezan" },
];

/** Ancla cuantitativa entre el marquee y el catálogo. Cifras grandes, hairlines. */
export function StatsBand() {
  return (
    <section aria-label="cudmy en cifras" className="py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Reveal
          stagger
          className="grid grid-cols-2 gap-y-10 rounded-2xl border border-ink/8 bg-surface px-6 py-10 dark:border-white/10 sm:px-10 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center lg:border-r lg:border-ink/8 lg:last:border-r-0 lg:dark:border-white/10"
            >
              <span className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {s.value}
              </span>
              <span className="mt-2 text-sm text-foreground/60">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
