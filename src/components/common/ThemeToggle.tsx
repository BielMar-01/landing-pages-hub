import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    try {
      const savedTheme = localStorage.getItem('landinghub-theme')
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    } catch { /* Storage can be disabled; theme remains usable. */ }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('landinghub-theme', theme) } catch { /* Optional preference persistence. */ }
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        theme === 'light'
          ? 'Ativar modo escuro'
          : 'Ativar modo claro'
      }
      title={
        theme === 'light'
          ? 'Modo escuro'
          : 'Modo claro'
      }
    >
      {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
    </button>
  )
}
