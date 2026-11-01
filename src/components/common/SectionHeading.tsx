import Reveal from '@/components/common/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignment}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold text-ivory sm:text-5xl">{title}</h2>
      <span className="gold-divider mt-6" aria-hidden="true" />
      {description && <p className="mt-6 text-base leading-relaxed text-stone-400 sm:text-lg">{description}</p>}
    </Reveal>
  );
}
