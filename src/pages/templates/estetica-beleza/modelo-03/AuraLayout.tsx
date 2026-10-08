import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Menu, MessageCircle } from 'lucide-react'
import { useReveal } from '../../../../hooks/useReveal'
import { useScrolled } from '../../../../hooks/useScrolled'
import { BeautyDialog } from '../shared/BeautyInteractions'
import { beautyModelPath } from '../shared/beauty-models'
import './modelo-03.css'
const navigation = [["A análise","analise-da-pele"],["Protocolos","protocolos"],["Skincare","skincare"],["Especialista","especialista"],["Leituras","conteudos"]]
export function AuraLink({ page = 'agendamento', children = 'Agendar avaliação' }: { page?: string; children?: ReactNode }) {
 return <Link className="aura-link" to={beautyModelPath('03', page)}>{children}<ArrowRight size={17} /></Link>
}
export function AuraLayout({ children }: { children: ReactNode }) {
 const root = useReveal()
 const scrolled = useScrolled(24)
 const [menu, setMenu] = useState(false)
 const [notice, setNotice] = useState<string | null>(null)
 return <div ref={root} className="lp-estetica-beleza-3"><a className="bt-skip" href="#aura-main">Ir para o conteúdo</a>
 <header className={'aura-header' + (scrolled ? ' is-scrolled' : '')}><div className="aura-wrap"><Link className="aura-logo" to="/estetica-beleza/modelo-03" aria-label="Aura Skin — início"><b aria-hidden="true">AS</b><span>Aura Skin<small>ESTÉTICA & CUIDADO</small></span></Link><nav aria-label="Navegação principal"><NavLink to="/estetica-beleza/modelo-03" end>Início</NavLink>{navigation.map(([label,page])=><NavLink key={page} to={beautyModelPath('03',page)}>{label}</NavLink>)}</nav><div className="aura-header-action"><AuraLink /></div><button className="bt-menu" onClick={()=>setMenu(true)} aria-expanded={menu} aria-controls="aura-mobile-nav" aria-label="Abrir menu"><Menu /></button></div></header>
 <main id="aura-main" tabIndex={-1}>{children}</main>
 <footer className="aura-footer"><div className="aura-wrap"><div className="aura-footer-grid"><div><Link className="aura-footer-name" to="/estetica-beleza/modelo-03">Aura Skin</Link><p>Sua pele. Sua história.</p><p className="bi-note">Clínica, profissionais e contatos fictícios.</p></div><div><h3>Explore</h3>{navigation.map(([label,page])=><Link key={page} to={beautyModelPath('03',page)}>{label}</Link>)}</div><div><h3>Seu próximo cuidado</h3><AuraLink /><button onClick={()=>setNotice('Contato demonstrativo')}>Informações de contato</button><button onClick={()=>setNotice('Privacidade')}>Privacidade e uso</button></div></div><div className="aura-footer-bottom"><small>© {new Date().getFullYear()} Aura Skin · Experiência demonstrativa.</small><Link to="/estetica-beleza"><ArrowLeft size={15} />Todos os modelos de estética</Link></div></div></footer>
 <button className="bt-contact" aria-label="Abrir contato demonstrativo" onClick={()=>setNotice('Vamos conversar')}><MessageCircle size={22}/></button>
 <BeautyDialog title="Explore Aura Skin" open={menu} onClose={()=>setMenu(false)} menu><nav id="aura-mobile-nav" aria-label="Menu móvel"><NavLink to="/estetica-beleza/modelo-03" end onClick={()=>setMenu(false)}>Início</NavLink>{navigation.map(([label,page])=><NavLink key={page} to={beautyModelPath('03',page)} onClick={()=>setMenu(false)}>{label}<ArrowRight size={18}/></NavLink>)}<Link to="/estetica-beleza/modelo-03/agendamento" onClick={()=>setMenu(false)}>Agendar avaliação<ArrowRight size={18}/></Link></nav></BeautyDialog>
 <BeautyDialog title={notice || ''} open={notice !== null} onClose={()=>setNotice(null)}><p>Explore a experiência com dados fictícios. Nenhuma informação é enviada ou armazenada permanentemente, e não há reserva, cobrança ou contato real.</p><p>Localização ilustrativa: São Paulo. Redes, telefone e serviços devem ser definidos pela clínica ao personalizar o projeto.</p><AuraLink /></BeautyDialog>
 </div>
}
