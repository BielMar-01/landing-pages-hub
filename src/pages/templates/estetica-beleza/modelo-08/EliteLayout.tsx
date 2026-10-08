import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Menu, MessageCircle } from 'lucide-react'
import { useReveal } from '../../../../hooks/useReveal'
import { useScrolled } from '../../../../hooks/useScrolled'
import { BeautyDialog } from '../shared/BeautyInteractions'
import { beautyModelPath } from '../shared/beauty-models'
import './modelo-08.css'
const navigation = [["Experience","experiencia"],["Signature","tratamentos"],["Specialist","especialista"],["The clinic","clinica"],["Concierge","concierge"]]
export function EliteLink({ page = 'agendamento', children = 'Agendar avaliação' }: { page?: string; children?: ReactNode }) {
 return <Link className="elite-link" to={beautyModelPath('08', page)}>{children}<ArrowRight size={17} /></Link>
}
export function EliteLayout({ children }: { children: ReactNode }) {
 const root = useReveal()
 const scrolled = useScrolled(24)
 const [menu, setMenu] = useState(false)
 const [notice, setNotice] = useState<string | null>(null)
 return <div ref={root} className="lp-estetica-beleza-8"><a className="bt-skip" href="#elite-main">Ir para o conteúdo</a>
 <header className={'elite-header' + (scrolled ? ' is-scrolled' : '')}><div className="elite-wrap"><Link className="elite-logo" to="/estetica-beleza/modelo-08" aria-label="Élite Aesthetics — início"><b aria-hidden="true">É</b><span>Élite Aesthetics<small>PRIVATE AESTHETICS</small></span></Link><nav aria-label="Navegação principal"><NavLink to="/estetica-beleza/modelo-08" end>Início</NavLink>{navigation.map(([label,page])=><NavLink key={page} to={beautyModelPath('08',page)}>{label}</NavLink>)}</nav><div className="elite-header-action"><EliteLink /></div><button className="bt-menu" onClick={()=>setMenu(true)} aria-expanded={menu} aria-controls="elite-mobile-nav" aria-label="Abrir menu"><Menu /></button></div></header>
 <main id="elite-main" tabIndex={-1}>{children}</main>
 <footer className="elite-footer"><div className="elite-wrap"><div className="elite-footer-grid"><div><Link className="elite-footer-name" to="/estetica-beleza/modelo-08">Élite Aesthetics</Link><p>Private aesthetics. Personal attention.</p><p className="bi-note">Clínica, profissionais e contatos fictícios.</p></div><div><h3>Explore</h3>{navigation.map(([label,page])=><Link key={page} to={beautyModelPath('08',page)}>{label}</Link>)}</div><div><h3>Seu próximo cuidado</h3><EliteLink /><button onClick={()=>setNotice('Contato demonstrativo')}>Informações de contato</button><button onClick={()=>setNotice('Privacidade')}>Privacidade e uso</button></div></div><div className="elite-footer-bottom"><small>© {new Date().getFullYear()} Élite Aesthetics · Experiência demonstrativa.</small><Link to="/estetica-beleza"><ArrowLeft size={15} />Todos os modelos de estética</Link></div></div></footer>
 <button className="bt-contact" aria-label="Abrir contato demonstrativo" onClick={()=>setNotice('Vamos conversar')}><MessageCircle size={22}/></button>
 <BeautyDialog title="Explore Élite Aesthetics" open={menu} onClose={()=>setMenu(false)} menu><nav id="elite-mobile-nav" aria-label="Menu móvel"><NavLink to="/estetica-beleza/modelo-08" end onClick={()=>setMenu(false)}>Início</NavLink>{navigation.map(([label,page])=><NavLink key={page} to={beautyModelPath('08',page)} onClick={()=>setMenu(false)}>{label}<ArrowRight size={18}/></NavLink>)}<Link to="/estetica-beleza/modelo-08/agendamento" onClick={()=>setMenu(false)}>Agendar avaliação<ArrowRight size={18}/></Link></nav></BeautyDialog>
 <BeautyDialog title={notice || ''} open={notice !== null} onClose={()=>setNotice(null)}><p>Explore a experiência com dados fictícios. Nenhuma informação é enviada ou armazenada permanentemente, e não há reserva, cobrança ou contato real.</p><p>Localização ilustrativa: São Paulo. Redes, telefone e serviços devem ser definidos pela clínica ao personalizar o projeto.</p><EliteLink /></BeautyDialog>
 </div>
}
