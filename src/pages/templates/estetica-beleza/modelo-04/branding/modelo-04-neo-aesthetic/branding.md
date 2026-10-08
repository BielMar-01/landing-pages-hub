# Branding — Neo Aesthetic

**Tagline:** Tecnologia aplicada à sua melhor versão.

Conceito: estética tecnológica, diagnóstico digital e equipamentos avançados.
Tipografia: Space Grotesk + Inter.
Paleta: #07172B navy; #050E1A deep-navy; #168BFF electric-blue; #37D5FF cyan; #EAF8FC ice; #FFFFFF; #10233A text-light-section; #738496 muted.
Arquitetura Home: Header; Hero + Skin Scan UI; Metrics; Diagnóstico; Equipamentos; Protocolos Inteligentes; Tratamentos; Resultados; Equipe; Booking; Footer.
Imagens: hero skin-analysis-device.webp ou aesthetic-device-02.webp; diagnóstico facial-analysis.webp; equipamentos aesthetic-device-01.webp/aesthetic-device-02.webp/technology-detail.webp; tratamentos laser-treatment.webp/facial-treatment.webp/body-treatment.webp; equipe professional-01.webp/team.webp; booking appointment-phone.webp.
Layout: dark/light alternado, glassmorphism moderado, painéis flutuantes, métricas e linhas técnicas.
Mobile: painéis técnicos simplificados, sem sobreposição que comprometa leitura; navegação em drawer escuro.
Motion: glow, borders animadas, counters, floating panels, progress; sempre reduzir com prefers-reduced-motion.
Internas: Technology, Skin Scan, Equipamentos, Protocolos, Tratamentos, Profissionais, Booking.


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
