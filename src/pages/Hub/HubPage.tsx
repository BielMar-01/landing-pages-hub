import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Layers3,
  Palette,
  SearchX,
  Smartphone,
  Sparkles,
} from 'lucide-react'

import { Header } from '../../components/common/Header'
import { SearchInput } from '../../components/common/SearchInput'
import { CategoryCard } from '../../components/hub/CategoryCard'
import { categories } from '../../data/categories'
import type { CategoryGroup } from '../../types/category'

type Filter = 'todos' | CategoryGroup

const filters: Array<{ label: string; value: Filter }> = [
  { label: 'Todos', value: 'todos' },
  { label: 'Saúde', value: 'saude' },
  { label: 'Bem-estar', value: 'bem-estar' },
  { label: 'Fitness', value: 'fitness' },
  { label: 'Serviços', value: 'servicos' },
  { label: 'Imobiliário', value: 'imobiliario' },
]

export function HubPage() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<Filter>('todos')

  const filteredCategories = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLocaleLowerCase('pt-BR')

    return categories.filter((category) => {
      const matchesFilter =
        activeFilter === 'todos' ||
        category.group === activeFilter

      const searchableContent = [
        category.name,
        category.description,
        category.shortDescription,
      ]
        .join(' ')
        .toLocaleLowerCase('pt-BR')

      const matchesSearch =
        normalizedSearch.length === 0 ||
        searchableContent.includes(normalizedSearch)

      return matchesFilter && matchesSearch
    })
  }, [activeFilter, search])

  return (
    <>
      <Header />

      <main>
        <section className="hub-hero">
          <div className="container hub-hero__content">
            <div className="hub-hero__badge">
              <Sparkles size={15} />
              Biblioteca de landing pages
            </div>

            <h1>
              Encontre o design ideal para o seu
              <span> negócio.</span>
            </h1>

            <p className="hub-hero__description">
              Explore coleções de landing pages desenvolvidas
              especialmente para diferentes profissões e segmentos.
              Cada categoria possui 8 experiências visuais únicas.
            </p>

            <div className="hub-hero__stats">
              <div>
                <strong>{categories.length}</strong>
                <span>Categorias</span>
              </div>

              <span className="hub-hero__divider" />

              <div>
                <strong>
                  {categories.reduce(
                    (total, category) =>
                      total + category.templateCount,
                    0,
                  )}
                </strong>
                <span>Modelos</span>
              </div>

              <span className="hub-hero__divider" />

              <div>
                <strong>100%</strong>
                <span>Responsivo</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="categories-section"
          id="categorias"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-eyebrow">
                  Explore por segmento
                </span>

                <h2>Escolha uma categoria</h2>

                <p>
                  Encontre modelos pensados para as necessidades
                  específicas de cada área.
                </p>
              </div>
            </div>

            <div className="category-tools">
              <SearchInput
                value={search}
                onChange={setSearch}
                placeholder="Buscar profissão ou segmento..."
              />

              <div
                className="filter-list"
                aria-label="Filtrar categorias"
              >
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    className={`filter-button ${
                      activeFilter === filter.value
                        ? 'filter-button--active'
                        : ''
                    }`}
                    onClick={() =>
                      setActiveFilter(filter.value)
                    }
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {filteredCategories.length > 0 ? (
              <div className="categories-grid">
                {filteredCategories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <span className="empty-state__icon">
                  <SearchX size={27} />
                </span>

                <h3>Nenhuma categoria encontrada</h3>

                <p>
                  Tente pesquisar outro termo ou remover o
                  filtro selecionado.
                </p>

                <button
                  type="button"
                  className="empty-state__button"
                  onClick={() => {
                    setSearch('')
                    setActiveFilter('todos')
                  }}
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="platform-section">
          <div className="container">
            <div className="platform-heading">
              <span className="section-eyebrow">
                Uma biblioteca em crescimento
              </span>

              <h2>
                Mais do que templates.
                <br />
                Designs pensados para cada segmento.
              </h2>

              <p>
                Cada coleção é construída considerando o público,
                a comunicação e as necessidades específicas
                daquele profissional.
              </p>
            </div>

            <div className="platform-features">
              <article className="feature-card">
                <span className="feature-card__icon">
                  <Palette size={23} />
                </span>

                <h3>Designs únicos</h3>

                <p>
                  Cada modelo possui identidade, composição e
                  experiência visual próprias.
                </p>
              </article>

              <article className="feature-card">
                <span className="feature-card__icon">
                  <Smartphone size={23} />
                </span>

                <h3>Mobile-first</h3>

                <p>
                  Experiências pensadas primeiro para celular e
                  adaptadas para qualquer tamanho de tela.
                </p>
              </article>

              <article className="feature-card">
                <span className="feature-card__icon">
                  <Layers3 size={23} />
                </span>

                <h3>Por segmento</h3>

                <p>
                  Coleções organizadas por profissão para facilitar
                  a descoberta do modelo ideal.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="hub-cta">
          <div className="container">
            <div className="hub-cta__box">
              <div>
                <span className="section-eyebrow">
                  Comece explorando
                </span>

                <h2>64 modelos. 8 segmentos. Muitas possibilidades.</h2>

                <p>
                  Escolha uma categoria e descubra diferentes
                  formas de apresentar um negócio na web.
                </p>
              </div>

              <a
                href="#categorias"
                className="hub-cta__button"
              >
                Ver categorias
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__content">
          <div>
            <strong>
              Landing<span>Hub</span>
            </strong>

            <p>Uma coleção de experiências para a web.</p>
          </div>

          <span className="site-footer__copy">
            © 2026 LandingHub
          </span>
        </div>
      </footer>
    </>
  )
}