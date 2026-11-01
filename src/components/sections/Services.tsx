import { ArrowUpRight, Building2, Layout, Monitor, RefreshCw, Rocket, UserRound, UtensilsCrossed, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { services } from '@/data/portfolio';

const serviceIcons: Record<string, LucideIcon> = {
  'Business Website Development': Building2,
  'Restaurant Website Development': UtensilsCrossed,
  'Portfolio Website Development': UserRound,
  'Responsive Website Design': Monitor,
  'Landing Page Development': Rocket,
  'Website Redesign': RefreshCw,
};

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Freelance Services"
          title="Let's Build Your Online Presence."
          description="I help businesses establish their online presence through modern, responsive, and professionally designed websites."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.title] ?? Layout;
            return (
              <Reveal key={service.title} delay={(index % 3) * 100} className="h-full">
                <article className="card-surface group relative flex h-full flex-col overflow-hidden p-8 hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-gold">
                  <div
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 transition-transform duration-700 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/30 bg-gold-400/10 text-gold-200 transition duration-500 group-hover:bg-gold-400/20 group-hover:text-gold-100">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-semibold text-ivory">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-400">{service.description}</p>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 transition duration-300 hover:gap-3 hover:text-gold-100"
                  >
                    Discuss this service
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <a href="#contact" className="btn-gold">
            Hire Me
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
