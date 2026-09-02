import { Mail, Star } from "lucide-react";
import { profile } from "../data";

const testimonials = [
  {
    text: "Fauzia turned my messy ideas into a gorgeous feed. Engagement doubled in 2 weeks!",
    name: "Ayesha K.",
    platform: "Instagram Skincare",
  },
  {
    text: "Got 3 client inquiries the week I put up the new LinkedIn banner. Worth every rupee.",
    name: "Hamza R.",
    platform: "LinkedIn Tech",
  },
  {
    text: "Best sale flyer I've ever used. Customers literally said 'this looks so good!'",
    name: "Sana T.",
    platform: "Boutique Store",
  },
  {
    text: "My YouTube thumbnails went from boring to click-magnets. Subscribers actually noticed!",
    name: "Mariam R.",
    platform: "YouTube Creator",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-rose/20">
      {/* Testimonials strip */}
      <div className="border-b border-rose/10 bg-ink/80 backdrop-blur py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="font-script text-center text-2xl text-rose mb-8">
            what clients say...
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-rose/15 bg-white/[0.03] p-5"
              >
                <div className="flex gap-0.5 text-rose mb-2">
                  {Array(5).fill(0).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-rose text-rose" />
                  ))}
                </div>
                <p className="text-blush/80 text-xs leading-relaxed line-clamp-3">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-3 font-display font-black text-cream text-sm">
                  {t.name}
                </p>
                <p className="text-rose text-[10px] font-bold uppercase tracking-wider">
                  {t.platform}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-10">
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
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href={profile.behance}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="w-11 h-11 rounded-full border-2 border-rose/40 text-rose flex items-center justify-center hover:bg-rose hover:text-ink transition-all"
              >
                <span className="font-display font-black text-base leading-none">Bē</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="w-11 h-11 rounded-full border-2 border-rose/40 text-rose flex items-center justify-center hover:bg-rose hover:text-ink transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <p className="text-stone text-sm mt-4">
              © {new Date().getFullYear()} {profile.name} ·{" "}
              <span className="text-blush">Designing brands that inspire</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}