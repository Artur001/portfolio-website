import Link from "next/link";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="availability">
          <span aria-hidden="true" /> Praxisjahr Applikationsentwicklung 2026/27
        </p>
        <h1 id="hero-title">
          <span>Informatikmittelschule Baden.</span>
          Ich bin Artur und entwickle Software.
        </h1>
        <p className="hero__intro">
          Ich arbeite an Webapps und Python-Tools und suche für 2026/27 ein
          Praxisjahr in der Applikationsentwicklung. Meine Projekte reichen von
          Mathematik im Browser über Flask und SQLite bis zu einem sicheren
          Windows-Kommandozeilentool.
        </p>
        <div className="button-row">
          <a className="button button--primary" href="#projekte">
            Meine Projekte <span aria-hidden="true">↓</span>
          </a>
          <a className="button button--secondary" href="mailto:bytyqiartur00@gmail.com">
            Kontakt aufnehmen <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <aside className="hero__proof" aria-label="Ausbildung und Nachweise">
        <p className="hero__proof-label">Ausbildung &amp; Nachweise</p>
        <dl>
          <div>
            <dt>IMS / BBB</dt>
            <dd>Informatiker EFZ · Applikationsentwicklung + BM Wirtschaft</dd>
          </div>
          <div>
            <dt>Englisch</dt>
            <dd>Cambridge C1 · Score 192</dd>
          </div>
          <div>
            <dt>Französisch</dt>
            <dd>DELF B1</dd>
          </div>
          <div>
            <dt>Informatik</dt>
            <dd>CS50x · abgeschlossen 2026</dd>
          </div>
        </dl>
        <Link className="proof-link" href="/lebenslauf">
          Ausbildung & Erfahrung <span aria-hidden="true">↗</span>
        </Link>
      </aside>
    </section>
  );
}
