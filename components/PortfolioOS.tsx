"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import profileImage from "@/public/img/profile.jpg";
import { projects } from "@/lib/projects";
import styles from "./PortfolioOS.module.css";

type AppId = "about" | "projects" | "certificates" | "resume" | "contact";

const appOrder: AppId[] = ["about", "projects", "certificates", "resume", "contact"];

function clearAppHash() {
  if (!window.location.hash) return;

  window.history.replaceState(
    window.history.state,
    "",
    `${window.location.pathname}${window.location.search}`,
  );
}

type WindowPosition = { x: number; y: number };
type WindowSize = { width: number; height: number };

const initialWindowPositions: Record<AppId, WindowPosition> = {
  about: { x: 210, y: 74 },
  projects: { x: 126, y: 48 },
  certificates: { x: 170, y: 82 },
  resume: { x: 154, y: 66 },
  contact: { x: 250, y: 92 },
};

const appMeta: Record<
  AppId,
  { label: string; shortLabel: string; symbol: string; caption: string }
> = {
  about: {
    label: "Über mich",
    shortLabel: "Profil",
    symbol: "AB",
    caption: "Profil & Erfahrung",
  },
  projects: {
    label: "Projekte",
    shortLabel: "Projekte",
    symbol: "{ }",
    caption: "Drei echte Anwendungen",
  },
  certificates: {
    label: "Zertifikate",
    shortLabel: "Zertifikate",
    symbol: "✓",
    caption: "Sprachen & Informatik",
  },
  resume: {
    label: "Lebenslauf",
    shortLabel: "CV",
    symbol: "CV",
    caption: "Ausbildung & Praxis",
  },
  contact: {
    label: "Kontakt",
    shortLabel: "Kontakt",
    symbol: "@",
    caption: "Direkt erreichbar",
  },
};

const certificates = [
  {
    title: "Cambridge English Advanced",
    level: "C1 · 192 Punkte",
    issuer: "Cambridge English",
    year: "2026",
    accent: "violet",
  },
  {
    title: "DELF",
    level: "Französisch · B1",
    issuer: "France Éducation international",
    year: "2026",
    accent: "blue",
  },
  {
    title: "CS50x",
    level: "Introduction to Computer Science",
    issuer: "Harvard University",
    year: "2026",
    accent: "coral",
  },
] as const;

const screenshotByVisual = {
  math: {
    src: "/projects/solvelab/graphen-live.jpg",
    width: 1600,
    height: 900,
    alt: "SolveLab mit Funktionsgraphen und mathematischen Werkzeugen",
  },
  rides: {
    src: "/projects/taxishift/rides-demo.jpg",
    width: 1234,
    height: 712,
    alt: "TaxiShift mit Fahrtenübersicht, Suche und Statusfiltern",
  },
} as const;

function AppGlyph({ app, compact = false }: { app: AppId; compact?: boolean }) {
  return (
    <span
      className={`${styles.appGlyph} ${styles[`appGlyph_${app}`]} ${compact ? styles.appGlyphCompact : ""}`}
      aria-hidden="true"
    />
  );
}

function ProjectPreview({ visual, title }: { visual: (typeof projects)[number]["visual"]; title: string }) {
  if (visual === "terminal") {
    return (
      <div className={styles.terminalPreview} aria-label={`Kommandozeilenansicht von ${title}`} role="img">
        <span>ARTUR / TOOLS</span>
        <strong>TempFileCleaner v2.0</strong>
        <p>&gt; MODE: READ-ONLY PREVIEW</p>
        <i>Eligible files are planned before execution.</i>
      </div>
    );
  }

  const screenshot = screenshotByVisual[visual];

  return (
    <div className={styles.projectImage}>
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        width={screenshot.width}
        height={screenshot.height}
        loading="eager"
        sizes="(max-width: 760px) 90vw, 34vw"
      />
    </div>
  );
}

