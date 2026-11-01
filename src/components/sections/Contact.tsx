import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { socialIcons } from '@/components/common/socialIcons';
import { profile, socialLinks } from '@/data/portfolio';

const contactItems = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 bg-navy-950/60 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Remarkable"
          description="Have a project in mind or want to discuss a role? Reach out directly through any of the channels below."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="card-surface flex h-full flex-col justify-between gap-10 p-8 sm:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Start a conversation</p>
                <h3 className="mt-4 font-display text-3xl font-semibold text-ivory">Hire Me for Your Website</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-400">
                  Share your goals and I will get back to you about your website requirements, timeline and next steps.
                </p>
              </div>
              <a href={`mailto:${profile.email}`} className="btn-gold w-full sm:w-auto">
                <Mail size={16} aria-hidden="true" />
                Email Me
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:col-span-7">
            {contactItems.map((item, index) => (
              <Reveal key={item.label} delay={index * 100}>
                <a
                  href={item.href}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-ink-soft/80 p-6 transition duration-500 hover:-translate-y-0.5 hover:border-gold-400/50 hover:shadow-gold"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/10 text-gold-200 transition duration-500 group-hover:bg-gold-400/20">
                    <item.icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-[0.2em] text-stone-500">{item.label}</span>
                    <span className="mt-1 block truncate text-base text-ivory sm:text-lg">{item.value}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-stone-500 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-300"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            ))}

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {socialLinks.map((link, index) => {
                const Icon = socialIcons[link.label];
                return (
                  <Reveal key={link.label} delay={200 + index * 100} className="h-full">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col items-start gap-5 rounded-2xl border border-white/10 bg-ink-soft/80 p-6 transition duration-500 hover:-translate-y-0.5 hover:border-gold-400/50 hover:shadow-gold"
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/10 text-gold-200 transition duration-500 group-hover:bg-gold-400/20">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-display text-xl font-semibold text-ivory">{link.label}</span>
                        <span className="mt-1 block truncate text-xs text-stone-500">{link.handle}</span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
