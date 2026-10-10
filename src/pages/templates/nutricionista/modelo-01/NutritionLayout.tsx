import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Menu, MessageCircle } from 'lucide-react';
import { useReveal } from '../../../../hooks/useReveal';
import { useScrolled } from '../../../../hooks/useScrolled';
import { NutritionDialog } from '../shared/NutritionUI';
import { nutritionPath } from '../shared/nutrition-images';
import { content } from './data/content';
import './modelo-01.css';
const navigation = [['Sobre', 'sobre'], ['Atendimentos', 'atendimentos'], ['Como funciona', 'como-funciona'], ['Conteúdos', 'conteudos'], ['Contato', 'contato']];
export function ModelLink({ page = 'agendamento', children = 'Agendar consulta', outline = false }: {
    page?: string;
    children?: ReactNode;
    outline?: boolean;
}) {
    return <Link className={'ni-button' + (outline ? ' ni-button--outline' : '')} to={nutritionPath('01', page)}>{children}<ArrowRight size={17}/></Link>;
}
export function NutritionLayout({ children }: {
    children: ReactNode;
}) {
    const root = useReveal();
    const scrolled = useScrolled(24);
    const [menu, setMenu] = useState(false);
    const [notice, setNotice] = useState<string | null>(null);
    return <div ref={root} className="lp-nutricionista-1 nutri-essenza-page"><a className="ni-skip" href="#nutri-01-main">Ir para o conteúdo</a><header className={'ni-header' + (scrolled ? ' is-scrolled' : '')}><div className="ni-wrap"><Link to="/nutricionista/modelo-01" className="ni-logo" aria-label={content.name + ' — início'}><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 43V23m0 10C8 33 5 21 6 8c14 1 22 12 18 25Zm0-9C24 10 32 5 43 5c0 13-7 21-19 19Z" stroke="currentColor" strokeWidth="1.5"/><path d="M10 14l14 19M37 11 24 24" stroke="currentColor" strokeWidth="1.5"/></svg><span>{content.name}<small>NUTRIÇÃO & CUIDADO</small></span></Link><nav aria-label="Navegação principal"><NavLink to="/nutricionista/modelo-01" end>Início</NavLink>{navigation.map(([label, page]) => <NavLink key={page} to={nutritionPath('01', page)}>{label}</NavLink>)}</nav><div className="ni-header-action"><ModelLink /></div><button className="ni-menu" aria-label="Abrir menu" aria-expanded={menu} aria-controls="nutri-01-menu" onClick={() => setMenu(true)}><Menu /></button></div></header><main id="nutri-01-main" tabIndex={-1}>{children}</main>
 <footer className="ni-footer"><div className="ni-wrap"><div className="ni-footer-grid"><div><Link className="ni-footer-brand" to="/nutricionista/modelo-01">{content.name}</Link><p>{content.tagline}</p><p className="ni-note">Marca conceitual · Conteúdo e fotografias ilustrativos.</p></div><div><h3>Explore</h3>{navigation.map(([label, page]) => <Link key={page} to={nutritionPath('01', page)}>{label}</Link>)}</div><div><h3>Uma primeira conversa</h3><ModelLink /><button onClick={() => setNotice('Contato demonstrativo')}>Informações de contato</button><button onClick={() => setNotice('Privacidade e uso')}>Privacidade e uso</button></div></div><div className="ni-footer-bottom"><small>© {new Date().getFullYear()} {content.name} · Demonstração sem atendimento real.</small><Link to="/nutricionista"><ArrowLeft size={15}/>Modelos de nutrição</Link></div></div></footer>
 <button className="ni-floating" aria-label="Abrir informações de contato" onClick={() => setNotice('Vamos conversar')}><MessageCircle size={22}/></button><NutritionDialog title={'Explore ' + content.name} open={menu} close={() => setMenu(false)} menu><nav id="nutri-01-menu" aria-label="Menu móvel"><NavLink to="/nutricionista/modelo-01" end onClick={() => setMenu(false)}>Início</NavLink>{navigation.map(([label, page]) => <NavLink key={page} to={nutritionPath('01', page)} onClick={() => setMenu(false)}>{label}<ArrowRight size={18}/></NavLink>)}<Link to="/nutricionista/modelo-01/agendamento" onClick={() => setMenu(false)}>Agendar consulta<ArrowRight size={18}/></Link></nav></NutritionDialog><NutritionDialog title={notice || ''} open={notice !== null} close={() => setNotice(null)}><p>Esta é uma experiência demonstrativa. Nenhuma mensagem é enviada e nenhuma consulta é reservada.</p><p>Nome do profissional, CRN, endereço, telefone e canais oficiais ainda precisam ser configurados. Use apenas dados fictícios no formulário.</p><ModelLink page="contato">Conhecer o contato</ModelLink></NutritionDialog></div>;
}
