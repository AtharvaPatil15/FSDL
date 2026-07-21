import { about } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-20 py-24 sm:py-28">
      <SectionHeading eyebrow="About" title="A builder, not a bystander" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`leading-relaxed ${
                i === 0
                  ? 'text-xl text-[var(--text)]'
                  : 'text-lg text-muted'
              }`}
            >
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="card rounded-2xl p-6">
            <p className="eyebrow mb-5">Quick facts</p>
            <dl className="space-y-0">
              {about.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 py-3.5"
                  style={
                    i !== about.facts.length - 1
                      ? { borderBottom: '1px solid var(--border)' }
                      : undefined
                  }
                >
                  <dt className="font-mono text-xs uppercase tracking-wider text-faint">
                    {fact.label}
                  </dt>
                  <dd className="text-right text-sm font-semibold">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
