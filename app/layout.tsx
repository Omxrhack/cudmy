import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  Playfair_Display,
  JetBrains_Mono,
  Caveat,
  Anton,
} from "next/font/google";
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

// Fuentes con carácter para el loop de palabras del hero
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "cudmy · Aprende algo nuevo hoy",
    template: "%s · cudmy",
  },
  description:
    "Marketplace de cursos online. Descubre, aprende y avanza a tu ritmo con cudmy.",
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
      className={`${bricolage.variable} ${jakarta.variable} ${playfair.variable} ${jetbrains.variable} ${caveat.variable} ${anton.variable} h-full antialiased`}
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
