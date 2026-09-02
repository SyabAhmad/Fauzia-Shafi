import Image from "next/image";
import { profile } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -right-32 w-[420px] h-[420px] rounded-full bg-rose/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute top-40 -left-24 w-[360px] h-[360px] rounded-full bg-blush/20 blur-3xl animate-float-slower" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="font-hand text-2xl sm:text-3xl text-rose mb-3">
            Hi, I&apos;m
          </p>
          <h1 className="font-display text-5xl sm:text-7xl font-bold leading-[1.05] text-cream">
            Fauzia
            <br />
            <span className="text-shimmer">Shafi.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-blush/90 font-display italic">
            {profile.tagline}.
          </p>

          <div className="mt-6 inline-flex flex-wrap gap-2">
            {["Social Media", "Branding", "Canva", "Flyers", "Posters"].map(
              (t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full border border-rose/30 text-blush/90 text-sm"
                >
                  {t}
                </span>
              )
            )}
          </div>

          <p className="mt-8 text-stone leading-relaxed max-w-md">
            Designing brands that inspire — through clean, modern, and impactful
            visuals.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose text-ink font-medium hover:bg-blush transition-all hover:shadow-[0_10px_30px_-10px_rgba(226,149,148,0.6)]"
            >
              DM Now to Start
              <span aria-hidden>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-rose/40 text-blush hover:border-rose hover:bg-rose/10 transition-colors"
            >
              View My Work
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["#E29594", "#F3C4C2", "#FBF6F4"].map((c, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-ink"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-sm text-stone">
              <span className="text-cream font-medium">50+</span> designs
              crafted • <span className="text-cream font-medium">2024</span>{" "}
              active
            </p>
          </div>
        </div>

        {/* DP with ring frame (inspired by saraali) */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 -m-6 rounded-full border-[10px] border-ink" />
            <div className="absolute inset-0 -m-3 rounded-full border-[2px] border-rose/60" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_30px_60px_-20px_rgba(226,149,148,0.5)]">
              <Image
                src="/dp.jpg"
                alt={profile.name}
                fill
                priority
                className="object-cover"
              />
            </div>
            {/* Floating chips */}
            <div className="absolute -top-2 -right-2 px-3 py-1.5 rounded-full bg-rose text-ink text-xs font-medium shadow-lg animate-float-slow">
              ✨ Brand Designer
            </div>
            <div className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-full bg-cream text-ink text-xs font-medium shadow-lg animate-float-slower">
              🎨 Canva Pro
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative mt-16 flex justify-center">
        <span className="text-xs uppercase tracking-[0.3em] text-stone">
          scroll
        </span>
      </div>
    </section>
  );
}