import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Menu, MessageCircle } from 'lucide-react'
import { useReveal } from '../../../../hooks/useReveal'
import { useScrolled } from '../../../../hooks/useScrolled'
import { BeautyDialog } from '../shared/BeautyInteractions'
import { beautyModelPath } from '../shared/beauty-models'
import './modelo-05.css'
const navigation = [["Objetivos","objetivos"],["Protocolos","protocolos"],["Jornada","jornada"],["Tecnologia","tecnologia"],["Estrutura","estrutura"]]
export function SculptLink({ page = 'agendamento', children = 'Agendar avaliação' }: { page?: string; children?: ReactNode }) {
 return <Link className="sculpt-link" to={beautyModelPath('05', page)}>{children}<ArrowRight size={17} /></Link>
}
export function SculptLayout({ children }: { children: ReactNode }) {
 const root = useReveal()
 const scrolled = useScrolled(24)
 const [menu, setMenu] = useState(false)
 const [notice, setNotice] = useState<string | null>(null)
 return <div ref={root} className="lp-estetica-beleza-5"><a className="bt-skip" href="#sculpt-main">Ir para o conteúdo</a>
 <header className={'sculpt-header' + (scrolled ? ' is-scrolled' : '')}><div className="sculpt-wrap"><Link className="sculpt-logo" to="/estetica-beleza/modelo-05" aria-label="Sculpt Body — início"><b aria-hidden="true">S</b><span>Sculpt Body<small>ESTÉTICA & CUIDADO</small></span></Link><nav aria-label="Navegação principal"><NavLink to="/estetica-beleza/modelo-05" end>Início</NavLink>{navigation.map(([label,page])=><NavLink key={page} to={beautyModelPath('05',page)}>{label}</NavLink>)}</nav><div className="sculpt-header-action"><SculptLink /></div><button className="bt-menu" onClick={()=>setMenu(true)} aria-expanded={menu} aria-controls="sculpt-mobile-nav" aria-label="Abrir menu"><Menu /></button></div></header>
 <main id="sculpt-main" tabIndex={-1}>{children}</main>
 <footer className="sculpt-footer"><div className="sculpt-wrap"><div className="sculpt-footer-grid"><div><Link className="sculpt-footer-name" to="/estetica-beleza/modelo-05">Sculpt Body</Link><p>Seu corpo. Seu cuidado.</p><p className="bi-note">Clínica, profissionais e contatos fictícios.</p></div><div><h3>Explore</h3>{navigation.map(([label,page])=><Link key={page} to={beautyModelPath('05',page)}>{label}</Link>)}</div><div><h3>Seu próximo cuidado</h3><SculptLink /><button onClick={()=>setNotice('Contato demonstrativo')}>Informações de contato</button><button onClick={()=>setNotice('Privacidade')}>Privacidade e uso</button></div></div><div className="sculpt-footer-bottom"><small>© {new Date().getFullYear()} Sculpt Body · Experiência demonstrativa.</small><Link to="/estetica-beleza"><ArrowLeft size={15} />Todos os modelos de estética</Link></div></div></footer>
 <button className="bt-contact" aria-label="Abrir contato demonstrativo" onClick={()=>setNotice('Vamos conversar')}><MessageCircle size={22}/></button>
 <BeautyDialog title="Explore Sculpt Body" open={menu} onClose={()=>setMenu(false)} menu><nav id="sculpt-mobile-nav" aria-label="Menu móvel"><NavLink to="/estetica-beleza/modelo-05" end onClick={()=>setMenu(false)}>Início</NavLink>{navigation.map(([label,page])=><NavLink key={page} to={beautyModelPath('05',page)} onClick={()=>setMenu(false)}>{label}<ArrowRight size={18}/></NavLink>)}<Link to="/estetica-beleza/modelo-05/agendamento" onClick={()=>setMenu(false)}>Agendar avaliação<ArrowRight size={18}/></Link></nav></BeautyDialog>
 <BeautyDialog title={notice || ''} open={notice !== null} onClose={()=>setNotice(null)}><p>Explore a experiência com dados fictícios. Nenhuma informação é enviada ou armazenada permanentemente, e não há reserva, cobrança ou contato real.</p><p>Localização ilustrativa: São Paulo. Redes, telefone e serviços devem ser definidos pela clínica ao personalizar o projeto.</p><SculptLink /></BeautyDialog>
 </div>
}
