import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectVisual } from "@/components/ProjectVisual";

type ProjectCaseStudyProps = {
  project: Project;
  nextProject: Project;
};

function ProjectTitle({ title }: { title: string }) {
  const segments = title.split(/(?=[A-Z][a-z])/);

  return segments.map((segment, index) => (
    <span key={`${segment}-${index}`}>
      {index > 0 ? <wbr /> : null}
      {segment}
    </span>
  ));
}

export function ProjectCaseStudy({ project, nextProject }: ProjectCaseStudyProps) {
  return (
    <main id="main-content" className="case-study">
      <div className="case-study__hero page-shell">
        <Link className="back-link" href="/#projekte">
          <span aria-hidden="true">←</span> Alle Projekte
        </Link>
        <div className="case-study__heading">
          <div>
            <p className="eyebrow">{project.kind} · {project.year}</p>
            <h1><ProjectTitle title={project.title} /></h1>
          </div>
          <p>{project.intro}</p>
        </div>
        <dl className="case-meta">
          <div><dt>Rolle</dt><dd>{project.role}</dd></div>
          <div><dt>Status</dt><dd>{project.status}</dd></div>
          <div><dt>Technologien</dt><dd>{project.technologies.join(" · ")}</dd></div>
        </dl>
      </div>

      <div className="case-study__visual page-shell">
        <ProjectVisual variant={project.visual} />
      </div>

      <div className="case-study__body page-shell">
        <div className="case-narrative">
          <section>
            <p className="eyebrow">Warum</p>
            <h2>Warum ich es gebaut habe</h2>
            <p>{project.why}</p>
          </section>
          <section>
            <p className="eyebrow">Heute</p>
            <h2>Was aktuell funktioniert</h2>
            <p>{project.works}</p>
          </section>
          <section>
            <p className="eyebrow">Nächste Schritte</p>
            <h2>Was noch fehlt</h2>
            <p>{project.limits}</p>
          </section>
          <section>
            <p className="eyebrow">Gelernt</p>
            <h2>Was ich dabei gelernt habe</h2>
            <p>{project.learned}</p>
          </section>
        </div>

        <aside className="case-sidebar" aria-label="Projektdetails">
          <section>
            <h2 className="eyebrow">Was drin ist</h2>
            <ul>{project.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section>
            <h2 className="eyebrow">Technische Notizen</h2>
            <ul>{project.notes.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <nav className="case-links" aria-label={`Links zu ${project.title}`}>
            {project.links.map((link) => (
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
          </nav>
        </aside>
      </div>

      <Link className="next-project page-shell" href={`/projekte/${nextProject.slug}`}>
        <span>Nächstes Projekt</span>
        <strong><ProjectTitle title={nextProject.title} /></strong>
        <i aria-hidden="true">→</i>
      </Link>
    </main>
  );
}
