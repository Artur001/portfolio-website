import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { SectionHeading } from "@/components/SectionHeading";

export function FeaturedProjects() {
  const [leadProject, ...supportingProjects] = projects;

  return (
    <section className="section projects-section" id="projekte" aria-labelledby="projects-title">
      <SectionHeading
        eyebrow="Meine Projekte"
        title="Mathematik im Browser, Fahrten mit Flask, Windows-Automation."
        description="Drei eigene Projekte mit unterschiedlichen technischen Schwerpunkten. SolveLab hat bereits eine öffentliche Vercel-Version; die neuesten Änderungen an allen drei Repositories sind lokal geprüft."
        headingId="projects-title"
      />

      <article className="project-card project-card--lead">
        <div className="project-card__copy">
          <div className="project-meta">
            <span>{leadProject.number}</span>
            <span>{leadProject.kind}</span>
            <span>{leadProject.year}</span>
          </div>
          <h3>{leadProject.title}</h3>
          <p className="project-summary">{leadProject.summary}</p>
          <ul className="capability-list" aria-label={`Funktionen von ${leadProject.title}`}>
            {leadProject.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
          <div className="project-links">
            <Link className="text-link" href={`/projekte/${leadProject.slug}`}>
              Details ansehen <span aria-hidden="true">→</span>
            </Link>
            {leadProject.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} (öffnet in neuem Tab)`}
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
        <ProjectVisual variant={leadProject.visual} />
      </article>

      <div className="project-grid">
        {supportingProjects.map((project) => (
          <article className="project-card project-card--supporting" key={project.slug}>
            <div className="project-meta">
              <span>{project.number}</span>
              <span>{project.kind}</span>
              <span>{project.year}</span>
            </div>
            <ProjectVisual variant={project.visual} />
            <div className="project-card__copy">
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-role">{project.role}</p>
              <div className="project-links">
                <Link className="text-link" href={`/projekte/${project.slug}`}>
                  Details ansehen <span aria-hidden="true">→</span>
                </Link>
                {project.links[0] && (
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.links[0].label} (öffnet in neuem Tab)`}
                  >
                    {project.links[0].label} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
