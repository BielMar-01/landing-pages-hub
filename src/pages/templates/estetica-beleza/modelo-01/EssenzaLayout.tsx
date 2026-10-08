import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Leaf, Menu, MessageCircle } from 'lucide-react'
import { useReveal } from '../../../../hooks/useReveal'
import { useScrolled } from '../../../../hooks/useScrolled'
import { BeautyDialog, BeautyPhoto } from '../shared/BeautyInteractions'
import type { BeautyImage } from '../shared/beauty-data'
import { essenzaPath } from '../shared/beauty-data'
import './modelo-01.css'

const navigation = [['Início', ''], ['Tratamentos', 'tratamentos'], ['Sobre', 'sobre'], ['Profissionais', 'profissionais'], ['Estrutura', 'estrutura'], ['Conteúdos', 'conteudos'], ['Contato', 'contato']] as const
export function EssenzaLogo() {
  return <span className="en-logo"><svg viewBox="0 0 60 70" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.5"><path d="M30 5C10 31 13 47 30 62c17-15 20-31 0-57Z"/><path d="M30 62C10 59 3 42 4 25c18 2 27 16 26 37Zm0 0c20-3 27-20 26-37-18 2-27 16-26 37ZM30 31v31"/></g></svg><span>ESSENZA<br />NATURAL<small>ESTÉTICA & BEM-ESTAR</small></span></span>
}
export function EssenzaButton({ to = essenzaPath('agendamento'), children = 'Agendar avaliação', outline = false }: { to?: string; children?: ReactNode; outline?: boolean }) {
  return <Link className={`en-button${outline ? ' en-button--outline' : ''}`} to={to}>{children}<ArrowRight size={17} /></Link>
}
export function EssenzaTitle({ label, title, text, to, link }: { label: string; title: ReactNode; text?: string; to?: string; link?: string }) {
  return <div className="en-section-title"><div><span className="en-label">{label}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>{to && <Link className="en-link" to={to}>{link || 'Conheça mais'}<ArrowRight size={17} /></Link>}</div>
}
export function EssenzaInnerHero({ label, title, text, image }: { label: string; title: ReactNode; text: string; image: BeautyImage }) {
  return <section className="en-inner-hero"><div className="en-container en-inner-grid"><div><Link to={essenzaPath()} className="en-link"><ArrowLeft size={15} />Início</Link><span className="en-label">{label}</span><h1>{title}</h1><p>{text}</p></div><BeautyPhoto image={image} alt={`Fotografia ilustrativa — ${label}`} eager /></div></section>
}
export function EssenzaLayout({ children }: { children: ReactNode }) {
  const reveal = useReveal()
  const scrolled = useScrolled()
  const [menu, setMenu] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)
  return <div className="lp-estetica-beleza-1" ref={reveal}><a className="en-skip" href="#en-main">Ir para o conteúdo</a><header className={`en-header${scrolled ? ' is-scrolled' : ''}`}><div><Link to={essenzaPath()} aria-label="Essenza Natural — início"><EssenzaLogo /></Link><nav aria-label="Navegação principal" className="en-desktop-nav">{navigation.map(([label, page]) => <NavLink key={page} to={essenzaPath(page)} end={!page}>{label}</NavLink>)}</nav><EssenzaButton /><button className="en-menu-button" aria-label="Abrir menu" aria-expanded={menu} aria-controls="en-mobile-nav" onClick={() => setMenu(true)}><Menu /></button></div></header>
    <main id="en-main" tabIndex={-1}>{children}</main>
    <footer className="en-footer"><div className="en-container"><div className="en-footer-grid"><div><Link to={essenzaPath()} aria-label="Essenza Natural — início"><EssenzaLogo /></Link><p>Beleza que respeita<br />a sua essência.</p><span className="en-label">Cuidado, em cada detalhe.</span></div><div><h3>Explore a Essenza</h3>{navigation.slice(1, 5).map(([label, page]) => <Link key={page} to={essenzaPath(page)}>{label}</Link>)}</div><div><h3>Estamos por perto</h3><Link to={essenzaPath('faq')}>Perguntas frequentes</Link><Link to={essenzaPath('contato')}>Contato e localização</Link><Link to={essenzaPath('agendamento')}>Agendar avaliação</Link><p>Seg. a sex., 9h às 18h<br />São Paulo · unidade ilustrativa</p></div><div><h3>Um momento para você</h3><p>Comece com uma conversa.<br />Conheça nosso cuidado.</p><EssenzaButton /><button className="en-link" onClick={() => setNotice('Redes sociais')}>Nossas redes<ArrowRight size={16} /></button></div></div><div className="en-footer-bottom"><small>© {new Date().getFullYear()} Essenza Natural · Clínica, profissionais e relatos fictícios.</small><div><button onClick={() => setNotice('Privacidade')}>Privacidade</button><button onClick={() => setNotice('Termos de uso')}>Termos</button><Link to="/estetica-beleza"><ArrowLeft size={14} />Modelos de estética</Link></div></div></div></footer>
    <button className="en-concierge" aria-label="Conhecer o contato demonstrativo" onClick={() => setNotice('Vamos conversar')}><MessageCircle size={23} /></button>
    <BeautyDialog title="Bem-vindo à Essenza" open={menu} onClose={() => setMenu(false)} menu><EssenzaLogo /><nav id="en-mobile-nav" aria-label="Menu móvel">{navigation.map(([label, page]) => <NavLink onClick={() => setMenu(false)} key={page} to={essenzaPath(page)} end={!page}>{label}<ArrowRight size={17} /></NavLink>)}<Link className="en-button" onClick={() => setMenu(false)} to={essenzaPath('agendamento')}>Agendar avaliação<ArrowRight size={17} /></Link></nav><Leaf size={90} strokeWidth={.5} className="en-menu-leaf" /></BeautyDialog>
    <BeautyDialog title={notice || ''} open={notice !== null} onClose={() => setNotice(null)}><p>A Essenza Natural é uma clínica fictícia. Os formulários funcionam somente como simulação no navegador, sem envio, armazenamento permanente ou reserva.</p><p>{notice === 'Redes sociais' ? 'Os perfis sociais serão conectados ao adaptar este modelo para uma clínica real.' : 'Você pode usar dados fictícios para experimentar a navegação. Contatos e localização são ilustrativos.'}</p><EssenzaButton to={essenzaPath('contato')}>Conhecer o contato</EssenzaButton></BeautyDialog>
  </div>
}
export function EssenzaClosing() {
  return <section className="en-closing"><div className="en-container"><Leaf size={50} strokeWidth={.7} /><div><span className="en-label">Um tempo que é seu</span><h2>Sua essência.<br /><em>O nosso ponto de partida.</em></h2></div><EssenzaButton /></div></section>
}
