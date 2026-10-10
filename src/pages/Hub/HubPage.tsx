import { useMemo, useState } from 'react'
import { ArrowRight, ArrowUpRight, Code2, Gauge, Layers3, Palette, SearchX, Settings2, Smartphone } from 'lucide-react'
import { Header } from '../../components/common/Header'
import { OrbisFooter } from '../../components/common/OrbisFooter'
import { SearchInput } from '../../components/common/SearchInput'
import { CategoryCard } from '../../components/hub/CategoryCard'
import { HeroShowcase } from '../../components/hub/HeroShowcase'
import { TemplateCard } from '../../components/category/TemplateCard'
import { getAvailableCategories } from '../../data/availableCategories'
const categories = getAvailableCategories()
import { templates } from '../../data/templates'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { useReveal } from '../../hooks/useReveal'
import type { CategoryGroup } from '../../types/category'

type Filter = 'todos' | CategoryGroup
const filterOptions: Array<{label:string; value:Filter}> = [
  {label:'Todos',value:'todos'}, {label:'Saúde',value:'saude'}, {label:'Bem-estar',value:'bem-estar'},
  {label:'Fitness',value:'fitness'}, {label:'Serviços',value:'servicos'}, {label:'Imobiliário',value:'imobiliario'},

]
const filters = filterOptions.filter(filter => filter.value === 'todos' || categories.some(category => category.group === filter.value))
const resources = [
  {icon:Smartphone,title:'Mobile-first',description:'Composição e navegação pensadas para diferentes tamanhos de tela.'},
  {icon:Palette,title:'Design moderno',description:'Direções visuais que consideram o público e a personalidade de cada segmento.'},
  {icon:Gauge,title:'Alta performance',description:'Carregamento por página, imagens otimizadas e interações sem bibliotecas pesadas.'},
  {icon:Settings2,title:'Pronto para personalização',description:'Páginas independentes, conteúdo editável e estilos organizados por modelo.'},
  {icon:Code2,title:'React + TypeScript',description:'Uma base clara para desenvolver, adaptar e transformar o modelo em projeto.'},
  {icon:Layers3,title:'Preparado para Vercel',description:'Build com Vite e estrutura pronta para uma futura publicação.'},
]
const featuredIds = ['medico-01','estetica-beleza-02','estetica-beleza-04','nutricionista-01','nutricionista-03','nutricionista-08']

export function HubPage() {
  useDocumentTitle('OrbisCore | Landing Pages Hub')
  const ref = useReveal()
  const [search,setSearch] = useState('')
  const [activeFilter,setActiveFilter] = useState<Filter>('todos')
  const filteredCategories = useMemo(() => {
    const normalize = (text:string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR')
    const term = normalize(search.trim())
    return categories.filter(category => (activeFilter === 'todos' || category.group === activeFilter) && normalize(`${category.name} ${category.description} ${category.shortDescription}`).includes(term))
  },[activeFilter,search])
  return <div className="orbis-shell" ref={ref}>
    <a className="orbis-skip" href="#hub-main">Pular para o conteúdo</a><Header />
    <main id="hub-main">
      <section className="orbis-hero" id="inicio"><div className="container orbis-hero-grid"><div className="orbis-hero-copy"><span className="orbis-eyebrow"><i />ORBISCORE PRESENTS</span><h1>Presença digital.<br /><span>Experiências</span><br />que conectam.</h1><p>Explore landing pages modernas, responsivas e cuidadosamente desenvolvidas para diferentes segmentos. Encontre um ponto de partida com personalidade.</p><div className="orbis-actions"><a href="#modelos" className="orbis-button">Explorar modelos<ArrowUpRight size={18} /></a><a href="#categorias" className="orbis-text-link">Ver categorias<ArrowRight size={18} /></a></div><div className="orbis-hero-stats"><div><strong>{categories.length}</strong><span>Categorias</span></div><div><strong>{templates.filter(template=>template.available).length}</strong><span>Modelos disponíveis</span></div><div><strong>100%</strong><span>Responsivo</span></div><div><strong>React</strong><span>Front-end ready</span></div></div></div><HeroShowcase /></div><div className="container orbis-hero-bottom"><span>UM HUB. DIFERENTES POSSIBILIDADES.</span><span>Explore, escolha, personalize.<ArrowRight size={15} /></span></div></section>
      <section className="orbis-section orbis-categories" id="categorias"><div className="container"><div className="orbis-section-heading" data-reveal><div><span className="orbis-eyebrow">01 / ENCONTRE SEU SEGMENTO</span><h2>O seu próximo projeto<br />começa por aqui.</h2></div><p>Coleções prontas para explorar. Diferentes formas de apresentar o que torna cada negócio único.</p></div><div className="orbis-category-tools"><SearchInput value={search} onChange={setSearch} placeholder="Buscar categoria..." /><div className="orbis-filters" aria-label="Filtrar categorias">{filters.map(filter=><button key={filter.value} type="button" aria-pressed={activeFilter===filter.value} onClick={()=>setActiveFilter(filter.value)}>{filter.label}</button>)}</div></div><span className="orbis-results" role="status">{filteredCategories.length} {filteredCategories.length===1?'categoria encontrada':'categorias encontradas'}</span>{filteredCategories.length ? <div className="orbis-category-grid">{filteredCategories.map(category=><CategoryCard key={category.id} category={category} />)}</div> : <div className="orbis-empty"><SearchX size={32} /><h3>Nenhuma categoria encontrada</h3><p>Tente outro termo ou remova o filtro selecionado.</p><button className="orbis-button" type="button" onClick={()=>{setSearch('');setActiveFilter('todos')}}>Limpar filtros</button></div>}</div></section>
      <section className="orbis-section orbis-models" id="modelos"><div className="container"><div className="orbis-section-heading" data-reveal><div><span className="orbis-eyebrow">02 / EXPLORE AS EXPERIÊNCIAS</span><h2>Um design.<br />Um universo de possibilidades.</h2></div><p>Uma seleção para começar a explorar. Abra uma demonstração e descubra a experiência completa.</p></div><div className="orbis-featured-grid">{templates.filter(template=>featuredIds.includes(template.id) && template.available).map(template=><TemplateCard key={template.id} template={template} index={Number(template.slug.slice(-2))-1} />)}</div></div></section>
      <section className="orbis-section orbis-resources" id="recursos"><div className="container"><div className="orbis-section-heading" data-reveal><div><span className="orbis-eyebrow">03 / FEITO PARA CONSTRUIR</span><h2>Do primeiro olhar<br />ao próximo projeto.</h2></div><p>Design e desenvolvimento no mesmo ponto de partida. Uma base para criar experiências digitais com propósito.</p></div><div className="orbis-resource-grid">{resources.map(({icon:Icon,title,description},i)=><article className="orbis-resource" key={title} data-reveal style={{transitionDelay:`${i%3*70}ms`}}><Icon size={26} strokeWidth={1.5} /><span>0{i+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className="orbis-cta"><div className="container"><div className="orbis-cta-panel" data-reveal><span className="orbis-eyebrow">SUA PRÓXIMA EXPERIÊNCIA</span><h2>Escolha um segmento.<br />Encontre um design.<br /><span>Transforme em projeto.</span></h2><a href="#categorias" className="orbis-button">Explorar categorias<ArrowUpRight size={18} /></a><span className="orbis-cta-orbit" aria-hidden="true" /></div></div></section>
    </main><OrbisFooter />
  </div>
}
