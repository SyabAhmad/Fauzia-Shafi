import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden bg-grid"
    >
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-rose/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-rose/10 border border-rose/30 mb-8">
            <Sparkles className="w-4 h-4 text-rose" />
            <span className="font-script text-rose text-2xl">hi, i&apos;m</span>
            <span className="font-bold text-cream tracking-wider">FAUZIA SHAFI</span>
            <span className="text-rose">✦</span>
          </div>

          <h1 className="font-display font-black text-cream leading-[0.92] tracking-tight">
            <span className="block text-[clamp(3rem,9vw,7.5rem)]">I DESIGN</span>
            <span className="block font-script text-shimmer text-[clamp(3.5rem,11vw,9rem)] leading-[0.95] py-2">
              scroll-stopping
            </span>
            <span className="block text-[clamp(3rem,9vw,7.5rem)]">
              SOCIAL <span className="italic text-rose">FEEDS.</span>
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-blush/90 max-w-2xl mx-auto leading-relaxed">
            Custom Instagram, LinkedIn, Facebook & X posts, banners, DPs, ads and
            posters — designed to make your brand{" "}
            <span className="font-script text-rose text-2xl">unforgettable.</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="#hire"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-rose text-ink font-black text-lg hover:bg-blush transition-all hover:scale-105 hover:shadow-[0_20px_40px_-12px_rgba(226,149,148,0.8)]"
            >
              I NEED DESIGNS
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-rose/50 text-cream font-bold text-lg hover:border-rose hover:bg-rose/10 transition-all"
            >
              SEE EXAMPLES
            </a>
          </div>
        </div>

          <div className="relative mt-20 grid grid-cols-12 gap-4 sm:gap-6">
          <div className="col-span-12 md:col-span-7 relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-rose/30 to-blush/20 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-rose/30 shadow-2xl">
              <Image
                src="/banner.jpg"
                alt="Elevating Brands Through Creative Visuals"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="font-script text-3xl text-rose">Featured work</p>
                  <p className="text-cream font-display text-xl">Brand Posters</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-ink/80 text-xs text-rose font-bold border border-rose/30">
                  SOCIAL POST
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-rose/30 group card-hover">
              <Image src="/cover.jpg" alt="DP design" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-script text-xl text-rose">Profile Pics</p>
                <p className="text-xs text-cream/80">DP Design</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-rose/30 group card-hover">
              <Image src="/card.jpg" alt="Brand banner" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-script text-xl text-rose">Banners</p>
                <p className="text-xs text-cream/80">FB / LinkedIn</p>
              </div>
            </div>
            <div className="relative col-span-2 aspect-[2/1] rounded-3xl overflow-hidden border-2 border-rose/30 group card-hover">
              <Image src="/palette.jpg" alt="Brand palette" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/40 to-transparent" />
              <div className="absolute inset-y-0 left-5 flex flex-col justify-center">
                <p className="font-script text-3xl text-rose">Your Brand.</p>
                <p className="text-cream font-display text-xl">Perfected.</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 font-script text-3xl text-rose rotate-[-3deg]">
            ↓ scroll to see more
          </div>
        </div>
      </div>
    </section>
  );
}