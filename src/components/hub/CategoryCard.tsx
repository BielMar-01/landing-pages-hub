import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { Category } from '../../types/category'
import { Badge } from '../common/Badge'

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon

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

      <div className="category-card__content">
        <h3>{category.name}</h3>
        <p>{category.shortDescription}</p>
      </div>

      <div className="category-card__footer">
        <span>
          {category.templateCount} modelos
        </span>

        <span className="category-card__arrow">
          <ArrowUpRight size={19} />
        </span>
      </div>
    </Link>
  )
}