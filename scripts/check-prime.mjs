import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false, watch: null }, appType: 'custom', logLevel: 'error' })
try {
  const base = '/src/pages/templates/medico/modelo-02/'
  const pages = await server.ssrLoadModule(`${base}PrimePages.tsx`)
  const home = await server.ssrLoadModule(`${base}MedicoModel02Page.tsx`)
  const booking = await server.ssrLoadModule(`${base}PrimeBookingPage.tsx`)
  const { primePath, primePageTitles, doctors, specialties, normalizeSearch } = await server.ssrLoadModule(`${base}prime-data.ts`)
  const { primeRoutes } = await server.ssrLoadModule('/src/routes/primeRoutes.ts')
  const routes = [
    ['', home.default], ['experiencia', pages.PrimeExperiencePage], ['especialidades', pages.PrimeSpecialtiesPage],
    ['especialidades/cardiologia', pages.PrimeCardiologyPage], ['equipe', pages.PrimeTeamPage], ['equipe/helena-martins', pages.PrimeDoctorPage],
    ['estrutura', pages.PrimeFacilitiesPage], ['conteudos', pages.PrimeContentsPage], ['conteudos/habitos-vida-saudavel', pages.PrimeArticlePage],
    ['agendamento', booking.default], ['contato', pages.PrimeContactPage], ['faq', pages.PrimeFAQPage],
  ]
  const registered = new Set([primePath(), ...primeRoutes.map(route => route.path)])
  assert.equal(registered.size, 12)
  assert.equal(Object.keys(primePageTitles).length, 12)
  for (const [suffix, Page] of routes) {
    const path = primePath(suffix)
    assert.ok(registered.has(path), `Unregistered route: ${path}`)
    const html = renderToString(createElement(MemoryRouter, { initialEntries: [path] }, createElement(Page)))
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one h1`)
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])
    assert.equal(new Set(ids).size, ids.length, `${path}: unique IDs`)
    for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(target), `${path}: missing anchor ${target}`)
    for (const [, link] of html.matchAll(/href="(\/medico\/modelo-02[^"?#]*)/g)) assert.ok(registered.has(link), `${path}: missing page ${link}`)
    for (const [, image] of html.matchAll(/(?:src|srcSet)="(\/images\/[^" ]+)/g)) {
      assert.ok(existsSync(`public${image}`), `${path}: missing asset ${image}`)
      assert.ok(!image.includes('/references/'), `${path}: reference screenshot in UI`)
    }
  }
  for (const specialty of specialties) assert.ok(doctors.some(doctor => doctor.specialty === specialty.id), `${specialty.name}: no professional to book`)
  assert.equal(normalizeSearch('Clínica GERAL'), 'clinica geral')
  const tokens = readFileSync('src/pages/templates/medico/modelo-02/branding/essencial-prime.tokens.css', 'utf8')
  assert.ok(tokens.startsWith('.lp-medico-2'))
  const { primeToday, availablePrimeSlots, dateKey, formatPrimeDate } = await server.ssrLoadModule(`${base}prime-booking.ts`)
  assert.equal(primeToday(new Date('2026-10-05T01:00:00Z')), '2026-10-04', 'São Paulo day before UTC date')
  assert.equal(dateKey(2026, 0, 9), '2026-01-09')
  const monday = new Date('2026-10-05T13:00:00Z') // 10:00 in São Paulo
  assert.ok(!availablePrimeSlots('2026-10-05', monday).includes('10:00'), 'do not offer a slot that has begun')
  assert.equal(availablePrimeSlots('2026-10-05', monday)[0], '10:30')
  assert.equal(availablePrimeSlots('2026-10-03', monday).length, 0, 'no past dates')
  assert.equal(availablePrimeSlots('2026-10-10', monday).length, 0, 'no Saturdays')
  assert.equal(availablePrimeSlots('2026-10-11', monday).length, 0, 'no Sundays')
  assert.equal(availablePrimeSlots('2026-02-30', monday).length, 0, 'reject invalid calendar dates')
  assert.equal(availablePrimeSlots('invalid', monday).length, 0)
  assert.equal(availablePrimeSlots('2026-10-05', new Date('2026-10-05T21:00:00Z')).length, 0, 'no slots after closing time')
  assert.ok(formatPrimeDate('2026-10-05').includes('segunda-feira'))
  console.log('Essencial Prime verified: 12 rendered routes, navigation, anchors, assets, scoped tokens, bookable specialties, search normalization and São Paulo calendar boundaries.')
} finally { await server.close() }
