# Landing Pages Hub

Central de demonstração de landing pages profissionais: oito categorias, oito modelos por categoria, 64 páginas navegáveis.

React + TypeScript + Vite + React Router + Lucide + CSS. Projeto exclusivamente front-end.

## Desenvolvimento

`npm install` e `npm run dev`.

## Validação técnica

- `npm run build`: TypeScript e build de produção.
- `npm run lint`: ESLint.
- `npm run check:catalog`: renderização dos 64 modelos, integridade do catálogo, previews, âncoras e escopo dos estilos.

No PowerShell com scripts bloqueados, use `npm.cmd`.

## Coleções

`/medico`, `/nutricionista`, `/psicologo`, `/dentista`, `/personal-trainer`, `/advogado`, `/imobiliario` e `/estetica-beleza`. Cada uma possui `/modelo-01` a `/modelo-08`.

As páginas têm JSX e CSS próprios em `src/pages/templates`. O catálogo está em `src/data/templates.ts` e os imports dinâmicos em `src/routes/landingRoutes.ts`. A Central e a CategoryPage existentes foram mantidas.

## Imagens e demonstrações

O Modelo Médico 01, Essencial Care, usa fotografias reais do banco local `public/images/medico/shared`, sem duplicá-las. A Central e as categorias usam a identidade OrbisCore em azul/ciano. Os outros modelos mantêm suas implementações e seus fallbacks onde ainda faltam fotos. As referências em `public/images/medico/references/modelo-01` orientam o design e não são exibidas dentro do site.

Todos os nomes, registros, imóveis e conteúdos profissionais são fictícios. Formulários simulam envio, sem transmitir ou armazenar dados. Não há backend, autenticação ou deploy nesta implementação.

Consulte [a documentação das coleções](docs/IMPLEMENTACAO.md) e [a evolução OrbisCore / Essencial Care](docs/ORBISCORE-ESSENCIAL-CARE.md) para detalhes de arquivos, rotas, imagens e interações. QA visual em navegador fica para a revisão do projeto.
