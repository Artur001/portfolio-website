import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IMS Skill & Portfolio Hub | Artur Bytyqi",
  description: "Portfolio von Artur Bytyqi, einem aufstrebenden Software Engineering Praktikanten.",
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
