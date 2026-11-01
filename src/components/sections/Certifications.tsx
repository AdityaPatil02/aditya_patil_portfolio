import { Award } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Training and Credentials"
          description="Continuous learning across enterprise software, artificial intelligence and data science."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2">
          {certifications.map((certification, index) => (
            <li key={certification.title}>
              <Reveal delay={(index % 2) * 120}>
                <div className="card-surface group flex h-full items-start gap-5 p-7 transition duration-500 hover:-translate-y-1 hover:border-gold-400/40">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/10 text-gold-200 transition duration-500 group-hover:bg-gold-400/20">
                    <Award size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-snug text-ivory">
                      {certification.title}
                    </h3>
                    {certification.issuer && (
                      <p className="mt-2 text-sm text-stone-400">{certification.issuer}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
