import { tools, education, certificates, softSkills, palette } from "../data";

export default function Skills() {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-grid">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
        {/* Education + Certificates */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-rose/20 bg-ink/60 p-8 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-rose/15 text-rose flex items-center justify-center text-lg">
                🎓
              </span>
              <h3 className="font-display text-2xl text-cream">Education</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {education.map((e) => (
                <li key={e.title} className="border-l-2 border-rose/40 pl-4">
                  <p className="text-cream font-medium">{e.title}</p>
                  <p className="text-blush/70 text-sm">{e.org}</p>
                  <p className="text-xs text-stone mt-1">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-rose/20 bg-ink/60 p-8 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-rose/15 text-rose flex items-center justify-center text-lg">
                📜
              </span>
              <h3 className="font-display text-2xl text-cream">Certificates</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {certificates.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 rounded-xl bg-rose/5 border border-rose/15 px-4 py-3"
                >
                  <span className="text-rose">✦</span>
                  <span className="text-blush">{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-stone mb-3">
                Soft Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-sm rounded-full bg-cream/5 text-blush border border-rose/15"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="font-hand text-2xl text-rose">Tools I Use</p>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-cream">
                My creative toolkit.
              </h3>
            </div>
            <p className="text-stone text-sm max-w-sm">
              A blend of design classics and AI-powered helpers to ship faster
              without losing craft.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {tools.map((t) => (
              <div
                key={t.name}
                className="group rounded-2xl border border-rose/15 bg-ink/60 p-5 text-center card-hover"
              >
                <div className="text-3xl mx-auto w-12 h-12 rounded-xl flex items-center justify-center bg-rose/10 group-hover:bg-rose/20 transition-colors">
                  {t.emoji}
                </div>
                <p className="mt-3 text-blush text-sm font-medium">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Palette */}
        <div className="rounded-3xl border border-rose/20 bg-cream text-ink p-8 sm:p-10">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Brand{" "}
              <span className="italic" style={{ color: "#E29594" }}>
                Palette
              </span>
            </h3>
            <p className="text-sm" style={{ color: "#6B6868" }}>
              Modern • Feminine • Trustworthy
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
            {palette.map((c) => (
              <div key={c.name} className="rounded-xl overflow-hidden border border-ink/10">
                <div className="h-20" style={{ background: c.hex }} />
                <div className="p-3">
                  <p className="text-xs font-medium">{c.name}</p>
                  <p className="text-[10px] font-mono" style={{ color: "#6B6868" }}>
                    {c.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}