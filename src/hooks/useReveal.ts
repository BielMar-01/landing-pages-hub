import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = ref.current
    if (!root || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    root.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element))
    root.classList.add('reveal-enabled')
    return () => { observer.disconnect(); root.classList.remove('reveal-enabled') }
  }, [])
  return ref
}
