import type { ReactNode } from 'react'
import { templateForPath } from '../data/templateAvailability'
import { UnavailablePage } from '../pages/Unavailable/UnavailablePage'
import { NotFoundPage } from '../pages/NotFound/NotFoundPage'

export function TemplateAccess({ path, children }: { path: string; children: ReactNode }) {
  const template = templateForPath(path)
  if (!template) return <NotFoundPage />
  if (!template.available) return <UnavailablePage template={template} />
  return children
}
