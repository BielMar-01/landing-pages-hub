import { useEffect, useId, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronDown, Clock3, Heart, MapPin, Menu, MessageCircle, ShieldCheck, Sparkles, Users, X } from 'lucide-react'
import { useScrolled } from '../../../../hooks/useScrolled'
import { useReveal } from '../../../../hooks/useReveal'
import { bookingPath, doctors, photoPath, primeNavigation, primePath, specialties } from './prime-data'
import './branding/essencial-prime.tokens.css'
import './modelo-02.css'

export function PrimeLogo() {
  return <span className="ep-logo"><svg viewBox="0 0 60 66" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"><path d="M30 4c-13 13-15 26 0 42C45 30 43 17 30 4Z"/><path d="M30 54C13 53 7 39 9 20c13 2 19 12 21 26M30 54c17-1 23-15 21-34-13 2-19 12-21 26"/><path d="M30 59C13 64 3 50 2 39c14-1 24 5 28 15M30 59c17 5 27-9 28-20-14-1-24 5-28 15M30 59v5"/><path d="m30 17-3 5 3 5 3-5-3-5Z"/></g></svg><span><strong>Essencial Prime</strong><small>MEDICINA PARTICULAR</small></span></span>
}
export function PrimeButton({ to = bookingPath(), children = 'Agendar consulta', secondary = false }: { to?: string; children?: ReactNode; secondary?: boolean }) {
  return <Link className={`ep-button${secondary ? ' ep-button--outline' : ''}`} to={to}>{children}<ArrowRight size={17} aria-hidden="true" /></Link>
}
export function PrimePhoto({ name, alt, className = '', eager = false, position }: { name: string; alt: string; className?: string; eager?: boolean; position?: string }) {
  return <img className={`ep-photo ${className}`} src={photoPath(name)} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" width={1536} height={1024} style={position ? { objectPosition: position } : undefined} />
}
export function PrimeModal({ title, open, onClose, children, className = '' }: { title: string; open: boolean; onClose: () => void; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  useEffect(() => {
    const dialog = ref.current
    if (!dialog || !open) return
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const overflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => { dialog.close(); document.body.style.overflow = overflow; previous?.focus() }
  }, [open])
  return <dialog className={`ep-modal ${className}`} ref={ref} aria-labelledby={titleId} onCancel={event => { event.preventDefault(); onClose() }} onClick={event => { if (event.target === event.currentTarget) onClose() }}><div className="ep-modal__body"><button className="ep-icon-button ep-modal__close" onClick={onClose} aria-label="Fechar janela"><X /></button><span className="ep-eyebrow">Essencial Prime</span><h2 id={titleId}>{title}</h2>{children}</div></dialog>
}
export function PrimeLayout({ children }: { children: ReactNode }) {
  const ref = useReveal()
  const scrolled = useScrolled(32)
  const [menu, setMenu] = useState(false)
  const [information, setInformation] = useState<string | null>(null)
  const closeMenu = () => setMenu(false)
  return <div className="lp-medico-2" ref={ref} id="ep-top">
    <a className="ep-skip" href="#ep-main">Ir para o conteúdo</a>
    <header className={`ep-header${scrolled ? ' ep-header--scrolled' : ''}`}><div className="ep-container ep-header__row">
      <Link to={primePath()} aria-label="Essencial Prime — início"><PrimeLogo /></Link>
      <nav className="ep-desktop-nav" aria-label="Navegação principal">{primeNavigation.map(([label, path]) => <NavLink key={path} to={primePath(path)} end={path === ''}>{label}</NavLink>)}</nav>
      <div className="ep-header__actions"><PrimeButton /><button className="ep-icon-button ep-menu-button" aria-label="Abrir menu" aria-expanded={menu} aria-controls="ep-mobile-nav" onClick={() => setMenu(true)}><Menu /></button></div>
    </div></header>
    <PrimeModal className="ep-drawer" title="Explore a Essencial Prime" open={menu} onClose={closeMenu}><nav id="ep-mobile-nav" className="ep-mobile-nav" aria-label="Navegação móvel">{[...primeNavigation, ['Dúvidas frequentes', 'faq'] as const].map(([label, path], index) => <NavLink onClick={closeMenu} key={path} to={primePath(path)} end={path === ''}><span>0{index + 1}</span>{label}<ArrowRight size={17} /></NavLink>)}<Link to={bookingPath()} className="ep-button" onClick={closeMenu}>Agendar consulta<CalendarDays size={18} /></Link><Link to="/medico" className="ep-back" onClick={closeMenu}><ArrowLeft size={16} />Voltar aos modelos</Link></nav></PrimeModal>
    <main id="ep-main" tabIndex={-1}>{children}</main>
    <footer className="ep-footer"><div className="ep-container"><div className="ep-footer__grid"><div><Link to={primePath()} aria-label="Essencial Prime — início"><PrimeLogo /></Link><p>Medicina particular em um<br />novo padrão de cuidado.</p><span className="ep-eyebrow">Tempo. Presença. Cuidado.</span></div><div><h3>Conheça a Prime</h3>{primeNavigation.slice(1, 5).map(([label, path]) => <Link key={path} to={primePath(path)}>{label}</Link>)}</div><div><h3>Estamos por perto</h3><Link to={primePath('contato')}>Contato e localização</Link><Link to={primePath('faq')}>Dúvidas frequentes</Link><Link to={primePath('conteudos')}>Conteúdos em saúde</Link><Link to={bookingPath()}>Agendar consulta</Link></div><div><h3>Seu cuidado começa aqui</h3><p>Segunda a sexta, 8h às 18h<br />São Paulo · unidade ilustrativa</p><PrimeButton /><button className="ep-footer__social" onClick={() => setInformation('Redes sociais')}>Conheça nossas redes <ArrowRight size={15} /></button></div></div>
    <div className="ep-footer__bottom"><small>© {new Date().getFullYear()} Essencial Prime. Clínica, profissionais e registros fictícios. Site demonstrativo.</small><div><button onClick={() => setInformation('Privacidade e proteção de dados')}>Privacidade</button><button onClick={() => setInformation('Termos de uso')}>Termos</button><Link to="/medico"><ArrowLeft size={14} />Modelos de Medicina</Link></div></div></div></footer>
    <button className="ep-whatsapp" aria-label="Informações sobre o WhatsApp demonstrativo" onClick={() => setInformation('Concierge Prime')}><MessageCircle size={24} /></button>
    <PrimeModal title={information || ''} open={information !== null} onClose={() => setInformation(null)}><p>Você está explorando uma clínica fictícia. Formulários e agendamentos são simulações no navegador, sem envio de dados, cobrança ou atendimento real.</p><p>{information === 'Redes sociais' ? 'Os perfis sociais podem ser conectados quando este modelo for adaptado para uma clínica real.' : 'Os dados digitados não são salvos permanentemente. Use informações fictícias para conhecer a experiência.'}</p><PrimeButton to={primePath('contato')}>Conhecer o contato</PrimeButton></PrimeModal>
  </div>
}
export function PrimeHero({ eyebrow, title, text, image, home = false, children, position }: { eyebrow: string; title: ReactNode; text: string; image: string; home?: boolean; children?: ReactNode; position?: string }) {
  return <section className={`ep-hero${home ? ' ep-hero--home' : ''}`}>
    {home ? <picture className="ep-hero__picture"><source media="(max-width: 767px)" srcSet={photoPath('doctor-profile')} /><PrimePhoto name={image} alt="Fotografia ilustrativa da experiência de cuidado Essencial Prime" className="ep-hero__image" eager position={position} /></picture> : <PrimePhoto name={image} alt="Fotografia ilustrativa da experiência de cuidado Essencial Prime" className="ep-hero__image" eager position={position} />}
    <div className="ep-container ep-hero__content">{!home && <nav aria-label="Caminho da página" className="ep-breadcrumb"><Link to={primePath()}>Início</Link><span aria-hidden="true">/</span><span>{eyebrow}</span></nav>}<div className="ep-hero__copy"><span className="ep-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p><div className="ep-actions">{children || <><PrimeButton /><PrimeButton secondary to={primePath('contato')}>Fale com nossa equipe</PrimeButton></>}</div></div>{home && <div className="ep-hero__signature"><span>Uma experiência feita para você</span><span>São Paulo · Medicina Particular</span></div>}</div>
    <svg className="ep-hero__botanical" viewBox="0 0 200 400" fill="none" aria-hidden="true"><path d="M80 400Q90 190 10 10Q160 90 80 400M80 330Q0 200 10 140Q130 175 80 330M85 270Q160 80 190 50Q210 180 85 270" stroke="currentColor" /></svg>
  </section>
}
export function PrimeSectionTitle({ eyebrow, title, text, link, to }: { eyebrow: string; title: ReactNode; text?: string; link?: string; to?: string }) {
  return <div className="ep-section-title"><div><span className="ep-eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>{link && <Link className="ep-text-link" to={to || primePath()}>{link}<ArrowRight size={17} /></Link>}</div>
}
const benefits = [{ Icon: Heart, title: 'Cuidado humano', text: 'Escuta que respeita a sua história.' }, { Icon: Clock3, title: 'Tempo para você', text: 'Presença em cada conversa.' }, { Icon: ShieldCheck, title: 'Privacidade', text: 'Atenção em um ambiente reservado.' }, { Icon: Users, title: 'Uma equipe próxima', text: 'Cuidado em diferentes fases da vida.' }]
export function PrimeBenefits() {
  return <div className="ep-benefits"><div className="ep-container">{benefits.map(({ Icon, title, text }) => <div key={title}><Icon size={29} strokeWidth={1.2} aria-hidden="true" /><span><strong>{title}</strong><small>{text}</small></span></div>)}</div></div>
}
export function PrimeSpecialtyCards({ items = specialties }: { items?: typeof specialties }) {
  return <div className="ep-specialties-grid">{items.map((item, i) => <article className="ep-specialty-card" key={item.id}><Link to={item.id === 'cardiologia' ? primePath('especialidades/cardiologia') : bookingPath(item.id)}><div className="ep-card-photo"><PrimePhoto name={item.image} alt={`Atendimento ilustrativo de ${item.name}`} /></div><div className="ep-card-body"><span className="ep-card-number">0{i + 1}</span><h3>{item.name}</h3><p>{item.description}</p><span className="ep-text-link">{item.id === 'cardiologia' ? 'Conhecer a especialidade' : 'Agendar nesta especialidade'}<ArrowRight size={16} /></span></div></Link></article>)}</div>
}
export function PrimeDoctorCards({ items = doctors }: { items?: typeof doctors }) {
  const [selected, setSelected] = useState<(typeof doctors)[number] | null>(null)
  return <><div className="ep-doctors-grid">{items.map(doctor => <article className="ep-doctor-card" key={doctor.id}><div className={`ep-card-photo${doctor.image === 'team' ? ' ep-card-photo--crop' : ''}`} style={{ '--portrait-x': doctor.position.split(' ')[0] } as CSSProperties}><PrimePhoto name={doctor.image} alt={`Retrato ilustrativo de ${doctor.name}`} position={doctor.position} /></div><div className="ep-card-body"><span className="ep-eyebrow">{specialties.find(item => item.id === doctor.specialty)?.name}</span><h3>{doctor.name}</h3><small>CRM/SP 000000 · RQE 000000</small>{doctor.id === 'helena-martins' ? <Link className="ep-text-link" to={primePath('equipe/helena-martins')}>Conhecer o perfil<ArrowRight size={16} /></Link> : <button className="ep-text-link" onClick={() => setSelected(doctor)}>Conhecer o perfil<ArrowRight size={16} /></button>}<PrimeButton to={bookingPath(doctor.specialty, doctor.id)}>Agendar</PrimeButton></div></article>)}</div><PrimeModal title={selected?.name || ''} open={selected !== null} onClose={() => setSelected(null)}>{selected && <><p>Perfil demonstrativo de {specialties.find(item => item.id === selected.specialty)?.name}. Atendimento particular com escuta e atenção individual.</p><p className="ep-note">CRM/SP 000000 · RQE 000000. Nome, trajetória e fotografia ilustrativos.</p><PrimeButton to={bookingPath(selected.specialty, selected.id)}>Agendar com este profissional</PrimeButton></>}</PrimeModal></>
}
export function PrimeCTA() {
  return <section className="ep-cta"><PrimePhoto name="clinic-detail" alt="Detalhe de um ambiente acolhedor" /><div className="ep-container"><div><span className="ep-eyebrow">Seu próximo capítulo de cuidado</span><h2>Reserve um tempo<br />para o que é essencial.</h2><p>O primeiro passo é uma conversa. Estamos aqui para ouvir você.</p></div><div><PrimeButton /><PrimeButton secondary to={primePath('contato')}>Fale com o concierge</PrimeButton></div></div></section>
}
export function PrimeLocation() {
  return <div className="ep-location"><div className="ep-map" role="img" aria-label="Mapa ilustrativo da região da Avenida Paulista, sem localização de uma clínica real"><div className="ep-map__avenue">AVENIDA PAULISTA</div><span className="ep-map__park">Área verde</span><div className="ep-map__pin"><MapPin size={34} /><strong>Essencial Prime</strong><small>Localização ilustrativa</small></div></div><div className="ep-location__copy"><span className="ep-eyebrow">Um lugar para acolher</span><h2>Por perto.<br />Com todo o cuidado.</h2><p>Av. Paulista, 1000 · São Paulo/SP<br /><small>Endereço demonstrativo, sem unidade real.</small></p><p><Clock3 size={17} />Segunda a sexta, 8h às 18h</p><a className="ep-text-link" href="https://www.google.com/maps/search/?api=1&query=Avenida+Paulista+Sao+Paulo" target="_blank" rel="noreferrer">Explorar a região no mapa<ArrowRight size={16} /></a></div></div>
}
export function PrimeAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return <div className={`ep-accordion${open ? ' ep-accordion--open' : ''}`}><h3><button aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>{question}<ChevronDown size={19} /></button></h3><div id={id} hidden={!open}><p>{answer}</p></div></div>
}
export function PrimeEmpty({ children, reset }: { children: ReactNode; reset: () => void }) {
  return <div className="ep-empty" role="status"><Sparkles size={28} /><h3>Nenhum resultado por aqui.</h3><p>{children}</p><button className="ep-button" onClick={reset}>Limpar filtros<ArrowRight size={16} /></button></div>
}
export function PrimeCheckList({ items }: { items: string[] }) {
  return <ul className="ep-check-list">{items.map(item => <li key={item}><Check size={18} aria-hidden="true" />{item}</li>)}</ul>
}

