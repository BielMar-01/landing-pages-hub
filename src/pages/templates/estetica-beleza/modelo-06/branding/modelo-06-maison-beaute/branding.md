# Branding — Maison Beauté

**Tagline:** Menos excessos. Mais você.

Conceito: editorial minimalista inspirado em moda, arquitetura e revistas premium.
Tipografia: Instrument Serif + Inter.
Paleta: #161616 black; #333230 graphite; #F8F6F1 off-white; #DDD4C6 beige; #B8AFA4 stone; #FFFFFF; #20201F text; #77736E muted.
Arquitetura Home: Minimal Header; Hero MAISON/BEAUTÉ; Philosophy; Face; Body; Skin; Professional; Architecture; Journal; CTA; Footer.
Imagens: hero woman-young-01.webp; philosophy skin-texture.webp; face facial-treatment.webp; body body-treatment.webp; skin skincare-procedure.webp; professional professional-02.webp; architecture clinic-detail.webp/clinic-corridor.webp; journal beauty-content.webp.
Layout: pouquíssimos cards, full-bleed, espaço negativo, números editoriais, fotos gigantes, botões texto+seta.
Mobile: preservar hierarquia editorial; títulos fluidos com clamp; galerias swipe.
Motion: clip-path, mask reveal, text-line reveal, horizontal gallery, subtle scale.
Internas: Philosophy/About, Treatments editorial, Professional, Architecture, Journal, Contact.


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
