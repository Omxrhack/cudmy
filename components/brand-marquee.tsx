import {
  siGoogle,
  siMeta,
  siApple,
  siNetflix,
  siSpotify,
  siAirbnb,
  siUber,
  siGithub,
  siFigma,
  siNotion,
  siStripe,
  siShopify,
} from "simple-icons";

const LOGOS = [
  siGoogle,
  siMeta,
  siApple,
  siNetflix,
  siSpotify,
  siAirbnb,
  siUber,
  siGithub,
  siFigma,
  siNotion,
  siStripe,
  siShopify,
];

/**
 * Marquee de isologos (símbolo + nombre): empresas donde consiguen trabajo los
 * estudiantes. Monocromático (se adapta al tema). Animación CSS pura (dos copias
 * + translateX -50%), sin pausa al hover. Respeta prefers-reduced-motion.
 */
export function BrandMarquee() {
  return (
    <section
      aria-label="Empresas donde trabajan nuestros estudiantes"
      className="w-full py-12"
    >
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.14em] text-foreground/45">
        Nuestros estudiantes ahora trabajan en
      </p>

      <div
        className="relative overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-16 pr-16"
            >
              {LOGOS.map((logo) => (
                <li
                  key={logo.title}
                  className="flex shrink-0 items-center gap-3 text-foreground/40 transition-colors duration-300 hover:text-foreground/75"
                >
                  <svg
                    role="img"
                    aria-label={logo.title}
                    viewBox="0 0 24 24"
                    className="h-7 w-7 shrink-0 fill-current"
                  >
                    <title>{logo.title}</title>
                    <path d={logo.path} />
                  </svg>
                  <span className="font-display text-xl font-semibold tracking-tight">
                    {logo.title}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
