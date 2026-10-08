import { templates } from './templates'

export function templateForPath(pathname: string) {
  const normalized = pathname.toLocaleLowerCase('en-US').replace(/\/+$/, '')
  return templates.find(template => normalized === template.route || normalized.startsWith(`${template.route}/`))
}
export function canAccessTemplate(pathname: string) {
  return templateForPath(pathname)?.available === true
}
