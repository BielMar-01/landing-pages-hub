import {
  Apple,
  Brain,
  BriefcaseBusiness,
  Building2,
  Dumbbell,
  HeartPulse,
  Scissors,
  Stethoscope,
} from 'lucide-react'

import type { Category } from '../types/category'

export const categories: Category[] = [
  {
    id: 'medico',
    name: 'Médico',
    slug: 'medico',
    description:
      'Landing pages profissionais para médicos, especialistas, consultórios e clínicas.',
    shortDescription: 'Médicos, especialistas e clínicas',
    group: 'saude',
    templateCount: 8,
    icon: Stethoscope,
    featured: true,
  },
  {
    id: 'nutricionista',
    name: 'Nutricionista',
    slug: 'nutricionista',
    description:
      'Modelos para nutricionistas que desejam apresentar seus serviços e conquistar novos pacientes.',
    shortDescription: 'Nutrição e acompanhamento',
    group: 'saude',
    templateCount: 8,
    icon: Apple,
    featured: true,
  },
  {
    id: 'psicologo',
    name: 'Psicólogo',
    slug: 'psicologo',
    description:
      'Landing pages acolhedoras e profissionais para psicólogos e clínicas de psicologia.',
    shortDescription: 'Psicologia e saúde mental',
    group: 'saude',
    templateCount: 8,
    icon: Brain,
    featured: true,
  },
  {
    id: 'dentista',
    name: 'Dentista',
    slug: 'dentista',
    description:
      'Modelos modernos para dentistas, especialistas e clínicas odontológicas.',
    shortDescription: 'Odontologia e clínicas',
    group: 'saude',
    templateCount: 8,
    icon: HeartPulse,
  },
  {
    id: 'personal',
    name: 'Personal Trainer',
    slug: 'personal-trainer',
    description:
      'Landing pages para personal trainers, coaches e profissionais de performance física.',
    shortDescription: 'Treinamento e performance',
    group: 'fitness',
    templateCount: 8,
    icon: Dumbbell,
  },
  {
    id: 'advogado',
    name: 'Advogado',
    slug: 'advogado',
    description:
      'Modelos profissionais para advogados, especialistas e escritórios jurídicos.',
    shortDescription: 'Advocacia e escritórios',
    group: 'servicos',
    templateCount: 8,
    icon: BriefcaseBusiness,
  },
  {
    id: 'imobiliario',
    name: 'Imobiliário',
    slug: 'imobiliario',
    description:
      'Landing pages para corretores, imobiliárias e profissionais do mercado imobiliário.',
    shortDescription: 'Corretores e imobiliárias',
    group: 'imobiliario',
    templateCount: 8,
    icon: Building2,
  },
  {
    id: 'estetica',
    name: 'Estética & Beleza',
    slug: 'estetica-beleza',
    description:
      'Modelos elegantes para clínicas de estética e profissionais de beleza.',
    shortDescription: 'Estética, beleza e cuidados',
    group: 'bem-estar',
    templateCount: 8,
    icon: Scissors,
  },
]