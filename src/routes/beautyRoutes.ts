import { lazy } from 'react'
import { essenzaPath, lumierePath } from '../pages/templates/estetica-beleza/shared/beauty-data'
import { beautyModelPath, nextBeautyPages } from '../pages/templates/estetica-beleza/shared/beauty-models'
const nextComponents = {
  '03': lazy(() => import('../pages/templates/estetica-beleza/modelo-03/AuraPages')),
  '04': lazy(() => import('../pages/templates/estetica-beleza/modelo-04/NeoPages')),
  '05': lazy(() => import('../pages/templates/estetica-beleza/modelo-05/SculptPages')),
  '06': lazy(() => import('../pages/templates/estetica-beleza/modelo-06/MaisonPages')),
  '07': lazy(() => import('../pages/templates/estetica-beleza/modelo-07/ClinicPages')),
  '08': lazy(() => import('../pages/templates/estetica-beleza/modelo-08/ElitePages')),
} as const
const essenza = { tratamentos: 'EssenzaTreatmentsPage', 'tratamentos/:treatmentSlug': 'EssenzaTreatmentPage', sobre: 'EssenzaAboutPage', profissionais: 'EssenzaProfessionalsPage', estrutura: 'EssenzaStructurePage', conteudos: 'EssenzaContentsPage', faq: 'EssenzaFAQPage', contato: 'EssenzaContactPage', agendamento: 'EssenzaBookingPage' } as const
const lumiere = { tratamentos: 'LumiereTreatmentsPage', 'tratamentos/:treatmentSlug': 'LumiereTreatmentPage', experiencia: 'LumiereExperiencePage', 'consulta-particular': 'LumiereConsultationPage', profissionais: 'LumiereProfessionalsPage', estrutura: 'LumiereClinicPage', conteudos: 'LumiereJournalPage', faq: 'LumiereFAQPage', contato: 'LumiereContactPage', agendamento: 'LumiereBookingPage' } as const
export const beautyRoutes = [
  ...Object.entries(nextComponents).flatMap(([model, component]) => [
    ...nextBeautyPages[model].map(page => ({ path: beautyModelPath(model, page.slug), component })),
    { path: beautyModelPath(model, 'agendamento'), component },
    { path: beautyModelPath(model, 'tratamentos/:treatmentSlug'), component },
  ]),
  ...Object.entries(essenza).map(([path, name]) => ({ path: essenzaPath(path), component: lazy(() => import('../pages/templates/estetica-beleza/modelo-01/EssenzaPages').then(module => ({ default: module[name] }))) })),
  ...Object.entries(lumiere).map(([path, name]) => ({ path: lumierePath(path), component: lazy(() => import('../pages/templates/estetica-beleza/modelo-02/LumierePages').then(module => ({ default: module[name] }))) })),
]
