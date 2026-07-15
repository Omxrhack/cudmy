import { VideoSequence } from "./video-sequence";

// Videos de muestra públicos y gratuitos (media.w3.org) — sin API key, 200 OK.
// Se reproducen en secuencia y en loop. El reproductor real del curso usará
// react-player más adelante.
const HERO_VIDEOS = [
  "https://media.w3.org/2010/05/sintel/trailer.mp4",
  "https://media.w3.org/2010/05/bunny/trailer.mp4",
  "https://media.w3.org/2010/05/video/movie_300.mp4",
];

/**
 * Hero dividido en 2:
 *  - Izquierda: texto (H1 + descripción).
 *  - Derecha: pila de videos reales en loop (sin gradiente de color).
 */
export function Hero() {
  return (
    <section className="relative -mt-24 flex min-h-screen w-full items-center overflow-hidden pb-16">
      {/* Video (mitad derecha completa), secuencia en loop */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 hidden w-[52%] lg:block"
        style={{
          WebkitMaskImage:
            "linear-gradient(105deg, transparent 4%, #000 26%)",
          maskImage: "linear-gradient(105deg, transparent 4%, #000 26%)",
        }}
      >
        <VideoSequence
          sources={HERO_VIDEOS}
          className="h-full w-full object-cover"
        />
        {/* Scrim superior: legibilidad de los botones del header */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
      </div>

      {/* Texto (izquierda) */}
      <div className="relative z-10 w-full max-w-2xl px-6 py-24 sm:px-10 lg:px-16">
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
      </div>
    </section>
  );
}
