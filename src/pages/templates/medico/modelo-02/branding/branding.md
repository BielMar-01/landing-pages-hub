# Essencial Prime — Branding do Modelo 02

## 1. Posicionamento
Essencial Prime é uma clínica de medicina particular premium. A marca comunica excelência, privacidade, tempo, conforto e atendimento personalizado. O luxo deve ser silencioso: sofisticado, elegante e humano, nunca ostensivo.

**Assinatura:** Medicina Particular  
**Mensagem principal:** “Medicina particular em um novo padrão de cuidado.”

## 2. Personalidade
- Premium e acolhedora
- Confiante, sem ser arrogante
- Institucional, sem parecer hospital frio
- Sofisticada, sem estética de joalheria
- Humana e próxima
- Precisa, organizada e calma

## 3. Paleta oficial
| Token | HEX | Uso |
|---|---|---|
| Navy | #071B2D | Fundo principal, hero, footer |
| Navy Light | #102B42 | Superfícies escuras e cards |
| Champagne | #C8A96B | Destaques premium |
| Champagne Light | #E6D4AD | Linhas, bordas e detalhes |
| Ivory | #F7F3EA | Seções claras |
| Warm White | #FCFBF8 | Fundo principal claro |
| Surface | #FFFFFF | Cards e formulários |
| Text | #15222D | Texto em superfícies claras |
| Muted | #71808A | Texto secundário |
| Border | #DED8CC | Divisores e bordas |
| Success | #3F8A68 | Estados de sucesso |
| Error | #C65353 | Estados de erro |
| WhatsApp | #25D366 | WhatsApp exclusivamente |

### Regras de cor
Champagne é detalhe, não fundo dominante. Evitar dourado brilhante, amarelo saturado e gradientes metálicos exagerados. Navy deve sustentar a identidade premium.

## 4. Tipografia
**Headlines/editorial:** Cormorant Garamond  
**Interface/corpo:** Manrope

Fallbacks:
- Serif: "Cormorant Garamond", Georgia, serif
- Sans: "Manrope", Arial, sans-serif

A referência visual de componentes pode apresentar fontes alternativas geradas na arte; a especificação escrita acima é a fonte canônica de implementação.

Escala sugerida:
- Display: clamp(3rem, 6vw, 6.5rem), line-height 0.92–1.0
- H1: clamp(2.6rem, 5vw, 5rem)
- H2: clamp(2rem, 3.6vw, 3.8rem)
- H3: 1.5–2rem
- Body large: 1.125rem
- Body: 1rem
- Small: .875rem
- Eyebrow: .75rem, uppercase, letter-spacing .18em

## 5. Logo
Símbolo botânico/lotus de traço fino em Champagne, acompanhado por “Essencial Prime” e “MEDICINA PARTICULAR”. Em fundos escuros usar champagne + branco; em fundos claros usar navy + champagne. Manter área de respiro e evitar sombras no logo.

## 6. Direção fotográfica
- Clínicas contemporâneas de alto padrão
- Madeira escura, mármore claro, iluminação quente e plantas
- Médicos em cenas naturais, não excessivamente posadas
- Pacientes tratados com respeito e privacidade
- Temperatura de cor quente/neutra
- Evitar estética hospitalar azulada e bancos de imagem artificiais

## 7. Layout
Desktop: editorial, assimétrico, com fotografia ampla e blocos de conteúdo com bastante respiro.  
Mobile: reorganização real da hierarquia, não simples empilhamento.  
Tablet: aproveitar duas colunas quando houver espaço, preservando leitura e touch targets.

Container sugerido: 1200–1360px.  
Gutters: 20px mobile, 32px tablet, 48–64px desktop.  
Spacing base: 8px.

## 8. Componentes
### Botão primário
Champagne sobre Navy ou texto Navy sobre Champagne. Altura mínima 48px, radius 999px ou 12–16px conforme contexto.

### Botão secundário
Transparente, borda Champagne/neutral, hover com fundo sutil.

### Cards
Radius 18–24px. Borda discreta. Sombras leves. Cards premium não devem parecer dashboards genéricos.

### Inputs
Altura mínima 48px. Estados: default, hover, focus, filled, success, error e disabled. Focus ring visível.

