import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Menu, MessageCircle } from 'lucide-react'
import { useReveal } from '../../../../hooks/useReveal'
import { useScrolled } from '../../../../hooks/useScrolled'
import { BeautyDialog } from '../shared/BeautyInteractions'
import { beautyModelPath } from '../shared/beauty-models'
import './modelo-06.css'
const navigation = [["Filosofia","filosofia"],["Tratamentos","tratamentos"],["Profissional","profissional"],["Arquitetura","arquitetura"],["Journal","journal"],["Contato","contato"]]
export function MaisonLink({ page = 'agendamento', children = 'Agendar avaliação' }: { page?: string; children?: ReactNode }) {
 return <Link className="maison-link" to={beautyModelPath('06', page)}>{children}<ArrowRight size={17} /></Link>
}
export function MaisonLayout({ children }: { children: ReactNode }) {
 const root = useReveal()
 const scrolled = useScrolled(24)
 const [menu, setMenu] = useState(false)
 const [notice, setNotice] = useState<string | null>(null)
 return <div ref={root} className="lp-estetica-beleza-6"><a className="bt-skip" href="#maison-main">Ir para o conteúdo</a>
 <header className={'maison-header' + (scrolled ? ' is-scrolled' : '')}><div className="maison-wrap"><Link className="maison-logo" to="/estetica-beleza/modelo-06" aria-label="Maison Beauté — início"><b aria-hidden="true">M/B</b><span>Maison Beauté<small>ESTÉTICA & CUIDADO</small></span></Link><nav aria-label="Navegação principal"><NavLink to="/estetica-beleza/modelo-06" end>Início</NavLink>{navigation.map(([label,page])=><NavLink key={page} to={beautyModelPath('06',page)}>{label}</NavLink>)}</nav><div className="maison-header-action"><MaisonLink /></div><button className="bt-menu" onClick={()=>setMenu(true)} aria-expanded={menu} aria-controls="maison-mobile-nav" aria-label="Abrir menu"><Menu /></button></div></header>
 <main id="maison-main" tabIndex={-1}>{children}</main>
 <footer className="maison-footer"><div className="maison-wrap"><div className="maison-footer-grid"><div><Link className="maison-footer-name" to="/estetica-beleza/modelo-06">Maison Beauté</Link><p>Menos excessos. Mais você.</p><p className="bi-note">Clínica, profissionais e contatos fictícios.</p></div><div><h3>Explore</h3>{navigation.map(([label,page])=><Link key={page} to={beautyModelPath('06',page)}>{label}</Link>)}</div><div><h3>Seu próximo cuidado</h3><MaisonLink /><button onClick={()=>setNotice('Contato demonstrativo')}>Informações de contato</button><button onClick={()=>setNotice('Privacidade')}>Privacidade e uso</button></div></div><div className="maison-footer-bottom"><small>© {new Date().getFullYear()} Maison Beauté · Experiência demonstrativa.</small><Link to="/estetica-beleza"><ArrowLeft size={15} />Todos os modelos de estética</Link></div></div></footer>
 <button className="bt-contact" aria-label="Abrir contato demonstrativo" onClick={()=>setNotice('Vamos conversar')}><MessageCircle size={22}/></button>
 <BeautyDialog title="Explore Maison Beauté" open={menu} onClose={()=>setMenu(false)} menu><nav id="maison-mobile-nav" aria-label="Menu móvel"><NavLink to="/estetica-beleza/modelo-06" end onClick={()=>setMenu(false)}>Início</NavLink>{navigation.map(([label,page])=><NavLink key={page} to={beautyModelPath('06',page)} onClick={()=>setMenu(false)}>{label}<ArrowRight size={18}/></NavLink>)}<Link to="/estetica-beleza/modelo-06/agendamento" onClick={()=>setMenu(false)}>Agendar avaliação<ArrowRight size={18}/></Link></nav></BeautyDialog>
 <BeautyDialog title={notice || ''} open={notice !== null} onClose={()=>setNotice(null)}><p>Explore a experiência com dados fictícios. Nenhuma informação é enviada ou armazenada permanentemente, e não há reserva, cobrança ou contato real.</p><p>Localização ilustrativa: São Paulo. Redes, telefone e serviços devem ser definidos pela clínica ao personalizar o projeto.</p><MaisonLink /></BeautyDialog>
 </div>
}
