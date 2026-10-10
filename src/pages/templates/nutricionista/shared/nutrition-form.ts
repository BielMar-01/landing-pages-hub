export function nutritionToday(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(date)
  return ['year', 'month', 'day'].map(type => parts.find(part => part.type === type)?.value).join('-')
}
export function maskNutritionPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length < 3) return digits ? `(${digits}` : ''
  const rest = digits.slice(2)
  const split = rest.length > 8 ? 5 : 4
  return `(${digits.slice(0, 2)}) ${rest.slice(0, split)}${rest.length > split ? `-${rest.slice(split)}` : ''}`
}
export function validNutritionPhone(value: string) { return /^\d{10,11}$/.test(value.replace(/\D/g, '')) }
export const normalizeNutritionSearch = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim()
