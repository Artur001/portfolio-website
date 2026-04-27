import { connection } from "next/server";
import { supabase } from "@/lib/supabase";
import { ProjectCard, Project } from "./ProjectCard";

export async function ProjectGrid() {
  let displayProjects: Project[] = [];
  let fetchError = false;

  try {
    await connection();

    const { data: projects, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.warn("Supabase fetch error:", error.message);
      fetchError = true;
    } else if (projects) {
      displayProjects = projects;
    }
  } catch {
    console.warn("Supabase configuration missing or network error.");
    fetchError = true;
  }

  if (fetchError || displayProjects.length === 0) {
    displayProjects = [
      { 
        id: 1, 
        title: 'Roblox Studio Game Architecture', 
        category: 'Game Dev', 
        description: 'Problem: Komplexe Map-Generierung und unzuverlässige Event-Trigger verschlechterten die Performance.\nLösung: Entwicklung eines modularen Event-Systems und Optimierung der Map-Ressourcen in LuaU.\nImpact: Ruckelfreies Gameplay mit erweiterbaren In-Game UIs.', 
        tech: 'LuaU, Roblox Studio, OOP', 
        github_link: 'https://github.com/Artur001/LernPeriode8'
      },
      { 
        id: 2, 
        title: 'C# Math Engine', 
        category: 'Backend', 
        description: 'Problem: Limitierte Standard-Konsolenrechner erlaubten keine erweiterten mathematischen Operationen.\nLösung: Implementierung eines Parser-basierten Rechners in C# (.NET), der Exponentialfunktionen und Wurzelziehen nativ unterstützt.\nImpact: Robuste Konsolenanwendung mit umfassendem Error-Handling.', 
        tech: 'C#, .NET, Algorithmen', 
        github_link: 'https://github.com/Artur001/Lern-Periode-4/blob/main/Program.cs'
      },
      { 
        id: 3, 
        title: 'Responsive Portfolio Hub', 
        category: 'Frontend', 
        description: 'Problem: Das Fehlen einer personalisierten Plattform zur Präsentation technischer Projekte.\nLösung: Design und Entwicklung einer voll-responsiven HTML/CSS Architektur mit semantischem Markup und Multimedia-Integration.\nImpact: Ein performantes Schaufenster, das auf allen Geräten optimale UX bietet.', 
        tech: 'HTML5, CSS3, UX Design', 
        github_link: 'https://github.com/Artur001/LernPeriode5/tree/main/Website'
      }
    ];
  }

  return (
    <section className="w-full py-10" id="projects">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <h3 className="text-3xl font-bold tracking-tight">Aktuelle Projekte</h3>
        {fetchError && (
          <span className="text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            Lokale Vorschau (Datenbank wird eingerichtet)
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((proj, index) => (
          <ProjectCard key={proj.id} project={proj} index={index} />
        ))}
      </div>
    </section>
  );
}
