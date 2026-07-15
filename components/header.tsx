"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="9" cy="9" r="6" />
      <path d="m14 14 3.5 3.5" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </svg>
  );
}

/** Botón icónico reutilizable con foco visible por teclado. */
function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/70",
        "transition hover:bg-foreground/5 hover:text-foreground active:scale-90",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      {children}
    </button>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  // Placeholder estable hasta montar (evita mismatch de hidratación).
  if (!mounted) {
    return <IconButton label="Cambiar tema"><span className="h-5 w-5" /></IconButton>;
  }

  return (
    <IconButton
      label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </IconButton>
  );
}

function LanguageToggle() {
  const [lang, setLang] = useState<"ES" | "EN">("ES");
  return (
    <button
      type="button"
      aria-label="Cambiar idioma"
      onClick={() => setLang((l) => (l === "ES" ? "EN" : "ES"))}
      className={cn(
        "inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-foreground/70",
        "transition hover:bg-foreground/5 hover:text-foreground active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      <GlobeIcon className="h-5 w-5" />
      {lang}
    </button>
  );
}

export function Header() {
  return (
    <header className="relative z-50 w-full bg-transparent">
      <div className="mx-auto grid h-24 w-full grid-cols-[1fr_minmax(0,44rem)_1fr] items-center gap-4 px-6 lg:px-10">
        {/* 1 · Marca */}
        <a
          href="/"
          className={cn(
            "justify-self-start font-display text-2xl font-extrabold tracking-tight text-honey-500",
            "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honey-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          cudmy
        </a>

        {/* 2 · Buscador (centrado) */}
        <form
          role="search"
          className="relative hidden w-full min-w-0 justify-self-center md:block"
          onSubmit={(e) => e.preventDefault()}
        >
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
          <input
            type="search"
            aria-label="Buscar cursos"
            placeholder="¿Qué quieres aprender hoy?"
            className={cn(
              "h-12 w-full rounded-full border border-border bg-surface pl-12 pr-4 text-base text-foreground shadow-soft",
              "placeholder:text-foreground/40 transition",
              "focus-visible:outline-none focus-visible:border-iris-500 focus-visible:ring-2 focus-visible:ring-iris-500/40",
            )}
          />
        </form>

        {/* 3 · Acciones */}
        <nav
          aria-label="Cuenta y preferencias"
          className="flex shrink-0 items-center justify-self-end gap-1.5 sm:gap-2"
        >
          <button
            type="button"
            className={cn(
              "hidden h-10 items-center whitespace-nowrap rounded-xl px-4 text-sm font-semibold text-foreground/80 transition sm:inline-flex",
              "hover:bg-foreground/5 hover:text-foreground active:scale-[0.97]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 items-center rounded-xl bg-honey-500 px-4 text-sm font-bold text-ink transition duration-200",
              "hover:-translate-y-0.5 hover:bg-honey-400 hover:shadow-[0_10px_28px_-8px_rgb(255_176_32_/_0.7)]",
              "active:translate-y-0 active:scale-[0.97]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honey-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
          >
            Registrarse
          </button>
          <ThemeToggle />
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}
