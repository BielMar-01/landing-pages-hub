import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { beautySearch, beautyTreatments } from './beauty-data'

export function useTreatmentSearch() {
  const [params] = useSearchParams()
  const [search, setSearch] = useState(params.get('q') || '')
  const [category, setCategory] = useState(params.get('categoria') || 'Todos')
  const items = beautyTreatments.filter(item => (category === 'Todos' || category === item.category) && beautySearch(`${item.name} ${item.text} ${item.category}`).includes(beautySearch(search)))
  return { search, setSearch, category, setCategory, items }
}
