# Branding — Élite Aesthetics

**Tagline:** Estética extraordinária. Atendimento excepcional.

Conceito: private aesthetic clinic, concierge, exclusividade e experiência de alto padrão.
Tipografia: Playfair Display + Manrope.
Paleta: #090909 black; #171717 charcoal; #C7A66A champagne; #D8C39A soft-gold; #F5F0E7 ivory; #FFFFFF; #A09D97 gray; #34312C border-dark.
Arquitetura Home: Overlay Header; Fullscreen Hero; The Experience; Private Consultation; Signature Treatments; Technology; Specialist; Private Clinic; Concierge; Testimonials; Private Booking; Footer.
Imagens: hero clinic-reception-02.webp ou patient-relaxed.webp; experience patient-relaxed.webp; consultation patient-consultation.webp; signature facial-treatment.webp/body-treatment.webp/skin-treatment.webp; technology technology-detail.webp; specialist professional-01.webp; clinic clinic-reception.webp/treatment-room.webp/clinic-detail.webp; testimonial patient-mature.webp; booking appointment-phone.webp.
Layout: dark premium, full-bleed, pouco texto, linhas finas, champagne restrito, linguagem de hotelaria/concierge.
Mobile: hero 100svh, tipografia responsiva, seções longas e sofisticadas, menu fullscreen preto.
Motion: cinematic fade, mask reveals, slow zoom, elegant page transitions; nada chamativo.
Internas: Private Experience, Signature Treatments, Treatment Detail, Specialist, Technology, Clinic, Concierge, Private Booking.


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
