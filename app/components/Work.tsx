import { experience } from "../data";

export default function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-hand text-2xl text-rose">Work Experience</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-cream leading-tight">
              Years of
              <br />
              <span className="italic text-rose">creative work.</span>
            </h2>
            <p className="mt-6 text-blush/80 leading-relaxed">
              A journey of designing for brands, learning new tools, and
              refining my craft one pixel at a time.
            </p>
          </div>

          <div className="md:col-span-8 relative">
            <span
              className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-rose/60 via-rose/20 to-transparent"
              aria-hidden
            />
            <ol className="space-y-6">
              {experience.map((e) => (
                <li
                  key={e.role}
                  className="relative pl-10 rounded-2xl border border-rose/15 bg-ink/60 backdrop-blur p-5 sm:p-6 card-hover"
                >
                  <span className="absolute left-1.5 top-7 w-3 h-3 bg-rose rounded-full shadow-[0_0_0_4px_rgba(226,149,148,0.18)]" />
                  <p className="text-xs uppercase tracking-widest text-rose">
                    {e.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-cream">
                    {e.role}
                  </h3>
                  <p className="mt-2 text-blush/80 text-sm leading-relaxed">
                    {e.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}