import { Suspense } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'

import { CategoryPage } from '../pages/Category/CategoryPage'
import { HubPage } from '../pages/Hub/HubPage'
import { NotFoundPage } from '../pages/NotFound/NotFoundPage'
import { landingRoutes } from './landingRoutes'
import { RouteScroll } from '../components/common/RouteScroll'

import { MedicalEssentialPage } from '../pages/templates/medico/modelo-01/MedicalEssentialPage'

function LegacyCategory({ category }: { category: string }) {
  const { templateSlug } = useParams()
  return <Navigate to={`/${category}${templateSlug ? `/${templateSlug}` : ''}`} replace />
}

export function AppRoutes() {
  return (
    <>
      <RouteScroll />
      <Suspense fallback={
        <main className="container" role="status" style={{ paddingBlock: 80 }}>
          Carregando demonstração…
        </main>
      }>
        <Routes>
          <Route path="/" element={<HubPage />} />
          <Route path="/medico/modelo-01" element={<MedicalEssentialPage />} />

          {landingRoutes.map(({ path, component: Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}

          <Route path="/personal" element={<LegacyCategory category="personal-trainer" />} />
          <Route path="/personal/:templateSlug" element={<LegacyCategory category="personal-trainer" />} />
          <Route path="/estetica" element={<LegacyCategory category="estetica-beleza" />} />
          <Route path="/estetica/:templateSlug" element={<LegacyCategory category="estetica-beleza" />} />

          <Route path="/:categorySlug" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}
