import { GraduationCap } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-20 bg-navy-950/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education" title="Academic Background" />

        <div className="mx-auto mt-16 grid max-w-4xl gap-6">
          {education.map((item, index) => (
            <Reveal key={item.level} delay={index * 100}>
              <div className="card-surface group flex flex-col gap-6 p-8 transition duration-500 hover:-translate-y-1 hover:border-gold-400/40 sm:flex-row sm:items-center sm:p-10">
                <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gold-400/30 bg-gold-400/10 text-gold-200 transition duration-500 group-hover:bg-gold-400/20">
                  <GraduationCap size={30} aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">{item.level}</p>
                  {item.title && (
                    <h3 className="mt-2 font-display text-3xl font-semibold text-ivory">{item.title}</h3>
                  )}
                  <p className="mt-2 text-base text-stone-300">{item.institution}</p>
                  <p className="mt-2 text-sm text-stone-500">
                    {item.period}
                    {item.status && <span> · {item.status}</span>}
                  </p>
                </div>
                <span className="self-start rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-2 text-sm font-medium text-gold-100 sm:self-center">
                  {item.score}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
