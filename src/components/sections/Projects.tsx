import { ExternalLink, Github } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 bg-navy-950/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="A selection of web and AI projects that reflect my approach to clean design, reliable engineering and measurable results."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const hasLinks = Boolean(project.liveUrl || project.githubUrl);
            return (
              <Reveal key={project.title} delay={index * 120} className="h-full">
                <article className="card-surface group flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-gold">
                  <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-navy-700 via-navy-900 to-ink">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" aria-hidden="true" />
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">{project.category}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-ivory">{project.title}</h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-400">{project.description}</p>

                    {project.technologies.length > 0 && (
                      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                        {project.technologies.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full bg-white/5 px-3 py-1 text-xs text-stone-300 ring-1 ring-white/10"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}

                    {hasLinks && (
                      <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold px-5 py-2.5 text-xs"
                          >
                            <ExternalLink size={14} aria-hidden="true" />
                            Live Demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline px-5 py-2.5 text-xs"
                          >
                            <Github size={14} aria-hidden="true" />
                            GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
