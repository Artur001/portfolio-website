import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { siteName, siteUrl, socialImage } from "@/lib/site";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const pageTitle = "Lebenslauf";
const pageDescription =
  "Öffentlicher Lebenslauf von Artur Bytyqi – Ausbildung, Projekterfahrung und technische Kenntnisse.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/lebenslauf",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName,
    title: `${pageTitle} — Artur Bytyqi`,
    description: pageDescription,
    url: "/lebenslauf",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} — Artur Bytyqi`,
    description: pageDescription,
    images: [socialImage],
  },
};

const experience = [
  {
    period: "06/2024 — 01/2026",
    title: "Betreuungsdienst · Securitas AG, Region Aargau–Solothurn",
    detail:
      "Rapporte und Listen geführt, Telefondienst übernommen, Termine koordiniert sowie Empfangs- und Sicherheitsaufgaben ausgeführt.",
  },
  {
    period: "12/2022 — 01/2023",
    title: "Aushilfe Food · Coop City, Baden",
    detail: "Warenbewirtschaftung, Regalpflege und Kundenbedienung.",
  },
];

const certificates = [
  {
    period: "2026",
    title: "Cambridge English Advanced · C1",
    detail: "Gesamtergebnis 192 Punkte.",
  },
  {
    period: "2026",
    title: "DELF · Französisch B1",
    detail: "Offizielles Sprachdiplom auf Niveau B1.",
  },
  {
    period: "2026",
    title: "Harvard CS50x",
    detail: "Introduction to Computer Science inklusive Abschlussprojekt abgeschlossen.",
  },
];

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="resume-page page-shell">
      <header className="resume-hero">
        <div>
          <p className="eyebrow">Öffentlicher Lebenslauf · Stand Juli 2026</p>
          <h1>Artur Bytyqi</h1>
          <p className="resume-role">Applikationsentwickler in Ausbildung</p>
        </div>
        <div className="resume-contact">
          <span>Baden / Aargau, Schweiz</span>
          <a href="mailto:bytyqiartur00@gmail.com">bytyqiartur00@gmail.com</a>
          <a
            href="https://github.com/Artur001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub-Profil (öffnet in neuem Tab)"
          >
            github.com/Artur001
          </a>
          <a
            href="https://www.linkedin.com/in/artur-bytyqi-0982212a2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn-Profil (öffnet in neuem Tab)"
          >
            LinkedIn-Profil
          </a>
        </div>
      </header>

      <div className="resume-summary">
        <p>
          Ich besuche die Informatikmittelschule Baden, entwickle Webapps und
          Python-Tools und suche für 2026/27 ein Praxisjahr in der
          Applikationsentwicklung.
        </p>
        <div className="resume-download">
          <a className="button button--secondary" href="/Artur-Bytyqi-Lebenslauf.pdf" download>
            PDF herunterladen <span aria-hidden="true">↓</span>
          </a>
          <small>Für Screenreader ist diese Webseite die zugängliche Version.</small>
        </div>
      </div>

      <div className="resume-layout">
        <div className="resume-main">
          <section className="resume-section" aria-labelledby="resume-education">
            <h2 className="eyebrow" id="resume-education">Ausbildung</h2>
            <div className="resume-entry">
              <span>2022 — 2027</span>
              <div>
                <h3>Informatikmittelschule Baden</h3>
                <p>
                  Kantonsschule Baden &amp; Berufsfachschule BBB · Informatiker EFZ,
                  Fachrichtung Applikationsentwicklung + Berufsmaturität Wirtschaft
                </p>
                <strong>Ausbildung laufend · Praxisjahr 2026/27 gesucht</strong>
              </div>
            </div>
          </section>

          <section className="resume-section" aria-labelledby="resume-certificates">
            <h2 className="eyebrow" id="resume-certificates">Zertifikate</h2>
            {certificates.map((item) => (
              <div className="resume-entry" key={item.title}>
                <span>{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="resume-section" aria-labelledby="resume-projects">
            <h2 className="eyebrow" id="resume-projects">Ausgewählte Projekte</h2>
            {projects.map((project) => (
              <div className="resume-entry" key={project.slug}>
                <span>{project.year}</span>
                <div>
                  <h3>
                    <Link className="resume-link--screen" href={`/projekte/${project.slug}`}>
                      {project.title}
                    </Link>
                    <a
                      className="resume-link--print"
                      href={`${siteUrl}/projekte/${project.slug}`}
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p>{project.summary}</p>
                  <strong>{project.technologies.join(" · ")}</strong>
                </div>
              </div>
            ))}
          </section>

          <section className="resume-section" aria-labelledby="resume-experience">
            <h2 className="eyebrow" id="resume-experience">Berufserfahrung</h2>
            {experience.map((item) => (
              <div className="resume-entry" key={item.period}>
                <span>{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </section>
        </div>

        <aside className="resume-sidebar">
          <section aria-labelledby="resume-practical">
            <h2 className="eyebrow" id="resume-practical">Praktisch eingesetzt</h2>
            <ul>
              <li>Next.js · React · TypeScript</li>
              <li>MathJS · function-plot · KaTeX</li>
              <li>Python · Flask · Jinja</li>
              <li>SQL · SQLite</li>
              <li>Git · GitHub · Vercel</li>
            </ul>
          </section>
          <section aria-labelledby="resume-foundations">
            <h2 className="eyebrow" id="resume-foundations">Grundlagen / Unterricht</h2>
            <ul>
              <li>Testing</li>
              <li>Datenschutz</li>
              <li>Container-Grundlagen</li>
            </ul>
          </section>
          <section aria-labelledby="resume-languages">
            <h2 className="eyebrow" id="resume-languages">Sprachen</h2>
            <ul>
              <li>Deutsch · sehr gut</li>
              <li>Schweizerdeutsch · mündlich</li>
              <li>Englisch · C1 (Cambridge)</li>
              <li>Französisch · B1 (DELF)</li>
            </ul>
          </section>
        </aside>
      </div>
      </main>
      <SiteFooter />
    </>
  );
}
