import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteName, siteUrl, socialImage } from "@/lib/site";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Artur Bytyqi — Applikationsentwicklung",
    template: "%s — Artur Bytyqi",
  },
  description:
    "Artur OS: das interaktive Portfolio von Artur Bytyqi mit Projekten in Next.js, TypeScript, Python, Flask und SQL.",
  applicationName: "Artur OS — Portfolio",
  authors: [{ name: "Artur Bytyqi" }],
  creator: "Artur Bytyqi",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Artur Bytyqi",
    "Applikationsentwicklung",
    "Praxisjahr",
    "Next.js",
    "TypeScript",
    "Python",
    "Flask",
    "Schweiz",
  ],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName,
    title: "Artur Bytyqi — Applikationsentwicklung",
    description:
      "Artur OS: Projekte, Ausbildung und Lebenslauf von Artur Bytyqi, IMS-Schüler mit Schwerpunkt Applikationsentwicklung.",
    url: "/",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artur Bytyqi — Applikationsentwicklung",
    description:
      "Projekte, Ausbildung und Lebenslauf von Artur Bytyqi.",
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#d6e4f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
