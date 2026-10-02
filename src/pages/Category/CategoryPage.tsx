import { ArrowLeft, LayoutGrid } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { Header } from '../../components/common/Header'
import { TemplateCard } from '../../components/category/TemplateCard'
import { categories } from '../../data/categories'
import { getTemplatesByCategory } from '../../data/templates'

export function CategoryPage() {
  const { categorySlug } = useParams()

  const category = categories.find(
    (item) => item.slug === categorySlug,
  )

  if (!category) {
    return <Navigate to="/404" replace />
  }

  const categoryTemplates =
    getTemplatesByCategory(category.slug)

  return (
    <>
      <Header />

      <main>
        <section className="category-hero">
          <div className="container">
            <Link to="/" className="back-link">
              <ArrowLeft size={17} />
              Todas as categorias
            </Link>

            <div className="category-hero__content">
              <div className="category-hero__icon">
                <category.icon size={29} />
              </div>

              <span className="section-eyebrow">
                Coleção {category.name}
              </span>

              <h1>
                Landing pages para
                <span> {category.name}</span>
              </h1>

              <p>{category.description}</p>

              <div className="category-hero__count">
                <LayoutGrid size={17} />
                {categoryTemplates.length} designs disponíveis
              </div>
            </div>
          </div>
        </section>

        <section className="templates-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-eyebrow">
                  Escolha seu estilo
                </span>

                <h2>Explore os modelos</h2>

                <p>
                  Cada opção apresenta uma abordagem visual
                  diferente para o mesmo segmento.
                </p>
              </div>
            </div>

            {categoryTemplates.length > 0 ? (
              <div className="templates-grid">
                {categoryTemplates.map((template, index) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>Modelos em preparação</h3>

                <p>
                  A coleção de {category.name} será adicionada
                  em breve.
                </p>

                <Link
                  to="/"
                  className="empty-state__button"
                >
                  Explorar outras categorias
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}