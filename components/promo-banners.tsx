"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Promo = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  card: string; // fondo del banner
  cta_cls: string; // estilo del botón
  blobs: [string, string]; // colores de las formas decorativas
};

const PROMOS: Promo[] = [
  {
    eyebrow: "Plan Personal",
    title: "Desarrolla las habilidades que buscan las empresas",
    body: "Accede a +26,000 cursos de expertos con experiencia real a través de una única suscripción.",
    cta: "Conseguir Plan Personal",
    card: "bg-honey-200 text-ink",
    cta_cls: "bg-iris-500 text-white hover:bg-iris-600",
    blobs: ["bg-iris-500/30", "bg-ink/10"],
  },
  {
    eyebrow: "Certificaciones",
    title: "Convierte tu aprendizaje en credenciales",
    body: "Prepárate para certificaciones oficiales con exámenes de práctica y ahorra hasta 10% al reservar tu examen.",
    cta: "Empezar ahora",
    card: "bg-mist text-ink",
    cta_cls: "bg-iris-500 text-white hover:bg-iris-600",
    blobs: ["bg-honey-400/50", "bg-iris-500/20"],
  },
  {
    eyebrow: "Inteligencia artificial",
    title: "Domina las herramientas de IA más demandadas",
    body: "Cursos actualizados sobre IA generativa, agentes y automatización, listos para aplicar hoy.",
    cta: "Explorar cursos de IA",
    card: "bg-ink text-white",
    cta_cls: "bg-honey-500 text-ink hover:bg-honey-400",
    blobs: ["bg-iris-500/40", "bg-honey-500/30"],
  },
];

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
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    // Respeta prefers-reduced-motion: detiene el autoplay
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const autoplay = emblaApi.plugins().autoplay;
      autoplay?.stop();
    }
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      aria-label="Promociones"
      className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-16"
    >
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {PROMOS.map((promo) => (
            <div key={promo.title} className="min-w-0 flex-[0_0_100%]">
              <article
                className={cn(
                  "relative flex min-h-[340px] items-center overflow-hidden rounded-3xl",
                  promo.card,
                )}
              >
                {/* Formas decorativas */}
                <div
                  aria-hidden
                  className={cn(
                    "absolute -right-16 -top-16 h-72 w-72 rounded-full blur-2xl",
                    promo.blobs[0],
                  )}
                />
                <div
                  aria-hidden
                  className={cn(
                    "absolute -bottom-24 right-24 h-72 w-72 rounded-full blur-2xl",
                    promo.blobs[1],
                  )}
                />

                <div className="relative z-10 max-w-xl p-8 sm:p-12">
                  <span className="text-sm font-semibold uppercase tracking-wide opacity-70">
                    {promo.eyebrow}
                  </span>
                  <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                    {promo.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed opacity-80">
                    {promo.body}
                  </p>
                  <button
                    type="button"
                    className={cn(
                      "mt-7 inline-flex h-12 items-center rounded-xl px-6 text-base font-bold transition duration-200",
                      "hover:-translate-y-0.5 hover:shadow-lift active:scale-[0.97]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2",
                      promo.cta_cls,
                    )}
                  >
                    {promo.cta}
                  </button>
                </div>
              </article>
            </div>
          ))}
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
              "h-2.5 rounded-full transition-all",
              selected === i
                ? "w-7 bg-iris-500"
                : "w-2.5 bg-foreground/20 hover:bg-foreground/40",
            )}
          />
        ))}
      </div>
    </section>
  );
}
