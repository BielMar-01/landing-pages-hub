export function primeToday(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now)
  return ['year', 'month', 'day'].map(type => parts.find(part => part.type === type)?.value).join('-')
}
export const primeDate = (value: string) => new Date(`${value}T15:00:00Z`)
export const formatPrimeDate = (value: string) => new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(primeDate(value))
export function dateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}
export function availablePrimeSlots(date: string, now = new Date()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(primeDate(date).getTime())) return []
  const parsed = primeDate(date)
  if (parsed.toISOString().slice(0, 10) !== date || parsed.getUTCDay() === 0 || parsed.getUTCDay() === 6 || date < primeToday(now)) return []
  const slots = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00']
  return slots.filter(time => new Date(`${date}T${time}:00-03:00`).getTime() > now.getTime())
}
