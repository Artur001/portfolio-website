"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string;
  github_link: string;
};

export function ProjectCard({ project, index }: { project: Project, index: number }) {
  const techTags = project.tech.split(',').map(t => t.trim());
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col p-6 glass-card hover:-translate-y-2 transition-transform duration-300 group"
    >
      <div className="flex justify-between items-start mb-4 gap-4">
        <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
        <span className="text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-lg bg-black/20 border border-white/10 text-muted whitespace-nowrap">
          {project.category}
        </span>
      </div>
      <div className="flex flex-col gap-3 text-sm flex-grow mb-6 bg-black/10 p-5 rounded-xl border border-black/5 dark:border-white/5 shadow-inner">
        {project.description.split('\n').map((line, i) => {
          const [prefix, ...rest] = line.split(':');
          const value = rest.join(':').trim();
          
          if (!value) return <p key={i} className="text-muted leading-relaxed">{line}</p>;
          
          let colorClass = "text-muted";
          if (prefix.toLowerCase().includes("problem")) colorClass = "text-red-400";
          if (prefix.toLowerCase().includes("lösung")) colorClass = "text-blue-400";
          if (prefix.toLowerCase().includes("impact")) colorClass = "text-emerald-400";

          return (
            <p key={i} className="text-gray-300 leading-relaxed">
              <strong className={`${colorClass} block mb-0.5 tracking-wide text-xs uppercase`}>{prefix}</strong>
              {value}
            </p>
          );
        })}
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {techTags.map(tag => (
          <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10 shadow-sm">
            {tag}
          </span>
        ))}
      </div>
      
      <a 
        href={project.github_link} 
        target="_blank"
        className="mt-auto flex items-center justify-center gap-2 text-sm font-bold text-foreground hover:text-background transition-all bg-primary/20 hover:bg-primary px-4 py-2.5 rounded-lg border border-primary/30 hover:border-primary shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
      >
        <FaGithub className="w-4 h-4" /> View Source
      </a>
    </motion.div>
  );
}
