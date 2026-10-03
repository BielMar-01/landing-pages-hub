import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { Category } from '../../types/category'
import { getTemplatesByCategory } from '../../data/templates'
import { Badge } from '../common/Badge'

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon
  const preview = getTemplatesByCategory(category.slug)[0]

  return (
    <Link
      to={`/${category.slug}`}
      className="category-card"
      aria-label={`Explorar modelos para ${category.name}`}
    >
      <div className="category-card__top">
        <span className="category-card__icon">
          <Icon size={24} strokeWidth={1.8} />
        </span>

        {category.featured && (
          <Badge>Destaque</Badge>
        )}
      </div>

      {preview && <div className={`orbis-category-preview orbis-category-preview--${category.slug}`}><img src={category.slug === 'medico' ? '/images/medico/shared/hero-doctor.webp' : preview.preview} alt={`Direção visual da coleção ${category.name}`} width={640} height={400} loading="lazy" /><span>{category.slug === 'medico' ? 'Essencial Care' : preview.name}<ArrowUpRight size={16} /></span></div>}

      <div className="category-card__content">
        <h3>{category.name}</h3>
        <p>{category.shortDescription}</p>
      </div>

      <div className="category-card__footer">
        <span>
          {category.templateCount} modelos · Explorar
        </span>

        <span className="category-card__arrow">
          <ArrowUpRight size={19} />
        </span>
      </div>
    </Link>
  )
}
