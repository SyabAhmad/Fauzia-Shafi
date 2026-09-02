"use client";

import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-ink/70 border-b border-rose/15"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-hand text-2xl text-rose flex items-center gap-2"
        >
          <span className="w-7 h-7 rounded-full bg-rose/20 border border-rose/40 flex items-center justify-center text-sm font-sans text-rose">
            {profile.name[0]}
          </span>
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm text-blush/80 hover:text-rose transition-colors rounded-full hover:bg-rose/10"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose text-ink text-sm font-medium hover:bg-blush transition-colors"
        >
          Let&apos;s Talk
          <span aria-hidden>→</span>
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-full border border-rose/30 text-rose flex items-center justify-center"
        >
          <span className="block w-4 h-px bg-rose shadow-[0_-5px_0_0_currentColor,0_5px_0_0_currentColor]" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-rose/15 bg-ink/95 backdrop-blur-xl">
          <ul className="px-6 py-4 grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg text-blush hover:text-rose hover:bg-rose/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose text-ink font-medium"
              >
                Let&apos;s Talk →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}