import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "single post",
    price: "$25",
    perks: [
      "1 custom design",
      "1 platform size",
      "2 revisions",
      "24h delivery",
      "PNG + JPG",
    ],
    badge: null,
    highlight: false,
  },
  {
    name: "Bundle",
    tagline: "feed set",
    price: "$89",
    perks: [
      "5 custom designs",
      "Feed consistency",
      "Unlimited revisions",
      "48h delivery",
      "All file formats",
      "Story templates",
    ],
    badge: "MOST POPULAR",
    highlight: true,
  },
  {
    name: "Brand",
    tagline: "full kit",
    price: "$249",
    perks: [
      "Logo + palette",
      "10 post templates",
      "All platforms sized",
      "Editable Canva link",
      "Brand guidelines PDF",
      "Priority support",
    ],
    badge: "BEST VALUE",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-grid">
      <style>{`
        @media (max-width: 639px) {
          .price-pinterest { columns: 2; column-gap: 10px; }
          .price-pinterest > * { break-inside: avoid; margin-bottom: 10px; }
          .price-tall { min-height: 300px; }
          .price-short { min-height: 220px; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="font-script text-3xl text-rose">pricing</p>
          <h2 className="mt-3 font-display font-black text-cream text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95]">
            SIMPLE. FAIR.
            <br />
            <span className="italic text-rose">NO SURPRISES.</span>
          </h2>
        </div>

        {/* Desktop — 3 col */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 card-hover ${
                p.highlight
                  ? "border-2 border-rose bg-gradient-to-br from-rose/15 to-blush/5 shadow-[0_20px_60px_-20px_rgba(226,149,148,0.6)]"
                  : "border-2 border-rose/20 bg-ink/70"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rose text-ink text-xs font-black tracking-wider shadow-lg whitespace-nowrap">
                  {p.badge}
                </div>
              )}
              <p className="font-script text-2xl text-rose">{p.tagline}</p>
              <h3 className="mt-1 font-display font-black text-cream text-3xl">{p.name}</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display font-black text-rose text-6xl">{p.price}</span>
                <span className="text-blush/60 text-sm">/ project</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-blush/90 text-sm">
                    <Check className="w-4 h-4 text-rose shrink-0 mt-0.5" strokeWidth={3} />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href="#hire"
                className={`mt-8 block text-center px-6 py-3.5 rounded-full font-black transition-all ${
                  p.highlight
                    ? "bg-rose text-ink hover:bg-blush hover:scale-105"
                    : "border-2 border-rose/40 text-cream hover:border-rose hover:bg-rose/10"
                }`}
              >
                CHOOSE {p.name.toUpperCase()}
              </a>
            </div>
          ))}
        </div>

        {/* Mobile — 2-col pinterest */}
        <div className="md:hidden price-pinterest">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-4 card-hover ${p.highlight ? "price-tall" : "price-short"} ${
                p.highlight
                  ? "border-2 border-rose bg-gradient-to-br from-rose/15 to-blush/5 shadow-[0_12px_30px_-10px_rgba(226,149,148,0.5)]"
                  : "border border-rose/20 bg-white/[0.03]"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-rose text-ink text-[9px] font-black tracking-wider shadow-lg whitespace-nowrap">
                  {p.badge}
                </div>
              )}
              <p className="font-script text-xl text-rose">{p.tagline}</p>
              <h3 className="mt-0.5 font-display font-black text-cream text-xl">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display font-black text-rose text-4xl">{p.price}</span>
                <span className="text-blush/60 text-[10px]">/project</span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {p.perks.slice(0, p.highlight ? 6 : 4).map((perk) => (
                  <li key={perk} className="flex items-start gap-1.5 text-blush/80 text-[10px]">
                    <Check className="w-3 h-3 text-rose shrink-0 mt-0.5" strokeWidth={3} />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href="#hire"
                className={`mt-4 block text-center px-4 py-2.5 rounded-full font-black text-xs transition-all ${
                  p.highlight
                    ? "bg-rose text-ink hover:bg-blush"
                    : "border border-rose/40 text-cream hover:border-rose hover:bg-rose/10"
                }`}
              >
                CHOOSE {p.name.toUpperCase()}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-stone text-sm">
          Custom quotes for big projects · Pay via PayPal, bank transfer, or JazzCash
        </p>
      </div>
    </section>
  );
}