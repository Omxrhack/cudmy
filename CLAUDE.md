@AGENTS.md

## Bitácora

### Fase 1 — Fundación (OK build ✓)
- Stack real fijado: **Next 16.2.10 · React 19.2.4 · Tailwind v4 · HeroUI 3.2.2 · pnpm**
  (el brief pedía Next14/React18/TW3/HeroUI2.6, incompatibles con el scaffold; se optó por el
  stack moderno, que es justo lo que HeroUI v3 exige). Migrado npm→pnpm (`.npmrc`,
  `pnpm-workspace.yaml` con builds de sharp/unrs-resolver).
- Deps: `@heroui/react` `@heroui/styles` `gsap` `@gsap/react` `lenis` `embla-carousel-react`
  `embla-carousel-autoplay` `react-player`(^2.16) `clsx` `tailwind-merge`(v3). Sin
  framer-motion ni autoprefixer.
- Sistema de diseño con **capa doble**: escalas de marca `iris`/`honey` 50→900 +
  `ink/mist/porcelain/fern` como utilidades Tailwind en `@theme` (globals.css), y mapeo de
  los tokens **semánticos** de HeroUI v3 (`--accent`=iris, `--background`=porcelain,
  `--foreground`=ink, `--success`=fern, `--focus`=iris, `--radius`) para que sus componentes
  salgan en marca. Fuentes Bricolage (display) + Plus Jakarta (cuerpo) vía next/font.
  Smooth scroll Lenis en `providers.tsx` (respeta prefers-reduced-motion); `cn()` en lib/utils.
- Página de prueba (`app/page.tsx` + `components/stack-proof.tsx`): hero + tarjetas de curso
  (hover elevar + anillo iris) + panel HeroUI en marca, con reveal GSAP gated por
  reduced-motion y foco de teclado visible. `pnpm build` compila y prerenderiza `/`.
- Desviaciones clave vs brief: HeroUI v3 es CSS-first (sin plugin `heroui()`, sin
  `HeroUIProvider`, sin escala primary/secondary → se usa `--accent`); ver plan en
  `~/.claude/plans/eres-un-agente-de-cached-bengio.md`.

### Iteración de diseño · Header + tema
- Header sticky de 3 zonas en `components/header.tsx`: marca `cudmy` (honey) · buscador
  full-width · acciones (Iniciar sesión ghost, Registrarse CTA honey, toggle de tema, idioma
  ES/EN placeholder). Montado en `layout.tsx`.
- Dark mode real con **next-themes** (estrategia de clase; HeroUI v3 aplica su tema dark solo).
  Tokens light/dark reescalados en globals.css (`:root:not(.dark)` = porcelain/ink; `.dark`
  usa el dark de HeroUI + accent iris-400). Body y superficies pasan a `bg-background`/
  `bg-surface`/`text-foreground` para cambiar con el tema.
- Hero re-alineado a la izquierda (mismo font/tamaño). `pnpm build` ✓.

**Pendiente Fase 2 (esperando OK):** Hero real con la FIRMA VISUAL (subrayado marcador miel
animando `strokeDashoffset` de un `<path>` SVG con GSAP) + reveals con ScrollTrigger.
