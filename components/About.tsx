import Image from "next/image";
import profileImage from "@/public/img/profile.jpg";
import { SectionHeading } from "@/components/SectionHeading";

const timeline = [
  {
    period: "2022 — 2027",
    title: "IMS Baden / Berufsfachschule BBB",
    detail: "Informatiker EFZ Applikationsentwicklung + Berufsmaturität Wirtschaft · laufend",
  },
  {
    period: "06/2024 — 01/2026",
    title: "Securitas AG · Region Aargau–Solothurn",
    detail: "Rapporte, Telefondienst, Terminorganisation und Sicherheitskontrollen",
  },
  {
    period: "12/2022 — 01/2023",
    title: "Coop City, Baden",
    detail: "Aushilfe Food · Warenbewirtschaftung und Kundenkontakt",
  },
];

export function About() {
  return (
    <section className="section about-section" id="profil" aria-labelledby="about-title">
      <div className="about-layout">
        <div className="portrait-frame">
          <Image
            src={profileImage}
            alt="Porträt von Artur Bytyqi"
            sizes="(max-width: 760px) 100vw, 38vw"
            placeholder="blur"
          />
          <p>
            Baden / Aargau
            <span>Schweiz</span>
          </p>
        </div>

        <div className="about-copy">
          <SectionHeading
            eyebrow="Profil"
            title="Was ich aus Ausbildung und Arbeit mitbringe."
            headingId="about-title"
          />
          <p className="about-lead">
            Meine Ausbildung verbindet Applikationsentwicklung mit der
            Berufsmaturität Wirtschaft. Im Praxisjahr 2026/27 möchte ich zum ersten
            Mal länger in einem Entwicklungsteam mitarbeiten.
          </p>
          <p>
            Vorher habe ich fast zwanzig Monate bei Securitas gearbeitet. Dort führte
            ich Rapporte, koordinierte Termine, übernahm Telefon- und Empfangsdienst
            und musste auch unter Druck ruhig und zuverlässig bleiben. Diese Erfahrung
            nehme ich in die Softwareentwicklung mit.
          </p>

          <ol className="timeline" aria-label="Ausbildung und Berufserfahrung">
            {timeline.map((item) => (
              <li key={`${item.period}-${item.title}`}>
                <span>{item.period}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
