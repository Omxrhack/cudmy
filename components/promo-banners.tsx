"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Variant = "iris" | "surface" | "ink";

type Promo = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  variant: Variant;
};

const PROMOS: Promo[] = [
  {
    eyebrow: "Plan Personal",
    title: "Desarrolla las habilidades que buscan las empresas",
    body: "Accede a +26,000 cursos de expertos con experiencia real a través de una única suscripción.",
    cta: "Conseguir Plan Personal",
    variant: "iris",
  },
  {
    eyebrow: "Certificaciones",
    title: "Convierte tu aprendizaje en credenciales",
    body: "Prepárate para certificaciones oficiales con exámenes de práctica y ahorra hasta 10% al reservar tu examen.",
    cta: "Empezar ahora",
    variant: "surface",
  },
  {
    eyebrow: "Inteligencia artificial",
    title: "Domina las herramientas de IA más demandadas",
    body: "Cursos actualizados sobre IA generativa, agentes y automatización, listos para aplicar hoy.",
    cta: "Explorar cursos de IA",
    variant: "ink",
  },
];

const STYLES: Record<
  Variant,
  { card: string; eyebrow: string; body: string; cta: string; glow: string }
> = {
  iris: {
    card: "bg-iris-600 text-white",
    eyebrow: "text-white/70",
    body: "text-white/80",
    cta: "bg-white text-iris-700 hover:bg-white/90",
    glow: "bg-iris-400/40",
  },
  surface: {
    card: "border border-ink/8 bg-surface text-foreground dark:border-white/10",
    eyebrow: "text-iris-600 dark:text-iris-400",
    body: "text-foreground/65",
    cta: "bg-iris-500 text-white hover:bg-iris-600",
    glow: "bg-iris-300/25 dark:bg-iris-500/15",
  },
  ink: {
    card: "bg-ink text-white",
    eyebrow: "text-white/60",
    body: "text-white/75",
    cta: "bg-white text-ink hover:bg-white/90",
    glow: "bg-iris-500/40",
  },
};

export function PromoBanners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5500, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Sincroniza estado inicial con Embla (sistema externo) al montar.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      emblaApi.plugins().autoplay?.stop();
    }
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="planes"
      aria-label="Promociones"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {PROMOS.map((promo) => {
            const s = STYLES[promo.variant];
            return (
              <div key={promo.title} className="min-w-0 flex-[0_0_100%]">
                <article
                  className={cn(
                    "relative flex min-h-[320px] items-center overflow-hidden rounded-2xl",
                    s.card,
                  )}
                >
                  {/* Un solo destello decorativo de la misma familia (iris) */}
                  <div
                    aria-hidden
                    className={cn(
                      "absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl",
                      s.glow,
                    )}
                  />

                  <div className="relative z-10 max-w-xl p-8 sm:p-12">
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-[0.1em]",
                        s.eyebrow,
                      )}
                    >
                      {promo.eyebrow}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                      {promo.title}
                    </h2>
                    <p className={cn("mt-4 text-base leading-relaxed", s.body)}>
                      {promo.body}
                    </p>
                    <button
                      type="button"
                      className={cn(
                        "mt-7 inline-flex h-11 items-center rounded-lg px-6 text-sm font-semibold transition duration-200",
                        "hover:-translate-y-0.5 active:translate-y-0",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                        s.cta,
                      )}
                    >
                      {promo.cta}
                    </button>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {PROMOS.map((promo, i) => (
          <button
            key={promo.title}
            type="button"
            aria-label={`Ir a la promoción ${i + 1}`}
            aria-current={selected === i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              selected === i
                ? "w-7 bg-iris-500"
                : "w-2 bg-foreground/20 hover:bg-foreground/40",
            )}
          />
        ))}
      </div>
    </section>
  );
}
