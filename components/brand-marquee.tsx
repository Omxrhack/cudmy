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
      className="w-full py-28"
    >
      <p className="mb-14 text-center text-sm font-semibold uppercase tracking-widest text-foreground/45">
        Nuestros estudiantes trabajan en
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
                  className="flex shrink-0 items-center gap-3 text-foreground/45 transition-colors hover:text-foreground/80"
                >
                  <svg
                    role="img"
                    aria-label={logo.title}
                    viewBox="0 0 24 24"
                    className="h-8 w-8 shrink-0 fill-current"
                  >
                    <title>{logo.title}</title>
                    <path d={logo.path} />
                  </svg>
                  <span className="font-display text-2xl font-bold">
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
