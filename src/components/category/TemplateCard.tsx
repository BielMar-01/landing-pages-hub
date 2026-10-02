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
        className={`template-preview template-preview--${(index % 8) + 1}`}
        aria-label={`Abrir demonstração ${template.name}`}
      >
        <div className="template-preview__browser">
          <span />
          <span />
          <span />
        </div>

        <div className="template-preview__mockup">
          <span className="template-preview__label">
            {template.style}
          </span>

          <strong>{template.name}</strong>

          <div className="template-preview__line template-preview__line--large" />
          <div className="template-preview__line" />

          <span className="template-preview__button">
            Agendar consulta
          </span>
        </div>

        <span className="template-preview__open">
          <ArrowUpRight size={18} />
        </span>
      </Link>

      <div className="template-card__content">
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