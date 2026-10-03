# Essencial Care — assets

O Modelo Médico 01 usa o banco compartilhado em `../shared/`, sem duplicar fotos nesta pasta.

Hero: `hero-doctor.webp`. Sobre: `clinic-reception.webp` e `clinic-detail.webp`. Equipe: `doctor-profile.webp`, `doctor-male.webp` e `team.webp`. Depoimentos e avatares: `patient-01.webp` a `patient-03.webp`. As imagens de especialidades, estrutura, conteúdos e agendamento também vêm do mesmo banco.

A prévia do catálogo é construída em JSX com a fotografia compartilhada; o SVG antigo foi substituído. As referências em `../references/modelo-01/` são material de consulta e não aparecem dentro da página.

Fotos de hero têm prioridade de carregamento; as demais usam lazy loading. Imagens são recortadas com object-fit e object-position. Nomes, indicadores e registros profissionais são fictícios. Algumas fotos do banco ainda incluem a marca anterior na própria imagem; os arquivos fornecidos foram preservados.
