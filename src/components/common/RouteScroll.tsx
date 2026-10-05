import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { templates } from '../../data/templates'
import { categories } from '../../data/categories'
import { PRIME_BASE, primePageTitles } from '../../pages/templates/medico/modelo-02/prime-data'

export function RouteScroll() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const template = templates.find(item => item.route === pathname)
    const category = categories.find(item => `/${item.slug}` === pathname)
    const collection = template ? categories.find(item => item.slug === template.categorySlug) : undefined
    const primeTitle = pathname === PRIME_BASE ? primePageTitles[''] : pathname.startsWith(`${PRIME_BASE}/`) ? primePageTitles[pathname.slice(PRIME_BASE.length + 1)] : undefined
    document.title = pathname === '/' ? 'OrbisCore | Landing Pages Hub' : template?.id === 'medico-01' ? 'Essencial Care | Modelo Médico | OrbisCore' : template ? `${template.name} | ${collection?.name || 'Modelo'} | OrbisCore` : category ? `${category.slug === 'medico' ? 'Modelos para Médicos' : `Modelos de ${category.name}`} | OrbisCore` : 'Página não encontrada | OrbisCore'
    if (primeTitle) document.title = `${primeTitle} | Essencial Prime`
    const frame = requestAnimationFrame(() => {
      let anchor = hash.slice(1)
      try { anchor = decodeURIComponent(anchor) } catch { /* Keep malformed fragments harmless. */ }
      const target = hash ? document.getElementById(anchor) : null
      if (target) target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
      else window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])
  return null
}
