import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Artur Bytyqi</p>
      <p>Baden / Aargau · Portfolio 2026</p>
      <Link href="/lebenslauf">Lebenslauf</Link>
    </footer>
  );
}
