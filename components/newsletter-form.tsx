"use client";

export function NewsletterForm() {
  return (
    <form
      className="w-full max-w-md"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Suscríbete al boletín"
    >
      <label htmlFor="newsletter" className="text-sm font-semibold text-white">
        Recibe cursos nuevos y ofertas
      </label>
      <div className="mt-3 flex gap-2">
        <input
          id="newsletter"
          type="email"
          placeholder="tu@correo.com"
          className="h-11 w-full rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 transition focus-visible:border-iris-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-400/40"
        />
        <button
          type="submit"
          className="inline-flex h-11 shrink-0 items-center rounded-lg bg-iris-500 px-5 text-sm font-semibold text-white transition hover:bg-iris-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Suscribirme
        </button>
      </div>
    </form>
  );
}
