import { profile, socials, skills } from '../data.js'
import Avatar from './Avatar.jsx'
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon } from './Icons.jsx'

// A few marquee tags pulled from the skills data for the status card.
const marqueeTags = ['RAG', 'LLMs', 'Python', 'Prompt Eng.']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* Restraint: one controlled radial glow + a masked dot-grid. No blob soup. */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0 text-[var(--text)]" />
        <div
          className="absolute left-1/2 top-[-6rem] h-[34rem] w-[52rem] -translate-x-1/2 rounded-full blur-[130px]"
          style={{ background: 'var(--glow)' }}
        />
      </div>

      <div className="section-shell grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
        {/* Left: the thesis */}
        <div>
          <p className="eyebrow mb-6">
            {profile.status} · {profile.location}
          </p>

          <h1 className="font-display font-bold leading-[0.92] tracking-[-0.03em]">
            <span className="block text-[clamp(2.75rem,8vw,5.5rem)]">
              Atharva
            </span>
            <span className="gradient-text block text-[clamp(2.75rem,8vw,5.5rem)]">
              Patil
            </span>
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
            {profile.hook} Currently focused on retrieval-augmented generation,
            LLMs, and agentic systems.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group">
              View my work
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <SocialLink href={socials.github} label="GitHub">
                <GitHubIcon className="h-[18px] w-[18px]" />
              </SocialLink>
              <SocialLink href={socials.linkedin} label="LinkedIn">
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </SocialLink>
              <SocialLink href={`mailto:${socials.email}`} label="Email">
                <MailIcon className="h-[18px] w-[18px]" />
              </SocialLink>
            </div>
            <div className="hairline hidden flex-1 sm:block" />
            <span className="hidden font-mono text-xs text-faint sm:block">
              scroll to explore
            </span>
          </div>
        </div>

        {/* Right: identity / status card — gives the column real substance */}
        <div className="justify-self-center lg:justify-self-end">
          <div className="card w-full max-w-xs rounded-2xl p-6 sm:max-w-sm">
            <div className="flex items-center gap-4">
              <Avatar size="md" />
              <div>
                <p className="font-display text-lg font-bold leading-tight">
                  {profile.name}
                </p>
                <p className="font-mono text-xs text-muted">CompE · PCCOE ’27</p>
              </div>
            </div>

            <div className="hairline my-5" />

            <dl className="space-y-3 font-mono text-xs">
              <CardRow label="ROLE" value="AI / LLM Systems" />
              <CardRow label="NOW" value={profile.status} accent />
              <CardRow label="BASE" value={profile.location} />
            </dl>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {marqueeTags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-[var(--border)] px-2 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 font-mono text-[11px] text-faint">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Open to internships &amp; collaborations
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CardRow({ label, value, accent }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-faint">{label}</dt>
      <dd
        className={`text-right font-medium ${
          accent ? 'text-brand-violet dark:text-brand-cyan' : ''
        }`}
      >
        {value}
      </dd>
    </div>
  )
}

function SocialLink({ href, label, children }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="icon-btn h-10 w-10"
    >
      {children}
    </a>
  )
}