function AboutApp() {
  return (
    <div className={styles.aboutApp}>
      <div className={styles.profilePanel}>
        <div className={styles.profileImage}>
          <Image
            src={profileImage}
            alt="Porträt von Artur Bytyqi"
            sizes="(max-width: 760px) 36vw, 240px"
            placeholder="blur"
          />
        </div>
        <div>
          <span className={styles.location}>Baden · Schweiz</span>
          <h2>Artur Bytyqi</h2>
          <p>Applikationsentwickler in Ausbildung</p>
        </div>
      </div>

      <div className={styles.aboutCopy}>
        <span className={styles.availabilityPill}>
          <i aria-hidden="true" /> Offen für ein Praxisjahr 2026/27
        </span>
        <p className={styles.leadCopy}>
          Ich entwickle Webapps und Python-Tools – von Mathematik im Browser über Flask und
          SQLite bis zu sicherer Windows-Automation.
        </p>
        <p>
          Meine Ausbildung an der Informatikmittelschule Baden verbindet
          Applikationsentwicklung mit der Berufsmaturität Wirtschaft. Aus meiner Zeit bei
          Securitas bringe ich Zuverlässigkeit, Kundenkontakt und ruhiges Arbeiten unter Druck
          mit.
        </p>
        <div className={styles.factGrid}>
          <div><span>Ausbildung</span><strong>Informatiker EFZ</strong></div>
          <div><span>Schwerpunkt</span><strong>Web & Python</strong></div>
          <div><span>Sprachen</span><strong>DE · EN C1 · FR B1</strong></div>
          <div><span>Standort</span><strong>Baden / Aargau</strong></div>
        </div>
        <div className={styles.skillRow} aria-label="Technische Kenntnisse">
          {["Next.js", "React", "TypeScript", "Python", "Flask", "SQLite", "Git"].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsApp() {
  return (
    <div className={styles.projectsApp}>
      <header className={styles.appContentHeader}>
        <div>
          <span className={styles.kicker}>Ausgewählte Arbeiten</span>
          <h2>Drei Projekte, drei unterschiedliche Probleme.</h2>
        </div>
        <span className={styles.countBadge}>{projects.length} Projekte</span>
      </header>

      <div className={styles.projectList}>
        {projects.map((project) => (
          <article className={styles.projectCard} key={project.slug}>
            <ProjectPreview visual={project.visual} title={project.title} />
            <div className={styles.projectCardCopy}>
              <div className={styles.projectCardMeta}>
                <span>{project.number}</span>
                <span>{project.kind}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className={styles.techRow}>
                {project.technologies.slice(0, 4).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className={styles.inlineActions}>
                <Link href={`/projekte/${project.slug}`}>
                  Case Study öffnen <span aria-hidden="true">→</span>
                </Link>
                {project.links[0] ? (
                  <a href={project.links[0].href} target="_blank" rel="noopener noreferrer">
                    {project.links[0].label} <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function CertificatesApp() {
  return (
    <div className={styles.certificatesApp}>
      <header className={styles.appContentHeader}>
        <div>
          <span className={styles.kicker}>Nachweise</span>
          <h2>Zertifikate & Abschlüsse</h2>
        </div>
        <span className={styles.countBadge}>{certificates.length} Dokumente</span>
      </header>

      <div className={styles.certificateGrid}>
        {certificates.map((certificate, index) => (
          <article
            className={`${styles.certificateCard} ${styles[`certificate_${certificate.accent}`]}`}
            key={certificate.title}
          >
            <div className={styles.certificateTopline}>
              <span>AB / {String(index + 1).padStart(2, "0")}</span>
              <strong>{certificate.year}</strong>
            </div>
            <span className={styles.certificateSeal} aria-hidden="true">✓</span>
            <div>
              <p>{certificate.issuer}</p>
              <h3>{certificate.title}</h3>
              <strong>{certificate.level}</strong>
            </div>
          </article>
        ))}
      </div>
      <p className={styles.privacyNote}>
        Persönliche Dokumentnummern sind nicht öffentlich eingebettet. Nachweise sende ich bei
        Bedarf gerne direkt mit der Bewerbung.
      </p>
    </div>
  );
}

function ResumeApp() {
  return (
    <div className={styles.resumeApp}>
      <header className={styles.resumeIntro}>
        <div>
          <span className={styles.kicker}>Lebenslauf · Juli 2026</span>
          <h2>Ausbildung trifft praktische Verantwortung.</h2>
        </div>
        <div className={styles.resumeActions}>
          <a href="/Artur-Bytyqi-Lebenslauf.pdf" download className={styles.primaryAction}>
            PDF laden <span aria-hidden="true">↓</span>
          </a>
          <Link href="/lebenslauf" className={styles.secondaryAction}>
            Web-Version <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <div className={styles.resumeColumns}>
        <section>
          <h3>Ausbildung</h3>
          <article className={styles.timelineEntry}>
            <span>2022 — 2027</span>
            <div>
              <strong>Informatikmittelschule Baden / BBB</strong>
              <p>Informatiker EFZ Applikationsentwicklung + Berufsmaturität Wirtschaft</p>
            </div>
          </article>
        </section>
        <section>
          <h3>Erfahrung</h3>
          <article className={styles.timelineEntry}>
            <span>2024 — 2026</span>
            <div>
              <strong>Securitas AG</strong>
              <p>Rapporte, Telefondienst, Terminorganisation und Sicherheitskontrollen</p>
            </div>
          </article>
          <article className={styles.timelineEntry}>
            <span>2022 — 2023</span>
            <div>
              <strong>Coop City Baden</strong>
              <p>Warenbewirtschaftung und Kundenkontakt</p>
            </div>
          </article>
        </section>
      </div>

      <div className={styles.resumeFooterCard}>
        <span>Gesuchtes Praxisjahr</span>
        <strong>Applikationsentwicklung · 2026/27</strong>
        <p>Baden, Aargau und gut erreichbare Umgebung</p>
      </div>
    </div>
  );
}

function ContactApp() {
  return (
    <div className={styles.contactApp}>
      <div className={styles.contactHero}>
        <span className={styles.kicker}>Kontakt</span>
        <h2>Lassen Sie uns über Ihr Team und mein Praxisjahr sprechen.</h2>
        <p>
          Ich freue mich über eine Nachricht zu einer Stelle in der
          Applikationsentwicklung für 2026/27.
        </p>
        <a className={styles.mailButton} href="mailto:bytyqiartur00@gmail.com">
          <span>Neue Nachricht</span>
          <strong>bytyqiartur00@gmail.com</strong>
          <i aria-hidden="true">↗</i>
        </a>
      </div>
      <div className={styles.contactLinks}>
        <a href="https://github.com/Artur001" target="_blank" rel="noopener noreferrer">
          <span>GitHub</span><strong>Code & Repositories</strong><i aria-hidden="true">↗</i>
        </a>
        <a
          href="https://www.linkedin.com/in/artur-bytyqi-0982212a2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LinkedIn</span><strong>Profil & Netzwerk</strong><i aria-hidden="true">↗</i>
        </a>
      </div>
    </div>
  );
}

function AppContent({ app }: { app: AppId }) {
  switch (app) {
    case "about":
      return <AboutApp />;
    case "projects":
      return <ProjectsApp />;
    case "certificates":
      return <CertificatesApp />;
    case "resume":
      return <ResumeApp />;
    case "contact":
      return <ContactApp />;
  }
}

function Clock({ date, showDate = false }: { date: Date | null; showDate?: boolean }) {
  if (!date) {
    return <span aria-hidden="true">--:--</span>;
  }

  return (
    <>
      <time dateTime={date.toISOString()}>
        {date.toLocaleTimeString("de-CH", { hour: "2-digit", minute: "2-digit" })}
      </time>
      {showDate ? (
        <time dateTime={date.toISOString()}>
          {date.toLocaleDateString("de-CH", { day: "2-digit", month: "2-digit", year: "numeric" })}
        </time>
      ) : null}
    </>
  );
}

export function PortfolioOS() {
  const [openApps, setOpenApps] = useState<AppId[]>([]);
  const [minimizedApps, setMinimizedApps] = useState<AppId[]>([]);
  const [maximizedApps, setMaximizedApps] = useState<AppId[]>([]);
  const [closingApps, setClosingApps] = useState<AppId[]>([]);
  const [minimizingApps, setMinimizingApps] = useState<AppId[]>([]);
  const [windowPositions, setWindowPositions] = useState(initialWindowPositions);
  const [windowSizes, setWindowSizes] = useState<Partial<Record<AppId, WindowSize>>>({});
  const [startOpen, setStartOpen] = useState(false);
  const [mobileApp, setMobileApp] = useState<AppId | null>(null);
  const [mobileClosing, setMobileClosing] = useState(false);
  const [now, setNow] = useState<Date | null>(null);
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const mobileBackButtonRef = useRef<HTMLButtonElement>(null);
  const dragStateRef = useRef<{
    app: AppId;
    pointerId: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const resizeStateRef = useRef<{
    app: AppId;
    pointerId: number;
    startX: number;
    startY: number;
    startWidth: number;
    startHeight: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
  } | null>(null);
  const animationTimersRef = useRef<Partial<Record<AppId, number>>>({});
  const mobileAnimationTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const initialTimer = window.setTimeout(() => setNow(new Date()), 0);
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timers = animationTimersRef.current;
    return () => {
      Object.values(timers).forEach((timer) => {
        if (timer) window.clearTimeout(timer);
      });
      if (mobileAnimationTimerRef.current) {
        window.clearTimeout(mobileAnimationTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setStartOpen((current) => {
          if (current) {
            window.setTimeout(() => startButtonRef.current?.focus(), 0);
          }
          return false;
        });
        setMobileApp(null);
        setMobileClosing(false);
        if (mobileAnimationTimerRef.current) {
          window.clearTimeout(mobileAnimationTimerRef.current);
          mobileAnimationTimerRef.current = null;
        }
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (!mobileApp) return;

    const focusTimer = window.setTimeout(() => mobileBackButtonRef.current?.focus(), 0);
    return () => window.clearTimeout(focusTimer);
  }, [mobileApp]);

  useEffect(() => {
    const appByHash: Partial<Record<string, AppId>> = {
      "#projekte": "projects",
      "#zertifikate": "certificates",
      "#kompetenzen": "about",
      "#profil": "about",
      "#lebenslauf": "resume",
      "#kontakt": "contact",
    };

    function openLinkedApp() {
      const linkedApp = appByHash[window.location.hash.toLowerCase()];
      if (!linkedApp) return;

      if (mobileAnimationTimerRef.current) {
        window.clearTimeout(mobileAnimationTimerRef.current);
        mobileAnimationTimerRef.current = null;
      }
      setOpenApps([linkedApp]);
      setMinimizedApps([]);
      setMobileClosing(false);
      setMobileApp(linkedApp);
      setStartOpen(false);
    }

    const initialHashTimer = window.setTimeout(openLinkedApp, 0);
    window.addEventListener("hashchange", openLinkedApp);

    return () => {
      window.clearTimeout(initialHashTimer);
      window.removeEventListener("hashchange", openLinkedApp);
    };
  }, []);

  function openApp(app: AppId) {
    const runningTimer = animationTimersRef.current[app];
    if (runningTimer) window.clearTimeout(runningTimer);
    delete animationTimersRef.current[app];
    setClosingApps((current) => current.filter((item) => item !== app));
    setMinimizingApps((current) => current.filter((item) => item !== app));
    setOpenApps((current) => [...current.filter((item) => item !== app), app]);
    setMinimizedApps((current) => current.filter((item) => item !== app));
    setStartOpen(false);
  }

  function focusApp(app: AppId) {
    setOpenApps((current) => [...current.filter((item) => item !== app), app]);
  }

  function closeApp(app: AppId) {
    setClosingApps((current) => (current.includes(app) ? current : [...current, app]));
    animationTimersRef.current[app] = window.setTimeout(() => {
      setOpenApps((current) => current.filter((item) => item !== app));
      setMinimizedApps((current) => current.filter((item) => item !== app));
      setMaximizedApps((current) => current.filter((item) => item !== app));
      setClosingApps((current) => current.filter((item) => item !== app));
      delete animationTimersRef.current[app];
    }, 180);
  }

  function minimizeApp(app: AppId) {
    setMinimizingApps((current) => (current.includes(app) ? current : [...current, app]));
    animationTimersRef.current[app] = window.setTimeout(() => {
      setMinimizedApps((current) => (current.includes(app) ? current : [...current, app]));
      setMinimizingApps((current) => current.filter((item) => item !== app));
      delete animationTimersRef.current[app];
    }, 210);
  }

  function toggleMaximize(app: AppId) {
    setMaximizedApps((current) =>
      current.includes(app) ? current.filter((item) => item !== app) : [...current, app],
    );
    focusApp(app);
  }

  function startWindowDrag(app: AppId, event: ReactPointerEvent<HTMLElement>) {
    if (maximizedApps.includes(app)) return;
    if ((event.target as HTMLElement).closest("button")) return;

    const position = windowPositions[app];
    dragStateRef.current = {
      app,
      pointerId: event.pointerId,
      offsetX: event.clientX - position.x,
      offsetY: event.clientY - position.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    focusApp(app);
  }

  function moveWindow(event: ReactPointerEvent<HTMLElement>) {
    const dragState = dragStateRef.current;
    if (!dragState || dragState.pointerId !== event.pointerId) return;

    const windowElement = event.currentTarget.closest<HTMLElement>("[data-app]");
    const windowWidth = windowElement?.offsetWidth ?? 330;
    const windowHeight = windowElement?.offsetHeight ?? 150;

    const nextX = Math.min(
      Math.max(12, event.clientX - dragState.offsetX),
      Math.max(12, window.innerWidth - windowWidth - 12),
    );
    const nextY = Math.min(
      Math.max(10, event.clientY - dragState.offsetY),
      Math.max(10, window.innerHeight - windowHeight - 82),
    );

    setWindowPositions((current) => ({
      ...current,
      [dragState.app]: { x: nextX, y: nextY },
    }));
  }

  function stopWindowDrag(event: ReactPointerEvent<HTMLElement>) {
    if (dragStateRef.current?.pointerId !== event.pointerId) return;
    dragStateRef.current = null;
    event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function getResizeLimits(windowElement: HTMLElement) {
    const rect = windowElement.getBoundingClientRect();
    const maxWidth = Math.max(420, window.innerWidth - Math.max(12, rect.left) - 12);
    const maxHeight = Math.max(300, window.innerHeight - Math.max(10, rect.top) - 82);

    return {
      minWidth: Math.min(520, maxWidth),
      minHeight: Math.min(360, maxHeight),
      maxWidth,
      maxHeight,
    };
  }

  function startWindowResize(app: AppId, event: ReactPointerEvent<HTMLButtonElement>) {
    if (maximizedApps.includes(app)) return;

    const windowElement = event.currentTarget.closest<HTMLElement>("[data-app]");
    if (!windowElement) return;

    const rect = windowElement.getBoundingClientRect();
    const limits = getResizeLimits(windowElement);
    resizeStateRef.current = {
      app,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startWidth: rect.width,
      startHeight: rect.height,
      ...limits,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.preventDefault();
    event.stopPropagation();
    focusApp(app);
  }

  function resizeWindow(event: ReactPointerEvent<HTMLButtonElement>) {
    const resizeState = resizeStateRef.current;
    if (!resizeState || resizeState.pointerId !== event.pointerId) return;

    const width = Math.min(
      resizeState.maxWidth,
      Math.max(resizeState.minWidth, resizeState.startWidth + event.clientX - resizeState.startX),
    );
    const height = Math.min(
      resizeState.maxHeight,
      Math.max(resizeState.minHeight, resizeState.startHeight + event.clientY - resizeState.startY),
    );

    setWindowSizes((current) => ({ ...current, [resizeState.app]: { width, height } }));
  }

  function stopWindowResize(event: ReactPointerEvent<HTMLButtonElement>) {
    if (resizeStateRef.current?.pointerId !== event.pointerId) return;
    resizeStateRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function resizeWindowWithKeyboard(app: AppId, event: ReactKeyboardEvent<HTMLButtonElement>) {
    const changes: Partial<Record<string, { width: number; height: number }>> = {
      ArrowLeft: { width: -24, height: 0 },
      ArrowRight: { width: 24, height: 0 },
      ArrowUp: { width: 0, height: -24 },
      ArrowDown: { width: 0, height: 24 },
    };
    const change = changes[event.key];
    if (!change) return;

    const windowElement = event.currentTarget.closest<HTMLElement>("[data-app]");
    if (!windowElement) return;

    const rect = windowElement.getBoundingClientRect();
    const limits = getResizeLimits(windowElement);
    const step = event.shiftKey ? 2 : 1;
    setWindowSizes((current) => ({
      ...current,
      [app]: {
        width: Math.min(limits.maxWidth, Math.max(limits.minWidth, rect.width + change.width * step)),
        height: Math.min(limits.maxHeight, Math.max(limits.minHeight, rect.height + change.height * step)),
      },
    }));
    event.preventDefault();
    event.stopPropagation();
  }

  function resetWindowSize(app: AppId) {
    setWindowSizes((current) => {
      const nextSizes = { ...current };
      delete nextSizes[app];
      return nextSizes;
    });
  }

  function openMobileApp(app: AppId) {
    if (mobileAnimationTimerRef.current) {
      window.clearTimeout(mobileAnimationTimerRef.current);
      mobileAnimationTimerRef.current = null;
    }
    setMobileClosing(false);
    setMobileApp(app);
  }

  function closeMobileApp() {
    if (!mobileApp || mobileClosing) return;

    clearAppHash();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMobileApp(null);
      setMobileClosing(false);
      return;
    }

    setMobileClosing(true);
    mobileAnimationTimerRef.current = window.setTimeout(() => {
      setMobileApp(null);
      setMobileClosing(false);
      mobileAnimationTimerRef.current = null;
    }, 390);
  }

  const activeDesktopApp = openApps
    .slice()
    .reverse()
    .find((app) => !minimizedApps.includes(app));

  return (
    <main id="main-content" className={styles.portfolioOS}>
      <section className={styles.desktopShell} aria-label="Desktop-Portfolio von Artur Bytyqi">
        <a className={styles.skipLink} href="#desktop-os-navigation">Zur Navigation springen</a>
        <div className={styles.wallpaperGlow} aria-hidden="true" />
        <div className={styles.desktopWelcome}>
          <div className={styles.desktopWelcomeAvatar}>
            <Image src={profileImage} alt="" placeholder="blur" />
          </div>
          <div>
            <span>Portfolio von</span>
            <strong>Artur Bytyqi</strong>
            <p>Öffne eine App, um meine Arbeit kennenzulernen.</p>
          </div>
          <span className={styles.desktopWelcomeStatus}><i aria-hidden="true" /> Verfügbar 2026/27</span>
        </div>

        <nav className={styles.desktopIcons} id="desktop-os-navigation" aria-label="Portfolio-Apps">
          {appOrder.map((app) => (
            <button key={app} type="button" onClick={() => openApp(app)}>
              <AppGlyph app={app} />
              <span>{appMeta[app].label}</span>
            </button>
          ))}
        </nav>

        <div className={styles.windowLayer}>
          {openApps.map((app, index) => {
            const minimized = minimizedApps.includes(app);
            const maximized = maximizedApps.includes(app);
            const active = app === activeDesktopApp;
            const closing = closingApps.includes(app);
            const minimizing = minimizingApps.includes(app);
            const position = windowPositions[app];
            const size = windowSizes[app];

            return (
              <section
                key={app}
                className={`${styles.window} ${styles[`window_${app}`]} ${minimized ? styles.windowMinimized : ""} ${maximized ? styles.windowMaximized : ""} ${active ? styles.windowActive : ""} ${closing ? styles.windowClosing : ""} ${minimizing ? styles.windowMinimizing : ""}`}
                data-app={app}
                style={{
                  zIndex: index + 10,
                  left: maximized ? undefined : position.x,
                  top: maximized ? undefined : position.y,
                  width: maximized ? undefined : size?.width,
                  height: maximized ? undefined : size?.height,
                }}
                role="dialog"
                aria-label={`${appMeta[app].label} App`}
                aria-hidden={minimized}
                onMouseDown={() => focusApp(app)}
              >
                <header
                  className={styles.windowBar}
                  onPointerDown={(event) => startWindowDrag(app, event)}
                  onPointerMove={moveWindow}
                  onPointerUp={stopWindowDrag}
                  onPointerCancel={stopWindowDrag}
                  onDoubleClick={(event) => {
                    if (!(event.target as HTMLElement).closest("button")) toggleMaximize(app);
                  }}
                >
                  <div>
                    <AppGlyph app={app} compact />
                    <span>{appMeta[app].label}</span>
                    <small>{appMeta[app].caption}</small>
                  </div>
                  <div className={styles.windowControls}>
                    <button type="button" onClick={() => minimizeApp(app)} aria-label={`${appMeta[app].label} minimieren`}>—</button>
                    <button type="button" onClick={() => toggleMaximize(app)} aria-label={`${appMeta[app].label} ${maximized ? "verkleinern" : "maximieren"}`} aria-pressed={maximized}>□</button>
                    <button type="button" onClick={() => closeApp(app)} aria-label={`${appMeta[app].label} schliessen`}>×</button>
                  </div>
                </header>
                <div className={styles.windowBody}>
                  <AppContent app={app} />
                </div>
                <button
                  type="button"
                  className={styles.windowResizeHandle}
                  aria-label={`${appMeta[app].label} Fenstergrösse ändern`}
                  title="Ziehen zum Vergrössern · Doppelklick setzt die Grösse zurück"
                  onPointerDown={(event) => startWindowResize(app, event)}
                  onPointerMove={resizeWindow}
                  onPointerUp={stopWindowResize}
                  onPointerCancel={stopWindowResize}
                  onKeyDown={(event) => resizeWindowWithKeyboard(app, event)}
                  onDoubleClick={() => resetWindowSize(app)}
                />
              </section>
            );
          })}
        </div>

        {startOpen ? (
          <div className={styles.startMenu} role="dialog" aria-label="App-Übersicht">
            <div className={styles.startMenuHeader}>
              <div>
                <span className={styles.avatarMini}>AB</span>
                <div><strong>Artur Bytyqi</strong><span>Portfolio</span></div>
              </div>
              <button type="button" onClick={() => setStartOpen(false)} aria-label="App-Übersicht schliessen">×</button>
            </div>
            <p>Portfolio öffnen</p>
            <div className={styles.startGrid}>
              {appOrder.map((app) => (
                <button key={app} type="button" onClick={() => openApp(app)}>
                  <AppGlyph app={app} />
                  <span>{appMeta[app].label}</span>
                </button>
              ))}
            </div>
            <a href="mailto:bytyqiartur00@gmail.com" className={styles.startContact}>
              <span><i aria-hidden="true" /> Verfügbar für 2026/27</span>
              Nachricht senden <b aria-hidden="true">→</b>
            </a>
          </div>
        ) : null}

        <footer className={styles.taskbar}>
          <button
            ref={startButtonRef}
            type="button"
            className={`${styles.startButton} ${startOpen ? styles.taskbarButtonActive : ""}`}
            onClick={() => setStartOpen((current) => !current)}
            aria-label="App-Übersicht öffnen"
            aria-expanded={startOpen}
          >
            <span className={styles.startMark} aria-hidden="true" />
          </button>
          <div className={styles.taskbarApps}>
            {appOrder.map((app) => {
              const isOpen = openApps.includes(app);
              const isActive = activeDesktopApp === app;
              return (
                <button
                  key={app}
                  type="button"
                  className={`${isOpen ? styles.taskbarAppOpen : ""} ${isActive ? styles.taskbarButtonActive : ""}`}
                  onClick={() => openApp(app)}
                  aria-label={`${appMeta[app].label} öffnen`}
                >
                  <AppGlyph app={app} compact />
                  <span className={styles.tooltip}>{appMeta[app].label}</span>
                </button>
              );
            })}
          </div>
          <div className={styles.taskbarClock}>
            <span className={styles.statusDots} aria-hidden="true"><i /><i /><i /></span>
            <div><Clock date={now} showDate /></div>
          </div>
        </footer>
      </section>

      <section className={styles.mobileShell} aria-label="Mobiles Portfolio von Artur Bytyqi">
        <a className={styles.skipLink} href="#mobile-os-navigation">Zur Navigation springen</a>
        <header className={styles.mobileStatus}>
          <Clock date={now} />
          <span>ARTUR / OS</span>
          <div aria-label="Verbindungsstatus"><i /><i /><i /><b /></div>
        </header>

        <div
          className={`${styles.mobileHome} ${mobileClosing ? styles.mobileHomeRestoring : ""}`}
          aria-hidden={mobileApp ? true : undefined}
          inert={mobileApp ? true : undefined}
        >
          <header className={styles.mobileHomeHeader}>
            <span>{now ? now.toLocaleDateString("de-CH", { weekday: "long", day: "numeric", month: "long" }) : "Portfolio"}</span>
            <strong><Clock date={now} /></strong>
          </header>

          <div className={styles.mobileIdentity}>
            <div className={styles.mobileProfileImage}><Image src={profileImage} alt="" placeholder="blur" /></div>
            <div>
              <span>Portfolio von</span>
              <h1>Artur Bytyqi</h1>
              <p>Applikationsentwicklung · Baden</p>
            </div>
            <span className={styles.mobileAvailability}><i aria-hidden="true" /> Praxisjahr 2026/27</span>
          </div>

          <nav className={styles.mobileGrid} id="mobile-os-navigation" aria-label="Portfolio-Apps">
            {appOrder.map((app) => (
              <button key={app} type="button" onClick={() => openMobileApp(app)}>
                <AppGlyph app={app} />
                <span>{appMeta[app].shortLabel}</span>
              </button>
            ))}
          </nav>
          <div className={styles.mobilePageIndicator} aria-hidden="true"><i /><i /></div>
        </div>

        {mobileApp ? (
          <section
            className={`${styles.mobileAppView} ${mobileClosing ? styles.mobileAppClosing : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={`${appMeta[mobileApp].label} App`}
            data-mobile-app={mobileApp}
          >
            <header className={styles.mobileAppHeader}>
              <button ref={mobileBackButtonRef} type="button" onClick={closeMobileApp} aria-label="Zurück zum Home-Bildschirm">
                <span aria-hidden="true">‹</span> Home
              </button>
              <strong className={styles.mobileAppTitle}>{appMeta[mobileApp].label}</strong>
              <span aria-hidden="true" />
            </header>
            <div className={styles.mobileAppBody}>
              <AppContent app={mobileApp} />
            </div>
          </section>
        ) : null}

        <div className={styles.homeIndicator} aria-hidden="true" />
      </section>
    </main>
  );
}
