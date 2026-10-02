import { LayoutTemplate } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__content">
        <Link
          to="/"
          className="brand"
          aria-label="LandingHub - Página inicial"
        >
          <span className="brand__icon">
            <LayoutTemplate size={20} strokeWidth={2.2} />
          </span>

          <span className="brand__name">
            Landing<span>Hub</span>
          </span>
        </Link>

        <nav
          className="site-header__actions"
          aria-label="Navegação principal"
        >
          <a href="#categorias" className="header-link">
            Categorias
          </a>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}