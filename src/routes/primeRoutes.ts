import { lazy } from 'react'
import { primePath } from '../pages/templates/medico/modelo-02/prime-data'

export const primeRoutes = [
  { path: primePath('experiencia'), component: lazy(() => import('../pages/templates/medico/modelo-02/PrimePages').then(module => ({ default: module.PrimeExperiencePage }))) },
  { path: primePath('especialidades'), component: lazy(() => import('../pages/templates/medico/modelo-02/PrimePages').then(module => ({ default: module.PrimeSpecialtiesPage }))) },
  { path: primePath('especialidades/cardiologia'), component: lazy(() => import('../pages/templates/medico/modelo-02/PrimePages').then(module => ({ default: module.PrimeCardiologyPage }))) },
  { path: primePath('equipe'), component: lazy(() => import('../pages/templates/medico/modelo-02/PrimePages').then(module => ({ default: module.PrimeTeamPage }))) },
  { path: primePath('equipe/helena-martins'), component: lazy(() => import('../pages/templates/medico/modelo-02/PrimePages').then(module => ({ default: module.PrimeDoctorPage }))) },
  { path: primePath('estrutura'), component: lazy(() => import('../pages/templates/medico/modelo-02/PrimePages').then(module => ({ default: module.PrimeFacilitiesPage }))) },
  { path: primePath('conteudos'), component: lazy(() => import('../pages/templates/medico/modelo-02/PrimePages').then(module => ({ default: module.PrimeContentsPage }))) },
  { path: primePath('conteudos/habitos-vida-saudavel'), component: lazy(() => import('../pages/templates/medico/modelo-02/PrimePages').then(module => ({ default: module.PrimeArticlePage }))) },
  { path: primePath('agendamento'), component: lazy(() => import('../pages/templates/medico/modelo-02/PrimeBookingPage')) },
  { path: primePath('contato'), component: lazy(() => import('../pages/templates/medico/modelo-02/PrimePages').then(module => ({ default: module.PrimeContactPage }))) },
  { path: primePath('faq'), component: lazy(() => import('../pages/templates/medico/modelo-02/PrimePages').then(module => ({ default: module.PrimeFAQPage }))) },
]
