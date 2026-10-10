import { Suspense } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'

import { CategoryPage } from '../pages/Category/CategoryPage'
import { HubPage } from '../pages/Hub/HubPage'
import { NotFoundPage } from '../pages/NotFound/NotFoundPage'
import { landingRoutes } from './landingRoutes'
import { primeRoutes } from './primeRoutes'
import { nutritionRoutes } from './nutritionRoutes'
import { beautyRoutes } from './beautyRoutes'
import { TemplateAccess } from './TemplateAccess'
import { RouteScroll } from '../components/common/RouteScroll'
import { PageTransition } from '../components/common/PageTransition'

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
        <PageTransition><Routes>
          <Route path="/" element={<HubPage />} />
          <Route path="/medico/modelo-01" element={<TemplateAccess path="/medico/modelo-01"><MedicalEssentialPage /></TemplateAccess>} />
          <Route path="/404" element={<NotFoundPage />} />

          {[...landingRoutes, ...primeRoutes, ...beautyRoutes, ...nutritionRoutes].map(({ path, component: Page }) => (
            <Route key={path} path={path} element={<TemplateAccess path={path}><Page /></TemplateAccess>} />
          ))}

          <Route path="/personal" element={<LegacyCategory category="personal-trainer" />} />
          <Route path="/personal/:templateSlug" element={<LegacyCategory category="personal-trainer" />} />
          <Route path="/estetica" element={<LegacyCategory category="estetica-beleza" />} />
          <Route path="/estetica/:templateSlug" element={<LegacyCategory category="estetica-beleza" />} />

          <Route path="/:categorySlug" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes></PageTransition>
      </Suspense>
    </>
  )
}
