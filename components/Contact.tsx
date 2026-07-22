export function Contact() {
  return (
    <section className="contact-section" id="kontakt" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Kontakt</p>
        <h2 id="contact-title">Haben Sie einen Platz für mein Praxisjahr?</h2>
      </div>
      <div className="contact-copy">
        <p>
          Ich suche für 2026/27 eine Stelle in der Applikationsentwicklung und
          freue mich, mehr über Ihr Team und die Aufgaben zu erfahren.
        </p>
        <a className="contact-email" href="mailto:bytyqiartur00@gmail.com">
          bytyqiartur00@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="social-links" aria-label="Weitere Profile">
          <a
            href="https://github.com/Artur001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (öffnet in neuem Tab)"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/artur-bytyqi-0982212a2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (öffnet in neuem Tab)"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
