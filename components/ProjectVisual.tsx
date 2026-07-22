import Image from "next/image";
import type { ProjectVisual as ProjectVisualName } from "@/lib/projects";

type ProjectVisualProps = {
  variant: ProjectVisualName;
};

const screenshots = {
  math: {
    src: "/projects/solvelab/graphen-live.jpg",
    width: 1600,
    height: 900,
    alt: "Aktuelle SolveLab-Ansicht mit Seitenleiste, zwei Funktionszeilen und dem Graphen von x hoch 2 und Sinus x",
    tag: "Modernisierte lokale Version",
    caption: "SolveLab · Graphen & Plotting · aufgenommen am 13. Juli 2026",
  },
  rides: {
    src: "/projects/taxishift/rides-demo.jpg",
    width: 1234,
    height: 712,
    alt: "Aktuelle TaxiShift-Oberfläche mit Fahrtenübersicht, Statuskarten, Suche und Filter",
    tag: "Repository lokal ausgeführt",
    caption: "TaxiShift · modernisierte Oberfläche mit anonymen Demo-Daten",
  },
} as const;

export function ProjectVisual({ variant }: ProjectVisualProps) {
  if (variant !== "terminal") {
    const screenshot = screenshots[variant];

    return (
      <figure className={`project-visual project-visual--${variant}`}>
        <div className="project-visual__image">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={screenshot.width}
            height={screenshot.height}
            sizes="(max-width: 800px) 100vw, 62vw"
          />
        </div>
        <figcaption className="project-visual__caption">
          <span>{screenshot.tag}</span>
          <p>{screenshot.caption}</p>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="project-visual project-visual--terminal">
      <div
        className="terminal-original"
        role="img"
        aria-label="Darstellung des aktuellen TempFileCleaner-Vorschaumodus"
      >
        <pre>
          <span className="terminal-cyan">╔══════════════════════════════════════════════════╗</span>{"\n"}
          <span className="terminal-cyan">║   🧹  TempFileCleaner v2.0                      ║</span>{"\n"}
          <span className="terminal-cyan">║   Safe Windows temp and cache cleanup             ║</span>{"\n"}
          <span className="terminal-cyan">╚══════════════════════════════════════════════════╝</span>{"\n\n"}
          <span className="terminal-yellow">○ Standard-user mode</span> — Windows Temp will be skipped{"\n\n"}
          <span className="terminal-cyan">MODE: READ-ONLY PREVIEW</span>{"\n"}
          <span className="terminal-muted">No file will be opened for writing, changed, or deleted.</span>{"\n\n"}
          <span className="terminal-blue">────────────────────────────────────────────</span>{"\n"}
          <span className="terminal-blue">Temporary files</span>{"\n"}
          {"  ? User temporary files               —\n"}
          <span className="terminal-blue">────────────────────────────────────────────</span>{"\n"}
          <span className="terminal-blue">System caches</span>{"\n"}
          {"  ? DirectX shader cache               —\n"}
          <span className="terminal-blue">────────────────────────────────────────────</span>{"\n"}
          <span className="terminal-blue">Browser caches</span>{"\n"}
          {"  ? Chrome Cache (Default profile)      —\n\n"}
          <span className="terminal-green">Eligible now: [count] file(s), [size]</span>{"\n"}
          <span className="terminal-muted">Unsafe, inaccessible, changed, and linked entries are excluded.</span>{"\n"}
          <span>Preview complete. </span>
          <b className="cursor" aria-hidden="true" />
        </pre>
      </div>
      <figcaption className="project-visual__caption">
        <span>Version 2.0 · Read-only Preview</span>
        <p>Aktuelle CLI-Texte · gerätespezifische Werte ausgeblendet</p>
      </figcaption>
    </figure>
  );
}
