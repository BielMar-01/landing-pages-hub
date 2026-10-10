import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { createElement as h } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { createServer } from 'vite'
const server = await createServer({server:{middlewareMode:true,hmr:false,watch:null},appType:'custom',logLevel:'error'})
try {
 const load=p=>server.ssrLoadModule(p)
 const {templates}=await load('/src/data/templates.ts')
 const {nutritionRoutes}=await load('/src/routes/nutritionRoutes.ts')
 const {getAvailableCategories}=await load('/src/data/availableCategories.ts')
 assert.deepEqual(getAvailableCategories().map(c=>c.slug).sort(),['estetica-beleza','medico','nutricionista'])
 assert.equal(templates.filter(t=>t.available).length,18)
 const registered=new Set([...templates.map(t=>t.route),...nutritionRoutes.map(r=>r.path)])
 let count=0
 for(let n=1;n<=8;n++) {
  const m=String(n).padStart(2,'0'),base=`/nutricionista/modelo-${m}`,dir=`/src/pages/templates/nutricionista/modelo-${m}`
  const {content}=await load(`${dir}/data/content.ts`)
  const Home=(await load(`${dir}/NutricionistaModel${m}Page.tsx`)).default
  const Pages=(await load(`${dir}/NutritionPages.tsx`)).default
  const render=(Component,url,pattern)=>renderToString(h(MemoryRouter,{initialEntries:[url]},h(Routes,null,h(Route,{path:pattern,element:h(Component)}))))
  const paths=['','sobre','atendimentos','como-funciona','conteudos','agendamento','contato',...content.services.map(s=>`atendimentos/${s.slug}`),...content.articles.map(a=>`conteudos/${a.slug}`)]
  for(const path of paths){
   const pattern=!path?base:path.includes('/')?`${base}/${path.split('/')[0]}/:slug`:`${base}/${path}`
   const html=render(path?Pages:Home,`${base}${path?'/'+path:''}`,pattern)
   assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${m}/${path}: h1`)
   const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(ids.length,new Set(ids).size,`${m}/${path}: IDs`)
   for(const x of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(x[1]),`${m}: anchor ${x[1]}`)
   const photos=[...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(x=>decodeURI(x[1]))
   for(const p of photos){assert.ok(existsSync(`public${p}`),p);assert.ok(p.includes('/optimized/'),p)}
   if(!path)assert.equal(photos.length,new Set(photos).size,`${m}: repeated photo`)
   for(const x of html.matchAll(/href="(\/nutricionista\/modelo-\d{2}[^"?#]*)/g)){
    const target=x[1],suffix=target.slice(base.length+1)
    assert.ok(registered.has(target)||content.services.some(s=>suffix===`atendimentos/${s.slug}`)||content.articles.some(a=>suffix===`conteudos/${a.slug}`),target)
   }
   count++
  }
  assert.ok(!render(Pages,base+'/atendimentos/inexistente',base+'/atendimentos/:slug').includes('<h1'))
  const form=render(Pages,base+`/agendamento?servico=${content.services[0].slug}&modalidade=Online`,base+'/agendamento')
  assert.ok(form.includes(`value="${content.services[0].slug}" selected=""`))
  assert.ok(form.includes('value="Online" selected=""')||form.includes('<option selected="">Online</option>'))
  assert.ok(form.includes('type="date"')&&form.includes('type="tel"')&&form.includes('type="checkbox"'))
  const searched=render(Pages,base+'/atendimentos?q=zzzinexistente',base+'/atendimentos');assert.ok(searched.includes('Nenhum atendimento'))
 }
 const {HubPage}=await load('/src/pages/Hub/HubPage.tsx')
 const hub=renderToString(h(MemoryRouter,null,h(HubPage)))
 assert.ok(!hub.includes('href="/dentista"'));assert.ok(!hub.includes('href="/personal-trainer"'))
 for(const c of getAvailableCategories())assert.ok(hub.includes(`href="/${c.slug}"`))
 const {CategoryCard}=await load('/src/components/hub/CategoryCard.tsx')
 const {categories}=await load('/src/data/categories.ts')
 assert.equal(renderToString(h(MemoryRouter,null,h(CategoryCard,{category:categories.find(c=>c.slug==='dentista')}))), '')
 const {nutritionToday,maskNutritionPhone,validNutritionPhone,normalizeNutritionSearch}=await load('/src/pages/templates/nutricionista/shared/nutrition-form.ts')
 assert.equal(nutritionToday(new Date('2026-10-09T02:59:59Z')),'2026-10-08')
 assert.equal(nutritionToday(new Date('2026-10-09T03:00:00Z')),'2026-10-09')
 assert.equal(maskNutritionPhone('11999999999'),'(11) 99999-9999')
 assert.equal(maskNutritionPhone('1133334444'),'(11) 3333-4444')
 assert.ok(validNutritionPhone('(11) 99999-9999'));assert.ok(!validNutritionPhone('123'))
 assert.equal(normalizeNutritionSearch('  NUTRIÇÃO '),'nutricao')
 console.log(`Nutrition verified: ${count} pages, 8 active models, internal links, image assets, forms, invalid slugs, search and 3 visible categories.`)
}finally{await server.close()}
