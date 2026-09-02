import { Check, ArrowRight, Target, Sparkles, Image as ImageIcon } from "lucide-react";

type IconKey =
  | "instagram"
  | "linkedin"
  | "facebook"
  | "x"
  | "dp"
  | "target"
  | "youtube"
  | "sparkle";

function ServiceIcon({ name, className }: { name: IconKey; className?: string }) {
  switch (name) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className ?? "w-8 h-8"}>
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" />
          <circle cx="17.5" cy="6.5" r="1" fill="white" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="white" className={className ?? "w-8 h-8"}>
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="white" className={className ?? "w-8 h-8"}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="white" className={className ?? "w-8 h-8"}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "dp":
      return <ImageIcon className={className ?? "w-8 h-8"} strokeWidth={1.8} />;
    case "target":
      return <Target className={className ?? "w-8 h-8"} strokeWidth={1.8} />;
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="white" className={className ?? "w-8 h-8"}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "sparkle":
      return <Sparkles className={className ?? "w-8 h-8"} strokeWidth={1.8} />;
  }
}

const services = [
  {
    title: "Instagram",
    sub: "Posts • Reels Covers • Stories",
    desc: "Eye-catching feed posts, story sets, highlight covers and reel thumbnails that stop the scroll.",
    icon: "instagram" as IconKey,
    color: "#DD2A7B",
    gradient: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    perks: ["Feed post design", "Story templates", "Highlight icons", "Reel covers"],
  },
  {
    title: "LinkedIn",
    sub: "Banners • Posts • Carousels",
    desc: "Professional LinkedIn banners, thought-leadership carousels and personal brand posts that attract clients.",
    icon: "linkedin" as IconKey,
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#004182]",
    perks: ["Profile banner", "Post graphics", "Carousel PDFs", "Article covers"],
  },
  {
    title: "Facebook",
    sub: "Ads • Covers • Posts",
    desc: "High-converting Facebook ads, page covers and event posts that turn scrollers into followers.",
    icon: "facebook" as IconKey,
    color: "#1877F2",
    gradient: "from-[#1877F2] to-[#0a4d9c]",
    perks: ["Ad creatives", "Page covers", "Event posters", "Poll posts"],
  },
  {
    title: "X / Twitter",
    sub: "Headers • Quote Posts",
    desc: "Bold X headers and quote-tweet graphics that make your tweets impossible to ignore.",
    icon: "x" as IconKey,
    color: "#333",
    gradient: "from-[#2a2a2a] to-[#0a0a0a]",
    perks: ["Profile header", "Quote graphics", "Thread covers", "Tweet cards"],
  },
  {
    title: "Profile DPs",
    sub: "LinkedIn • Insta • FB",
    desc: "Custom portrait profile pictures — framed, branded and Instagram-ready in any platform format.",
    icon: "dp" as IconKey,
    color: "#E29594",
    gradient: "from-rose to-blush",
    perks: ["Ring frame", "Branded backdrop", "All sizes", "Quick delivery"],
  },
  {
    title: "Ads & Posters",
    sub: "Sale • Event • Promo",
    desc: "Promotional posters, sale ads and event flyers designed to drive clicks, RSVPs and sales.",
    icon: "target" as IconKey,
    color: "#E29594",
    gradient: "from-[#FF6B6B] to-[#E29594]",
    perks: ["Sale posters", "Event flyers", "Promo banners", "Print-ready"],
  },
  {
    title: "YouTube",
    sub: "Thumbnails • Banners",
    desc: "Click-magnet YouTube thumbnails and channel art engineered for max CTR.",
    icon: "youtube" as IconKey,
    color: "#FF0000",
    gradient: "from-[#FF0000] to-[#8B0000]",
    perks: ["Custom thumbnails", "Channel art", "End screens", "Shorts covers"],
  },
  {
    title: "Brand Kits",
    sub: "Identity • Style Guide",
    desc: "Full brand kits — logos, color palettes, fonts and templates — so you stay consistent everywhere.",
    icon: "sparkle" as IconKey,
    color: "#C9A36A",
    gradient: "from-[#C9A36A] to-[#8B6F3D]",
    perks: ["Logo design", "Color palette", "Typography", "Template set"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center mb-20">
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

        <div className="space-y-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:bg-white/[0.06] transition-all duration-500"
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 w-0 h-full group-hover:w-1 transition-all duration-500"
                style={{ backgroundColor: s.color }}
              />

              <div className="flex flex-col sm:flex-row items-stretch">
                {/* Left — icon + number */}
                <div className="flex sm:flex-col items-center gap-4 sm:gap-0 sm:w-48 shrink-0 p-6 sm:p-8 sm:border-r border-white/[0.06] group-hover:border-white/[0.1] transition-colors">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shrink-0"
                    style={{ backgroundColor: `${s.color}22` }}
                  >
                    <ServiceIcon
                      name={s.icon}
                      className="w-8 h-8"
                    />
                  </div>
                  <span className="font-display font-black text-5xl sm:text-6xl text-white/[0.06] group-hover:text-white/[0.12] transition-colors leading-none mt-2 sm:mt-auto">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Middle — content */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center min-w-0">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-cream">
                      {s.title}
                    </h3>
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: s.color }}
                    >
                      {s.sub}
                    </span>
                  </div>
                  <p className="mt-3 text-blush/70 text-sm sm:text-base leading-relaxed max-w-2xl">
                    {s.desc}
                  </p>
                </div>

                {/* Right — perks + CTA */}
                <div className="hidden lg:flex flex-col justify-center gap-4 px-8 py-6 border-l border-white/[0.06] group-hover:border-white/[0.1] transition-colors w-64 shrink-0">
                  <ul className="space-y-1.5">
                    {s.perks.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-blush/60">
                        <Check className="w-3 h-3 shrink-0" style={{ color: s.color }} strokeWidth={3} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#hire"
                    className="inline-flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3"
                    style={{ color: s.color }}
                  >
                    Get {s.title}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Mobile CTA */}
                <div className="lg:hidden px-6 pb-6 pt-0">
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {s.perks.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-white/[0.08] text-blush/60"
                      >
                        <Check className="w-3 h-3 shrink-0" style={{ color: s.color }} strokeWidth={3} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#hire"
                    className="inline-flex items-center gap-2 text-sm font-bold"
                    style={{ color: s.color }}
                  >
                    Get {s.title}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-script text-3xl text-rose">don&apos;t see it?</p>
          <p className="mt-2 font-display text-2xl text-cream">
            I take custom requests too — just{" "}
            <a
              href="#hire"
              className="text-rose italic underline decoration-rose/40 underline-offset-4 hover:decoration-rose"
            >
              ask me
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}