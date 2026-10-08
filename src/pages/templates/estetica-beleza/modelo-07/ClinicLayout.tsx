import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Menu, MessageCircle } from 'lucide-react'
import { useReveal } from '../../../../hooks/useReveal'
import { useScrolled } from '../../../../hooks/useScrolled'
import { BeautyDialog } from '../shared/BeautyInteractions'
import { beautyModelPath } from '../shared/beauty-models'
import './modelo-07.css'
const navigation = [["Tratamentos","tratamentos"],["Busca","busca"],["Profissionais","profissionais"],["Tecnologias","tecnologias"],["Estrutura","estrutura"],["Conteúdos","conteudos"]]
export function ClinicLink({ page = 'agendamento', children = 'Agendar avaliação' }: { page?: string; children?: ReactNode }) {
 return <Link className="clinic-link" to={beautyModelPath('07', page)}>{children}<ArrowRight size={17} /></Link>
}
export function ClinicLayout({ children }: { children: ReactNode }) {
 const root = useReveal()
 const scrolled = useScrolled(24)
 const [menu, setMenu] = useState(false)
 const [notice, setNotice] = useState<string | null>(null)
 return <div ref={root} className="lp-estetica-beleza-7"><a className="bt-skip" href="#clinic-main">Ir para o conteúdo</a>
 <header className={'clinic-header' + (scrolled ? ' is-scrolled' : '')}><div className="clinic-wrap"><Link className="clinic-logo" to="/estetica-beleza/modelo-07" aria-label="Clínica 360 Beauty — início"><b aria-hidden="true">360</b><span>Clínica 360 Beauty<small>ESTÉTICA INTEGRADA</small></span></Link><nav aria-label="Navegação principal"><NavLink to="/estetica-beleza/modelo-07" end>Início</NavLink>{navigation.map(([label,page])=><NavLink key={page} to={beautyModelPath('07',page)}>{label}</NavLink>)}</nav><div className="clinic-header-action"><ClinicLink /></div><button className="bt-menu" onClick={()=>setMenu(true)} aria-expanded={menu} aria-controls="clinic-mobile-nav" aria-label="Abrir menu"><Menu /></button></div></header>
 <main id="clinic-main" tabIndex={-1}>{children}</main>
 <footer className="clinic-footer"><div className="clinic-wrap"><div className="clinic-footer-grid"><div><Link className="clinic-footer-name" to="/estetica-beleza/modelo-07">Clínica 360 Beauty</Link><p>Toda a estética. Um cuidado integrado.</p><p className="bi-note">Clínica, profissionais e contatos fictícios.</p></div><div><h3>Explore</h3>{navigation.map(([label,page])=><Link key={page} to={beautyModelPath('07',page)}>{label}</Link>)}</div><div><h3>Seu próximo cuidado</h3><ClinicLink /><button onClick={()=>setNotice('Contato demonstrativo')}>Informações de contato</button><button onClick={()=>setNotice('Privacidade')}>Privacidade e uso</button></div></div><div className="clinic-footer-bottom"><small>© {new Date().getFullYear()} Clínica 360 Beauty · Experiência demonstrativa.</small><Link to="/estetica-beleza"><ArrowLeft size={15} />Todos os modelos de estética</Link></div></div></footer>
 <button className="bt-contact" aria-label="Abrir contato demonstrativo" onClick={()=>setNotice('Vamos conversar')}><MessageCircle size={22}/></button>
 <BeautyDialog title="Explore Clínica 360 Beauty" open={menu} onClose={()=>setMenu(false)} menu><nav id="clinic-mobile-nav" aria-label="Menu móvel"><NavLink to="/estetica-beleza/modelo-07" end onClick={()=>setMenu(false)}>Início</NavLink>{navigation.map(([label,page])=><NavLink key={page} to={beautyModelPath('07',page)} onClick={()=>setMenu(false)}>{label}<ArrowRight size={18}/></NavLink>)}<Link to="/estetica-beleza/modelo-07/agendamento" onClick={()=>setMenu(false)}>Agendar avaliação<ArrowRight size={18}/></Link></nav></BeautyDialog>
 <BeautyDialog title={notice || ''} open={notice !== null} onClose={()=>setNotice(null)}><p>Explore a experiência com dados fictícios. Nenhuma informação é enviada ou armazenada permanentemente, e não há reserva, cobrança ou contato real.</p><p>Localização ilustrativa: São Paulo. Redes, telefone e serviços devem ser definidos pela clínica ao personalizar o projeto.</p><ClinicLink /></BeautyDialog>
 </div>
}
