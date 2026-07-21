// ---------------------------------------------------------------------------
// Single source of truth for all site content.
// Edit anything below and the whole site updates. No component changes needed.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Atharva Patil',
  initials: 'AP',
  // Drop an image in /public and set e.g. photo: '/me.jpg' to replace the
  // initials avatar. Leave null to use the gradient "AP" avatar.
  photo: '/profile_photo_lindn.jpg',
  tagline: 'Computer Engineering Student · AI, LLMs & Agentic Systems',
  hook: 'I build end-to-end AI systems — from RAG pipelines to real-world apps.',
  location: 'Pune, India',
  status: 'Interning at Assent',
}

export const about = {
  // Shown as the About section body. Each string is its own paragraph.
  paragraphs: [
    'I’m a Computer Engineering student with a strong foundation in logical thinking, teamwork, and continuous learning — the kind of person who’d rather ship a working prototype than talk about one.',
    'My focus is AI and large language models: prompt engineering, retrieval-augmented generation, and natural language understanding. I like turning theory into systems that actually run, whether that’s a semantic search pipeline over 20,000+ papers or a streaming Discord bot.',
    'Right now I’m interning at Assent and always looking for the next hard problem to build my way through.',
  ],
  // Quick facts shown in the sidebar card.
  facts: [
    { label: 'Focus', value: 'AI / LLM Systems' },
    { label: 'Based in', value: 'Pune, India' },
    { label: 'Currently', value: 'Intern @ Assent' },
    { label: 'Learning', value: 'Agentic workflows' },
  ],
}

export const education = {
  school: 'Pimpri Chinchwad College of Engineering (PCCOE)',
  location: 'Akurdi, Pune',
  degree: 'B.Tech in Computer Engineering',
  period: '2023 – 2027',
  details: [
    { label: 'Year', value: 'T.Y. B.Tech (Third Year)' },
    { label: 'Division', value: 'C' },
    { label: 'PRN', value: '123B1B214' },
  ],
}

// Most recent first. Order here is the order shown on the timeline.
export const experience = [
  {
    role: 'Intern',
    org: 'Assent',
    period: 'Dec 2025 – Present',
    current: true,
    points: [
      'Contributing to real-world software projects as part of the engineering team.',
      // Edit these bullets with your actual responsibilities at Assent.
    ],
    tags: ['Software Engineering'],
  },
  {
    role: 'Intern',
    org: 'Eduskills Virtual Internship (Google AI-ML)',
    period: '2024 · 1 month',
    current: false,
    points: [
      'Completed hands-on projects and training modules on emerging technologies.',
      'Gained practical experience across cloud computing, cybersecurity basics, and soft skills.',
    ],
    tags: ['AI/ML', 'Cloud'],
  },
  {
    role: 'Marketing Head',
    org: 'LFDT PCCOE Student Chapter',
    period: '2023 – Present',
    current: true,
    points: [
      'Led marketing for two events, planning end-to-end promotional strategy and execution.',
      'Designed digital campaigns across Instagram, WhatsApp, and college networks to grow reach.',
      'Coordinated posters and social copy with the core team and ran targeted outreach.',
    ],
    tags: ['Leadership', 'Marketing'],
  },
]

// Skills grouped by category. Add/remove groups or items freely.
export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C', 'C++'],
  },
  {
    category: 'AI / ML',
    items: [
      'Prompt Engineering',
      'RAG',
      'LLMs',
      'sentence-transformers',
      'llama.cpp',
      'NLP',
    ],
  },
  {
    category: 'Tools & Libraries',
    items: ['Selenium', 'Pandas', 'Pinecone', 'discord.py', 'Git'],
  },
  {
    category: 'Also',
    items: ['Logical Thinking', 'Research & Technical Writing', 'Teamwork'],
  },
]

// Add more objects to this array to add more project cards.
export const projects = [
  {
    name: 'ScholarScout',
    tagline: 'ArXiv RAG Discord Bot',
    description:
      'An end-to-end retrieval-augmented generation pipeline that answers research questions using a local LLM. Scrapes 20,000+ ArXiv papers, builds vector embeddings, and serves streaming answers over Discord.',
    highlights: [
      'Local LLM inference with llama.cpp',
      'Semantic search over 20k+ papers via Pinecone',
      'Async, streaming discord.py bot',
    ],
    tags: ['Python', 'RAG', 'Selenium', 'Pandas', 'Pinecone', 'llama.cpp', 'discord.py'],
    // Update these links to the actual repo / live demo.
    links: {
      github: 'https://github.com/AtharvaPatil15',
      demo: null,
    },
    featured: true,
  },
]

export const contact = {
  email: 'atharvamanojpatil@gmail.com',
  blurb:
    'Open to internships, collaborations, and interesting AI problems. The fastest way to reach me is email — I read everything.',
}

export const socials = {
  github: 'https://github.com/AtharvaPatil15',
  linkedin: 'https://www.linkedin.com/in/atharva-patil-18234b292',
  email: 'atharvamanojpatil@gmail.com',
}

// Navbar links — id must match a section's id in App.jsx.
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
