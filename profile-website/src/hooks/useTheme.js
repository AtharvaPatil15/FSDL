import { useCallback, useEffect, useState } from 'react'

// Reads the initial theme from the <html> class that the inline script in
// index.html already set (so there's no flash), then keeps React state,
// the DOM class, and localStorage in sync.
function getInitialTheme() {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      // Ignore write failures (e.g. private mode).
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
