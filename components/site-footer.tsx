import { siNetflix, siSpotify, siAirbnb, siUber, siGithub } from "simple-icons";

const BUSINESS_LOGOS = [siNetflix, siSpotify, siAirbnb, siUber, siGithub];

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Carreras demandadas",
    links: [
      "Científico de datos",
      "Desarrollador full stack",
      "Ingeniero de la nube",
      "Gestor de proyectos",
      "Desarrollo de videojuegos",
    ],
  },
  {
    title: "Desarrollo web",
    links: ["Desarrollo web", "JavaScript", "React", "Angular", "Python"],
  },
  {
    title: "Certificaciones",
    links: [
      "AWS",
      "Microsoft Azure",
      "Kubernetes",
      "Ciberseguridad",
      "Scrum",
    ],
  },
  {
    title: "Habilidades",
    links: ["Excel", "SQL", "Power BI", "ChatGPT", "Comunicación"],
  },
  {
    title: "Acerca de cudmy",
    links: ["Quiénes somos", "Empleo", "Contacto", "Blog", "Inversores"],
  },
  {
    title: "Descubre cudmy",
    links: [
      "Consigue la app",
      "Enseña en cudmy",
      "Planes y precios",
      "Afiliados",
      "Ayuda y soporte",
    ],
  },
  {
    title: "cudmy Business",
    links: ["Para equipos", "Planes empresa", "Casos de éxito"],
  },
  {
    title: "Legal y accesibilidad",
    links: [
      "Accesibilidad",
      "Política de privacidad",
      "Mapa del sitio",
      "Condiciones",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      {/* Franja: empresas que eligen cudmy Business */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <p className="max-w-md text-sm text-white/70">
            Las mejores empresas eligen{" "}
            <span className="font-semibold text-white">cudmy Business</span>{" "}
            para desarrollar las habilidades más demandadas.
          </p>
          <ul className="flex flex-wrap items-center gap-8">
            {BUSINESS_LOGOS.map((logo) => (
              <li key={logo.title}>
                <svg
                  role="img"
                  aria-label={logo.title}
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current text-white/70"
                >
                  <title>{logo.title}</title>
                  <path d={logo.path} />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mega footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <nav
          aria-label="Enlaces del pie de página"
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-bold text-white">{col.title}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-10 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="font-display text-2xl font-extrabold tracking-tight text-honey-500">
              cudmy
            </span>
            <span className="text-sm text-white/50">© 2026 cudmy, Inc.</span>
          </div>
          <button
            type="button"
            aria-label="Cambiar idioma"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
              aria-hidden
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
            </svg>
            Español
          </button>
        </div>
      </div>
    </footer>
  );
}
