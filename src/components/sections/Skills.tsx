import BrandIcon from '@/components/common/BrandIcon';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { techLogos } from '@/data/techLogos';
import { skillGroups } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 bg-navy-950/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I Work With"
          description="A balanced toolkit spanning programming languages, modern front-end frameworks, server-side development, databases and AI."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 90} className="lg:col-span-2">
              <div className="card-surface h-full p-8 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-gold">
                <h3 className="font-display text-2xl font-semibold text-ivory">{group.title}</h3>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => {
                    const logo = techLogos[item];
                    return (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/5 px-4 py-1.5 text-sm text-gold-100 transition duration-300 hover:border-gold-300 hover:bg-gold-400/15"
                      >
                        {logo && <BrandIcon icon={logo} size={15} />}
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
