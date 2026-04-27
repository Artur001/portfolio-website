"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from "react-icons/fa";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto mb-10 pt-4">
      <header className="flex flex-col sm:flex-row justify-between items-center p-6 sm:px-8 glass-card shadow-lg transition-all">
        <div className="flex items-center gap-6">
          <Image
            src="/img/profile.jpg"
            alt="Artur Bytyqi"
            width={128}
            height={128}
            priority
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-primary shadow-lg transition-transform hover:scale-105 shrink-0"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Artur&apos;s IMS Portfolio</h1>
            <p className="text-muted text-sm sm:text-base">Applikationsentwicklung Skills & Projekte</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-6 sm:mt-0 flex-wrap">
          <Link
            href="/CV.pdf"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg font-medium hover:bg-primary-hover hover:-translate-y-0.5 transition-all shadow-md"
          >
            <FaFilePdf /> CV ansehen
          </Link>
          <a
            href="mailto:bytyqiartur00@gmail.com"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-glass-bg border border-glass-border text-foreground hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/artur-bytyqi-0982212a2"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-glass-bg border border-glass-border text-foreground hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Artur001"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-glass-bg border border-glass-border text-foreground hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            <FaGithub />
          </a>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-glass-bg border border-glass-border text-foreground hover:bg-white/10 hover:-translate-y-0.5 transition-all ml-2"
            aria-label="Toggle Dark Mode"
          >
            {mounted && theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </header>
    </div>
  );
}
