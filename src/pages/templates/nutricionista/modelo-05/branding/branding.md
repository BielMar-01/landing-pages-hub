# Nutriva Clinic — Branding completo · Modelo 05

> Categoria: Nutricionista · Direção: Clínico e científico · Versão: 1.0 · Identidade conceitual para template demonstrativo.

## 1. Estratégia da marca

- **Nome:** Nutriva Clinic.
- **Assinatura:** Ciência aplicada à sua saúde.
- **Posicionamento:** Clínico e científico. Credibilidade médica, linhas precisas, fotografias clínicas, painéis de informação claros.
- **Público:** Pacientes que procuram nutrição clínica com abordagem baseada em evidências.
- **Promessa responsável:** orientação nutricional personalizada, educativa e baseada nas necessidades individuais; nunca resultados garantidos.
- **Personalidade:** profissional, contemporânea, humana, confiável e coerente com o nicho.
- **Tom de voz:** frases curtas, claras e empáticas; sem moralizar alimentos ou corpos; explicar termos técnicos quando usados.
- **Objetivo principal:** converter visitas em solicitações de consulta com transparência sobre os serviços.
- **CTAs principais:** "Agendar consulta", "Conhecer atendimentos", "Falar pelo WhatsApp".

## 2. Sistema visual

**Direção criativa:** Credibilidade médica, linhas precisas, fotografias clínicas, painéis de informação claros.

### Paleta HEX

| Token | HEX |
|---|---|
| primary | `#123F4A` |
| secondary | `#3CA7A3` |
| background | `#F5FAFA` |
| surface | `#FFFFFF` |
| accent | `#69B8B5` |
| text | `#183B43` |
| muted | `#647A80` |
| soft | `#EAF5F6` |

**Aplicação:** `background` no fundo, `surface` nos cards, `primary` em áreas institucionais, `accent` em ações/destaques e `muted` em textos secundários. Garantir contraste WCAG AA; ajustar cores de texto em superfícies coloridas quando necessário. A interface é predominantemente clara, com títulos em tom escuro.

### Tipografia

- **Display:** Plus Jakarta Sans; hero 64–76px desktop / 38–44px mobile; H2 42–52px desktop / 30–36px mobile.
- **Interface:** Source Sans 3; corpo 16–18px desktop / 15–16px mobile; labels 13–14px; botões 14–16px.
- Títulos: `line-height: 1.1–1.2`; corpo: `line-height: 1.55–1.75`; limitar textos longos a 65–75 caracteres por linha.
- Fontes com fallback local, `font-display: swap` e pesos reduzidos.

### Logo e elementos de marca

- Wordmark original com nome legível e assinatura opcional; evitar símbolos médicos que possam sugerir especialidade inexistente.
- Símbolo próprio para favicon (formas orgânicas/geométricas alinhadas à proposta); variantes clara, escura, horizontal, vertical e monocromática.
- Ícones lineares consistentes, 1.5–2px; elementos gráficos derivados da identidade, não decorativos em excesso.
- Imagens reais e inclusivas; diversidade de corpos, idades e perfis sem estereótipos.

## 3. Layout e arquitetura

**Hero principal:** Hero modular com especialista, áreas clínicas e CTA. Título sugerido: **Ciência aplicada à sua saúde.**. Apoio: "Acompanhamento nutricional individualizado, com estratégias possíveis para a sua rotina e objetivos." CTAs: "Agendar consulta" e "Conheça o método".

**Áreas de atuação demonstrativas:** Saúde metabólica, acompanhamento nutricional, prevenção, saúde digestiva. Validar quais serviços o profissional efetivamente oferece antes de publicar.

**Jornada:** Anamnese → avaliação → conduta → reavaliação.

### Seções da Home, na ordem

