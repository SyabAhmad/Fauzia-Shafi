import Image from "next/image";
import { profile } from "../data";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="font-hand text-2xl text-rose">About me</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-cream leading-tight">
              The person
              <br />
              <span className="italic text-rose">behind the pixels.</span>
            </h2>

            <div className="relative mt-8 aspect-[4/5] rounded-3xl overflow-hidden border border-rose/20 card-hover">
              <Image
                src="/cover.jpg"
                alt="Fauzia Shafi portrait"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/90 to-transparent">
                <p className="font-hand text-2xl text-rose">Fauzia Shafi</p>
                <p className="text-blush/80 text-sm">Graphic Designer</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-8">
            <div className="rounded-3xl bg-ink/60 border border-rose/20 p-8 sm:p-10 backdrop-blur">
              <p className="text-blush/90 text-lg leading-relaxed">
                {profile.about}
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  { k: "50+", v: "Designs" },
                  { k: "20+", v: "Clients" },
                  { k: "2+", v: "Years" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-2xl border border-rose/20 bg-ink/40 p-4 text-center"
                  >
                    <p className="font-display text-3xl font-bold text-rose">
                      {s.k}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-stone mt-1">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand personality row */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Creative",
                "Professional",
                "Feminine",
                "Modern",
                "Trustworthy",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full bg-rose/10 text-rose text-sm border border-rose/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}