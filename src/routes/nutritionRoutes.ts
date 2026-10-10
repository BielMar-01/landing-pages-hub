import { lazy } from 'react'
import { nutritionPath } from '../pages/templates/nutricionista/shared/nutrition-images'
const components = {
  '01': lazy(() => import('../pages/templates/nutricionista/modelo-01/NutritionPages')),
  '02': lazy(() => import('../pages/templates/nutricionista/modelo-02/NutritionPages')),
  '03': lazy(() => import('../pages/templates/nutricionista/modelo-03/NutritionPages')),
  '04': lazy(() => import('../pages/templates/nutricionista/modelo-04/NutritionPages')),
  '05': lazy(() => import('../pages/templates/nutricionista/modelo-05/NutritionPages')),
  '06': lazy(() => import('../pages/templates/nutricionista/modelo-06/NutritionPages')),
  '07': lazy(() => import('../pages/templates/nutricionista/modelo-07/NutritionPages')),
  '08': lazy(() => import('../pages/templates/nutricionista/modelo-08/NutritionPages')),
}
export const nutritionRoutes = Object.entries(components).flatMap(([model, component]) => ['sobre', 'atendimentos', 'atendimentos/:slug', 'como-funciona', 'conteudos', 'conteudos/:slug', 'agendamento', 'contato'].map(page => ({ path: nutritionPath(model, page), component })))
