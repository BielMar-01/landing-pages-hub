import { ArrowUpRight, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { LandingTemplate } from '../../types/template'
import { beautyPhoto } from '../../pages/templates/estetica-beleza/shared/beauty-data'
import { beautyModels } from '../../pages/templates/estetica-beleza/shared/beauty-models'
import type { CSSProperties } from 'react'
import { nutritionModels } from '../../pages/templates/nutricionista/shared/nutrition-models'
import { nutritionPhoto } from '../../pages/templates/nutricionista/shared/nutrition-images'

interface TemplateCardProps { template: LandingTemplate; index: number }
function PreviewContent({ template }: { template: LandingTemplate }) {
  if (template.categorySlug === 'nutricionista') {
    const model = nutritionModels.find(item => item.model === template.slug.slice(-2))
    if (model) return <div className={`orbis-nutrition-preview orbis-nutrition-preview--${model.model}`} style={{ '--preview-bg': model.background, '--preview-text': model.text, '--preview-accent': model.accent } as CSSProperties}><img src={nutritionPhoto(model.hero,640)} alt={`Prévia de ${model.name}`} loading="lazy" width={640} height={427} /><div><span>{model.name}</span><strong>{model.tagline}</strong><small>{model.positioning} ↗</small></div></div>
  }
  if (template.id === 'medico-01') return <div className="orbis-care-preview"><div><span>ESSENCIAL CARE</span><strong>Cuidado médico<br />que começa<br /><em>ouvindo você.</em></strong><small>Agendar consulta →</small></div><img src="/images/medico/shared/hero-doctor.webp" alt="Prévia fotográfica da Essencial Care" loading="lazy" width={1672} height={941} /></div>
  if (template.id === 'medico-02') return <div className="orbis-prime-preview"><img src="/images/medico/shared/clinic-reception-02.webp" alt="Prévia da Essencial Prime" loading="lazy" width={1536} height={1024} /><div><span>ESSENCIAL PRIME</span><strong>Um novo padrão<br />de cuidado.<br /><em>Para você.</em></strong><small>Agendar consulta →</small></div></div>
  if (template.categorySlug === 'estetica-beleza') {
    const model = beautyModels.find(item => item.model === template.slug.slice(-2))
    if (model) return <div className={`orbis-beauty-preview orbis-beauty-preview--${model.model}`}><img src={beautyPhoto(model.image, 640)} alt={`Prévia fotográfica de ${model.name}`} loading="lazy" width={640} height={427} /><div><span>{model.name.toLocaleUpperCase('pt-BR')}</span><strong>{model.tagline}</strong><small>{model.style} / Explorar →</small></div></div>
  }
  return template.preview ? <img className="template-preview__image" src={template.preview} alt={`Direção visual do modelo ${template.name}`} loading="lazy" width={640} height={400} /> : <div className="template-preview__mockup"><span className="template-preview__label">{template.style}</span><strong>{template.name}</strong><div className="template-preview__line template-preview__line--large" /><div className="template-preview__line" /></div>
}
export function TemplateCard({ template, index }: TemplateCardProps) {
  const previewClass = `template-preview ${template.preview ? 'template-preview--asset' : `template-preview--${(index % 8) + 1}`}`
  return <article className={`template-card${template.available ? '' : ' template-card--unavailable'}`}>
    {template.available ? <Link to={template.route} className={previewClass} aria-label={`Abrir demonstração ${template.name}`}><PreviewContent template={template} /><span className="orbis-preview-overlay">Ver demonstração<ArrowUpRight size={18} /></span><span className="template-preview__open"><ArrowUpRight size={18} /></span></Link> : <div className={previewClass}><PreviewContent template={template} /><span className="orbis-preview-unavailable"><LockKeyhole size={18} />Em preparação</span></div>}
    <div className="template-card__content"><span className={`orbis-status ${template.available ? '' : 'orbis-status--pending'}`}><i />{template.available ? 'Disponível' : 'Indisponível'}</span><div className="template-card__heading"><div><span>Modelo {String(index + 1).padStart(2, '0')}</span><h3>{template.name}</h3></div><span className="template-card__style">{template.style}</span></div><p>{template.description}</p><div className="template-card__tags">{template.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{template.available ? <Link to={template.route} className="template-card__link">Ver demonstração<ArrowUpRight size={17} /></Link> : <button type="button" disabled className="template-card__link"><LockKeyhole size={16} />Em preparação</button>}</div>
  </article>
}
