import { SectionHeading } from "@/components/SectionHeading";

const capabilityGroups = [
  {
    number: "01",
    title: "Web",
    description:
      "SolveLab ist mein grösstes Webprojekt. Dort arbeite ich mit Komponenten, Zuständen, Formularen und mathematischen Bibliotheken.",
    tools: "Next.js · React · TypeScript · HTML · CSS",
    level: "In eigenen Projekten eingesetzt",
  },
  {
    number: "02",
    title: "Python & SQL",
    description:
      "TaxiShift verbindet Flask-Routen, Jinja-Formulare und SQLite. TempFileCleaner ist ein grösseres Python-Skript für Windows.",
    tools: "Python · Flask · Jinja · SQL · SQLite",
    level: "In zwei öffentlichen Projekten eingesetzt",
  },
  {
    number: "03",
    title: "Veröffentlichen",
    description:
      "Meine Repositories liegen auf GitHub, SolveLab läuft auf Vercel und für das Windows-Tool habe ich einen PyInstaller-Build vorbereitet.",
    tools: "Git · GitHub · Vercel · PyInstaller · Batch",
    level: "Praktisch ausprobiert",
  },
  {
    number: "04",
    title: "Ausbildung",
    description:
      "In den Modulen der IMS und BBB habe ich unter anderem Tests, Datenschutz und die Grundlagen von Containern behandelt. Das ist Unterrichtserfahrung, keine Berufspraxis.",
    tools: "Testing · Datenschutz · Container-Grundlagen",
    level: "Im Unterricht behandelt",
  },
];

export function Capabilities() {
  return (
    <section className="section capabilities-section" id="kompetenzen" aria-labelledby="capabilities-title">
      <SectionHeading
        eyebrow="Kenntnisse"
        title="Was ich benutze – und woher die Erfahrung kommt."
        headingId="capabilities-title"
      />
      <div className="capability-grid">
        {capabilityGroups.map((group) => (
          <article className="capability-card" key={group.number}>
            <p className="capability-card__number">{group.number}</p>
            <div>
              <p className="capability-card__level">{group.level}</p>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <strong>{group.tools}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
