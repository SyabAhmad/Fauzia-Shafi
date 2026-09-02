import { expertise } from "../data";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-grid"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="font-hand text-2xl text-rose">What I do</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-cream leading-tight">
              Core{" "}
              <span className="italic text-rose">expertise.</span>
            </h2>
          </div>
          <p className="text-stone max-w-md">
            Crafting designs that balance beauty with strategy — built to make
            your brand unforgettable.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map((s, i) => (
            <article
              key={s.title}
              className="group relative rounded-3xl border border-rose/15 bg-ink/60 backdrop-blur p-7 card-hover overflow-hidden"
            >
              <span
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-rose/10 blur-2xl group-hover:bg-rose/30 transition-all"
                aria-hidden
              />
              <div className="relative">
                <div className="text-3xl">{s.icon}</div>
                <p className="mt-4 text-xs uppercase tracking-widest text-stone">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-xl text-cream">
                  {s.title}
                </h3>
                <p className="mt-3 text-blush/80 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-rose text-sm font-medium">
                  <span>Explore</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}