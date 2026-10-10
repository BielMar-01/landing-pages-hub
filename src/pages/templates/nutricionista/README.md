# Brandings — Categoria Nutricionista

Oito modelos implementados e disponíveis em `/nutricionista`, com identidades baseadas nos brandings abaixo.

| Modelo | Marca | Posicionamento |
|---|---|---|
| 01 | Essenza Nutri | Natural e humanizado |
| 02 | Maison Nutrition | Premium e sofisticado |
| 03 | Fuel Performance | Esportivo e performance |
| 04 | LeveMente Nutrição | Comportamental e acolhedor |
| 05 | Nutriva Clinic | Clínico e científico |
| 06 | Forma Nutri | Minimalista e editorial |
| 07 | Raízes Nutrição | Familiar e materno-infantil |
| 08 | NutriSync | Digital e tecnológico |

Cada pasta contém `branding.md`, `tokens.css`, `image-map.md` e `references-plan.md`.

As imagens fornecidas ficam em `public/images/nutricionista/shared`. As páginas usam versões JPEG responsivas de 640 e 1280 pixels em `optimized`; os originais e as referências foram preservados. Para gerar novamente, execute `powershell -ExecutionPolicy Bypass -File scripts/optimize-nutrition-images.ps1` na raiz do projeto.

Cada modelo possui home, sobre, catálogo de atendimentos, quatro páginas de atendimento, como funciona, catálogo de conteúdos, três artigos, agendamento e contato. O conteúdo editável fica em `modelo-NN/data/content.ts`; a home, o layout e o CSS pertencem ao próprio modelo. Componentes de acessibilidade, imagens e formulários ficam em `shared`. Os tokens são aplicados dentro da raiz de cada página, sem importar os arquivos de branding com `:root` global.

As composições respeitam as identidades oficiais mesmo quando o nome ou o nicho da referência visual difere. Fotografias e marcas são ilustrativas. Nome do profissional, CRN, formação, telefone e endereço aguardam configuração; não foram inventados depoimentos ou resultados clínicos.

Os formulários funcionam localmente, com máscara de telefone, validação, data no fuso de São Paulo, consentimento e feedback de simulação. Não enviam nem armazenam dados permanentemente, e não reservam consultas. Use dados fictícios. NutriSync apresenta um painel demonstrativo sem conta ou integração.

A Central lista apenas categorias com pelo menos um modelo disponível. Atualmente são Médico, Nutricionista e Estética & Beleza, com 18 modelos disponíveis. Os 46 modelos em preparação continuam bloqueados, e categorias sem modelos disponíveis redirecionam para 404.

Validação: `npm run build`, `npm run lint`, `npm run check:catalog`, `npm run check:prime`, `npm run check:beauty` e `npm run check:nutrition`. A última verificação cobre 112 páginas de nutrição por renderização no servidor, links, imagens, formulários, buscas e disponibilidade. Não substitui revisão visual em navegador.