### Accordions
Transição de 250–300ms, aria-expanded e teclado.

### Navegação
Header inicialmente integrado ao hero. No scroll: fundo Navy com transparência, blur e borda inferior discreta.

## 9. Movimento
- Reveal: 550–800ms
- Buttons: 180–220ms
- Cards: 220–280ms
- Images: 600–900ms
- Menu: 300–400ms
- Page transition: 400–500ms
- Hero image: zoom cinematográfico muito lento e quase imperceptível
- Mask/reveal em imagens e headlines
- Stagger leve em grids
- Respeitar prefers-reduced-motion

Evitar parallax pesado, animações contínuas e glow tecnológico.

## 10. Arquitetura de páginas
1. Home — `/medico/modelo-02`
2. Experiência Prime — `/medico/modelo-02/experiencia`
3. Especialidades — `/medico/modelo-02/especialidades`
4. Cardiologia — `/medico/modelo-02/especialidades/cardiologia`
5. Equipe — `/medico/modelo-02/equipe`
6. Dra. Helena Martins — `/medico/modelo-02/equipe/helena-martins`
7. Estrutura — `/medico/modelo-02/estrutura`
8. Conteúdos — `/medico/modelo-02/conteudos`
9. Artigo — `/medico/modelo-02/conteudos/habitos-vida-saudavel`
10. Agendamento — `/medico/modelo-02/agendamento`
11. Contato — `/medico/modelo-02/contato`
12. FAQ — `/medico/modelo-02/faq`

## 11. Home
Hero quase fullscreen com fotografia sofisticada. Headline editorial, CTA “Agendar consulta”, CTA secundário “Conheça a experiência”, prova social e benefícios. Seções: experiência, especialidades, equipe, estrutura, jornada, números, depoimentos, conteúdos, concierge/agendamento, localização e footer.

## 12. Experiência Prime
Manifesto da marca, filosofia, pilares, estrutura de alto padrão, atendimento sem pressa, privacidade, acompanhamento e experiência familiar.

## 13. Especialidades
Catálogo visual, busca/filtro quando útil, cards com fotografia e conteúdo real. Cardiologia pode ser destaque editorial.

## 14. Página de especialidade
Hero específico, sinais para procurar o especialista, prevenção, tratamentos, exames, médico responsável, CTA e agendamento.

## 15. Equipe e perfil médico
Equipe com filtros leves. Perfil individual com retrato grande, CRM/RQE fictícios, formação, áreas de atuação, tratamentos, exames, avaliações e CTA.

## 16. Estrutura
Fotografia protagonista, galeria editorial, ambientes, tecnologia, acessibilidade, estacionamento e localização. Pode haver CTA de tour virtual demonstrativo.

## 17. Conteúdos e artigo
Hub editorial com busca/categorias, destaques, artigos recentes e newsletter demonstrativa. Artigo com índice, tempo de leitura, revisão médica, conteúdo estruturado, relacionados e CTA.

## 18. Agendamento
Fluxo em 5 etapas:
1. Especialidade
2. Profissional
3. Data e horário
4. Dados
5. Confirmação

Sem backend neste estágio. Interações são demonstrativas.

## 19. Contato e FAQ
Contato com mapa demonstrativo, telefone, WhatsApp, e-mail, horário e formulário sem envio real. FAQ pesquisável/filtrável quando simples, com accordion acessível.

## 20. Responsividade
Breakpoints orientativos:
- Mobile: < 768px
- Tablet: 768–1199px
- Desktop: >= 1200px

Touch targets mínimos ~44px. Evitar overflow horizontal. Imagens com aspect-ratio e object-fit. Menu mobile em drawer premium.

## 21. Acessibilidade
HTML semântico, contraste adequado, focus-visible, aria-expanded, aria-controls, alt coerente, navegação por teclado e reduced motion.

## 22. Performance
Lazy load abaixo da dobra, hero prioritário, dimensões/aspect-ratio definidos, WebP, sem bibliotecas pesadas apenas para animação.

## 23. Regra fundamental
As referências são direção visual, não screenshots para serem inseridos no site. A implementação deve recriar os layouts em React/CSS usando os assets compartilhados em `public/images/medico/shared/`.
