import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteName, siteUrl, socialImage } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
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
    <html lang="de" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans min-h-screen relative selection:bg-primary/30 selection:text-primary overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* subtle animated glow gradients for premium aesthetic */}
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background dark:from-primary/15 dark:via-background dark:to-background"></div>
          <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-white/50 to-transparent dark:from-white/5 pointer-events-none -z-10"></div>
          
          <div className="noise-texture"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
