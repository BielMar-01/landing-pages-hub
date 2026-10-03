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

Fotografias ainda precisam ser fornecidas. Os caminhos estão preparados em `public/images/{categoria}/{modelo}`; cada pasta contém instruções para seus assets. Até que as imagens sejam adicionadas, fallbacks preservam a apresentação sem imagens quebradas. Os previews SVG locais já estão disponíveis.

Todos os nomes, registros, imóveis e conteúdos profissionais são fictícios. Formulários simulam envio, sem transmitir ou armazenar dados. Não há backend, autenticação ou deploy nesta implementação.

Consulte [a documentação da implementação](docs/IMPLEMENTACAO.md) para detalhes de rotas, imagens e interações. QA visual em navegador fica para a revisão do projeto.
