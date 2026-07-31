"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useScrolled, useMounted } from "@/lib/hooks";

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
  const mounted = useMounted();

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
  const scrolled = useScrolled(8);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-ink/8 bg-background/80 backdrop-blur-md dark:border-white/10"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto grid h-20 w-full max-w-[100rem] grid-cols-[auto_1fr_auto] items-center gap-4 px-6 lg:h-24 lg:grid-cols-[1fr_minmax(0,40rem)_1fr] lg:px-10">
        {/* 1 · Marca */}
        <Link
          href="/"
          className={cn(
            "justify-self-start font-display text-2xl font-bold tracking-tight text-foreground",
            "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          cudmy
        </Link>

        {/* 2 · Buscador (centrado) */}
        <form
          role="search"
          className="relative hidden w-full min-w-0 justify-self-center md:block"
          onSubmit={(e) => e.preventDefault()}
        >
          <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
          <input
            type="search"
            aria-label="Buscar cursos"
            placeholder="¿Qué quieres aprender hoy?"
            className={cn(
              "h-11 w-full rounded-lg border border-ink/10 bg-surface pl-11 pr-4 text-base text-foreground dark:border-white/12",
              "placeholder:text-foreground/40 transition",
              "focus-visible:outline-none focus-visible:border-iris-500 focus-visible:ring-2 focus-visible:ring-iris-500/40",
            )}
          />
        </form>

        {/* 3 · Acciones */}
        <nav
          aria-label="Cuenta y preferencias"
          className="flex shrink-0 items-center justify-self-end gap-1 sm:gap-1.5"
        >
          <button
            type="button"
            className={cn(
              "hidden h-10 items-center whitespace-nowrap rounded-lg px-3.5 text-sm font-semibold text-foreground/80 transition sm:inline-flex",
              "hover:bg-foreground/5 hover:text-foreground active:scale-[0.97]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 items-center rounded-lg bg-iris-500 px-4 text-sm font-semibold text-white transition duration-200",
              "hover:-translate-y-0.5 hover:bg-iris-600 hover:shadow-md active:translate-y-0 active:scale-[0.97]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
