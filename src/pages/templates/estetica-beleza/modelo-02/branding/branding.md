# Branding — Lumière Aesthetic

**Tagline:** A excelência também pode ser sentida.

Conceito: clínica particular premium, luxo contemporâneo e discreto.
Tipografia: Cormorant Garamond + Manrope.
Paleta: #18191C midnight; #29292B graphite; #F8F4EC ivory; #C9A96E champagne; #DCC89C soft-gold; #A19B92 warm-gray; #FFFFFF surface.
Arquitetura Home: Header overlay; Hero cinematográfico; The Experience; Signature Treatments; Private Consultation; Technology; Specialists; The Clinic; Testimonials; Private Booking; Footer.
Imagens: hero woman-young-02.webp; experience clinic-reception-02.webp; signature facial-treatment.webp/laser-treatment.webp/body-treatment.webp; consultation patient-consultation.webp; technology technology-detail.webp; specialist professional-02.webp; clinic clinic-reception.webp/treatment-room.webp/clinic-corridor.webp; testimonial patient-mature.webp; booking appointment-phone.webp.
Layout: full-bleed, grandes fotografias, grids assimétricos, linhas 1px, champagne apenas em detalhes.
Mobile: imagens cinematográficas 4:5, títulos editoriais grandes, navegação compacta, sem excesso de cards.
Motion: mask reveal 800ms; zoom 1200ms; section reveal 700ms; page transition 600ms; header blur no scroll.
Internas: Signature Treatments, Treatment Detail, Private Consultation, Specialists, Clinic, Journal, Contact/Booking.


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
