const projects = [
  {
    title: "Instagram Feed Set",
    client: "Skincare Brand",
    tag: "Instagram",
    type: "9-post carousel",
    color: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    desc: "Cohesive grid layout for product launch with custom illustrations.",
  },
  {
    title: "LinkedIn Banner",
    client: "Tech Founder",
    tag: "LinkedIn",
    type: "Profile banner",
    color: "from-[#0A66C2] to-[#004182]",
    desc: "Bold personal brand banner that screams 'hire me'.",
  },
  {
    title: "Sale Flyer",
    client: "Boutique Store",
    tag: "Poster",
    type: "Print + digital",
    color: "from-rose to-blush",
    desc: "Eye-catching Eid sale poster — drove 3x foot traffic.",
  },
  {
    title: "YouTube Thumbnail",
    client: "Lifestyle Vlogger",
    tag: "YouTube",
    type: "Thumbnail set",
    color: "from-[#FF0000] to-[#8B0000]",
    desc: "Click-magnet thumbnails with bold text + emotion.",
  },
  {
    title: "Brand Kit",
    client: "Cafe Startup",
    tag: "Branding",
    type: "Full identity",
    color: "from-[#C9A36A] to-[#8B6F3D]",
    desc: "Logo, palette, typography, menu and Instagram templates.",
  },
  {
    title: "Facebook Ad Set",
    client: "Online Course",
    tag: "Facebook",
    type: "6-ad carousel",
    color: "from-[#1877F2] to-[#0a4d9c]",
    desc: "Conversion-focused ad creatives for a 5-figure launch.",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 bg-grid"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-script text-3xl text-rose">recent work</p>
            <h2 className="mt-3 font-display font-black text-cream text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95]">
              DESIGNS THAT
              <br />
              <span className="italic text-rose">actually work.</span>
            </h2>
          </div>
          <p className="text-blush/80 max-w-md text-lg">
            Real projects, real results — every piece is custom-made to fit the
            brand&apos;s vibe.
          </p>
        </div>

        {/* Projects grid with placeholders since we don't have project images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative rounded-3xl overflow-hidden border-2 border-rose/20 bg-ink/70 card-hover"
            >
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]" />
                {/* Decorative design lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
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
                    <p className="font-script text-4xl text-cream/90 leading-tight">
                      {p.client}
                    </p>
                    <p className="font-display font-black text-cream text-xl mt-2">
                      {p.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-rose text-xs font-bold uppercase tracking-wider">
                    {p.type}
                  </p>
                  <span className="font-display font-black text-rose/30">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-3 text-blush/80 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 relative overflow-hidden rounded-[2rem] border-2 border-rose/30 bg-gradient-to-r from-rose/20 via-blush/10 to-rose/20 p-8 sm:p-12 text-center">
          <p className="font-script text-3xl sm:text-4xl text-rose">
            want something like this?
          </p>
          <h3 className="mt-3 font-display font-black text-cream text-3xl sm:text-5xl leading-tight">
            LET&apos;S DESIGN <span className="italic text-rose">YOURS.</span>
          </h3>
          <a
            href="#hire"
            className="mt-6 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-rose text-ink font-black text-lg hover:bg-blush transition-all hover:scale-105"
          >
            START YOUR PROJECT →
          </a>
        </div>
      </div>
    </section>
  );
}