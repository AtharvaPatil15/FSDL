import { education } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education" className="section-shell scroll-mt-20 py-24 sm:py-28">
      <SectionHeading eyebrow="Education" title="Where I'm studying" />

      <Reveal>
        <div className="card card-hover rounded-2xl p-7 sm:p-9">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-bold sm:text-2xl">
                {education.school}
              </h3>
              <p className="mt-1.5 text-muted">
                {education.degree} · {education.location}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center rounded-full border border-[var(--border)] px-4 py-1.5 font-mono text-xs font-medium text-brand-violet dark:text-brand-cyan">
              {education.period}
            </span>
          </div>

          <div className="hairline my-7" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {education.details.map((d) => (
              <div key={d.label}>
                <p className="font-mono text-xs uppercase tracking-wider text-faint">
                  {d.label}
                </p>
                <p className="mt-1.5 text-lg font-semibold">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
