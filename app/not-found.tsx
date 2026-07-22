import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  alternates: { canonical: null },
};

export default function NotFoundPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="not-found page-shell">
        <p className="eyebrow">404 / Nicht gefunden</p>
        <h1>Diese Seite konnte ich nicht finden.</h1>
        <p>Der Link ist möglicherweise veraltet oder die Seite wurde verschoben.</p>
        <Link className="button button--primary" href="/">
          Zur Startseite <span aria-hidden="true">→</span>
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
