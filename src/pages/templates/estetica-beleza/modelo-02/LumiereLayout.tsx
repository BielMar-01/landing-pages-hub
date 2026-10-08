import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Menu, MessageCircle } from 'lucide-react'
import { useReveal } from '../../../../hooks/useReveal'
import { useScrolled } from '../../../../hooks/useScrolled'
import { BeautyDialog, BeautyPhoto } from '../shared/BeautyInteractions'
import { lumierePath } from '../shared/beauty-data'
import type { BeautyImage } from '../shared/beauty-data'
import './modelo-02.css'

const navigation = [['Início', ''], ['Tratamentos', 'tratamentos'], ['A experiência', 'experiencia'], ['Especialistas', 'profissionais'], ['A clínica', 'estrutura'], ['Journal', 'conteudos'], ['Contato', 'contato']] as const
export function LumiereLogo() {
  return <span className="lm-logo"><svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1"><path d="M32 3C13 23 17 43 32 57c15-14 19-34 0-54Z"/><path d="M32 57C13 55 3 36 4 18c20 3 29 18 28 39Zm0 0c19-2 29-21 28-39-20 3-29 18-28 39Z"/><path d="M32 23v38M15 35l17 22 17-22"/></g></svg><span>LUMIÈRE<small>A E S T H E T I C</small></span></span>
}
export function LumiereButton({ to = lumierePath('agendamento'), children = 'Agendar avaliação', outline = false }: { to?: string; children?: ReactNode; outline?: boolean }) {
  return <Link className={`lm-button${outline ? ' lm-button--outline' : ''}`} to={to}>{children}<ArrowRight size={17} /></Link>
}
export function LumiereHeading({ number, label, title, text, to, link }: { number?: string; label: string; title: ReactNode; text?: string; to?: string; link?: string }) {
  return <div className="lm-heading"><div><span className="lm-label">{number && <b>{number}</b>}{label}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>{to && <Link className="lm-text-link" to={to}>{link || 'Explore a experiência'}<ArrowRight size={17} /></Link>}</div>
}
export function LumiereInnerHero({ label, title, text, image }: { label: string; title: ReactNode; text: string; image: BeautyImage }) {
  return <section className="lm-inner-hero"><BeautyPhoto image={image} alt={`Fotografia ilustrativa — ${label}`} eager /><div className="lm-container"><Link className="lm-hero-back" to={lumierePath()}><ArrowLeft size={16} />Início</Link><span className="lm-label">{label}</span><h1>{title}</h1><p>{text}</p></div></section>
}
export function LumiereLayout({ children }: { children: ReactNode }) {
  const ref = useReveal()
  const scrolled = useScrolled(30)
  const [menu, setMenu] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)
  return <div className="lp-estetica-beleza-2" ref={ref}><a className="lm-skip" href="#lm-main">Ir para o conteúdo</a><header className={`lm-header${scrolled ? ' is-scrolled' : ''}`}><div className="lm-container"><Link aria-label="Lumière Aesthetic — início" to={lumierePath()}><LumiereLogo /></Link><nav className="lm-nav" aria-label="Navegação principal">{navigation.map(([label, page]) => <NavLink key={page} to={lumierePath(page)} end={!page}>{label}</NavLink>)}</nav><LumiereButton /><button className="lm-menu-button" onClick={() => setMenu(true)} aria-expanded={menu} aria-controls="lm-mobile-nav" aria-label="Abrir menu"><Menu /></button></div></header>
    <main id="lm-main" tabIndex={-1}>{children}</main>
    <footer className="lm-footer"><div className="lm-container"><div className="lm-footer-top"><div><Link to={lumierePath()} aria-label="Lumière Aesthetic — início"><LumiereLogo /></Link><p>A excelência também<br /><em>pode ser sentida.</em></p></div><div><h3>A experiência Lumière</h3>{navigation.slice(1, 5).map(([label, page]) => <Link key={page} to={lumierePath(page)}>{label}</Link>)}</div><div><h3>Private concierge</h3><Link to={lumierePath('consulta-particular')}>Consulta particular</Link><Link to={lumierePath('contato')}>Contato e localização</Link><Link to={lumierePath('faq')}>Perguntas frequentes</Link><Link to={lumierePath('conteudos')}>Journal</Link></div><div><span className="lm-label">Seu próximo momento</span><p>Uma conversa reservada.<br />Uma atenção que é sua.</p><LumiereButton /><button className="lm-text-link" onClick={() => setNotice('Redes sociais')}>Nossas redes<ArrowRight size={16} /></button></div></div><div className="lm-footer-bottom"><small>© {new Date().getFullYear()} Lumière Aesthetic · Clínica e profissionais fictícios.</small><div><button onClick={() => setNotice('Privacidade')}>Privacidade</button><button onClick={() => setNotice('Termos de uso')}>Termos</button><Link to="/estetica-beleza"><ArrowLeft size={14} />Modelos de estética</Link></div></div></div></footer>
    <button className="lm-concierge" aria-label="Abrir informações do concierge demonstrativo" onClick={() => setNotice('Private concierge')}><MessageCircle size={22} /><span>Concierge</span></button>
    <BeautyDialog title="Explore a Lumière" open={menu} onClose={() => setMenu(false)} menu><LumiereLogo /><nav id="lm-mobile-nav" aria-label="Menu móvel">{navigation.map(([label, page]) => <NavLink key={page} onClick={() => setMenu(false)} to={lumierePath(page)} end={!page}><span>{label}</span><ArrowRight size={17} /></NavLink>)}<Link className="lm-button" to={lumierePath('agendamento')} onClick={() => setMenu(false)}>Agendar avaliação<ArrowRight size={17} /></Link></nav></BeautyDialog>
    <BeautyDialog title={notice || ''} open={notice !== null} onClose={() => setNotice(null)}><p>A Lumière Aesthetic é uma clínica fictícia. Você pode explorar a experiência com dados demonstrativos, sem envio de informações, cobrança ou reserva real.</p><p>{notice === 'Redes sociais' ? 'Os perfis sociais podem ser conectados ao adaptar este projeto para uma clínica real.' : 'Os contatos e a localização são ilustrativos. Nenhum dado de formulário é armazenado permanentemente.'}</p><LumiereButton to={lumierePath('contato')}>Conhecer o contato</LumiereButton></BeautyDialog>
  </div>
}
export function LumiereClosing() {
  return <section className="lm-closing"><div className="lm-container"><span className="lm-label">A sua experiência começa aqui</span><h2>Mais que estética.<br /><em>Um momento que é seu.</em></h2><LumiereButton /></div><svg viewBox="0 0 400 200" fill="none" aria-hidden="true"><path d="M0 195Q230-150 400 190M0 180Q210-120 400 180M0 160Q190-80 400 170" stroke="currentColor" /></svg></section>
}
