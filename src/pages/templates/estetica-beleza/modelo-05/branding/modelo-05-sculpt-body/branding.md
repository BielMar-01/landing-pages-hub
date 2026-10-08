# Branding — Sculpt Body

**Tagline:** Tecnologia, estratégia e cuidado com o seu corpo.

Conceito: estética corporal, performance, contorno e acompanhamento personalizado sem linguagem de corpo perfeito.
Tipografia: Bodoni Moda + Manrope.
Paleta: #352722 chocolate; #5A4137 brown; #B87552 copper; #D9C3AB sand; #F5EFE7 cream; #FCFAF7 warm-white; #332A26 text; #81736B muted.
Arquitetura Home: Header; Hero; Objetivos; Avaliação Corporal; Protocolos; Jornada; Tecnologia; Resultados; Estrutura; Depoimentos; Agendamento.
Imagens: hero body-treatment.webp; avaliação evaluation.webp; protocolos body-treatment.webp/laser-treatment.webp/aesthetic-device-02.webp; tecnologia technology-detail.webp; resultados patient-diverse.webp; estrutura treatment-room.webp; depoimentos patient-smiling.webp; booking appointment-phone.webp.
Layout: forte, vertical, tipografia oversized, cobre apenas como acento, fotografias corporais amplas.
Mobile: objetivos em chips/cards horizontais, timeline vertical, CTAs fixos opcionais.
Motion: reveals direcionais, números grandes, image crop transitions discretas.
Internas: Objetivos, Protocolos Corporais, Tratamento, Tecnologia, Jornada, Estrutura, Avaliação.


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
