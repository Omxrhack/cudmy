"use client";

import { ThemeProvider } from "next-themes";
import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

/**
 * Providers globales de la app.
 *
 * - Tema claro/oscuro con next-themes (estrategia de clase en <html>).
 *   HeroUI v3 aplica su tema dark automáticamente ante la clase `.dark`.
 * - Smooth scroll con Lenis (montado en `root`, sin wrapper en el DOM),
 *   desactivado si el usuario pide prefers-reduced-motion.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const scrolled = reducedMotion ? (
    <>{children}</>
  ) : (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
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
      {scrolled}
    </ThemeProvider>
  );
}
