# Coleções de landing pages

## Estrutura

O projeto mantém React, TypeScript, Vite, React Router, Lucide e CSS. A Central original e a CategoryPage continuam sendo usadas. São oito categorias, com oito páginas completas em cada uma:

| Categoria | Rota |
| --- | --- |
| Médico | `/medico` |
| Nutricionista | `/nutricionista` |
| Psicólogo | `/psicologo` |
| Dentista | `/dentista` |
| Personal Trainer | `/personal-trainer` |
| Advogado | `/advogado` |
| Imobiliário | `/imobiliario` |
| Estética & Beleza | `/estetica-beleza` |

Cada categoria possui `/modelo-01` a `/modelo-08`. Os antigos `/personal` e `/estetica`, incluindo as rotas dos modelos, redirecionam para os caminhos atuais. Endereços desconhecidos usam a página 404.

## Páginas e identidade

Cada landing possui JSX e CSS próprios em `src/pages/templates/{categoria}/{modelo}/`. Nenhuma usa o placeholder ou um componente único de landing parametrizada. As novas páginas são carregadas por imports dinâmicos no registro `src/routes/landingRoutes.ts`.

As composições variam entre hero dividido, apresentação centralizada, perfil profissional, composição orgânica, interface digital, abertura editorial, clínica institucional, fotografia com painel sobreposto, composição tipográfica, revista, faixa horizontal e mosaico. A ordem e quantidade de seções variam. Conteúdo e módulos específicos abordam nutrição esportiva, primeiras refeições, atendimento psicológico online, odontopediatria, treinamento, análise documental, arquitetura e estética, entre outros.

O compartilhamento se limita à infraestrutura: imagens opcionais, formulários demonstrativos, navegação e catálogo. CSS de cada nova página fica restrito à classe raiz da própria landing. Previews SVG locais representam suas composições e paletas; são ilustrações de interface, não capturas de tela.

## Essencial Care — evolução do Modelo Médico 01

O Modelo 01 médico foi reconstruído como Essencial Care, conforme o branding e as cinco referências fornecidas. Usa fotografias do banco médico compartilhado, dezesseis seções, menu mobile, perfis e conteúdos em modal, galeria ampliável, FAQ animado e formulário demonstrativo. A rota permanece `/medico/modelo-01`. A Central e a CategoryPage mantêm seu funcionamento com novo visual OrbisCore. Consulte `ORBISCORE-ESSENCIAL-CARE.md` para os detalhes deste bloco.

## Fotografias pendentes

O banco médico compartilhado foi adicionado ao workspace e está em uso no Modelo 01. As demais páginas ainda usam fallbacks editoriais onde suas fotos não foram fornecidas. Nenhuma fotografia foi gerada, baixada ou criada como arquivo vazio neste bloco.

As imagens opcionais ficam em `public/images/{categoria}/{modelo}/`. Cada pasta contém um README com nomes e enquadramentos sugeridos. Quando um WebP real é adicionado, a página o mostra automaticamente. Falhas de carregamento mantêm o fallback, sem ícones de imagem quebrada. O carregamento abaixo da dobra é adiado; fotos de hero têm prioridade. Nos modelos com hero digital, a interface é o visual principal.

No Modelo 01, as imagens vêm de `public/images/medico/shared`; os antigos caminhos de fotos individuais foram substituídos. A documentação da pasta do modelo foi atualizada. Nomes antigos previstos no primeiro bloco (não utilizados pela versão atual):

- `hero-doctor.webp`: fotografia principal, vertical, 1000 × 1200.
- `clinic-interior.webp`: interior, 1200 × 900.
- `dra-helena.webp`: retrato profissional, 800 × 1000.
- `patient-01.webp`, `patient-02.webp`, `patient-03.webp`: retratos ilustrativos, 160 × 160.

Nas demais páginas, os nomes padrão são `hero.webp` e `space.webp`. Imobiliário também prevê imagens de imóveis ou ambientes conforme o README da pasta. Use fotos licenciadas ou autorizadas; nomes e personagens são fictícios e as fotos não devem sugerir endosso real.

## Interações

- Menus mobile com estado expandido, âncoras e botão de retorno à categoria.
- FAQ em elementos nativos `details`, além do accordion existente da Clínica Essencial.
- Formulários com validação HTML, prevenção de envio e confirmação de simulação. Não há persistência ou contato externo.
- Seletores de etapas nos modelos 04.
- Filtros locais nos modelos imobiliários 01, 02, 03, 07 e 08.
- Galerias dos modelos imobiliários 04, 05 e 06.
- Rolagem reiniciada ao mudar de rota.

## Verificação técnica

```sh
npm run build
npm run lint
npm run check:catalog
```

No PowerShell com execução de scripts bloqueada, use `npm.cmd`.

O check de catálogo renderiza as 64 páginas sem navegador e verifica oito modelos por categoria, previews físicos, links de retorno, âncoras, IDs únicos, registro de rotas e escopo dos estilos. Não realiza QA visual nem testa interação em navegador. O build executa TypeScript e Vite.

Não foi feito deploy, não foram criados commits e não foram adicionados backend, banco de dados, autenticação ou novas dependências.
