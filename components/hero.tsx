import { RotatingWord } from "./rotating-word";
import { Reveal } from "./reveal";
import { Stars } from "./stars";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m4 10.5 3.5 3.5L16 6" />
    </svg>
  );
}

/**
 * Mock de producto on-brand (sin assets externos): un reproductor de curso en
 * tonos iris. Comunica "esto es una plataforma real" mucho mejor que el video
 * placeholder de MDN, y funciona igual en móvil que en desktop.
 */
function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
      {/* Card principal: reproductor + lección */}
      <div className="overflow-hidden rounded-2xl border border-ink/8 bg-surface shadow-lg dark:border-white/10">
        {/* Área de reproductor (superficie oscura iris, como un video) */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-iris-800 to-iris-950">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.08) 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          />
          <span className="absolute left-4 top-4 text-xs font-semibold uppercase tracking-[0.1em] text-white/70">
            Diseño de producto
          </span>
          {/* Botón play */}
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md">
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-iris-600" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          {/* Barra de progreso del video */}
          <div className="absolute inset-x-4 bottom-4">
            <div className="flex items-center justify-between text-[0.7rem] font-medium text-white/70">
              <span>12:04</span>
              <span>34:20</span>
            </div>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-[35%] rounded-full bg-honey-400" />
            </div>
          </div>
        </div>

        {/* Metadatos de la lección */}
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground/55">
            Lección 8 de 24
          </p>
          <h3 className="mt-1.5 text-base font-semibold text-foreground">
            Jerarquía visual y retícula
          </h3>
          <p className="mt-1 text-sm text-foreground/60">Con Marina Ruiz</p>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="font-semibold text-foreground">4.9</span>
            <Stars value={4.9} className="text-sm" />
            <span className="text-foreground/50">(2,410)</span>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs font-medium text-foreground/60">
              <span>Tu progreso</span>
              <span>62%</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-foreground/10">
              <div className="h-full w-[62%] rounded-full bg-iris-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Chip flotante: certificado */}
      <div className="absolute -right-3 -top-3 hidden items-center gap-2 rounded-xl border border-ink/8 bg-surface px-3 py-2 text-sm font-semibold text-foreground shadow-md dark:border-white/10 sm:flex">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-fern/15 text-fern">
          <CheckIcon className="h-3.5 w-3.5" />
        </span>
        Certificado incluido
      </div>

      {/* Chip flotante: inscritos */}
      <div className="absolute -bottom-4 -left-3 hidden items-center gap-3 rounded-xl border border-ink/8 bg-surface px-3 py-2 shadow-md dark:border-white/10 sm:flex">
        <div className="flex -space-x-2">
          {["A", "M", "D"].map((i) => (
            <span
              key={i}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-iris-100 text-[0.65rem] font-bold text-iris-700 ring-2 ring-surface dark:bg-iris-500/20 dark:text-iris-200"
            >
              {i}
            </span>
          ))}
        </div>
        <span className="text-xs font-medium leading-tight text-foreground/70">
          +2,400 inscritos
          <br />
          esta semana
        </span>
      </div>
    </div>
  );
}

/**
 * Hero de dos columnas: tesis a la izquierda (H1 + firma de palabra rotante),
 * mock de producto a la derecha. Fondo con lavado tonal iris de una sola
 * familia (atmósfera, no protagonista).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Lavado tonal de fondo (una sola familia, decorativo) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_75%_20%,var(--color-iris-100)_0%,transparent_60%)] opacity-70 dark:bg-[radial-gradient(60%_60%_at_75%_20%,rgb(91_75_225_/_0.16)_0%,transparent_60%)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-16 lg:py-24">
        {/* Columna de texto */}
        <Reveal stagger className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-3 py-1 text-xs font-semibold text-foreground/70 dark:border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-iris-500" />
            +26,000 cursos con instructores reales
          </span>

          <h1 className="mt-5 text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
            Empieza a <RotatingWord /> hoy con cudmy.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/65">
            Miles de cursos de diseño, desarrollo, IA y negocio. Avanza a tu
            ritmo, desde cualquier lugar, con quienes hacen el trabajo de verdad.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cursos"
              className="inline-flex h-12 items-center rounded-lg bg-iris-500 px-6 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-iris-600 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Explorar cursos
            </a>
            <a
              href="#planes"
              className="inline-flex h-12 items-center rounded-lg border border-ink/12 px-6 text-base font-semibold text-foreground transition hover:border-ink/25 hover:bg-foreground/[0.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/15 dark:hover:border-white/30"
            >
              Ver planes
            </a>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-foreground/60">
            <CheckIcon className="h-4 w-4 text-fern" />
            Gratis para empezar · sin tarjeta
          </p>

          <div className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["A", "M", "D", "L"].map((i) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-iris-100 text-xs font-bold text-iris-700 ring-2 ring-background dark:bg-iris-500/20 dark:text-iris-200"
                >
                  {i}
                </span>
              ))}
            </div>
            <div className="text-sm leading-tight">
              <div className="font-semibold text-foreground">
                +50,000 estudiantes
              </div>
              <div className="mt-0.5 flex items-center gap-1.5 text-foreground/60">
                <Stars value={4.8} className="text-sm" />
                <span>4.8 / 5</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Columna de showcase */}
        <Reveal delay={0.15} y={28}>
          <HeroShowcase />
        </Reveal>
      </div>
    </section>
  );
}
