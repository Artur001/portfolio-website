import Link from "next/link";
import { MobileNavigation } from "@/components/MobileNavigation";

const navigation = [
  { label: "Projekte", href: "/#projekte" },
  { label: "Zertifikate", href: "/#zertifikate" },
  { label: "Profil", href: "/#profil" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Zum Inhalt springen
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand" href="/">
            <span className="brand__mark" aria-hidden="true">
              AB
            </span>
            <span className="brand__text">
              <strong>Artur Bytyqi</strong>
              <span>Applikationsentwicklung</span>
            </span>
          </Link>

          <nav className="desktop-navigation" aria-label="Hauptnavigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="nav-resume" href="/lebenslauf">
              Lebenslauf
            </Link>
          </nav>

          <MobileNavigation items={navigation} />
        </div>
      </header>
    </>
  );
}
