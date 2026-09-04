const projects = [
  {
    title: "Instagram Feed Set",
    client: "Skincare Brand",
    tag: "Instagram",
    type: "9-post carousel",
    color: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    desc: "Cohesive grid layout for product launch with custom illustrations.",
    tall: false,
  },
  {
    title: "LinkedIn Banner",
    client: "Tech Founder",
    tag: "LinkedIn",
    type: "Profile banner",
    color: "from-[#0A66C2] to-[#004182]",
    desc: "Bold personal brand banner that screams 'hire me'.",
    tall: true,
  },
  {
    title: "Sale Flyer",
    client: "Boutique Store",
    tag: "Poster",
    type: "Print + digital",
    color: "from-rose to-blush",
    desc: "Eye-catching Eid sale poster — drove 3x foot traffic.",
    tall: true,
  },
  {
    title: "YouTube Thumbnail",
    client: "Lifestyle Vlogger",
    tag: "YouTube",
    type: "Thumbnail set",
    color: "from-[#FF0000] to-[#8B0000]",
    desc: "Click-magnet thumbnails with bold text + emotion.",
    tall: false,
  },
  {
    title: "Brand Kit",
    client: "Cafe Startup",
    tag: "Branding",
    type: "Full identity",
    color: "from-[#C9A36A] to-[#8B6F3D]",
    desc: "Logo, palette, typography, menu and Instagram templates.",
    tall: false,
  },
  {
    title: "Facebook Ad Set",
    client: "Online Course",
    tag: "Facebook",
    type: "6-ad carousel",
    color: "from-[#1877F2] to-[#0a4d9c]",
    desc: "Conversion-focused ad creatives for a 5-figure launch.",
    tall: true,
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32 bg-grid">
      <style>{`
        @media (max-width: 639px) {
          .work-pinterest { columns: 2; column-gap: 10px; }
          .work-pinterest > * { break-inside: avoid; margin-bottom: 10px; }
          .work-tall { min-height: 220px; }
          .work-short { min-height: 160px; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="font-script text-3xl text-rose">recent work</p>
            <h2 className="mt-3 font-display font-black text-cream text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95]">
              DESIGNS THAT
              <br />
              <span className="italic text-rose">actually work.</span>
            </h2>
          </div>
          <p className="text-blush/80 max-w-md text-base">
            Real projects, real results — every piece is custom-made to fit the
            brand&apos;s vibe.
          </p>
        </div>

        {/* Desktop grid — 2 col md, 3 col lg */}
        <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative rounded-3xl overflow-hidden border-2 border-rose/20 bg-ink/70 card-hover"
            >
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]" />
                <svg className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay" viewBox="0 0 400 300" preserveAspectRatio="none">
                  <circle cx="350" cy="50" r="80" fill="none" stroke="white" strokeWidth="1.5" />
                  <circle cx="350" cy="50" r="120" fill="none" stroke="white" strokeWidth="1" />
                  <path d="M 0 200 Q 100 150, 200 200 T 400 200" stroke="white" strokeWidth="1" fill="none" />
                  <path d="M 0 250 Q 100 200, 200 250 T 400 250" stroke="white" strokeWidth="1" fill="none" />
                </svg>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ink/80 backdrop-blur text-xs font-bold text-rose border border-rose/30">
                  {p.tag.toUpperCase()}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="font-script text-3xl text-cream/90 leading-tight">{p.client}</p>
                    <p className="font-display font-black text-cream text-lg mt-2">{p.title}</p>
                  </div>
                </div>
              </div>
              {/* Huge watermark number behind the card */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none rounded-3xl">
                <span className="font-display font-black text-white/[0.06] text-[12rem] leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-5">
                <div className="relative flex items-center justify-between">
                  <p className="text-rose text-xs font-bold uppercase tracking-wider">{p.type}</p>
                </div>
                <p className="mt-2 text-blush/80 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile pinterest masonry */}
        <div className="sm:hidden work-pinterest">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative rounded-2xl overflow-hidden border border-rose/20 bg-ink/70 card-hover ${p.tall ? "work-tall" : "work-short"}`}
            >
              <div className={`relative h-full bg-gradient-to-br ${p.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
                <svg className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay" viewBox="0 0 400 300" preserveAspectRatio="none">
                  <circle cx="350" cy="50" r="80" fill="none" stroke="white" strokeWidth="1.5" />
                  <path d="M 0 200 Q 100 150, 200 200 T 400 200" stroke="white" strokeWidth="1" fill="none" />
                </svg>
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-ink/80 backdrop-blur text-[9px] font-bold text-rose border border-rose/30">
                  {p.tag.toUpperCase()}
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <div className="text-center">
                    <p className="font-script text-3xl sm:text-4xl text-cream/90 leading-tight">{p.client}</p>
                    <p className="font-display font-black text-cream text-base sm:text-lg mt-1">{p.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-3">
                {/* Huge watermark number behind the card */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                  <span className="font-display font-black text-white/[0.06] text-[8rem] sm:text-[10rem] leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="relative flex items-center justify-between">
                  <p className="text-rose text-[10px] font-bold uppercase tracking-wider">{p.type}</p>
                  <span className="hidden">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-1 text-blush/70 text-[10px] leading-relaxed line-clamp-2">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 relative overflow-hidden rounded-[2rem] border-2 border-rose/30 bg-gradient-to-r from-rose/20 via-blush/10 to-rose/20 p-8 sm:p-12 text-center">
          <p className="font-script text-3xl sm:text-4xl text-rose">want something like this?</p>
          <h3 className="mt-3 font-display font-black text-cream text-3xl sm:text-5xl leading-tight">
            LET&apos;S DESIGN <span className="italic text-rose">YOURS.</span>
          </h3>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href="#hire" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-rose text-ink font-black text-lg hover:bg-blush transition-all hover:scale-105">
              START YOUR PROJECT →
            </a>
            <a href="/portfolio" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-cream/30 text-cream font-bold text-lg hover:border-cream hover:bg-cream/10 transition-all">
              VIEW FULL PORTFOLIO →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}