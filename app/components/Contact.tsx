import { Mail, Heart, Send } from "lucide-react";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="hire" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-rose/10 to-transparent" />
      <div className="pointer-events-none absolute top-20 right-0 w-96 h-96 rounded-full bg-rose/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-0 w-96 h-96 rounded-full bg-blush/20 blur-3xl" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="font-script text-2xl sm:text-3xl text-rose">
            ready to stand out?
          </p>
          <h2 className="mt-3 font-display font-black text-cream text-[clamp(2.5rem,9vw,7rem)] leading-[0.92] tracking-tight">
            DM ME. <span className="italic text-rose">LET&apos;S</span>
            <br />
            <span className="text-shimmer">CREATE.</span>
          </h2>
          <p className="mt-4 text-blush/80 text-sm sm:text-base max-w-xl mx-auto">
            Pick your platform. Send your vibe. Get designs in 24 hours.
          </p>
        </div>

        {/* Desktop — 3 col | Mobile — 2 col pinterest */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4">
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border-2 border-rose/30 bg-gradient-to-br from-rose/15 to-blush/10 p-7 card-hover text-center"
          >
            <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" />
              </svg>
            </div>
            <p className="mt-4 font-script text-2xl text-rose">instagram</p>
            <p className="mt-1 font-display font-black text-cream text-lg break-all">{profile.instagramHandle}</p>
            <p className="mt-4 text-rose text-sm font-bold flex items-center justify-center gap-2">
              DM NOW <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </p>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="group relative overflow-hidden rounded-3xl border-2 border-rose/50 bg-gradient-to-br from-rose to-blush p-7 card-hover text-center shadow-[0_20px_50px_-15px_rgba(226,149,148,0.5)]"
          >
            <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-ink text-rose text-xs font-black">
              FASTEST
            </div>
            <div className="mx-auto w-14 h-14 rounded-2xl bg-ink/20 flex items-center justify-center shadow-lg">
              <Mail className="w-7 h-7 text-ink" strokeWidth={2.4} />
            </div>
            <p className="mt-4 font-script text-2xl text-ink">email</p>
            <p className="mt-1 font-display font-black text-ink text-sm break-all">{profile.email}</p>
            <p className="mt-4 text-ink text-sm font-black flex items-center justify-center gap-2">
              SEND BRIEF <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </p>
          </a>

          <a
            href={profile.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border-2 border-rose/30 bg-gradient-to-br from-blush/15 to-rose/10 p-7 card-hover text-center"
          >
            <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0057FF] to-[#1a1a1a] flex items-center justify-center shadow-lg">
              <span className="font-display font-black text-white text-2xl leading-none">Bē</span>
            </div>
            <p className="mt-4 font-script text-2xl text-rose">behance</p>
            <p className="mt-1 font-display font-black text-cream text-lg">{profile.behanceName}</p>
            <p className="mt-4 text-rose text-sm font-bold flex items-center justify-center gap-2">
              VIEW PORTFOLIO <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </p>
          </a>
        </div>

        {/* Mobile — 2-col pinterest */}
        <div className="sm:hidden" style={{ columns: 2, columnGap: "10px" }}>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-rose/30 bg-gradient-to-br from-rose/15 to-blush/10 p-4 card-hover text-center mb-[10px] block"
          >
            <div className="mx-auto w-10 h-10 rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shadow-md">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" />
              </svg>
            </div>
            <p className="mt-2 font-script text-lg text-rose">instagram</p>
            <p className="font-display font-black text-cream text-xs break-all">{profile.instagramHandle}</p>
            <p className="mt-2 text-rose text-[10px] font-bold flex items-center justify-center gap-1">
              DM <Send className="w-3 h-3" />
            </p>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="group relative overflow-hidden rounded-2xl border border-rose/40 bg-gradient-to-br from-rose to-blush p-4 card-hover text-center mb-[10px] block shadow-md"
          >
            <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-ink text-rose text-[9px] font-black">
              FASTEST
            </div>
            <div className="mx-auto w-10 h-10 rounded-xl bg-ink/20 flex items-center justify-center shadow-md">
              <Mail className="w-5 h-5 text-ink" strokeWidth={2.4} />
            </div>
            <p className="mt-2 font-script text-lg text-ink">email</p>
            <p className="font-display font-black text-ink text-[10px] break-all">{profile.email.split("@")[0]}</p>
            <p className="mt-2 text-ink text-[10px] font-black flex items-center justify-center gap-1">
              SEND <Send className="w-3 h-3" />
            </p>
          </a>

          <a
            href={profile.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-rose/30 bg-gradient-to-br from-blush/15 to-rose/10 p-4 card-hover text-center mb-[10px] block"
          >
            <div className="mx-auto w-10 h-10 rounded-xl bg-gradient-to-br from-[#0057FF] to-[#1a1a1a] flex items-center justify-center shadow-md">
              <span className="font-display font-black text-white text-base leading-none">Bē</span>
            </div>
            <p className="mt-2 font-script text-lg text-rose">behance</p>
            <p className="font-display font-black text-cream text-xs">VIEW WORK</p>
            <p className="mt-2 text-rose text-[10px] font-bold flex items-center justify-center gap-1">
              SEE <Send className="w-3 h-3" />
            </p>
          </a>
        </div>

        {/* Form */}
        <div className="mt-10 rounded-2xl sm:rounded-3xl border border-rose/30 bg-ink/70 backdrop-blur p-5 sm:p-10">
          <p className="font-script text-xl sm:text-2xl text-rose text-center">
            or just drop your details here
          </p>
          <h3 className="mt-2 font-display font-black text-cream text-lg sm:text-2xl text-center mb-6">
            I&apos;ll get back to you in 24h <Heart className="inline w-5 h-5 text-rose fill-rose" />
          </h3>

          <form
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
            className="grid sm:grid-cols-2 gap-3"
          >
            <input
              required
              name="name"
              placeholder="Your name"
              className="rounded-xl bg-ink/60 border border-rose/20 px-4 py-3 text-blush placeholder:text-stone focus:border-rose focus:outline-none transition-colors text-sm"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email or Instagram"
              className="rounded-xl bg-ink/60 border border-rose/20 px-4 py-3 text-blush placeholder:text-stone focus:border-rose focus:outline-none transition-colors text-sm"
            />
            <select
              name="service"
              defaultValue=""
              required
              className="rounded-xl bg-ink/60 border border-rose/20 px-4 py-3 text-blush focus:border-rose focus:outline-none transition-colors text-sm"
            >
              <option value="" disabled>I need designs for...</option>
              <option>Instagram</option>
              <option>LinkedIn</option>
              <option>Facebook</option>
              <option>X / Twitter</option>
              <option>Profile DP</option>
              <option>YouTube</option>
              <option>Ads & Posters</option>
              <option>Full Brand Kit</option>
              <option>Something else</option>
            </select>
            <input
              name="budget"
              placeholder="Budget (USD)"
              className="rounded-xl bg-ink/60 border border-rose/20 px-4 py-3 text-blush placeholder:text-stone focus:border-rose focus:outline-none transition-colors text-sm"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={3}
              className="sm:col-span-2 rounded-xl bg-ink/60 border border-rose/20 px-4 py-3 text-blush placeholder:text-stone focus:border-rose focus:outline-none transition-colors resize-none text-sm"
            />
            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-rose text-ink font-black text-sm hover:bg-blush transition-all"
            >
              SEND MY BRIEF <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}