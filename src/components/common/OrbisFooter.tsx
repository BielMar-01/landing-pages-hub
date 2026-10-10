import { getAvailableCategories } from '../../data/availableCategories'
import { templates } from '../../data/templates'
import { Orbit } from 'lucide-react'
import { Link } from 'react-router-dom'

export function OrbisFooter() {
  return <footer className="orbis-footer"><div className="container"><div className="orbis-footer-top"><div><Link to="/" className="orbis-brand"><Orbit size={30} /><span>OrbisCore<small>Template Hub</small></span></Link><p>Experiências digitais construídas com propósito.</p></div><nav aria-label="Navegação do rodapé"><Link to="/#categorias">Categorias</Link><Link to="/#modelos">Modelos</Link><Link to="/#recursos">Recursos</Link></nav></div><div className="orbis-footer-bottom"><span>© 2026 OrbisCore</span><span>{getAvailableCategories().length} categorias. {templates.filter(template => template.available).length} modelos disponíveis.</span></div></div></footer>
}
