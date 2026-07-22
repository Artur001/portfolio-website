"use client";

import Link from "next/link";
import { useRef } from "react";

type NavigationItem = {
  label: string;
  href: string;
};

type MobileNavigationProps = {
  items: NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  }

  return (
    <details className="mobile-navigation" ref={detailsRef}>
      <summary>Menü</summary>
      <nav aria-label="Mobile Navigation">
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <Link href="/lebenslauf" onClick={closeMenu}>
          Lebenslauf
        </Link>
      </nav>
    </details>
  );
}
