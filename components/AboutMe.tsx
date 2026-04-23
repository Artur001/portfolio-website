"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";

export function AboutMe() {
  return (
    <section className="w-full py-16" id="about">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass-card p-8 sm:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <h3 className="text-3xl font-bold tracking-tight mb-8">Über mich & Ziele</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                <FaGraduationCap size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Informatik-Ausbildung</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Ich befinde mich aktuell in einer fundierten Informatikausbildung und suche ein spannendes Praktikum ab Sommer 2026, um mein theoretisches Wissen in der Praxis zu beweisen.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                <FaLaptopCode size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Was ich suche</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Ein Software Engineering Internship in einem agilen Team. Ich habe großes Interesse an Full-Stack Webentwicklung (React, Next.js, C# .NET) und cloud-basierten Architekturen.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400">
                <FaRocket size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Mein Mindset</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Problemlöser-Mentalität, schneller Auffassungsgabe und Freude an modernem UX/UI Design. Ich schreibe nicht nur Code, sondern baue Produkte, die Nutzer lieben.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/20 p-6 rounded-2xl border border-white/5 flex flex-col justify-center">
            <h4 className="font-bold text-xl mb-4 text-foreground">Lass uns zusammenarbeiten!</h4>
            <p className="text-muted text-sm mb-6 leading-relaxed">
              Ich bin hochmotiviert, lerne schnell und freue mich darauf, Teil von innovativen Projekten zu sein. Wenn Sie auf der Suche nach einem engagierten Software Engineering Praktikanten für 2026 sind, kontaktieren Sie mich gerne.
            </p>
            <a 
              href="mailto:bytyqiartur00@gmail.com" 
              className="w-full text-center py-3 rounded-lg bg-primary text-background font-bold hover:bg-primary-hover hover:scale-[1.02] transition-all shadow-lg"
            >
              Praktikumsangebot besprechen
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
