import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cudmy.com"),
  title: {
    default: "cudmy · Aprende las habilidades que piden hoy",
    template: "%s · cudmy",
  },
  description:
    "Marketplace de cursos online con instructores reales. Diseño, desarrollo, IA y negocio. Aprende a tu ritmo y avanza en tu carrera con cudmy.",
  openGraph: {
    title: "cudmy · Aprende las habilidades que piden hoy",
    description:
      "Miles de cursos de diseño, desarrollo, IA y negocio con instructores reales.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${bricolage.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Providers>
          <Header />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
