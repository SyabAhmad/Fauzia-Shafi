"use client";

import { useEffect, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "Hire Me", href: "#hire" },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-ink/85 border-b border-rose/20 shadow-[0_8px_30px_-12px_rgba(226,149,148,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-script text-3xl text-rose flex items-center gap-1"
        >
          fauzia<span className="text-cream">.</span>
          <span className="inline-block w-2 h-2 rounded-full bg-rose animate-pulse" />
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm text-blush/80 hover:text-rose transition-colors rounded-full hover:bg-rose/10 font-display"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#hire"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose text-ink text-sm font-bold hover:bg-blush transition-all hover:scale-105 hover:shadow-[0_10px_25px_-8px_rgba(226,149,148,0.7)]"
        >
          BOOK NOW
          <ArrowRight className="w-4 h-4" />
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-full border border-rose/40 text-rose flex items-center justify-center"
        >
          <Menu className="w-5 h-5" />
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
          </ul>
        </div>
      )}
    </header>
  );
}