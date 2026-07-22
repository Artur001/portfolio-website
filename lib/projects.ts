export type ProjectVisual = "math" | "rides" | "terminal";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  kind: string;
  year: string;
  role: string;
  status: string;
  summary: string;
  intro: string;
  why: string;
  works: string;
  limits: string;
  learned: string;
  technologies: readonly string[];
  capabilities: readonly string[];
  notes: readonly string[];
  links: readonly ProjectLink[];
  visual: ProjectVisual;
};

export const projects = [
  {
    slug: "solvelab",
    number: "01",
    title: "SolveLab",
    kind: "Mathe-Webapp",
    year: "2026",
    role: "Eigenes Projekt · Konzept, UI und Code",
    status: "Lokal modernisiert · Vercel-Release ausstehend",
    summary:
      "Meine Mathe-Webapp für den Schulalltag: rechnen, Funktionen plotten, Gleichungen lösen und Formeln nachschlagen, ohne ständig zwischen verschiedenen Tools zu wechseln.",
    intro:
      "SolveLab ist meine Mathe-Webapp für den Schulalltag. Sie läuft vollständig im Browser und bündelt Werkzeuge, die ich vorher über mehrere Seiten verteilt genutzt habe.",
    why:
      "Beim Lernen wollte ich nicht dauernd zwischen Rechner, Funktionsplotter, Formelblatt und Gleichungslöser wechseln. Deshalb habe ich diese Werkzeuge in einer gemeinsamen Seitenleiste zusammengebracht.",
    works:
      "Die aktuelle Version kann wissenschaftlich rechnen, LaTeX direkt rendern, mehrere Funktionen plotten, lineare und quadratische Gleichungen lösen sowie Statistik, Finanzmathematik, Ableitungen und Kombinatorik berechnen. RAD/DEG, Nullzinsfälle und ungültige Zahleneingaben werden jetzt korrekt behandelt; auf kleinen Bildschirmen gibt es eine eigene Navigation. Die Oberfläche lässt sich auf fünf Sprachen umstellen.",
    limits:
      "Der Rechnerverlauf geht beim Neuladen verloren, Aufgaben werden nicht geräteübergreifend gespeichert und bereits berechnete Fehlermeldungen wechseln ihre Sprache erst nach einer Neuberechnung. Die automatisierten Tests prüfen vor allem Rechenlogik, Übersetzungsschlüssel und Graphenlinks statt vollständiger Browserabläufe. Die modernisierte Version ist lokal geprüft, aber noch nicht auf Vercel veröffentlicht.",
    learned:
      "Beim Umbau habe ich die Rechenlogik weiter von der Oberfläche getrennt und mit automatisierten Tests abgesichert. Besonders bei Winkelmodi, Nullzinsfällen, Eingabefehlern und Graphen reicht ein korrektes Resultat allein nicht – es muss auch verständlich dargestellt werden.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MathJS",
      "function-plot",
      "KaTeX",
    ],
    capabilities: [
      "Rechner · RAD/DEG · LaTeX",
      "Graphen & Gleichungen",
      "Responsive Navigation",
      "DE · EN · ES · FR · IT",
    ],
    notes: [
      "Alle Berechnungen laufen clientseitig; es gibt kein Konto und keine Datenbank.",
      "MathJS rechnet, function-plot zeichnet Graphen und KaTeX setzt Formeln.",
      "23 automatisierte Tests prüfen Rechenlogik, Übersetzungsschlüssel und Graphenlinks.",
      "Next.js und React wurden lokal aktualisiert; npm audit meldet keine bekannten Schwachstellen.",
      "Der öffentliche Vercel-Link zeigt bis zum nächsten Release noch den vorherigen Stand.",
    ],
    links: [
      { label: "Live-Version", href: "https://solve-lab.vercel.app" },
      { label: "GitHub", href: "https://github.com/Artur001/SolveLab" },
    ],
    visual: "math",
  },
  {
    slug: "taxishift",
    number: "02",
    title: "TaxiShift",
    kind: "Flask/SQLite-Anwendung",
    year: "2026",
    role: "CS50x-Abschlussprojekt · danach modernisiert",
    status: "Modernisierte lokale Version · 22 Tests",
    summary:
      "Mein CS50x-Abschlussprojekt, später weiterentwickelt: eine responsive Flask-App für Fahrten, Fahrerzuweisung, Status, Suche und Filter.",
    intro:
      "TaxiShift begann als bewusst kleines CS50x-Projekt. Die neue Version bleibt bei Flask, Jinja und SQLite, ergänzt aber den fehlenden Funktionsumfang und eine responsive Oberfläche. Der ursprüngliche Abgabestand bleibt in der Git-Historie erhalten.",
    why:
      "Nach den CS50-Aufgaben wollte ich eine eigene Anwendung von der Datenbank bis zur Oberfläche fertig bauen. Eine Fahrtenübersicht war ein überschaubarer Ablauf mit zwei zusammenhängenden Datentypen: Fahrer und Fahrten.",
    works:
      "Fahrten lassen sich vollständig anlegen, bearbeiten und löschen. Fahrer haben eine eigene Verwaltung; beim Löschen bleiben bestehende Fahrten erhalten und werden nur vom Fahrer getrennt. Suche, Statusfilter, Zusammenfassungen, sichtbare Feldfehler und CSRF-Schutz gehören ebenfalls dazu. Eine versionierte Migration bereinigt alte Fahrerzuweisungen und prüft danach die SQLite-Fremdschlüssel.",
    limits:
      "Die App ist weiterhin für einen lokalen Einzelplatz gedacht. Es gibt keine Anmeldung, keine verschlüsselte Ablage der Telefonnummern, keine Backups oder Audit-Historie und keine Absicherung für mehrere gleichzeitig arbeitende Disponenten.",
    learned:
      "Der Vergleich mit meinem Abgabestand zeigt mir, wie viel nach dem ersten funktionierenden Prototyp noch kommt: Datenmigration, Sicherheitsheader, Formularfehler, Barrierefreiheit und Tests sind genauso Teil der Anwendung wie die CRUD-Routen.",
    technologies: ["Python", "Flask", "SQLite", "Jinja", "HTML", "CSS", "JavaScript", "pytest"],
    capabilities: [
      "Vollständiges Fahrten-CRUD",
      "Fahrerverwaltung",
      "Suche & Statusfilter",
      "CSRF · Migration · 22 Tests",
    ],
    notes: [
      "Die modernisierte Version entstand nach CS50x; die ursprüngliche Abgabe bleibt nachvollziehbar.",
      "Eine versionierte Migration aktualisiert vorhandene lokale Datenbanken und prüft ihre Referenzen.",
      "Jinja rendert die Seiten serverseitig; JavaScript bleibt auf Filter und Bestätigungen begrenzt.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Artur001/TaxiShift" },
      { label: "Demo-Video", href: "https://youtu.be/B3BgcDpP1tA" },
    ],
    visual: "rides",
  },
  {
    slug: "temp-file-cleaner",
    number: "03",
    title: "TempFileCleaner",
    kind: "Windows-CLI-Experiment",
    year: "2026",
    role: "Eigenes Python-Experiment",
    status: "Safety-Hardened v2 · 27 Fixture-Tests",
    summary:
      "Ein Windows-Python-Skript, das eine konservative Auswahl temporärer Dateien standardmässig nur als Vorschau plant und erst nach einem expliziten --execute löscht.",
    intro:
      "TempFileCleaner bleibt ein Lernprojekt, ist in Version 2 aber bewusst konservativ aufgebaut: Vorschau ist der Standard, der Zielbereich ist klein und eine Datei wird nur über genau den Windows-Handle gelöscht, der unmittelbar davor geprüft wurde.",
    why:
      "Ich wollte ausprobieren, wie sich die vielen temporären Windows-Verzeichnisse in einer verständlichen Kommandozeile zusammenfassen lassen – mit einer Auswahl, bevor überhaupt etwas gelöscht wird.",
    works:
      "Die aktuelle Version baut zuerst einen exakten Dateiplan auf und schützt temporäre Dateien standardmässig 24 Stunden. Löschen ist nur mit --execute möglich und verlangt die Eingabe DELETE. Vor der Löschmarkierung werden finaler Pfad, Reparse-Attribute, Datei-ID, Grösse und Änderungszeit am selben exklusiven Windows-Handle geprüft. Der Papierkorb ist separat opt-in.",
    limits:
      "Das Werkzeug ist Windows-spezifisch und bewusst kein allgemeiner System-Cleaner. Chrome und Edge werden derzeit nur im Default-Profil erkannt; geöffnete oder gesperrte Cache-Dateien werden übersprungen. Logische Dateigrössen entsprechen nicht immer dem physisch frei werdenden Speicher. Ein echter System- oder Admin-Cleanup wurde bewusst nicht ausgeführt.",
    learned:
      "Beim Umbau wurde aus einem breiten Cleaner ein engeres Werkzeug mit nachvollziehbarem Sicherheitsmodell. Ein unabhängiger Test konnte zuerst eine Junction-Race ausnutzen; danach habe ich die Löschung an den geprüften Dateihandle gebunden und denselben Angriff als Regressionstest festgehalten. Das war wertvoller als einfach weitere Cleanup-Ziele hinzuzufügen.",
    technologies: ["Python", "Windows API", "unittest", "Batch", "PyInstaller"],
    capabilities: [
      "Read-only & exakter Dateiplan",
      "Same-handle Win32-Löschung",
      "24 h Mindestalter für Temp-Dateien",
      "27 Tests inkl. Junction-Race",
    ],
    notes: [
      "Die Laufzeit verwendet nur die Python-Standardbibliothek.",
      "Unterstützt werden Temp-Ordner, Thumbnail-/Icon- und DirectX-Caches sowie ausgewählte Browser-Caches.",
      "Installer-Cache, Prefetch, Windows-Logs, Verlauf und persönliche Dateien sind ausgeschlossen.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Artur001/TempFileCleaner",
      },
    ],
    visual: "terminal",
  },
] as const satisfies readonly Project[];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
