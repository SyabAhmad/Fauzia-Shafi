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

function ServiceIcon({ name }: { name: IconKey }) {
  switch (name) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1" fill="white" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "dp":
      return <ImageIcon className="w-7 h-7 text-white" strokeWidth={2.2} />;
    case "target":
      return <Target className="w-7 h-7 text-white" strokeWidth={2.2} />;
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "sparkle":
      return <Sparkles className="w-7 h-7 text-white" strokeWidth={2.2} />;
  }
}

const services: {
  title: string;
  sub: string;
  desc: string;
  icon: IconKey;
  color: string;
  perks: string[];
}[] = [
  {
    title: "Instagram",
    sub: "Posts • Reels Covers • Stories",
    desc: "Eye-catching feed posts, story sets, highlight covers and reel thumbnails that stop the scroll.",
    icon: "instagram",
    color: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    perks: ["Feed post design", "Story templates", "Highlight icons", "Reel covers"],
  },
  {
    title: "LinkedIn",
    sub: "Banners • Posts • Carousels",
    desc: "Professional LinkedIn banners, thought-leadership carousels and personal brand posts that attract clients.",
    icon: "linkedin",
    color: "from-[#0A66C2] to-[#004182]",
    perks: ["Profile banner", "Post graphics", "Carousel PDFs", "Article covers"],
  },
  {
    title: "Facebook",
    sub: "Ads • Covers • Posts",
    desc: "High-converting Facebook ads, page covers and event posts that turn scrollers into followers.",
    icon: "facebook",
    color: "from-[#1877F2] to-[#0a4d9c]",
    perks: ["Ad creatives", "Page covers", "Event posters", "Poll posts"],
  },
  {
    title: "X / Twitter",
    sub: "Headers • Quote Posts",
    desc: "Bold X headers and quote-tweet graphics that make your tweets impossible to ignore.",
    icon: "x",
    color: "from-[#2a2a2a] to-[#0a0a0a]",
    perks: ["Profile header", "Quote graphics", "Thread covers", "Tweet cards"],
  },
  {
    title: "Profile DPs",
    sub: "LinkedIn • Insta • FB",
    desc: "Custom portrait profile pictures — framed, branded and Instagram-ready in any platform format.",
    icon: "dp",
    color: "from-rose to-blush",
    perks: ["Ring frame", "Branded backdrop", "All sizes", "Quick delivery"],
  },
  {
    title: "Ads & Posters",
    sub: "Sale • Event • Promo",
    desc: "Promotional posters, sale ads and event flyers designed to drive clicks, RSVPs and sales.",
    icon: "target",
    color: "from-[#FF6B6B] to-[#E29594]",
    perks: ["Sale posters", "Event flyers", "Promo banners", "Print-ready"],
  },
  {
    title: "YouTube",
    sub: "Thumbnails • Banners",
    desc: "Click-magnet YouTube thumbnails and channel art engineered for max CTR.",
    icon: "youtube",
    color: "from-[#FF0000] to-[#8B0000]",
    perks: ["Custom thumbnails", "Channel art", "End screens", "Shorts covers"],
  },
  {
    title: "Brand Kits",
    sub: "Identity • Style Guide",
    desc: "Full brand kits — logos, color palettes, fonts and templates — so you stay consistent everywhere.",
    icon: "sparkle",
    color: "from-[#C9A36A] to-[#8B6F3D]",
    perks: ["Logo design", "Color palette", "Typography", "Template set"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative rounded-3xl border-2 border-rose/20 bg-ink/70 backdrop-blur p-6 card-hover overflow-hidden"
            >
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity bg-gradient-to-br ${s.color}`}
                aria-hidden
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}
                  >
                    <ServiceIcon name={s.icon} />
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
                      <Check className="w-3.5 h-3.5 text-rose" strokeWidth={3} />
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#hire"
                  className="mt-6 inline-flex items-center gap-2 text-rose font-bold text-sm group-hover:gap-3 transition-all"
                >
                  Get {s.title}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
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