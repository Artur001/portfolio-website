# Portfolio — Artur Bytyqi

Persönliches Portfolio für die Suche nach einem Praxisjahr in der Applikationsentwicklung 2026/27.

## Inhalt

- Responsive „Artur OS“-Startseite mit Desktop-Arbeitsfläche und mobilem Home-Screen
- Interaktive Apps für Profil, Projekte, Zertifikate, Lebenslauf und Kontakt
- Desktop-Fenster mit Fokus, Minimieren und Schliessen sowie direkter App-Verlinkung über URL-Fragmente
- Projektübersicht mit Screenshots aus den tatsächlich laufenden Anwendungen und aktuellen CLI-Texten
- Detailseiten unter `/projekte/[slug]` mit aktuellem Stand und offenen Punkten
- Öffentlicher, datensparsamer Lebenslauf unter `/lebenslauf`
- Semantisches HTML, sichtbare Fokuszustände und Reduced-Motion-Unterstützung
- Eigenes Open-Graph-Bild im Artur-OS-Stil

## Technologie

- Next.js 16 (App Router)
- React 19
- TypeScript
- Plain CSS mit Geist und Geist Mono über `next/font`

Die Website benötigt keine Datenbank. Die OS-Oberfläche läuft als gezielte Client-Komponente; Projektseiten und Lebenslauf bleiben statisch vorgerendert.

## Lokal starten

```bash
npm install
npm run dev
```

Anschliessend [http://localhost:3000](http://localhost:3000) öffnen.

## Qualität prüfen

```bash
npm run check
```

Der Befehl führt ESLint, den TypeScript-Check und den Produktions-Build aus.

## Lebenslauf-PDF aktualisieren

Der Download unter `public/Artur-Bytyqi-Lebenslauf.pdf` wird aus einem kleinen
Python-Skript erzeugt. Private Angaben und Dokumentnummern sind darin bewusst
nicht enthalten. Die semantische HTML-Seite unter `/lebenslauf` ist die
zugängliche Screenreader-Version; der visuelle Einseiter ist noch kein
vollständig getaggtes PDF/UA-Dokument.

```bash
python -m pip install -r requirements-resume.txt
python scripts/generate_resume.py
```

Unter Windows verwendet der Generator Arial, wenn die Schrift vorhanden ist.
Auf anderen Systemen fÃ¤llt er auf die in ReportLab enthaltene Helvetica zurÃ¼ck.

## Deployment

Das Repository ist mit dem Vercel-Projekt `portfolio-website` verbunden. Änderungen auf dem Produktionsbranch können über die bestehende Git-Integration veröffentlicht werden.
