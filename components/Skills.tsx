"use client";

import { motion, Variants } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" />, color: "text-foreground" },
  { name: "React", icon: <FaReact className="w-8 h-8" />, color: "text-blue-400" },
  { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" />, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" />, color: "text-sky-400" },
  { name: "Supabase / SQL", icon: <FaDatabase className="w-8 h-8" />, color: "text-emerald-500" },
  { name: "HTML5", icon: <FaHtml5 className="w-8 h-8" />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt className="w-8 h-8" />, color: "text-blue-600" },
  { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" />, color: "text-green-500" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Skills() {
  return (
    <section id="skills" className="w-full py-10 scroll-mt-24 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-8 text-center sm:text-left">Tech Stack & Skills</h3>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill.name}
            variants={item}
            className="flex flex-col items-center justify-center p-6 glass-card hover:bg-white/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-default"
          >
            <div className={`${skill.color} mb-3 group-hover:scale-110 transition-transform`}>
              {skill.icon}
            </div>
            <span className="font-medium text-sm text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
