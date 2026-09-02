import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="relative border-t border-rose/20 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center gap-4">
          <a href="#top" className="font-script text-4xl text-rose">
            fauzia<span className="text-cream">.</span>
          </a>
          <p className="font-display font-black text-cream text-xl sm:text-2xl max-w-md">
            ELEVATING BRANDS THROUGH CREATIVE VISUALS.
          </p>

          <div className="flex items-center gap-3 mt-2">
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full border-2 border-rose/40 text-rose flex items-center justify-center hover:bg-rose hover:text-ink transition-all"
            >
              📸
            </a>
            <a
              href={profile.behance}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="w-11 h-11 rounded-full border-2 border-rose/40 text-rose flex items-center justify-center hover:bg-rose hover:text-ink transition-all"
            >
              🅱️
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-11 h-11 rounded-full border-2 border-rose/40 text-rose flex items-center justify-center hover:bg-rose hover:text-ink transition-all"
            >
              ✉️
            </a>
          </div>

          <p className="text-stone text-sm mt-4">
            © {new Date().getFullYear()} {profile.name} ·{" "}
            <span className="text-blush">Designing brands that inspire</span>
          </p>
        </div>
      </div>
    </footer>
  );
}