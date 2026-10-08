# Estética: modelos 01 e 02

- Essenza Natural: `/estetica-beleza/modelo-01`, verde, creme, Lora e DM Sans; composição orgânica e acolhedora.
- Lumière Aesthetic: `/estetica-beleza/modelo-02`, midnight, ivory, champagne, Cormorant Garamond e Manrope; composição editorial e atendimento particular.

As referências e os brandings fornecidos orientam as duas identidades. Fotografias são reutilizadas do banco `public/images/estetica-beleza/shared`, sem inserir screenshots de referência nas páginas. Os PNGs originais foram preservados; a interface usa JPEGs responsivos de 640 e 1280 pixels em `optimized`. Fotos abaixo da primeira dobra têm carregamento lazy.

Ambos incluem tratamentos com busca e filtros, seis detalhes de tratamento, apresentação institucional, profissionais, estrutura com galeria ampliável, conteúdos com leitor, perguntas frequentes, contato e agendamento. A Lumière inclui também consulta particular e formulário em três etapas. Menus, galerias e leitores usam dialog nativo, com Escape e retorno de foco; os estilos respeitam redução de movimento.

Todos os perfis, contatos, depoimentos e ambientes representam uma demonstração. Formulários validam dados e datas no calendário de São Paulo, exibem confirmação local e não enviam ou persistem informações.

## Disponibilidade

A propriedade `available` em `src/data/templates.ts` controla cartões e acesso. Médico 01/02 e estética 01–08 estão liberados. `TemplateAccess` impede que os demais componentes sejam renderizados, mesmo ao abrir diretamente um endereço registrado. Rotas inexistentes exibem 404. Para liberar uma futura página concluída, atualize seu registro no catálogo.

## Verificação

`npm run build`, `npm run lint`, `npm run check:catalog`, `npm run check:prime` e `npm run check:beauty`. A verificação de estética renderiza 115 páginas, valida imagens, títulos, IDs e âncoras e testa o bloqueio e os cartões dos 54 modelos indisponíveis. Não substitui uma revisão visual no navegador.
