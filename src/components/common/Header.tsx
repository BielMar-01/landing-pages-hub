import { ArrowUpRight, Menu, Orbit, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrolled } from '../../hooks/useScrolled'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const toggle = useRef<HTMLButtonElement>(null)
  const nav = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    nav.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() }
      if (event.key === 'Tab') {
        const elements = [toggle.current, ...Array.from(nav.current?.querySelectorAll<HTMLAnchorElement>('a') || [])].filter(Boolean) as HTMLElement[]
        const first = elements[0], last = elements[elements.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    const media = window.matchMedia('(min-width: 960px)')
    const resize = () => { if (media.matches) setOpen(false) }
    media.addEventListener('change', resize)
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKey); media.removeEventListener('change', resize) }
  }, [open])
  return <header className={`orbis-header ${scrolled ? 'is-scrolled' : ''}`}><div className="container orbis-header-row">
    <Link to="/" className="orbis-brand" aria-label="OrbisCore, página inicial" onClick={() => setOpen(false)}><Orbit size={32} strokeWidth={1.5} /><span>OrbisCore<small>Template Hub</small></span></Link>
    <div className="orbis-header-controls"><ThemeToggle /><button ref={toggle} className="orbis-menu-toggle" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="orbis-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    <nav ref={nav} id="orbis-navigation" className={`orbis-navigation ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
      {[['/', 'Início'], ['/#categorias', 'Categorias'], ['/#recursos', 'Recursos'], ['/#modelos', 'Modelos']].map(([to,label]) => <Link to={to} key={label} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link className="orbis-button" to="/#modelos" onClick={() => setOpen(false)}>Explorar modelos<ArrowUpRight size={16} /></Link>
    </nav>
  </div></header>
}
