import { ArrowLeft, Menu, Phone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrolled } from '../../../../../hooks/useScrolled'
import { CareBrand, CareButton } from './CarePrimitives'

const links = [['inicio', 'Início'], ['especialidades', 'Especialidades'], ['equipe', 'Equipe'], ['estrutura', 'Estrutura'], ['conteudos', 'Conteúdos'], ['contato', 'Contato']]

export function CareHeader() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const nav = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    nav.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() }
      if (event.key === 'Tab') {
        const elements = [toggle.current, ...Array.from(nav.current?.querySelectorAll<HTMLAnchorElement>('a') || [])].filter(Boolean) as HTMLElement[]
        const first = elements[0], last = elements[elements.length - 1]
        if(event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        if(!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    const media = window.matchMedia('(min-width: 1120px)')
    const resize = () => { if(media.matches) setOpen(false) }
    document.addEventListener('keydown', onKey)
    media.addEventListener('change', resize)
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKey); media.removeEventListener('change', resize) }
  }, [open])
  return <header className={`ec-header ${scrolled ? 'ec-header--scrolled' : ''} ${open ? 'ec-header--open' : ''}`}>
    <div className="ec-container ec-header-row"><a href="#inicio" aria-label="Essencial Care, início" onClick={() => setOpen(false)}><CareBrand /></a>
      <button ref={toggle} className="ec-menu-toggle" type="button" aria-expanded={open} aria-controls="ec-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav ref={nav} id="ec-navigation" className={`ec-navigation ${open ? 'is-open' : ''}`} aria-label="Navegação da Essencial Care">
        {links.map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contato" className="ec-header-phone" onClick={() => setOpen(false)}><Phone size={15} />(11) 0000-0000</a>
        <CareButton onClick={() => setOpen(false)}>Agendar consulta</CareButton>
        <span className="ec-mobile-note">Telefone e atendimento demonstrativos.</span>
        <Link className="ec-mobile-back" to="/medico"><ArrowLeft size={16} />Voltar aos modelos</Link>
      </nav>
    </div>
  </header>
}
