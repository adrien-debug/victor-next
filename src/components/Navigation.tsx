"use client";

import { useState, useEffect, useCallback } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          const s = document.documentElement.scrollTop;
          const h =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const bar = document.getElementById("progress");
          if (bar) bar.style.width = (s / h) * 100 + "%";

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-inner">
        <a href="#hero" className="nav-brand" aria-label="Victor home">
          Victor
        </a>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#environments" onClick={closeMenu}>Environments</a>
          <a href="#definition" onClick={closeMenu}>Definition</a>
          <a href="#architecture" onClick={closeMenu}>Architecture</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Contact</a>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-overlay" onClick={closeMenu} aria-hidden="true" />
      )}
    </nav>
  );
}
