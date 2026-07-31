"use client";

import { ThemeProvider } from "next-themes";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/hooks";

gsap.registerPlugin(ScrollTrigger);

/**
 * Providers globales de la app.
 *
 * - Tema claro/oscuro con next-themes (estrategia de clase en <html>).
 *   HeroUI v3 aplica su tema dark automáticamente ante la clase `.dark`.
 * - Smooth scroll con Lenis conduciendo el reloj de GSAP, de modo que
 *   ScrollTrigger queda sincronizado con el scroll suave (sin jitter en los
 *   reveals). Todo se desactiva si el usuario pide prefers-reduced-motion:
 *   entonces se usa scroll nativo y los reveals se resuelven a estado final.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const lenisRef = useRef<LenisRef>(null);

  // Lenis conduce gsap.ticker y ScrollTrigger se actualiza en cada scroll.
  useEffect(() => {
    if (reducedMotion) return;
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(raf);
    };
  }, [reducedMotion]);

  const content = reducedMotion ? (
    <>{children}</>
  ) : (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {content}
    </ThemeProvider>
  );
}
