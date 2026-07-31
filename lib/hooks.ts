"use client";

import { useSyncExternalStore } from "react";

// Suscripciones a "stores" externos del navegador vía useSyncExternalStore:
// evita setState dentro de effects (patrón recomendado por React para leer
// estado externo) y no produce mismatch de hidratación (snapshot de servidor).

const subscribeReducedMotion = (cb: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/** `true` si el usuario pide menos movimiento. */
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

const subscribeScroll = (cb: () => void) => {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
};

/** `true` cuando el scroll vertical supera `threshold` px. */
export function useScrolled(threshold = 8) {
  return useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > threshold,
    () => false,
  );
}

const noopSubscribe = () => () => {};

/**
 * `false` en servidor / primer render, `true` tras hidratar. Guard de montaje
 * sin setState-en-effect (evita mismatch al leer tema/preferencias del cliente).
 */
export function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
