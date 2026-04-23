"use client";

import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center text-center pt-12 pb-20 px-4"
    >
      <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
        Verfügbar für Praktika ab Sommer 2026
      </span>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        Software Engineer <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">mit Fokus auf UX & Performance</span>
      </h2>
      <p className="max-w-2xl text-lg sm:text-xl text-muted mb-10 leading-relaxed">
        Ich entwickle skalierbare Full-Stack Applikationen und liebe intuitive Benutzeroberflächen. 
        Mein Ziel: Komplexe Probleme durch eleganten Code und durchdachtes Design zu lösen.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a 
          href="mailto:bytyqiartur00@gmail.com" 
          className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-background hover:-translate-y-1 hover:bg-primary-hover shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all font-semibold w-full sm:w-auto justify-center"
        >
          <FaEnvelope className="w-4 h-4" /> Praktikum anfragen
        </a>
        <a 
          href="https://github.com/Artur001" 
          target="_blank"
          className="flex items-center gap-2 px-8 py-3 rounded-full bg-glass-bg border border-glass-border shadow-lg hover:-translate-y-1 hover:bg-white/10 transition-all text-foreground font-semibold w-full sm:w-auto justify-center"
        >
          <FaGithub className="w-5 h-5" /> GitHub ansehen
        </a>
      </div>
    </motion.section>
  );
}
