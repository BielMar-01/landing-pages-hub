import { categories } from './categories'
import { templates } from './templates'

export const getAvailableCategories = () => categories.filter(category => templates.some(template => template.categorySlug === category.slug && template.available))
