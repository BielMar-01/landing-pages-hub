# Branding — Essenza Natural

**Tagline:** Beleza que respeita a sua essência.

Conceito: estética natural, wellness, acolhimento e resultados naturais.
Tipografia: Lora (headlines) + DM Sans (UI/corpo).
Paleta: #365C50 primary; #668276 primary-light; #AABBA8 sage; #F5F0E7 cream; #FCFAF6 warm-white; #C78368 terracotta; #263D36 text; #728078 muted; #E1E5DE border.
Arquitetura Home: Header; Hero; Manifesto; Tratamentos; Filosofia; Jornada; Profissionais; Estrutura; Depoimentos; Wellness; Conteúdo; Agendamento; Footer.
Imagens: hero woman-young-01.webp (alt skin-closeup.webp); manifesto patient-relaxed.webp; tratamentos facial-treatment.webp/body-treatment.webp/laser-treatment.webp/skincare-procedure.webp; jornada evaluation.webp; profissionais professional-01.webp + team-candid.webp; estrutura clinic-reception.webp/treatment-room.webp/waiting-room.webp/clinic-detail.webp; depoimentos patient-smiling.webp; wellness wellness-elements.webp; conteúdo beauty-content.webp; agendamento appointment-phone.webp.
Layout: editorial orgânico, assimetria leve, radius 20–40px, sombras suaves, fundos cream/warm-white.
Mobile: hero empilhado, imagem 4:5, menu fullscreen cream, CTAs full-width quando necessário.
Motion: reveal 600ms; image zoom 700ms; button 180ms; menu 350ms; sem glow; prefers-reduced-motion obrigatório.
Páginas internas prioritárias: Tratamentos, Detalhe de tratamento, Sobre, Profissionais, Estrutura, Conteúdos, FAQ, Contato, Agendamento.


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
