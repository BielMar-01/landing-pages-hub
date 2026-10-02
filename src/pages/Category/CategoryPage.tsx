import { Link, useParams } from 'react-router-dom'
import { categories } from '../../data/categories'

export function CategoryPage() {
  const { categorySlug } = useParams()

  const category = categories.find(
    (item) => item.slug === categorySlug,
  )

  if (!category) {
    return (
      <main>
        <h1>Categoria não encontrada</h1>
        <Link to="/">Voltar para a central</Link>
      </main>
    )
  }

  return (
    <main>
      <Link to="/">← Voltar</Link>

      <h1>{category.name}</h1>

      <p>{category.description}</p>

      <p>{category.templateCount} modelos disponíveis</p>
    </main>
  )
}