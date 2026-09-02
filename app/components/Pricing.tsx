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
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="font-script text-3xl text-rose">pricing</p>
          <h2 className="mt-3 font-display font-black text-cream text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95]">
            SIMPLE. FAIR.
            <br />
            <span className="italic text-rose">NO SURPRISES.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
              <h3 className="mt-1 font-display font-black text-cream text-3xl">
                {p.name}
              </h3>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display font-black text-rose text-6xl">
                  {p.price}
                </span>
                <span className="text-blush/60 text-sm">/ project</span>
              </div>

              <ul className="mt-6 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-blush/90 text-sm">
                    <span className="text-rose text-lg leading-none">✦</span>
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

        <p className="mt-10 text-center text-stone text-sm">
          ✦ Custom quotes for big projects ✦ Pay via PayPal, bank transfer, or JazzCash
        </p>
      </div>
    </section>
  );
}