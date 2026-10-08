# Branding — Clínica 360 Beauty

**Tagline:** Toda a estética. Um cuidado integrado.

Conceito: clínica multidisciplinar, catálogo amplo, busca, filtros e experiência funcional.
Tipografia: Plus Jakarta Sans.
Paleta: #0E5755 petrol; #073D3C deep-petrol; #21817B teal; #DCEBE7 mint; #F1ECE3 sand; #FFFFFF; #163B3A text; #667D7B muted.
Arquitetura Home: Header; Hero + busca; Quick Filters; Tratamentos Populares; Encontre por Objetivo; Especialistas; Tecnologias; Estrutura; Jornada; Avaliações; Conteúdo; Agendamento; Footer.
Imagens: hero team.webp; especialistas team-candid.webp/professional-01.webp/professional-02.webp; tecnologia aesthetic-device-01.webp/aesthetic-device-02.webp; estrutura clinic-reception.webp/treatment-room.webp/waiting-room.webp; avaliações patient-diverse.webp; conteúdo beauty-content.webp; booking appointment-phone.webp.
Layout: modular, cards de produto, chips, filtros, busca, navegação clara, maior densidade informacional.
Mobile: busca dominante, filtros horizontal-scroll, cards compactos, bottom CTA opcional.
Motion: rápido e funcional, 180–400ms; skeleton/feedback visual demonstrativo quando útil.
Internas: Catálogo de Tratamentos, Busca, Detalhe, Profissionais, Tecnologias, Estrutura/Unidades, Conteúdos, Agendamento.


REGRAS GLOBAIS
- Banco compartilhado: /public/images/estetica/shared/
- Referências visuais do modelo: /public/images/estetica/<modelo>/references/
- Código: /src/pages/templates/estetica/<modelo>/
- Não duplicar as 40 imagens coringas por modelo.
- Não usar a mesma foto duas vezes na mesma página salvo justificativa.
- Texto importante deve ser HTML, nunca incorporado à imagem.
- WebP preferencial. Hero com fetchPriority="high"; imagens abaixo da dobra com loading="lazy".
- Breakpoints: mobile 320–767; tablet 768–1023; desktop 1024–1439; wide 1440+.
- Container base: max-width 1280px; padding-inline clamp(20px,4vw,64px).
- Acessibilidade: alt, labels, focus-visible, teclado, aria-expanded em FAQ, contraste, prefers-reduced-motion.
- Funcionalidades possíveis: sticky header, mobile menu, FAQ, smooth scroll, WhatsApp, formulário demonstrativo, carrossel acessível e feedback visual.
- Componentes de lógica podem ser compartilhados; componentes visuais grandes devem permanecer específicos de cada branding.
- Referências planejadas: ref-01-home.webp; ref-02-home-sections.webp; ref-03-interna.webp; ref-04-mobile.webp; ref-05-components.webp; ref-06-extra.webp apenas quando agregar algo exclusivo.


## Direção para o Codex
Implemente este modelo como uma identidade independente. Não reutilize a composição visual dos demais modelos. Use o banco compartilhado apenas como matéria-prima fotográfica e respeite as imagens sugeridas por seção. Todos os textos, dados, profissionais, avaliações, métricas e tratamentos são demonstrativos e devem ser fáceis de substituir.
