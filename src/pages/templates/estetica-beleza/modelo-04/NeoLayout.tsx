import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Menu, MessageCircle } from 'lucide-react'
import { useReveal } from '../../../../hooks/useReveal'
import { useScrolled } from '../../../../hooks/useScrolled'
import { BeautyDialog } from '../shared/BeautyInteractions'
import { beautyModelPath } from '../shared/beauty-models'
import './modelo-04.css'
const navigation = [["Skin scan","skin-scan"],["Tecnologia","tecnologia"],["Equipamentos","equipamentos"],["Tratamentos","tratamentos"],["Equipe","profissionais"]]
export function NeoLink({ page = 'agendamento', children = 'Agendar avaliação' }: { page?: string; children?: ReactNode }) {
 return <Link className="neo-link" to={beautyModelPath('04', page)}>{children}<ArrowRight size={17} /></Link>
}
export function NeoLayout({ children }: { children: ReactNode }) {
 const root = useReveal()
 const scrolled = useScrolled(24)
 const [menu, setMenu] = useState(false)
 const [notice, setNotice] = useState<string | null>(null)
 return <div ref={root} className="lp-estetica-beleza-4"><a className="bt-skip" href="#neo-main">Ir para o conteúdo</a>
 <header className={'neo-header' + (scrolled ? ' is-scrolled' : '')}><div className="neo-wrap"><Link className="neo-logo" to="/estetica-beleza/modelo-04" aria-label="Neo Aesthetic — início"><b aria-hidden="true">N/</b><span>Neo Aesthetic<small>TECHNOLOGY & CARE</small></span></Link><nav aria-label="Navegação principal"><NavLink to="/estetica-beleza/modelo-04" end>Início</NavLink>{navigation.map(([label,page])=><NavLink key={page} to={beautyModelPath('04',page)}>{label}</NavLink>)}</nav><div className="neo-header-action"><NeoLink /></div><button className="bt-menu" onClick={()=>setMenu(true)} aria-expanded={menu} aria-controls="neo-mobile-nav" aria-label="Abrir menu"><Menu /></button></div></header>
 <main id="neo-main" tabIndex={-1}>{children}</main>
 <footer className="neo-footer"><div className="neo-wrap"><div className="neo-footer-grid"><div><Link className="neo-footer-name" to="/estetica-beleza/modelo-04">Neo Aesthetic</Link><p>Human care. Digital perspective.</p><p className="bi-note">Clínica, profissionais e contatos fictícios.</p></div><div><h3>Explore</h3>{navigation.map(([label,page])=><Link key={page} to={beautyModelPath('04',page)}>{label}</Link>)}</div><div><h3>Seu próximo cuidado</h3><NeoLink /><button onClick={()=>setNotice('Contato demonstrativo')}>Informações de contato</button><button onClick={()=>setNotice('Privacidade')}>Privacidade e uso</button></div></div><div className="neo-footer-bottom"><small>© {new Date().getFullYear()} Neo Aesthetic · Experiência demonstrativa.</small><Link to="/estetica-beleza"><ArrowLeft size={15} />Todos os modelos de estética</Link></div></div></footer>
 <button className="bt-contact" aria-label="Abrir contato demonstrativo" onClick={()=>setNotice('Vamos conversar')}><MessageCircle size={22}/></button>
 <BeautyDialog title="Explore Neo Aesthetic" open={menu} onClose={()=>setMenu(false)} menu><nav id="neo-mobile-nav" aria-label="Menu móvel"><NavLink to="/estetica-beleza/modelo-04" end onClick={()=>setMenu(false)}>Início</NavLink>{navigation.map(([label,page])=><NavLink key={page} to={beautyModelPath('04',page)} onClick={()=>setMenu(false)}>{label}<ArrowRight size={18}/></NavLink>)}<Link to="/estetica-beleza/modelo-04/agendamento" onClick={()=>setMenu(false)}>Agendar avaliação<ArrowRight size={18}/></Link></nav></BeautyDialog>
 <BeautyDialog title={notice || ''} open={notice !== null} onClose={()=>setNotice(null)}><p>Explore a experiência com dados fictícios. Nenhuma informação é enviada ou armazenada permanentemente, e não há reserva, cobrança ou contato real.</p><p>Localização ilustrativa: São Paulo. Redes, telefone e serviços devem ser definidos pela clínica ao personalizar o projeto.</p><NeoLink /></BeautyDialog>
 </div>
}
