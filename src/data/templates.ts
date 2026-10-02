import type { LandingTemplate } from '../types/template'

export const templates: LandingTemplate[] = [
  {
    id: 'medico-01',
    categorySlug: 'medico',
    name: 'Clínica Essencial',
    slug: 'modelo-01',
    description:
      'Visual clean e profissional para médicos e consultórios modernos.',
    style: 'Clean',
    tags: ['Clean', 'Clínico', 'Moderno'],
    route: '/medico/modelo-01',
    available: true,
  },
  {
    id: 'medico-02',
    categorySlug: 'medico',
    name: 'Medicina Prime',
    slug: 'modelo-02',
    description:
      'Experiência sofisticada para atendimento médico particular e premium.',
    style: 'Premium',
    tags: ['Premium', 'Elegante', 'Particular'],
    route: '/medico/modelo-02',
    available: true,
  },
  {
    id: 'medico-03',
    categorySlug: 'medico',
    name: 'Cuidado Humano',
    slug: 'modelo-03',
    description:
      'Design acolhedor focado em proximidade, confiança e cuidado.',
    style: 'Humanizado',
    tags: ['Acolhedor', 'Humano', 'Suave'],
    route: '/medico/modelo-03',
    available: true,
  },
  {
    id: 'medico-04',
    categorySlug: 'medico',
    name: 'MedTech',
    slug: 'modelo-04',
    description:
      'Identidade tecnológica para profissionais ligados à medicina moderna.',
    style: 'Tecnológico',
    tags: ['Tech', 'Moderno', 'Digital'],
    route: '/medico/modelo-04',
    available: true,
  },
  {
    id: 'medico-05',
    categorySlug: 'medico',
    name: 'Especialista',
    slug: 'modelo-05',
    description:
      'Estrutura focada em autoridade, formação e especialização profissional.',
    style: 'Autoridade',
    tags: ['Especialista', 'Currículo', 'Autoridade'],
    route: '/medico/modelo-05',
    available: true,
  },
  {
    id: 'medico-06',
    categorySlug: 'medico',
    name: 'Consultório Minimal',
    slug: 'modelo-06',
    description:
      'Uma experiência editorial minimalista com foco no essencial.',
    style: 'Minimalista',
    tags: ['Minimal', 'Editorial', 'Clean'],
    route: '/medico/modelo-06',
    available: true,
  },
  {
    id: 'medico-07',
    categorySlug: 'medico',
    name: 'Clínica 360',
    slug: 'modelo-07',
    description:
      'Modelo completo para clínicas com profissionais e especialidades.',
    style: 'Corporativo',
    tags: ['Clínica', 'Equipe', 'Corporativo'],
    route: '/medico/modelo-07',
    available: true,
  },
  {
    id: 'medico-08',
    categorySlug: 'medico',
    name: 'Medical Executive',
    slug: 'modelo-08',
    description:
      'Posicionamento de alto padrão para atendimento médico exclusivo.',
    style: 'Executivo',
    tags: ['Luxo', 'Executivo', 'Exclusivo'],
    route: '/medico/modelo-08',
    available: true,
  },
]

export function getTemplatesByCategory(categorySlug: string) {
  return templates.filter(
    (template) => template.categorySlug === categorySlug,
  )
}