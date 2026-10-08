# Estética — modelos 03 a 08

| Modelo | Marca | Direção | Endereço |
| --- | --- | --- | --- |
| 03 | Aura Skin | Nude, rosé, wine; close-ups, skincare e análise interativa | `/estetica-beleza/modelo-03` |
| 04 | Neo Aesthetic | Navy, azul elétrico e cyan; painéis técnicos e skin scan demonstrativo | `/estetica-beleza/modelo-04` |
| 05 | Sculpt Body | Chocolate, areia e cobre; objetivos corporais e jornada vertical | `/estetica-beleza/modelo-05` |
| 06 | Maison Beauté | Preto e off-white; tipografia editorial, fotos amplas e poucos cartões | `/estetica-beleza/modelo-06` |
| 07 | Clínica 360 Beauty | Petrol e mint; busca, catálogo, filtros e cuidado integrado | `/estetica-beleza/modelo-07` |
| 08 | Élite Aesthetics | Preto e champagne; experiência particular, clínica e concierge | `/estetica-beleza/modelo-08` |

Os nomes, conceitos e paletas seguem os arquivos de branding. As referências de 06, 07 e 08 apresentam Lumière Integrativa, Aurora e Nexa; esses nomes e paletas divergentes não substituíram os brandings Maison, Clínica 360 e Élite. As imagens de referência não são inseridas na interface.

Cada modelo tem uma home e layout próprios, páginas internas previstas no branding, seis detalhes de tratamento e agendamento. A busca da Clínica 360 leva ao catálogo com parâmetros; as buscas e filtros de catálogo normalizam acentos. Galerias ampliam fotos, perfis e artigos abrem leitores, e menus móveis usam dialog com Escape e retorno de foco.

Aura e Neo incluem painéis interativos de aspectos da análise. São interfaces ilustrativas, sem captura de fotos, IA, medições ou diagnóstico. Os formulários funcionam localmente com dados fictícios e não enviam, persistem ou confirmam reservas. Neo e Élite usam três etapas.

As fotografias originais foram preservadas em `public/images/estetica-beleza/shared`. `scripts/optimize-beauty-images.ps1` cria JPEGs de 1280 e 640 pixels em `optimized`, totalizando aproximadamente 7 MB em vez dos 75 MB originais. As páginas usam `srcSet`; cartões e categorias usam as versões menores. Fontes de cada modelo são carregadas por seus próprios estilos. CSS, títulos, menu e foco ficam dentro da identidade do modelo.

Os oito modelos de estética e dois médicos estão disponíveis. Os outros 54 modelos mantêm cartões desativados e bloqueio pelo URL. Os contadores da Central são calculados a partir do catálogo. Categorias em preparação mostram suas prévias com o estado correto, sem liberar os modelos.

Validação: `npm run build`, `npm run lint`, `npm run check:catalog`, `npm run check:beauty`, `npm run check:prime`. A verificação de estética cobre 115 renderizações, imagens, títulos, links e âncoras, filtros por URL, tratamentos inexistentes, formulários e disponibilidade. Sem revisão visual no navegador.
