# Evolução OrbisCore / Essencial Care

## Escopo

Evolução do projeto existente, sem migração, dependências novas, backend, autenticação, banco de dados, commit ou deploy. Os 64 modelos, as oito categorias, os filtros, a busca e os aliases de rotas foram preservados. Não foi realizada etapa de QA visual.

## OrbisCore

Central, categorias e 404 usam um shell azul-marinho com detalhes azuis/ciano. Hero com browsers construídos em HTML/CSS, previews locais, indicadores do catálogo real, busca sem sensibilidade a acentos, filtros, seleção de modelos e seis recursos. Header sticky, menu mobile, tema claro/escuro preservado, Footer OrbisCore, favicon SVG e metadata em português.

`orbis.tokens.css` concentra a paleta oficial. Tema claro altera as superfícies da Central; hero e header mantêm o azul-marinho. Tokens da Essencial Care são restritos à raiz `.medical-essential`, de modo que o tema da Central não altera a demonstração médica.

## Essencial Care

As cinco referências foram inspecionadas para composição, hierarquia, design de componentes e organização mobile. Nenhum screenshot de referência é usado no site. A home contém header, hero, trust bar, especialidades, sobre, equipe, jornada, estrutura, números, depoimentos, conteúdos, FAQ, agendamento, localização, CTA final e footer.

Hero 55/45 no desktop e fotografia antes do conteúdo no celular. Especialidades com áreas de tamanhos diferentes, sobre assimétrico, equipe com retratos e perfis em dialog, jornada horizontal/vertical, galeria editorial ampliável, depoimentos não uniformes e artigos demonstrativos em dialog. Menu mobile e dialogs permitem Escape e gestão de foco. FAQ usa aria-expanded, aria-controls e transição de altura; painéis fechados ficam inertes. Revelação ao entrar no viewport usa IntersectionObserver, com fallback visível. Movimento respeita prefers-reduced-motion.

O formulário não transmite nem armazena dados. WhatsApp, redes sociais e informações legais abrem explicações demonstrativas; nenhum número ou URL social real foi inventado. Google Maps abre apenas uma busca pela região indicada. Clínica, registros, disponibilidade, depoimentos e indicadores são fictícios, com avisos locais.

## Arquivos criados

- `src/hooks/useDocumentTitle.ts`, `useScrolled.ts`, `useReveal.ts`.
- `src/components/common/PageTransition.tsx`, `OrbisFooter.tsx`.
- `src/components/hub/HeroShowcase.tsx`.
- `src/styles/orbis.tokens.css`, `orbis.css`.
- `public/favicon.svg`.
- `src/pages/templates/medico/modelo-01/care-data.ts`.
- Na pasta `modelo-01/components`: `CarePrimitives.tsx`, `CareHeader.tsx`, `CareIntro.tsx`, `CareServices.tsx`, `CareExperience.tsx`, `CareEditorial.tsx`, `CareContact.tsx`.
- Esta documentação.

## Arquivos modificados

- `index.html`: idioma, fontes, favicon, title, description, theme-color e Open Graph sem domínio inventado.
- `src/routes/AppRoutes.tsx`: transição e rota explícita `/404`.
- `src/components/common/Header.tsx`, `ThemeToggle.tsx`, `RouteScroll.tsx`.
- `src/components/hub/CategoryCard.tsx`, `src/components/category/TemplateCard.tsx`.
- `src/pages/Hub/HubPage.tsx`, `src/pages/Category/CategoryPage.tsx`, `src/pages/NotFound/NotFoundPage.tsx`.
- `src/data/templates.ts`: branding, descrição, tags e preview do Modelo 01.
- `src/styles/globals.css`, `variables.css`: base e tokens globais, com remoção dos estilos substituídos.
- `modelo-01/MedicalEssentialPage.tsx`, `medical-essential.css`, `branding/essencial-care.tokens.css`.
- `README.md`, `docs/IMPLEMENTACAO.md`, `public/images/medico/modelo-01/README.md`.

O preview SVG antigo do Modelo 01 foi removido; a prévia atual é composta em JSX com uma foto compartilhada. Os arquivos de branding e as 30 fotos já fornecidas foram preservados. Nenhum outro modelo teve JSX ou CSS alterado neste bloco.

## Componentes médicos

CareHeader, Hero, TrustBar, Specialties, About, Doctors, PatientJourney, Facilities, Statistics, Testimonials, HealthContent, FAQ, Appointment, Location, FinalCTA, CareFooter e WhatsApp. CareBrand, CarePhoto, CareButton, SectionIntro e CareModal fornecem elementos internos exclusivos desse modelo.

## Assets utilizados

Fotos em `public/images/medico/shared`: `hero-doctor`, `doctor-profile`, `doctor-male`, `team`, `patient-01` a `patient-03`, `general-medicine`, `pediatrics`, `gynecology`, `cardiology`, `dermatology`, `otorhinolaryngology`, `clinic-reception`, `clinic-detail`, `consultation-room`, `equipment-room`, `technology`, `clinic-corridor`, `waiting-room`, `family-care`, `doctor-working`, `health-content`, `doctor-consultation` e `appointment-phone` — todos WebP, referenciados diretamente, sem cópia.

As cinco referências são apenas material de consulta. A marca Essencial Care e o favicon OrbisCore usam SVG nativo. DM Sans e Lora são carregadas por Google Fonts com display=swap e fallbacks Arial/Georgia. O carregamento das fontes depende de conexão; o site permanece legível sem ela.

## Rotas

`/`, todas as páginas de categoria (inclusive `/medico`), `/medico/modelo-01` e `/404` recebem a evolução visual. Rotas de outras demonstrações continuam existentes; recebem somente a transição geral e títulos dinâmicos. Os aliases `/personal` e `/estetica` foram mantidos. A rota `/404` explícita evita que a página de erro seja capturada como categoria.

## Validação

Scripts técnicos: `npm.cmd run build` e `npm.cmd run lint`. Sem testes visuais em navegador. O script de catálogo existente continua disponível como verificação adicional de integridade, sem alterações nesta implementação.

## Pendências reais

Algumas fotografias fornecidas têm a marca anterior “Clínica Essencial” incorporada na própria imagem, inclusive o mockup de agendamento. Elas foram preservadas; não houve edição dos binários. Retratos adicionais distintos podem melhorar a diferenciação dos quatro profissionais, pois o banco contém apenas dois retratos individuais e os demais são enquadramentos da equipe. Fotografias de outras coleções permanecem pendentes conforme seus READMEs.
