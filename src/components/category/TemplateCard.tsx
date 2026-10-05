import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { LandingTemplate } from '../../types/template'

interface TemplateCardProps {
  template: LandingTemplate
  index: number
}

export function TemplateCard({
  template,
  index,
}: TemplateCardProps) {
  return (
    <article className="template-card">
      <Link
        to={template.route}
        className={`template-preview ${template.preview ? 'template-preview--asset' : `template-preview--${(index % 8) + 1}`}`}
        aria-label={`Abrir demonstração ${template.name}`}
      >
        {!template.preview && <div className="template-preview__browser">
          <span />
          <span />
          <span />
        </div>}

        {template.id === 'medico-01' ? <div className="orbis-care-preview"><div><span>ESSENCIAL CARE</span><strong>Cuidado médico<br />que começa<br /><em>ouvindo você.</em></strong><small>Agendar consulta →</small></div><img src="/images/medico/shared/hero-doctor.webp" alt="Prévia fotográfica da Essencial Care" loading="lazy" width={1672} height={941} /></div> : template.id === 'medico-02' ? <div className="orbis-prime-preview"><img src="/images/medico/shared/clinic-reception-02.webp" alt="Prévia fotográfica da Essencial Prime" loading="lazy" width={1536} height={1024} /><div><span>ESSENCIAL PRIME</span><strong>Um novo padrão<br />de cuidado.<br /><em>Para você.</em></strong><small>Agendar consulta →</small></div></div> : template.preview ? <img className="template-preview__image" src={template.preview} alt={`Composição visual do modelo ${template.name}, estilo ${template.style}`} loading="lazy" width={640} height={400} /> : <div className="template-preview__mockup">
          <span className="template-preview__label">
            {template.style}
          </span>

          <strong>{template.name}</strong>

          <div className="template-preview__line template-preview__line--large" />
          <div className="template-preview__line" />

          <span className="template-preview__button">
            Agendar consulta
          </span>
        </div>}

        <span className="orbis-preview-overlay">Ver demonstração<ArrowUpRight size={18} /></span>

        <span className="template-preview__open">
          <ArrowUpRight size={18} />
        </span>
      </Link>

      <div className="template-card__content">
        <span className={`orbis-status ${template.available ? '' : 'orbis-status--pending'}`}><i />{template.available ? 'Disponível' : 'Em preparação'}</span>
        <div className="template-card__heading">
          <div>
            <span>
              Modelo {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{template.name}</h3>
          </div>

          <span className="template-card__style">
            {template.style}
          </span>
        </div>

        <p>{template.description}</p>

        <div className="template-card__tags">
          {template.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <Link
          to={template.route}
          className="template-card__link"
        >
          Ver demonstração
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  )
}
