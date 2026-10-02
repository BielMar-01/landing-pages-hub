import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main>
      <h1>404</h1>

      <p>A página que você tentou acessar não existe.</p>

      <Link to="/">Voltar para a central</Link>
    </main>
  )
}