import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import ThemeToggle from './ThemeToggle.jsx'
import { MenuIcon, CloseIcon } from './Icons.jsx'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b bg-[var(--bg)]/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
      style={scrolled ? { borderColor: 'var(--border)' } : undefined}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 font-display text-[15px] font-bold tracking-tight"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-lg text-xs font-bold text-white"
            style={{
              backgroundImage: 'linear-gradient(135deg, #7c3aed, #22d3ee)',
            }}
          >
            {profile.initials}
          </span>
          <span className="hidden sm:inline">Atharva Patil</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  activeId === link.id
                    ? 'text-[var(--text)]'
                    : 'text-muted hover:text-[var(--text)]'
                }`}
              >
                {activeId === link.id && (
                  <span
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{ backgroundColor: 'var(--card)' }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="icon-btn h-10 w-10 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-[18px] w-[18px]" /> : <MenuIcon className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={open ? 'pointer-events-auto md:hidden' : 'pointer-events-none md:hidden'}>
        <div
          className={`section-shell overflow-hidden transition-all duration-300 ${
            open ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="card mt-2 flex flex-col gap-1 rounded-2xl p-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    activeId === link.id
                      ? 'text-brand-violet dark:text-brand-cyan'
                      : 'text-muted hover:text-[var(--text)]'
                  }`}
                  style={
                    activeId === link.id
                      ? { backgroundColor: 'var(--card)' }
                      : undefined
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
