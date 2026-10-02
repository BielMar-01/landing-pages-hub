import { Route, Routes } from 'react-router-dom'

import { CategoryPage } from '../pages/Category/CategoryPage'
import { HubPage } from '../pages/Hub/HubPage'
import { NotFoundPage } from '../pages/NotFound/NotFoundPage'
import { TemplatePlaceholderPage } from '../pages/templates/TemplatePlaceholderPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HubPage />} />

      <Route
        path="/:categorySlug/:templateSlug"
        element={<TemplatePlaceholderPage />}
      />

      <Route
        path="/:categorySlug"
        element={<CategoryPage />}
      />

      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  )
}