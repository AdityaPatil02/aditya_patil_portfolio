import { Briefcase, MapPin } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Experience" title="Professional Journey" />

        <ol className="relative mx-auto mt-16 max-w-3xl border-l border-gold-400/25 pl-8 sm:pl-12">
          {experience.map((item, index) => (
            <li key={`${item.company}-${item.role}`} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[2.3rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-gold-300 bg-ink sm:-left-[3.3rem]"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-gold-300" />
              </span>

              <Reveal delay={index * 120}>
                <div className="card-surface p-8 transition duration-500 hover:-translate-y-1 hover:border-gold-400/40">
                  <p className="text-sm font-medium tracking-wide text-gold-300">{item.period}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-ivory">{item.role}</h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-base text-stone-300">
                    <span className="inline-flex items-center gap-2">
                      <Briefcase size={16} className="text-gold-400" aria-hidden="true" />
                      {item.company}
                    </span>
                    {item.location && (
                      <span className="inline-flex items-center gap-2 text-stone-400">
                        <MapPin size={16} className="text-gold-400" aria-hidden="true" />
                        {item.location}
                      </span>
                    )}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-stone-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
