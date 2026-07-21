import { contact, socials } from '../data.js'
import Reveal from './Reveal.jsx'
import { GitHubIcon, LinkedInIcon, ArrowIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-20 py-24 sm:py-28">
      <Reveal>
        <div className="card relative overflow-hidden rounded-3xl p-8 sm:p-14">
          {/* Single restrained accent glow, bottom-anchored */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-[-8rem] mx-auto h-64 w-[36rem] rounded-full blur-[120px]"
            style={{ background: 'var(--glow)' }}
          />

          <div className="relative max-w-2xl">
            <p className="eyebrow mb-5">Contact</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-5xl">
              Let&apos;s build
              <br />
              <span className="gradient-text">something good.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              {contact.blurb}
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="group mt-8 inline-flex items-center gap-3 font-display text-xl font-semibold underline decoration-[var(--border-strong)] decoration-1 underline-offset-[6px] transition-colors hover:decoration-brand-violet sm:text-2xl"
            >
              {contact.email}
              <ArrowIcon className="h-5 w-5 text-brand-violet transition-transform group-hover:translate-x-1 dark:text-brand-cyan" />
            </a>

            <div className="mt-10 flex items-center gap-3">
              <ContactSocial href={socials.github} label="GitHub">
                <GitHubIcon className="h-[18px] w-[18px]" />
              </ContactSocial>
              <ContactSocial href={socials.linkedin} label="LinkedIn">
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </ContactSocial>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function ContactSocial({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="icon-btn h-11 w-11"
    >
      {children}
    </a>
  )
}
