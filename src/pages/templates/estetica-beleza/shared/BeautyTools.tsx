import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, Search } from 'lucide-react'
import { BeautyDialog, BeautyPhoto } from './BeautyInteractions'
import { beautyArticles, beautySearch, beautyTreatments } from './beauty-data'
import { beautyModelPath } from './beauty-models'
import type { useTreatmentSearch } from './useTreatmentSearch'

// Small controls and state are shared; each brand defines its page composition.
export function TreatmentFilters({ state }: { state: ReturnType<typeof useTreatmentSearch> }) {
  return <div className="bt-filters"><label className="bt-search"><Search size={18} /><input type="search" aria-label="Buscar tratamentos" placeholder="O que você procura?" value={state.search} onChange={event => state.setSearch(event.target.value)} /></label><div aria-label="Filtrar por área">{['Todos', 'Facial', 'Pele', 'Corporal', 'Tecnologia', 'Bem-estar'].map(category => <button key={category} aria-pressed={state.category === category} onClick={() => state.setCategory(category)}>{category}</button>)}</div><p role="status">{state.items.length} opções encontradas</p>{!state.items.length && <button onClick={() => { state.setCategory('Todos'); state.setSearch('') }}>Limpar filtros</button>}</div>
}
export function TreatmentTile({ item, model, index }: { item: typeof beautyTreatments[number]; model: string; index: number }) {
  return <Link className="bt-tile" to={beautyModelPath(model, `tratamentos/${item.slug}`)}><BeautyPhoto image={item.image} alt={`${item.name} — cena ilustrativa`} /><div><span>0{index + 1} / {item.category}</span><h3>{item.name}</h3><p>{item.text}</p><span className="bt-link">Conhecer o cuidado<ArrowRight size={17} /></span></div></Link>
}
export function ArticleCollection({ model }: { model: string }) {
  const [search, setSearch] = useState('')
  const [params] = useSearchParams()
  const [selected, setSelected] = useState(() => beautyArticles.find(article => article.slug === params.get('artigo')) || null)
  const articles = beautyArticles.filter(article => beautySearch(`${article.title} ${article.category}`).includes(beautySearch(search)))
  return <><label className="bt-search"><Search size={18} /><input type="search" aria-label="Buscar artigos" placeholder="Busque uma leitura" value={search} onChange={event => setSearch(event.target.value)} /></label><div className="bt-articles">{articles.map(article => <article key={article.slug}><BeautyPhoto image={article.image} alt={article.title} /><span>{article.category}</span><h3>{article.title}</h3><p>{article.text}</p><button className="bt-link" onClick={() => setSelected(article)}>Ler artigo<ArrowRight size={17} /></button></article>)}</div>{!articles.length && <p role="status">Nenhuma leitura encontrada. Tente outro termo.</p>}<BeautyDialog title={selected?.title || ''} open={selected !== null} onClose={() => setSelected(null)}>{selected && <><BeautyPhoto image={selected.image} alt={selected.title} />{selected.paragraphs.map(text => <p key={text}>{text}</p>)}<p className="bi-note">Editorial demonstrativo.</p><Link className="bt-link" to={beautyModelPath(model, 'agendamento')}>Começar uma conversa<ArrowRight size={17} /></Link></>}</BeautyDialog></>
}
export function SkinPanel({ technical = false }: { technical?: boolean }) {
  const [region, setRegion] = useState('Textura')
  return <div className="bt-skin-panel"><span>{technical ? 'SKIN SCAN / DEMO MODE' : 'Um olhar para a sua pele'}</span><div role="group" aria-label="Aspectos da análise">{['Textura', 'Rotina', 'Expectativas', 'Histórico'].map(item => <button key={item} aria-pressed={region === item} onClick={() => setRegion(item)}>{item}</button>)}</div><h3>{region}</h3><p>{({ Textura: 'Um ponto de partida para conversar sobre como você percebe sua pele.', Rotina: 'Como o cuidado se encaixa no seu dia e no seu ritmo?', Expectativas: 'O que você gostaria de compreender antes de escolher?', Histórico: 'Sua história tem espaço em uma avaliação individual.' } as Record<string, string>)[region]}</p><div className="bt-scan-lines" aria-hidden="true"><i /><i /><i /><i /></div><small>Painel ilustrativo. Sem análise, captura de imagem ou diagnóstico real.</small></div>
}
