export interface LandingTemplate {
  id: string
  categorySlug: string
  name: string
  slug: string
  description: string
  style: string
  tags: string[]
  route: string
  available: boolean
  preview?: string
}
