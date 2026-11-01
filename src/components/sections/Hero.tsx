import { ArrowRight, Download } from 'lucide-react';
import { socialIcons } from '@/components/common/socialIcons';
import { profile, socialLinks } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,58,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(28,41,68,0.9),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#f5f0e6_1px,transparent_1px),linear-gradient(to_bottom,#f5f0e6_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="animate-fade-up lg:col-span-7">
          <p className="inline-flex items-center gap-3 rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gold-200">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-300" aria-hidden="true" />
            {profile.designation}
          </p>

          <h1 className="mt-7 font-display text-6xl font-semibold leading-[1.05] sm:text-7xl lg:text-8xl">
            <span className="gold-text-animated block pb-2">{profile.name}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/90 sm:text-xl">
            {profile.headline}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-400">
            Professional website development for businesses that want a premium, fast and fully responsive online
            presence.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-gold">
              Hire Me
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#projects" className="btn-outline">
              View My Work
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <ul className="mt-12 flex items-center gap-3" aria-label="Social profiles">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label];
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} profile`}
                    title={link.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-stone-300 transition duration-300 hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-200"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-md [animation-delay:200ms] lg:col-span-5 lg:max-w-none">
          <div
            className="absolute -inset-4 rounded-[2rem] border border-gold-400/30 transition duration-700 sm:-inset-6"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-card">
            <img
              src={profile.photo}
              alt="Portrait of Aditya Patil"
              width={413}
              height={472}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-top transition duration-700 hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 text-center sm:mt-14">
            <p className="gold-text inline-block pb-1 font-display text-2xl font-semibold uppercase leading-snug tracking-[0.12em] sm:text-3xl">
              Founder of PATIL GROUPS
            </p>
            <div className="mt-2 rounded-2xl border border-gold-400/30 bg-navy-900/90 px-5 py-3 shadow-card">
              <p className="font-display text-xl font-semibold text-gold-200">Infosys Limited</p>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">System Engineer Trainee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
