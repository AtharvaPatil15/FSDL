import Reveal from './Reveal.jsx'

// Consistent eyebrow + title + optional lead for each section.
export default function SectionHeading({ eyebrow, title, lead }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-muted">{lead}</p>}
    </Reveal>
  )
}
