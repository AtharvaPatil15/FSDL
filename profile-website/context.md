# Project Context — Atharva Patil Profile Website

> Onboarding doc for AI agents (Claude, Gemini, Codex, etc.) and human contributors.
> Read this first before making changes.

## What this is

A single-page personal profile / portfolio website for **Atharva Patil**, a
Computer Engineering student focused on AI, LLMs, and agentic systems. It lives
in the `profile-website/` subfolder of the public repo `AtharvaPatil15/FSDL`
and deploys to **Vercel**.

## Tech stack

| Concern      | Choice                                  |
| ------------ | --------------------------------------- |
| Framework    | React 18 (functional components + hooks only) |
| Build tool   | Vite 5 (default `dist/` output)         |
| Styling      | Tailwind CSS 3 (`darkMode: 'class'`)    |
| Fonts        | Space Grotesk (display), Inter (body), JetBrains Mono (utility) — via Google Fonts in `index.html` |
| Icons        | Inline SVGs in `src/components/Icons.jsx` (no icon library) |
| State        | Local hooks only — no router, no global store |

**No TypeScript. No CSS-in-JS. No extra runtime dependencies.** Keep it that way
unless there's a strong reason.

## Commands

```bash
npm install       # install deps
npm run dev       # local dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

`npm run build` MUST succeed before any change is considered done.

## The golden rule: content lives in ONE file

**All editable content is in `src/data.js`.** Name, tagline, about text,
education, experience, skills, projects, contact info, social links, and the
navbar items are all exported from there.

- To change text, links, or add a project/skill/job → **edit `src/data.js` only**.
- Do NOT hardcode personal content inside components. Components read from `data.js`.
- The navbar is data-driven: `navLinks[].id` must match a `<section id="...">`
  in `App.jsx`, and scroll-spy + smooth-scroll rely on that match.

### Common edits (all in `src/data.js`)

- **Add a project:** push an object to the `projects` array (name, tagline,
  description, highlights, tags, links.github, links.demo).
- **Add a job:** add to `experience` (most-recent first; `current: true` gives a
  gradient timeline node). The Assent entry has placeholder bullets — fill with
  real responsibilities.
- **Add a skill group/item:** edit the `skills` array.
- **Profile photo:** currently `profile.photo = '/profile_photo_lindn.jpg'`
  (the file lives in `public/`). Set it to `null` to fall back to the gradient
  "AP" initials avatar, or point it at a different image in `public/`.

## Architecture

```
index.html            # fonts + pre-paint theme script (avoids theme flash)
src/
  main.jsx            # React entry
  App.jsx             # composes sections in order (see below)
  index.css           # Tailwind layers + .glass/.gradient-text/.reveal helpers
  data.js             # >>> ALL CONTENT <<<
  hooks/
    useTheme.js       # dark/light toggle, syncs <html> class + localStorage
    useScrollSpy.js   # active-section detection for navbar highlight
  components/
    Navbar, Hero, About, Education, Experience, Skills, Projects, Contact, Footer
    Avatar            # signature rotating conic-gradient ring + initials/photo
    ThemeToggle, SectionHeading, Reveal (scroll-in animation), Icons
```

**Section order (fixed, in `App.jsx`):**
Hero → About → Education → Experience → Skills → Projects → Contact → Footer.

## Design system (keep it consistent)

- **Direction:** refined dark-first editorial-tech. Violet → indigo → cyan is a
  *surgical* accent (name, hairline rules, active states), NOT a rainbow wash.
  Deep moody canvas, big confident display type, disciplined whitespace.
- **Theming via CSS variables** (defined in `index.css` `:root` for light and
  `.dark` for dark): `--bg`, `--bg-elev`, `--text`, `--text-muted`,
  `--text-faint`, `--border`, `--border-strong`, `--card`, `--card-highlight`,
  `--glow`. Prefer these over hardcoded `dark:` color pairs so both themes stay
  in sync. `tailwind.config.js` still defines `colors.brand.{violet,indigo,blue,cyan}`
  for the few gradient stops.
- **Reusable component classes** (in `index.css`):
  - `.card` — frosted panel: 1px `--border` + subtle inset top highlight (not a glow).
  - `.card-hover` — adds a small lift + border brighten on hover.
  - `.gradient-text` — the violet→cyan text gradient (use sparingly).
  - `.section-shell` — max-width (`max-w-5xl`) centered container.
  - `.eyebrow` — mono uppercase label with the signature gradient tick before it.
  - `.hairline` — thin gradient divider (the repeated signature motif).
  - `.btn-primary`, `.btn-ghost`, `.icon-btn` — the button/icon-button styles.
  - `.text-muted`, `.text-faint` — semantic text colors from the vars.
  - `.dot-grid` — masked fine dot-grid used behind the hero.
  - `.reveal` — scroll-in animation (added `.is-visible` by `Reveal.jsx`).
- **Signature elements (spend boldness in one place):** the rotating
  conic-gradient ring on the avatar, and the repeated gradient `.hairline`.
  The hero uses ONE controlled radial glow + the masked dot-grid — do NOT bring
  back multiple aurora blobs or stack more glowing effects.
- **Hero:** two-column — oversized name on the left, an identity/status card on
  the right (avatar + ROLE/NOW/BASE + tags + availability). Keep both columns
  substantive; avoid dead space.
- **Motion:** all animations are gated behind `prefers-reduced-motion` in
  `index.css`. Any new animation must respect that.

## Quality floor (don't regress)

- Responsive down to mobile (hamburger menu < md breakpoint).
- Dark AND light mode must both look right — always add `dark:` variants.
- Keyboard focus is visible (`:focus-visible` ring in `index.css`).
- External links use `target="_blank"` + `rel="noopener noreferrer"`.
- All nav anchors, social links, and project links must resolve.

## Deployment (Vercel)

- Framework preset: **Vite**. Build command `npm run build`, output dir `dist/`.
- Because this app is in a subfolder, set Vercel's **Root Directory** to
  `profile-website`.
- No env vars, no server — it's a static SPA.

## Known TODO / placeholders

- Assent internship bullets in `experience[0].points` are placeholders — replace
  with real responsibilities.
- `projects[0].links.github` points to the profile, not the ScholarScout repo —
  update to the real repo URL, and add `links.demo` if a live demo exists.
- Add more projects as they ship. Note: the Projects grid auto-switches from a
  centered single card to a 2-column layout once there are 2+ projects.
