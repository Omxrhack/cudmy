import { VideoSequence } from "./video-sequence";

// Clips gratuitos cc0 (MDN) — full-frame (sin letterbox), así object-cover llena
// sin barras negras. Se reproducen en secuencia y en loop. El reproductor real
// del curso usará react-player más adelante.
const HERO_VIDEOS = [
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
];

/**
 * Hero dividido en 2:
 *  - Izquierda: texto (H1 + descripción).
 *  - Derecha: pila de videos reales en loop (sin gradiente de color).
 */
export function Hero() {
  return (
    <section className="relative -mt-24 flex min-h-screen w-full items-center overflow-hidden pb-16">
      {/* Video (franja derecha, corte diagonal), secuencia en loop */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 hidden w-[56%] lg:block"
        style={{ clipPath: "polygon(26% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <VideoSequence
          sources={HERO_VIDEOS}
          className="h-full w-full object-cover"
        />
        {/* Scrim superior: legibilidad de los botones del header */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/80 to-transparent" />
        {/* Fade inferior: transición suave hacia la siguiente sección */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Texto (izquierda) */}
      <div className="relative z-10 w-full max-w-2xl px-6 py-24 sm:px-10 lg:pl-24 lg:pr-8">
        <h1 className="text-5xl font-extrabold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
          Aprende algo{" "}
          <span className="relative inline-block">
            <span className="relative z-10">nuevo</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1 -z-0 h-4 rounded bg-honey-300/70"
            />
          </span>{" "}
          hoy con cudmy.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
          Miles de cursos de diseño, desarrollo y negocio. Avanza a tu ritmo,
          desde cualquier lugar, con instructores reales.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="inline-flex h-12 items-center rounded-xl bg-iris-500 px-6 text-base font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-iris-600 hover:shadow-lift active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Explorar cursos
          </button>
          <button
            type="button"
            className="inline-flex h-12 items-center rounded-xl border border-border px-6 text-base font-semibold text-foreground transition hover:bg-foreground/5 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Ver planes
          </button>
        </div>

        {/* Prueba social */}
        <div className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-3">
            {[
              { i: "A", c: "bg-iris-500 text-white" },
              { i: "M", c: "bg-honey-500 text-ink" },
              { i: "D", c: "bg-fern text-white" },
              { i: "L", c: "bg-ink text-white" },
            ].map((a) => (
              <span
                key={a.i}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ring-2 ring-background ${a.c}`}
              >
                {a.i}
              </span>
            ))}
          </div>
          <div className="text-sm leading-tight">
            <div className="font-semibold text-foreground">
              +50,000 estudiantes
            </div>
            <div className="flex items-center gap-1 text-foreground/60">
              <span className="text-honey-500">★★★★★</span>
              <span>4.8 / 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
