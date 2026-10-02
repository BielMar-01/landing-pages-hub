import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { templates } from '../../data/templates'

export function TemplatePlaceholderPage() {
  const { categorySlug, templateSlug } = useParams()

  const template = templates.find(
    (item) =>
      item.categorySlug === categorySlug &&
      item.slug === templateSlug,
  )

  if (!template) {
    return (
      <main className="container">
        <h1>Modelo não encontrado</h1>
        <Link to="/">Voltar para a central</Link>
      </main>
    )
  }

  return (
    <main className="container" style={{ paddingBlock: 60 }}>
      <Link
        to={`/${template.categorySlug}`}
        className="back-link"
      >
        <ArrowLeft size={17} />
        Voltar para os modelos
      </Link>

      <span className="section-eyebrow">
        {template.style}
      </span>

      <h1>{template.name}</h1>

      <p>{template.description}</p>

      <p>
        Esta landing page será construída na próxima fase.
      </p>
    </main>
  )
}