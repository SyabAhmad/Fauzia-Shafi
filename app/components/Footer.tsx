import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="relative border-t border-rose/15 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-rose/20 border border-rose/40 flex items-center justify-center text-rose text-sm font-medium">
            {profile.name[0]}
          </span>
          <p className="font-hand text-xl text-rose">{profile.name}</p>
        </div>
        <p className="text-stone text-sm text-center">
          © {new Date().getFullYear()} {profile.name} ·{" "}
          <span className="text-blush">Designing brands that inspire</span>
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full border border-rose/30 text-rose flex items-center justify-center hover:bg-rose/10 transition-colors"
          >
            📸
          </a>
          <a
            href={profile.behance}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="w-9 h-9 rounded-full border border-rose/30 text-rose flex items-center justify-center hover:bg-rose/10 transition-colors"
          >
            🅱️
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="w-9 h-9 rounded-full border border-rose/30 text-rose flex items-center justify-center hover:bg-rose/10 transition-colors"
          >
            ✉️
          </a>
        </div>
      </div>
    </footer>
  );
}