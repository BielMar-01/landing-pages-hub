import type { LucideIcon } from 'lucide-react'

export type CategoryGroup =
  | 'saude'
  | 'bem-estar'
  | 'fitness'
  | 'servicos'
  | 'imobiliario'

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  group: CategoryGroup
  templateCount: number
  icon: LucideIcon
  featured?: boolean
}