1. **Header e navegação.** Evitar métricas fictícias e prova social não verificada.
2. **Hero e proposta de valor.** Áreas clínicas em grid informativo
3. **Barra de confiança.** Texto curto, composição coerente e CTA contextual quando aplicável.
4. **Áreas de atendimento.** Seção científica sem afirmações não comprovadas
5. **Sobre a marca e profissional.** Combinar fotografia e conteúdo, sem repetir sempre o mesmo card.
6. **Método e diferenciais.** Áreas clínicas em grid informativo
7. **Benefícios e orientações.** Evitar métricas fictícias e prova social não verificada.
8. **Experiência da consulta.** Combinar fotografia e conteúdo, sem repetir sempre o mesmo card.
9. **Jornada do paciente.** Hero clínico modular com especialista
10. **Depoimentos autorizados.** Evitar métricas fictícias e prova social não verificada.
11. **Conteúdo educativo / blog.** Combinar fotografia e conteúdo, sem repetir sempre o mesmo card.
12. **Perguntas frequentes.** Texto curto, composição coerente e CTA contextual quando aplicável.
13. **Agendamento.** Evitar métricas fictícias e prova social não verificada.
14. **Contato e localização.** Combinar fotografia e conteúdo, sem repetir sempre o mesmo card.
15. **CTA final e rodapé.** Texto curto, composição coerente e CTA contextual quando aplicável.

### Páginas internas e rotas

- `/nutricionista/modelo-05` — Home.
- `/nutricionista/modelo-05/sobre` — trajetória e filosofia do profissional.
- `/nutricionista/modelo-05/atendimentos` — catálogo de serviços.
- `/nutricionista/modelo-05/atendimentos/:slug` — detalhe, indicação, abordagem e FAQ.
- `/nutricionista/modelo-05/como-funciona` — jornada e modalidades.
- `/nutricionista/modelo-05/conteudos` — blog / receitas / educação nutricional.
- `/nutricionista/modelo-05/conteudos/:slug` — artigo individual.
- `/nutricionista/modelo-05/agendamento` — formulário demonstrativo.
- `/nutricionista/modelo-05/contato` — endereço e canais configuráveis.

## 4. Imagens: onde usar e como nomear

Pasta de imagens do modelo: `public/images/nutricionista/modelo-05/`. As imagens comuns podem ficar em `public/images/nutricionista/shared/`.

| Arquivo sugerido | Seção / finalidade | Proporção |
|---|---|---|
| `nutriva-hero-clinic.webp` | Hero | `4:5` |
| `nutriva-specialist.webp` | Perfil do profissional | `4:5` |
| `nutriva-consultation.webp` | Consulta / método | `3:2` |
| `nutriva-balanced-meal.webp` | Áreas e alimentação | `3:2` |
| `nutriva-clinic.webp` | Ambiente / estrutura | `3:2` |
| `nutriva-research.webp` | Lifestyle / diferencial | `3:2` |

**Orientação para o hero:** Hero modular com especialista, áreas clínicas e CTA. Garantir espaço negativo para o texto; produzir recortes próprios para mobile; evitar rosto atrás de títulos.

**Tratamento fotográfico:** Credibilidade médica, linhas precisas, fotografias clínicas, painéis de informação claros. Luz, cenário e tratamento de cor devem ser coerentes entre as imagens. Evitar bancos de imagens com marcas d'água e fotos que impliquem resultados clínicos inexistentes.

**Formatos:** preferir AVIF/WebP; imagens hero 1600–2000px de largura desktop, variantes mobile 720–900px; cards 800–1200px; `srcset`, `sizes`, `width` e `height`; lazy loading abaixo da dobra.

## 5. Componentes e Design System

- Header sticky (84px desktop / 68px mobile), navegação, submenu quando necessário, drawer mobile acessível.
- Hero com CTA primário, secundário e imagem responsiva.
- Cards de serviços (raio 20–24px), variações editorial, imagem e informativo.
- FAQ accordion com `aria-expanded`, controle por teclado e foco visível.
- Formulário com nome, WhatsApp, modalidade, serviço e mensagem opcional; validação de campos, máscara de telefone, feedback de erro.
- Cards de equipe e credenciais reais (CRN configurável), depoimentos apenas com autorização e sem invenção de avaliações.
- Cards de artigos, paginação ou filtros locais, breadcrumbs, footer com contatos e políticas.
- Botão WhatsApp flutuante sem sobrepor CTA mobile; estados loading/erro/sucesso; skeleton somente se houver carregamento real.
- Grid desktop 12 colunas, container 1200–1280px, tablet 8 colunas, mobile 4 colunas; espaçamento 8px como base.
- Espaçamento vertical: 96–128px desktop, 72–88px tablet, 56–80px mobile; inputs 48–52px; botões 44–52px.
- Sombra suave em modelos claros; borda translúcida e glow controlado em modelos escuros.

