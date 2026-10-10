import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { createElement as h } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { createServer } from 'vite'
const server = await createServer({ server:{middlewareMode:true,hmr:false,watch:null},appType:'custom',logLevel:'error' })
try {
  const { templates } = await server.ssrLoadModule('/src/data/templates.ts')
  const { TemplateAccess } = await server.ssrLoadModule('/src/routes/TemplateAccess.tsx')
  const { TemplateCard } = await server.ssrLoadModule('/src/components/category/TemplateCard.tsx')
  assert.equal(templates.filter(t=>t.available).length,18)
  assert.equal(templates.filter(t=>t.categorySlug==='estetica-beleza' && t.available).length,8)
  for(const template of templates.filter(t=>!t.available)) {
    const blocked=renderToString(h(MemoryRouter,{initialEntries:[template.route]},h(TemplateAccess,{path:template.route},h('div',null,'FORBIDDEN_CONTENT'))))
    assert.ok(!blocked.includes('FORBIDDEN_CONTENT'),template.route)
    assert.ok(blocked.includes('ainda não está disponível'),template.route)
    const card=renderToString(h(MemoryRouter,null,h(TemplateCard,{template,index:0})))
    assert.ok(!card.includes(`href="${template.route}"`),template.route)
    assert.ok(card.includes('disabled=""'),template.route)
  }
  const { beautyTreatments } = await server.ssrLoadModule('/src/pages/templates/estetica-beleza/shared/beauty-data.ts')
  const { nextBeautyPages, beautyModels } = await server.ssrLoadModule('/src/pages/templates/estetica-beleza/shared/beauty-models.ts')
  const { beautyRoutes } = await server.ssrLoadModule('/src/routes/beautyRoutes.ts')
  const registered = new Set([...templates.map(item=>item.route),...beautyRoutes.map(item=>item.path)])
  function verify(html, label, home = false) {
    assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${label}: heading`)
    const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1])
    assert.equal(ids.length,new Set(ids).size,`${label}: duplicate IDs`)
    for(const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]),`${label}: anchor ${match[1]}`)
    for(const match of html.matchAll(/href="(\/estetica-beleza\/modelo-0\d[^"?#]*)/g)) {
      const target=match[1]
      const exact=registered.has(target)
      const detail=target.match(/^(.*)\/tratamentos\/([^/]+)$/)
      assert.ok(exact || (detail && registered.has(`${detail[1]}/tratamentos/:treatmentSlug`) && beautyTreatments.some(item=>item.slug===detail[2])),`${label}: broken link ${target}`)
    }
    const photos=[...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(match=>decodeURI(match[1]))
    for(const photo of photos) { assert.ok(existsSync(`public${photo}`),photo);assert.ok(photo.includes('/optimized/'),`${label}: optimized image`);assert.ok(!photo.includes('/references/')) }
    for(const match of html.matchAll(/srcSet="([^"]+)"/g)) for(const item of match[1].split(', ')) assert.ok(existsSync(`public${decodeURI(item.replace(/ \d+w$/, ''))}`),item)
    if(home) assert.equal(photos.length,new Set(photos).size,`${label}: repeated home photo`)
  }
  let count=0
  for(const [model,group,prefix] of [['01','EssenzaPages','Essenza'],['02','LumierePages','Lumiere']]) {
    const base=`/estetica-beleza/modelo-${model}`
    const modules=await server.ssrLoadModule(`/src/pages/templates/estetica-beleza/modelo-${model}/${group}.tsx`)
    const home=await server.ssrLoadModule(`/src/pages/templates/estetica-beleza/modelo-${model}/EsteticaBelezaModel${model}Page.tsx`)
    const pages=[[home.default,base,base],...Object.entries(modules).filter(([name])=>name.startsWith(prefix)).flatMap(([name,Page])=>name===`${prefix}TreatmentPage` ? beautyTreatments.map(item=>[Page,`${base}/tratamentos/:treatmentSlug`,`${base}/tratamentos/${item.slug}`]) : [[Page,base,base]])]
    for(const [Page,path,entry] of pages) {
      const html=renderToString(h(MemoryRouter,{initialEntries:[entry]},h(Routes,null,h(Route,{path,element:h(Page)}))))
      assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${model}:${Page.name}`)
      const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1])
      assert.equal(ids.length,new Set(ids).size,`${model}: duplicate IDs`)
      for(const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]),match[1])
      const photos=[...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m=>decodeURI(m[1]))
      for(const photo of photos) { assert.ok(existsSync(`public${photo}`),photo);assert.ok(!photo.includes('/references/')) }
      if(Page===home.default) assert.equal(photos.length,new Set(photos).size,`${model}: repeated home photo`)
      count++
    }
  }
  for(const [model,brand] of [['03','Aura'],['04','Neo'],['05','Sculpt'],['06','Maison'],['07','Clinic'],['08','Elite']]) {
    const base=`/estetica-beleza/modelo-${model}`
    const { default: Home } = await server.ssrLoadModule(`/src/pages/templates/estetica-beleza/modelo-${model}/EsteticaBelezaModel${model}Page.tsx`)
    const { default: Page } = await server.ssrLoadModule(`/src/pages/templates/estetica-beleza/modelo-${model}/${brand}Pages.tsx`)
    verify(renderToString(h(MemoryRouter,{initialEntries:[base]},h(Home))),base,true);count++
    const paths=[...nextBeautyPages[model].map(item=>item.slug),'agendamento',...beautyTreatments.map(item=>`tratamentos/${item.slug}`)]
    for(const slug of paths) {
      const path=slug.startsWith('tratamentos/') ? `${base}/tratamentos/:treatmentSlug` : `${base}/${slug}`
      const entry=`${base}/${slug}`
      assert.ok(registered.has(path),`${entry}: registered`)
      const html=renderToString(h(MemoryRouter,{initialEntries:[entry]},h(Routes,null,h(Route,{path,element:h(Page)}))))
      verify(html,entry);count++
      if(slug==='agendamento') assert.ok(html.includes('type="date"')||html.includes('Etapas de solicitação'),`${entry}: booking`)
    }
    const filteredPath=`${base}/${model==='03'||model==='05'?'protocolos':'tratamentos'}`
    const filtered=renderToString(h(MemoryRouter,{initialEntries:[`${filteredPath}?categoria=Corporal&q=corporal`]},h(Routes,null,h(Route,{path:filteredPath,element:h(Page)}))))
    assert.ok(filtered.replace(/<!--.*?-->/g,'').includes('1 opções encontradas'),`${model}: query filter`)
    const invalid=renderToString(h(MemoryRouter,{initialEntries:[`${base}/tratamentos/inexistente`]},h(Routes,null,h(Route,{path:`${base}/tratamentos/:treatmentSlug`,element:h(Page)}))))
    assert.ok(!invalid.includes('<h1'),`${model}: invalid treatment must redirect`)
    const template=templates.find(item=>item.route===base)
    const card=renderToString(h(MemoryRouter,null,h(TemplateCard,{template,index:Number(model)-1})))
    assert.ok(card.includes(`href="${base}"`),`${model}: clickable preview`)
    assert.ok(card.includes(beautyModels.find(item=>item.model===model).name),`${model}: canonical brand name`)
    assert.ok(card.includes('/optimized/'),`${model}: photographic preview`)
  }
  console.log(`Beauty verified: ${count} rendered pages, links, images, query filters and booking; 8 beauty models available, ${templates.filter(item=>!item.available).length} unfinished models blocked.`)
} finally { await server.close() }

