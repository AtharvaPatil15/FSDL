import { projects } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { GitHubIcon, ExternalIcon, ArrowIcon } from './Icons.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-20 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        lead="Selected work — each one started as a problem I wanted to solve end to end."
      />

      <div
        className={`grid grid-cols-1 gap-5 ${
          projects.length > 1 ? 'lg:grid-cols-2' : 'mx-auto max-w-xl'
        }`}
      >
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100}>
            <article className="card card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                    {project.tagline}
                  </p>
                  <h3 className="font-display text-2xl font-bold">
                    {project.name}
                  </h3>
                </div>
                <div className="flex gap-2">
                  {project.links.github && (
                    <ProjectLink
                      href={project.links.github}
                      label={`${project.name} on GitHub`}
                    >
                      <GitHubIcon className="h-[18px] w-[18px]" />
                    </ProjectLink>
                  )}
                  {project.links.demo && (
                    <ProjectLink
                      href={project.links.demo}
                      label={`${project.name} live demo`}
                    >
                      <ExternalIcon className="h-[18px] w-[18px]" />
                    </ProjectLink>
                  )}
                </div>
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {project.description}
              </p>

              {project.highlights?.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2.5 text-sm text-muted"
                    >
                      <ArrowIcon className="h-3.5 w-3.5 shrink-0 text-brand-violet dark:text-brand-cyan" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto pt-6">
                <div className="hairline mb-5" />
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--border)] px-2.5 py-1 font-mono text-[11px] text-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ProjectLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="icon-btn h-10 w-10"
    >
      {children}
    </a>
  )
}
