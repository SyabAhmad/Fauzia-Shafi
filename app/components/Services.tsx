const services = [
  {
    title: "Instagram",
    sub: "Posts • Reels Covers • Stories",
    desc: "Eye-catching feed posts, story sets, highlight covers and reel thumbnails that stop the scroll.",
    emoji: "📸",
    color: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    perks: ["Feed post design", "Story templates", "Highlight icons", "Reel covers"],
  },
  {
    title: "LinkedIn",
    sub: "Banners • Posts • Carousels",
    desc: "Professional LinkedIn banners, thought-leadership carousels and personal brand posts that attract clients.",
    emoji: "💼",
    color: "from-[#0A66C2] to-[#004182]",
    perks: ["Profile banner", "Post graphics", "Carousel PDFs", "Article covers"],
  },
  {
    title: "Facebook",
    sub: "Ads • Covers • Posts",
    desc: "High-converting Facebook ads, page covers and event posts that turn scrollers into followers.",
    emoji: "👍",
    color: "from-[#1877F2] to-[#0a4d9c]",
    perks: ["Ad creatives", "Page covers", "Event posters", "Poll posts"],
  },
  {
    title: "X / Twitter",
    sub: "Headers • Quote Posts",
    desc: "Bold X headers and quote-tweet graphics that make your tweets impossible to ignore.",
    emoji: "𝕏",
    color: "from-[#000000] to-[#1a1a1a]",
    perks: ["Profile header", "Quote graphics", "Thread covers", "Tweet cards"],
  },
  {
    title: "Profile DPs",
    sub: "LinkedIn • Insta • FB",
    desc: "Custom portrait profile pictures — framed, branded and Instagram-ready in any platform format.",
    emoji: "🖼️",
    color: "from-rose to-blush",
    perks: ["Ring frame", "Branded backdrop", "All sizes", "Quick delivery"],
  },
  {
    title: "Ads & Posters",
    sub: "Sale • Event • Promo",
    desc: "Promotional posters, sale ads and event flyers designed to drive clicks, RSVPs and sales.",
    emoji: "🎯",
    color: "from-[#FF6B6B] to-[#E29594]",
    perks: ["Sale posters", "Event flyers", "Promo banners", "Print-ready"],
  },
  {
    title: "YouTube",
    sub: "Thumbnails • Banners",
    desc: "Click-magnet YouTube thumbnails and channel art engineered for max CTR.",
    emoji: "▶️",
    color: "from-[#FF0000] to-[#8B0000]",
    perks: ["Custom thumbnails", "Channel art", "End screens", "Shorts covers"],
  },
  {
    title: "Brand Kits",
    sub: "Identity • Style Guide",
    desc: "Full brand kits — logos, color palettes, fonts and templates — so you stay consistent everywhere.",
    emoji: "💎",
    color: "from-[#C9A36A] to-[#8B6F3D]",
    perks: ["Logo design", "Color palette", "Typography", "Template set"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-script text-3xl text-rose">what i can make for you</p>
          <h2 className="mt-3 font-display font-black text-cream text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
            PICK A <span className="italic text-rose">platform.</span>
            <br />
            I&apos;LL MAKE IT <span className="text-shimmer">POP.</span>
          </h2>
          <p className="mt-6 text-blush/80 max-w-2xl text-lg">
            From DPs to full brand kits — every design is custom-made to fit
            your vibe and your audience.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative rounded-3xl border-2 border-rose/20 bg-ink/70 backdrop-blur p-6 card-hover overflow-hidden"
            >
              {/* Gradient splash */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity bg-gradient-to-br ${s.color}`}
                aria-hidden
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {s.emoji}
                  </div>
                  <span className="font-display font-black text-rose/30 text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 font-display font-black text-2xl text-cream">
                  {s.title}
                </h3>
                <p className="text-rose text-sm font-bold uppercase tracking-wider mt-1">
                  {s.sub}
                </p>
                <p className="mt-3 text-blush/80 text-sm leading-relaxed">
                  {s.desc}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {s.perks.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-xs text-blush/70"
                    >
                      <span className="text-rose">✦</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#hire"
                  className="mt-6 inline-flex items-center gap-2 text-rose font-bold text-sm group-hover:gap-3 transition-all"
                >
                  Get {s.title} →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom call */}
        <div className="mt-16 text-center">
          <p className="font-script text-3xl text-rose">don&apos;t see it?</p>
          <p className="mt-2 font-display text-2xl text-cream">
            I take custom requests too — just{" "}
            <a href="#hire" className="text-rose italic underline decoration-rose/40 underline-offset-4 hover:decoration-rose">
              ask me
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}