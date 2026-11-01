import Logo from '@/components/common/Logo';
import { socialIcons } from '@/components/common/socialIcons';
import { navItems, profile, socialLinks } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-gold-400/15 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div className="flex flex-col items-start gap-6">
          <a href="#home" aria-label="Back to top">
            <Logo />
          </a>
          <div>
            <p className="font-display text-2xl font-semibold text-ivory">{profile.name}</p>
            <p className="mt-1 text-sm font-medium text-gold-300">Freelance Web Developer</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-400">{profile.designation}</p>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Explore</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-stone-400 transition duration-300 hover:text-gold-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Connect</p>
          <ul className="mt-5 space-y-3">
            <li>
              <a href={`mailto:${profile.email}`} className="text-sm text-stone-400 transition duration-300 hover:text-gold-200">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.phoneHref} className="text-sm text-stone-400 transition duration-300 hover:text-gold-200">
                {profile.phone}
              </a>
            </li>
          </ul>
          <ul className="mt-6 flex items-center gap-3" aria-label="Social profiles">
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
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-stone-300 transition duration-300 hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-200"
                  >
                    <Icon size={17} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-stone-500 sm:px-8">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
