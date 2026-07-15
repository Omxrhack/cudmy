"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reproduce una lista de videos en secuencia y en loop (al terminar uno pasa al
 * siguiente; tras el último vuelve al primero). Silenciado, con autoplay fiable
 * (forzando `muted` + play() vía ref, que React no aplica bien por sí solo).
 */
export function VideoSequence({
  sources,
  className,
}: {
  sources: string[];
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    void v.play().catch(() => {});
  }, [index]);

  return (
    <video
      ref={ref}
      key={index}
      className={className}
      src={sources[index]}
      autoPlay
      muted
      playsInline
      preload="auto"
      onEnded={() => setIndex((prev) => (prev + 1) % sources.length)}
    />
  );
}
