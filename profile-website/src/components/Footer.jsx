import { profile, socials } from '../data.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-shell flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <a href="#home" className="font-display text-base font-bold">
            Atharva Patil
          </a>
          <p className="mt-1 text-sm text-faint">
            © {year} {profile.name}. Built with React &amp; Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <FooterLink href={socials.github} label="GitHub">
            <GitHubIcon className="h-[18px] w-[18px]" />
          </FooterLink>
          <FooterLink href={socials.linkedin} label="LinkedIn">
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </FooterLink>
          <FooterLink href={`mailto:${socials.email}`} label="Email">
            <MailIcon className="h-[18px] w-[18px]" />
          </FooterLink>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label, children }) {
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
