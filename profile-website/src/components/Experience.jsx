import { experience } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section-shell scroll-mt-20 py-24 sm:py-28">
      <SectionHeading eyebrow="Experience" title="What I've been working on" />

      <div className="relative">
        {/* Timeline spine */}
        <div
          className="absolute left-[7px] top-1 h-full w-px"
          style={{
            background:
              'linear-gradient(180deg, #8b5cf6, #6366f1 40%, var(--border) 90%)',
          }}
          aria-hidden="true"
        />
        <ol className="space-y-6">
          {experience.map((job, i) => (
            <Reveal
              as="li"
              key={`${job.org}-${i}`}
              delay={i * 80}
              className="relative pl-9 sm:pl-11"
            >
              {/* Node */}
              <span
                className="absolute left-0 top-2 grid h-[15px] w-[15px] place-items-center rounded-full"
                style={{
                  background: job.current
                    ? 'linear-gradient(135deg, #8b5cf6, #22d3ee)'
                    : 'var(--bg-elev)',
                  border: job.current ? 'none' : '1px solid var(--border-strong)',
                }}
                aria-hidden="true"
              >
                {job.current && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>

              <div className="card card-hover rounded-2xl p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-lg font-bold">
                    {job.role}
                    <span className="text-brand-violet dark:text-brand-cyan">
                      {' '}
                      · {job.org}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-faint">
                    {job.period}
                  </span>
                </div>

                {job.points.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {job.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full"
                          style={{ background: '#8b5cf6' }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}

                {job.tags?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--border)] px-2.5 py-1 font-mono text-[11px] text-faint"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
