import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { aboutParagraphs, highlights } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="About Me" title="Building Websites with Purpose" align="left" />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="space-y-6 lg:col-span-7">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-base leading-[1.75] text-stone-300 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <Reveal key={item.value} delay={index * 120}>
                <div className="card-surface group p-7 hover:-translate-y-1 hover:border-gold-400/40">
                  <p className="font-display text-3xl font-semibold text-gold-200 transition duration-500 group-hover:text-gold-100">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-stone-400">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
