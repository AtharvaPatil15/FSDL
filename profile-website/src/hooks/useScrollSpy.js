import { useEffect, useState } from 'react'

// Returns the id of the section currently in view, for highlighting nav links.
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handler = () => {
      // Activate a section once its top crosses ~1/3 down the viewport, so the
      // highlight tracks the section you're actually reading.
      const scrollPos = window.scrollY + window.innerHeight * 0.32

      // Near the bottom of the page, force the last section active so the
      // final short section can still be highlighted.
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        setActiveId(ids[ids.length - 1])
        return
      }

      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActiveId(current)
    }

    handler()
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [ids])

  return activeId
}
