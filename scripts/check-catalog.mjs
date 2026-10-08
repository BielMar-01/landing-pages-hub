import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { createServer } from 'vite'
import { parse } from 'postcss'

const server = await createServer({ server: { middlewareMode: true, hmr: false, watch: null }, appType: 'custom', logLevel: 'error' })
try {
  const { templates } = await server.ssrLoadModule('/src/data/templates.ts')
  const { categories } = await server.ssrLoadModule('/src/data/categories.ts')
  assert.equal(categories.length, 8)
  assert.equal(templates.length, 64)
  assert.equal(new Set(templates.map(t => t.route)).size, 64)
  const registered = readFileSync('src/routes/landingRoutes.ts', 'utf8')
  for (const category of categories) {
    assert.equal(templates.filter(t => t.categorySlug === category.slug).length, 8)
  }
  for (const template of templates) {
    const dir = `src/pages/templates/${template.categorySlug}/${template.slug}`
    const filename = readdirSync(dir).find(file => /Model\d{2}Page\.tsx$/.test(file)) || (template.id === 'medico-01' ? 'MedicalEssentialPage.tsx' : undefined)
    assert.ok(filename, `Page missing: ${template.route}`)
    assert.ok(existsSync(`public${template.preview}`), `Preview missing: ${template.route}`)
    const mod = await server.ssrLoadModule(`/${dir}/${filename}`)
    const page = mod.default || mod.MedicalEssentialPage
    const html = renderToString(createElement(MemoryRouter, { initialEntries: [template.route] }, createElement(page)))
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${template.route}: one h1`)
    assert.ok(html.includes(`href="/${template.categorySlug}"`), `${template.route}: return link`)
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])
    assert.equal(new Set(ids).size, ids.length, `${template.route}: duplicate IDs`)
    for (const anchor of html.matchAll(/href="#([^"]+)"/g)) {
      assert.ok(ids.includes(anchor[1]), `${template.route}: missing anchor ${anchor[1]}`)
    }
    if(template.id !== 'medico-01') {
      assert.ok(registered.includes(`path: '${template.route}'`), `${template.route}: registration`)
      const root = `.lp-${template.categorySlug}-${Number(template.slug.slice(-2))}`
      parse(readFileSync(`${dir}/${template.slug}.css`, 'utf8')).walkRules(rule => {
        for(const selector of rule.selectors) assert.ok(selector.startsWith(root), `${template.route}: unscoped CSS ${selector}`)
      })
    }
  }
  console.log('Catalog verified: 8 categories, 64 rendered pages, 64 previews, return links, anchors, unique IDs and scoped CSS.')
} finally {
  await server.close()
}
