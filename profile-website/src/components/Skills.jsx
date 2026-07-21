import { skills } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-20 py-24 sm:py-28">
      <SectionHeading eyebrow="Skills" title="The stack I build with" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="card card-hover h-full rounded-2xl p-6">
              <p className="eyebrow mb-5">{group.category}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-[var(--border)] px-3 py-1.5 font-mono text-sm text-muted transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
