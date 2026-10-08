import { ArrowLeft, ArrowRight, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/common/Header'
import { OrbisFooter } from '../../components/common/OrbisFooter'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import type { LandingTemplate } from '../../types/template'

export function UnavailablePage({ template }: { template: LandingTemplate }) {
  useDocumentTitle('Modelo indisponível | OrbisCore')
  return <div className="orbis-shell"><Header /><main className="container orbis-not-found"><LockKeyhole size={46} /><span className="orbis-eyebrow">EM PREPARAÇÃO</span><h1>Este modelo ainda não está disponível.</h1><p>A demonstração será liberada quando estiver pronta. Explore os modelos concluídos desta coleção ou volte à Central.</p><div className="orbis-actions"><Link className="orbis-button" to={`/${template.categorySlug}`}><ArrowLeft size={17} />Voltar à coleção</Link><Link className="orbis-text-link" to="/">Explorar a Central<ArrowRight size={17} /></Link></div></main><OrbisFooter /></div>
}
