# Branding — Aura Skin

**Tagline:** Entenda sua pele. Revele sua melhor versão.

Conceito: skincare, diagnóstico, rejuvenescimento e estética facial personalizada.
Tipografia: Fraunces + Plus Jakarta Sans.
Paleta: #663D46 wine; #B98286 rose; #E6C5C1 blush; #EADDD4 nude; #FAF5F0 cream; #FFFFFF; #402F32 text; #806E70 muted.
Arquitetura Home: Header; Hero; Diagnóstico da Pele; Objetivos; Protocolos; Tecnologia; Skincare/Home Care; Especialista; Resultados/Depoimentos; Conteúdo; FAQ; Avaliação.
Imagens: hero skin-closeup.webp; diagnóstico skin-analysis-device.webp; protocolos facial-treatment.webp/skin-treatment.webp/skincare-procedure.webp; tecnologia facial-analysis.webp + aesthetic-device-01.webp; skincare skincare-products.webp; especialista professional-01.webp; depoimentos patient-smiling.webp/patient-mature.webp; conteúdo beauty-content.webp; avaliação appointment-phone.webp.
Layout: foco em close-ups e textura da pele, cards delicados, fundos nude/cream, conteúdo educacional forte.
Mobile: diagnóstico vira painel vertical, chips de objetivos roláveis, imagens 4:5/1:1 conforme seção.
Motion: reveals suaves, barras de diagnóstico animadas, hover sutil, sem efeitos tecnológicos agressivos.
Internas: Análise da Pele, Objetivos, Protocolos, Detalhe de Tratamento, Skincare, Especialista, Conteúdos, Agendamento.


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
