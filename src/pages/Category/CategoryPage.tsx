import { ArrowLeft, ArrowUpRight, ChevronRight, LayoutGrid } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Header } from '../../components/common/Header'
import { OrbisFooter } from '../../components/common/OrbisFooter'
import { TemplateCard } from '../../components/category/TemplateCard'
import { categories } from '../../data/categories'
import { getTemplatesByCategory } from '../../data/templates'
import { beautyModels } from '../templates/estetica-beleza/shared/beauty-models'
import { beautyPhoto } from '../templates/estetica-beleza/shared/beauty-data'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { useReveal } from '../../hooks/useReveal'

export function CategoryPage() {
  const { categorySlug } = useParams()
  const category = categories.find(item => item.slug === categorySlug)
  useDocumentTitle(category ? `${category.slug === 'medico' ? 'Modelos para Médicos' : `Modelos de ${category.name}`} | OrbisCore` : 'Página não encontrada | OrbisCore')
  const ref = useReveal()
  if (!category) return <Navigate to="/404" replace />
  const categoryTemplates = getTemplatesByCategory(category.slug)
  const Icon = category.icon
  return <div className="orbis-shell" ref={ref}><Header /><main>
    <section className="orbis-category-hero"><div className="container"><nav className="orbis-breadcrumb" aria-label="Breadcrumb"><Link to="/">Início</Link><ChevronRight size={13} /><Link to="/#categorias">Categorias</Link><ChevronRight size={13} /><span aria-current="page">{category.name}</span></nav><Link to="/" className="orbis-text-link"><ArrowLeft size={16} />Todas as categorias</Link><div className="orbis-category-heading"><div><span className="orbis-category-icon"><Icon size={30} strokeWidth={1.5} /></span><span className="orbis-eyebrow">COLEÇÃO / {category.name.toLocaleUpperCase('pt-BR')}</span><h1>Experiências para<br /><span>{category.slug==='medico'?'cuidar da presença.':category.name+'.'}</span></h1><p>{category.description}</p><span className="orbis-collection-count"><LayoutGrid size={17} />{categoryTemplates.filter(template=>template.available).length} modelos disponíveis</span></div>{category.slug === 'estetica-beleza' ? <div className="orbis-category-beauty"><img src={beautyPhoto('skin', 640)} alt="Close-up ilustrativo da coleção de estética" width={640} height={427} /><div>{beautyModels.slice(0, 3).map(model => <Link key={model.model} to={`/estetica-beleza/modelo-${model.model}`}><img src={beautyPhoto(model.image,640)} alt={model.name} width={640} height={427} loading="lazy" /><span>{model.name} ↗</span></Link>)}</div></div> : <div className="orbis-category-art" aria-hidden="true"><Icon size={150} strokeWidth={.65} /><span>0{categories.findIndex(item=>item.id===category.id)+1} / 08</span></div>}</div></div></section>
    <section className="orbis-section" id="modelos"><div className="container"><div className="orbis-section-heading" data-reveal><div><span className="orbis-eyebrow">ESCOLHA SUA DIREÇÃO</span><h2>Oito modelos.<br />Diferentes pontos de partida.</h2></div><p>Explore composições, tipografias e experiências. Cada demonstração abre o universo visual do próprio modelo.</p></div>{categoryTemplates.length ? <div className="orbis-template-grid">{categoryTemplates.map((template,index)=><TemplateCard key={template.id} template={template} index={index} />)}</div> : <div className="orbis-empty"><h2>Modelos em preparação</h2><p>Esta coleção será adicionada em breve.</p><Link to="/" className="orbis-button">Explorar categorias<ArrowUpRight size={17} /></Link></div>}</div></section>
  </main><OrbisFooter /></div>
}
