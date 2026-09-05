import {
  MessageSquare,
  Pencil,
  RotateCw,
  Rocket,
  Star,
  Quote,
} from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Tell me what you need",
    desc: "Drop a message with your platform, vibe and references — whatever it is.",
    icon: MessageSquare,
    tall: false,
  },
  {
    n: "02",
    title: "I sketch the concept",
    desc: "2-3 mockup directions within 24 hours so you can pick the vibe.",
    icon: Pencil,
    tall: true,
  },
  {
    n: "03",
    title: "Unlimited revisions",
    desc: "We tweak until it&apos;s perfect. No extra charge — your satisfaction is everything.",
    icon: RotateCw,
    tall: false,
  },
  {
    n: "04",
    title: "Final files delivered",
    desc: "PNG, JPG, PDF + editable Canva link — ready to post anywhere.",
    icon: Rocket,
    tall: true,
  },
];

const testimonials = [
  {
    name: "Ayesha K.",
    role: "Instagram • Skincare brand",
    text: "Fauzia turned my messy ideas into a gorgeous feed. My engagement doubled in 2 weeks!",
    rating: 5,
  },
  {
    name: "Hamza R.",
    role: "LinkedIn • Tech founder",
    text: "Got 3 client inquiries the week I put up the new banner. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Sana T.",
    role: "Boutique owner",
    text: "Best sale flyer I&apos;ve ever used. Customers literally said 'this looks so good!'",
    rating: 5,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <style>{`
        @media (max-width: 639px) {
          .step-pinterest { columns: 2; column-gap: 10px; }
          .step-pinterest > * { break-inside: avoid; margin-bottom: 10px; }
          .step-tall { min-height: 220px; }
          .step-short { min-height: 180px; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="font-script text-3xl text-rose">how it works</p>
          <h2 className="mt-3 font-display font-black text-cream text-[clamp(2.5rem,7vw,5rem)] leading-[0.95]">
            FOUR STEPS. <span className="italic text-rose">THAT&apos;S IT.</span>
          </h2>
        </div>

        {/* Desktop — 4 col */}
        <div className="hidden lg:grid grid-cols-4 gap-5 relative">
          <div className="absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-rose/40 to-transparent" />
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative rounded-3xl border-2 border-rose/20 bg-ink/70  p-7 card-hover text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-rose to-blush flex items-center justify-center shadow-lg relative z-10">
                  <Icon className="w-7 h-7 text-ink" strokeWidth={2.4} />
                </div>
                <p className="mt-5 font-display font-black text-rose/40 text-4xl">{s.n}</p>
                <h3 className="mt-2 font-display font-black text-cream text-xl">{s.title}</h3>
                <p className="mt-3 text-blush/80 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile — 2-col pinterest */}
        <div className="lg:hidden step-pinterest">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className={`relative rounded-2xl border-2 border-rose/20 bg-ink/70  p-5 card-hover text-center ${s.tall ? "step-tall" : "step-short"}`}>
                <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-rose to-blush flex items-center justify-center shadow-lg">
                  <Icon className="w-5 h-5 text-ink" strokeWidth={2.4} />
                </div>
                <p className="mt-3 font-display font-black text-rose/40 text-2xl">{s.n}</p>
                <h3 className="mt-1 font-display font-black text-cream text-base">{s.title}</h3>
                <p className="mt-2 text-blush/80 text-[11px] leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div id="reviews" className="mt-24">
          <div className="text-center mb-12">
            <p className="font-script text-3xl text-rose">what clients say</p>
            <h3 className="mt-3 font-display font-black text-cream text-3xl sm:text-5xl">
              REAL PEOPLE. <span className="italic text-rose">REAL RESULTS.</span>
            </h3>
          </div>

          {/* Desktop — 3 col, mobile 1 col */}
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="relative rounded-3xl border-2 border-rose/20 bg-ink/70  p-7 card-hover">
                <Quote className="absolute -top-3 left-7 w-10 h-10 text-rose fill-rose" strokeWidth={0} />
                <div className="flex gap-1 text-rose mt-3">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-rose text-rose" />
                  ))}
                </div>
                <p className="mt-4 text-blush/90 leading-relaxed text-sm">{t.text}</p>
                <div className="mt-6 pt-6 border-t border-rose/15">
                  <p className="font-display font-black text-cream">{t.name}</p>
                  <p className="text-rose text-xs font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}