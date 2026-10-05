# Essencial Prime — Modelo Médico 02

O modelo usa a especificação canônica de `src/pages/templates/medico/modelo-02/branding/branding.md`: navy, champagne, ivory, Cormorant Garamond e Manrope. O símbolo botânico é SVG próprio; as fotografias WebP vêm do banco compartilhado, sem cópias. As 18 referências orientam os layouts, sem serem inseridas na interface.

## Rotas

Base: `/medico/modelo-02`.

| Página | Caminho relativo |
| --- | --- |
| Home | `/` |
| Experiência Prime | `/experiencia` |
| Especialidades | `/especialidades` |
| Cardiologia | `/especialidades/cardiologia` |
| Equipe | `/equipe` |
| Dra. Helena Martins | `/equipe/helena-martins` |
| Estrutura | `/estrutura` |
| Conteúdos | `/conteudos` |
| Artigo | `/conteudos/habitos-vida-saudavel` |
| Agendamento | `/agendamento` |
| Contato | `/contato` |
| FAQ | `/faq` |

O catálogo principal mantém seus 64 modelos. As onze rotas internas adicionais são carregadas por `src/routes/primeRoutes.ts`. Rotas desconhecidas seguem para a página 404 do projeto.

## Organização

- `MedicoModel02Page.tsx`: composição própria da home.
- `PrimePages.tsx`: dez componentes de páginas internas com conteúdo e composições próprios.
- `PrimeBookingPage.tsx`: agendamento interativo em cinco etapas.
- `PrimeLayout.tsx`: navegação, identidade, footer, imagens, diálogos, cartões e elementos do modelo.
- `prime-data.ts`: conteúdo editorial, especialidades, profissionais e metadados de navegação.
- `prime-booking.ts`: datas e disponibilidade demonstrativa no fuso de São Paulo.
- `modelo-02.css` e `branding/essencial-prime.tokens.css`: estilos isolados sob `.lp-medico-2`.

O Modelo 01 mantém sua implementação e identidade. A Central mantém a identidade OrbisCore; o cartão do Modelo 02 mostra uma composição fotográfica navy/champagne.

## Interações

Busca de especialidades, busca/filtro de profissionais, perfis demonstrativos em diálogo, galeria ampliável com navegação entre imagens, carrossel de relatos, busca/categorias de conteúdo, leitura de conteúdos menores em diálogo, artigo com índice e compartilhamento por cópia de link, newsletter, contato, FAQ pesquisável e menu móvel em drawer.

O agendamento aceita `?especialidade=cardiologia&profissional=helena-martins` e parâmetros equivalentes do catálogo. Valores desconhecidos são ignorados. O usuário escolhe especialidade, profissional compatível, data/horário futuro, dados e revisão. Pode voltar para editar; alterações de especialidade ou profissional limpam seleções dependentes. O calendário oferece dias úteis e recusa horários iniciados. A validação é refeita ao concluir. Os dados pessoais são limpos ao finalizar.

Todos os formulários são locais e demonstrativos: sem backend, armazenamento persistente, envio, pagamento, reserva ou mensagem real. Telefone, WhatsApp e e-mail abrem informação demonstrativa. O mapa é desenhado em CSS; o link externo abre a região da Avenida Paulista, sem afirmar a existência de uma clínica ali.

## Fotografias e conteúdo

As fotos compartilhadas contêm cenários e sinalização da clínica ilustrativa original; não foram retocadas ou substituídas. Há dois retratos individuais no banco. Os demais cartões usam enquadramentos da foto de equipe. Profissionais, registros, formação, avaliações e instalações são fictícios. CRM e RQE usam `000000`.

O artigo é editorial sobre rotina e experiência de cuidado, sem prescrever condutas clínicas. A revisão médica exibida é explicitamente demonstrativa.

## Responsividade e acessibilidade

Desktop editorial, tablet com grades em duas colunas e mobile com hero próprio, hierarquia reorganizada, conteúdo editorial em linhas e passos de agendamento compactos. O hero usa `picture` para selecionar a foto conforme a largura; a imagem inicial tem prioridade e as demais carregam sob demanda.

Diálogos nativos oferecem foco contido, fechamento por Escape e retorno ao disparador. O agendamento move o foco para o título de cada etapa. Accordions usam `aria-expanded`, `aria-controls` e painéis ocultos. Botões de filtros e seleções usam `aria-pressed`. Há link de salto, labels, estados vazios, mensagens de validação e preferência por movimento reduzido.

## Validação técnica

- `npm.cmd run build`: TypeScript e produção.
- `npm.cmd run lint`: lint do projeto.
- `npm.cmd run check:catalog`: integridade dos 64 modelos.
- `npm.cmd run check:prime`: renderização das 12 rotas, links internos, âncoras, IDs, arquivos de imagem, ausência de screenshots de referência na UI, isolamento de tokens, cobertura de profissionais por especialidade e limites do calendário no fuso de São Paulo.

A verificação técnica não substitui a revisão visual em navegador. Não houve deploy, commit ou integração externa.
