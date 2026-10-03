import { ArrowRight, Orbit } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/common/Header'
import { OrbisFooter } from '../../components/common/OrbisFooter'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('Página não encontrada | OrbisCore')
  return <div className="orbis-shell"><Header /><main className="container orbis-not-found"><Orbit size={50} /><span className="orbis-eyebrow">FORA DE ÓRBITA / 404</span><h1>Página não encontrada.</h1><p>Este endereço não faz parte do nosso universo de experiências. Volte à Central para encontrar seu próximo modelo.</p><Link to="/" className="orbis-button">Voltar para a Central<ArrowRight size={18} /></Link></main><OrbisFooter /></div>
}
