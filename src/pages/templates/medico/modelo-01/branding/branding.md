# Branding — Modelo 01: Essencial Care

## Conceito
Clínica moderna, humana e confiável. Deve transmitir alto padrão sem luxo excessivo e sem aparência hospitalar fria.

## Marca
- Nome: Essencial Care
- Assinatura: Saúde em cada etapa da sua vida.

## Paleta
- Primary: #174E4B
- Primary Light: #2F6F69
- Sage: #A8BDB3
- Cream: #F6F2EA
- Warm White: #FCFBF8
- Surface: #FFFFFF
- Text: #18312F
- Muted: #687B78
- Border: #DFE7E3
- Success: #4F8068
- Accent: #D8B77A

O Accent deve ser usado com moderação em estrelas, divisores e pequenos destaques.

## Tipografia
- Interface, navegação, botões e corpo: DM Sans
- Headlines e frases de impacto: Lora
- Headlines podem misturar DM Sans + Lora em itálico para palavras de destaque.

## Direção visual
- Fotografias grandes e realistas.
- Layout editorial e assimétrico.
- Evitar excesso de cards idênticos.
- Cantos arredondados, sombras leves e bastante espaço em branco.
- Verde petróleo como identidade principal.
- Madeira, creme e tons naturais nas fotografias.

## Cards
- Radius: 24px
- Border: 1px solid rgba(23, 78, 75, 0.08)
- Shadow: 0 18px 50px rgba(23, 49, 47, 0.08)

## Arquitetura da Home
1. Header
2. Hero
3. Trust Bar
4. Especialidades
5. Sobre / Experiência
6. Médicos
7. Jornada do Paciente
8. Estrutura
9. Números
10. Depoimentos
11. Conteúdos
12. FAQ
13. Agendamento
14. Localização
15. CTA Final
16. Footer

## Hero
Desktop 55/45, conteúdo à esquerda e fotografia grande da médica à direita.
Headline sugerida: “Cuidado médico que começa ouvindo você.”
CTAs: “Agendar consulta” e “Conheça a clínica”.
Adicionar avaliação e card flutuante de pacientes atendidos.
No mobile, reorganizar conteúdo, CTAs e fotografia especificamente para tela pequena.

## Especialidades
Composição editorial, evitando seis cards iguais. Misturar tamanhos e usar fotografias das especialidades.

## Sobre
Imagem grande da clínica + texto institucional + benefícios.
Badge flutuante: “+10 anos cuidando de pessoas.”

## Equipe
Fotografia da equipe em destaque seguida de profissionais individuais.
Cards com nome, especialidade, CRM e link para perfil.
Hover de imagem com scale aproximado de 1.025.

## Jornada do Paciente
Timeline:
01 Escolha
02 Agende
03 Consulte
04 Acompanhe
Horizontal no desktop e vertical no mobile.

## Estrutura
Galeria editorial usando recepção, consultório, equipamentos e corredor.
Hover com zoom sutil e overlay identificando os ambientes.

## Números
Faixa limpa, sem cards:
+5.000 pacientes
+10 anos
6 áreas
4,9 avaliação

## Depoimentos
Um depoimento principal e dois secundários. Evitar três cards idênticos.

## Conteúdos
Headline: “Informação também faz parte do cuidado.”
Artigos demonstrativos sobre prevenção, cardiologia e bem-estar.

## Agendamento
Seção grande em verde petróleo, combinada com a imagem appointment-phone.webp.
Fluxo visual: especialidade → data → confirmação.

## Movimento
- Scroll reveal: 500–700ms
- Hover cards: 200–250ms
- Hover buttons: 180ms
- Image zoom: 500ms
- Menu: 300ms
- FAQ: 300ms
- Page transition: 400ms
- Reveal: translateY(16px) + opacity
- Respeitar prefers-reduced-motion

## Interações
- Header inicialmente integrado ao Hero; ao rolar, aplicar fundo e backdrop-filter.
- Botões com elevação discreta e movimento da seta.
- Sticky WhatsApp.
- Menu mobile elegante.
- FAQ animado.
- Scroll suave.
- Estados hover/focus completos.
- Indicador de disponibilidade de profissionais quando aplicável.

## Banco compartilhado
As 30 imagens médicas ficam em:
public/images/medico/shared/

Os oito modelos médicos podem reutilizar esse banco. O design, conteúdo, organização, tipografia, efeitos e referências é que diferenciam cada modelo.

## Referências previstas
- ref-01-home.webp — Home desktop
- ref-02-home-continuacao.webp — seções internas da Home
- ref-03-interna.webp — página interna de médico/especialidade
- ref-04-mobile.webp — Home mobile
- ref-05-components.webp — componentes e design system