## 6. Motion e comportamento

- Reveal com opacidade e `translateY(16px)` em 500–650ms; aplicar apenas quando melhora leitura.
- Hover de cards 200–250ms; zoom de imagem até 1.035 em 450–550ms; botões 180–220ms.
- Menu mobile 250–300ms; FAQ 250ms; header com blur de 12–16px após rolagem.
- Sem autoplay agressivo, parallax pesado ou animações de dados médicos fictícios.
- Respeitar `prefers-reduced-motion: reduce` e `:focus-visible`.

## 7. Conteúdo de exemplo e regras

- **Hero:** "Ciência aplicada à sua saúde."
- **Subtítulo:** "Acompanhamento nutricional que respeita sua história, suas necessidades e o seu ritmo."
- **Sobre:** "Orientações construídas em parceria com você, com escuta, clareza e estratégias para a vida real."
- **Método:** "Entendemos sua rotina, definimos prioridades e ajustamos o plano ao longo do acompanhamento."
- **CTA final:** "Vamos construir uma relação mais equilibrada com a alimentação?"
- **FAQ:** Como funciona a primeira consulta? Há atendimento online? Como são definidos os retornos? O plano considera restrições alimentares? Como solicitar agendamento?
- Não inventar nome, CRN, endereço, experiência, taxa de sucesso, avaliações, estudos ou depoimentos. Usar placeholders claramente identificados até haver dados reais.

## 8. SEO, acessibilidade, privacidade

- Metatitle sugerido: "Nutriva Clinic | Nutrição e acompanhamento personalizado"; meta description de até ~155 caracteres, adaptada ao profissional real.
- `h1` único; `h2` por seção; alt text significativo; contraste WCAG AA; toque >=44px; labels, erros e foco acessíveis.
- Formulário frontend não deve indicar envio realizado sem backend ou integração configurada; se usar WhatsApp, exibir prévia e solicitar ação explícita.
- Não coletar dados clínicos sensíveis sem necessidade, base legal e proteção adequada; consentimentos e política de privacidade configuráveis.
- Publicidade profissional deve ser revisada para conformidade com as regras aplicáveis ao nutricionista e CRN.

## 9. React/Vite: estrutura e isolamento

```text
src/pages/templates/nutricionista/modelo-05/
├── NutrivaClinicPage.tsx
├── modelo-05.css
├── branding/
│   ├── branding.md
│   ├── tokens.css
│   └── image-map.md
├── components/
├── data/content.ts
└── references/
```

Escopar CSS sob `.nutri-nutriva-page`, manter conteúdo demonstrativo em `data/content.ts`, não alterar estilos globais do hub nem de outras categorias. Rotas específicas antes da rota genérica de templates.

## 10. Referências visuais planejadas

- `ref-00-overview.webp` — Visão geral do modelo, desktop/mobile e identidade
- `ref-01-home-desktop.webp` — Home desktop completa
- `ref-02-secoes-desktop.webp` — Seções internas desktop detalhadas
- `ref-03-atendimentos-interna.webp` — Catálogo e detalhe de atendimento
- `ref-04-mobile.webp` — Jornada mobile, menu e formulário
- `ref-05-components.webp` — UI kit: tokens, cards, formulários, estados
- `ref-06-nutrition-journey.webp` — Avaliação, plano, acompanhamento e evolução demonstrativa

**Status:** branding documental pronto para orientar a criação das artes e o desenvolvimento. Nenhuma imagem final ou implementação foi produzida neste pacote.
