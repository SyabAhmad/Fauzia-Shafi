import { profile, services } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-rose/5 to-transparent" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <p className="font-hand text-2xl text-rose">Get in touch</p>
          <h2 className="mt-2 font-display text-4xl sm:text-6xl font-bold text-cream leading-tight">
            Let&apos;s create something
            <br />
            <span className="italic text-shimmer">beautiful together.</span>
          </h2>
          <p className="mt-5 text-stone max-w-xl mx-auto">
            Open for freelance projects, brand collaborations, and creative
            partnerships. Drop a message — I usually reply within 24 hours.
          </p>
        </div>

        {/* Services pricing cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-rose/20 bg-ink/60 backdrop-blur p-6 card-hover"
            >
              <p className="font-hand text-xl text-rose">{s.price}</p>
              <h3 className="mt-1 font-display text-xl text-cream">
                {s.title}
              </h3>
              <p className="mt-3 text-blush/80 text-sm leading-relaxed">
                {s.desc}
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-5 inline-flex items-center gap-2 text-rose text-sm font-medium"
              >
                Enquire <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Contact cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-rose/20 bg-gradient-to-br from-rose/15 to-blush/10 p-7 card-hover"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose/20 border border-rose/40 flex items-center justify-center text-xl">
              📸
            </div>
            <p className="mt-5 text-xs uppercase tracking-widest text-stone">
              Instagram
            </p>
            <p className="mt-1 text-cream font-display text-xl">
              {profile.instagramHandle}
            </p>
            <p className="mt-3 text-rose text-sm flex items-center gap-1">
              Follow <span className="transition-transform group-hover:translate-x-1">→</span>
            </p>
          </a>

          <a
            href={profile.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-rose/20 bg-gradient-to-br from-blush/15 to-cream/5 p-7 card-hover"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose/20 border border-rose/40 flex items-center justify-center text-xl">
              🅱️
            </div>
            <p className="mt-5 text-xs uppercase tracking-widest text-stone">
              Behance
            </p>
            <p className="mt-1 text-cream font-display text-xl">
              {profile.behanceName}
            </p>
            <p className="mt-3 text-rose text-sm flex items-center gap-1">
              View portfolio <span className="transition-transform group-hover:translate-x-1">→</span>
            </p>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="group rounded-3xl border border-rose/20 bg-gradient-to-br from-cream/10 to-rose/10 p-7 card-hover"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose/20 border border-rose/40 flex items-center justify-center text-xl">
              ✉️
            </div>
            <p className="mt-5 text-xs uppercase tracking-widest text-stone">
              Email
            </p>
            <p className="mt-1 text-cream font-display text-lg break-all">
              {profile.email}
            </p>
            <p className="mt-3 text-rose text-sm flex items-center gap-1">
              Send a message <span className="transition-transform group-hover:translate-x-1">→</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}