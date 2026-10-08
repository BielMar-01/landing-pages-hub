import type { BeautyImage } from './beauty-data'

export const beautyModels = [
  { model: '01', name: 'Essenza Natural', tagline: 'Beleza que respeita a sua essência.', image: 'naturalHero', style: 'Natural', description: 'Uma experiência acolhedora de estética natural e bem-estar.' },
  { model: '02', name: 'Lumière Aesthetic', tagline: 'A excelência também pode ser sentida.', image: 'premiumHero', style: 'Premium', description: 'Estética particular em uma experiência editorial e reservada.' },
  { model: '03', name: 'Aura Skin', tagline: 'Entenda sua pele. Revele sua melhor versão.', image: 'skin', style: 'Skincare', description: 'Skincare, análise da pele e cuidado facial em uma identidade nude e rosé.' },
  { model: '04', name: 'Neo Aesthetic', tagline: 'Tecnologia aplicada à sua melhor versão.', image: 'evaluation', style: 'Tecnológico', description: 'Diagnóstico digital e recursos contemporâneos em uma experiência navy e azul elétrico.' },
  { model: '05', name: 'Sculpt Body', tagline: 'Tecnologia, estratégia e cuidado com o seu corpo.', image: 'body', style: 'Corporal', description: 'Uma jornada de estética corporal com respeito à sua individualidade, em tons de cobre e chocolate.' },
  { model: '06', name: 'Maison Beauté', tagline: 'Menos excessos. Mais você.', image: 'naturalHero', style: 'Editorial', description: 'Estética editorial, fotografia ampla e uma abordagem minimalista de rosto, corpo e pele.' },
  { model: '07', name: 'Clínica 360 Beauty', tagline: 'Toda a estética. Um cuidado integrado.', image: 'team', style: 'Integrado', description: 'Catálogo pesquisável, objetivos e profissionais em uma clínica integrada e funcional.' },
  { model: '08', name: 'Élite Aesthetics', tagline: 'Estética extraordinária. Atendimento excepcional.', image: 'reception2', style: 'Concierge', description: 'Private aesthetics, experiências reservadas e concierge em preto e champagne.' },
] satisfies { model: string; name: string; tagline: string; image: BeautyImage; style: string; description: string }[]

export const beautyModelPath = (model: string, page = '') => `/estetica-beleza/modelo-${model}${page ? `/${page}` : ''}`
export const nextBeautyPages: Record<string, { slug: string; title: string; image: BeautyImage; text: string }[]> = {
  '03': [
    { slug: 'analise-da-pele', title: 'Um olhar atento à sua pele.', image: 'evaluation', text: 'Conhecer sua história, compreender expectativas e conversar sobre possibilidades. A análise começa pela escuta.' },
    { slug: 'objetivos', title: 'O que importa para você?', image: 'premiumHero', text: 'Textura, rotina ou um momento de pausa: suas prioridades orientam a primeira conversa.' },
    { slug: 'protocolos', title: 'Cuidado pensado para cada pele.', image: 'facial', text: 'Explore propostas de atendimento. Nenhuma escolha é definida automaticamente.' },
    { slug: 'skincare', title: 'Seu cuidado. Seu ritmo.', image: 'content', text: 'Um espaço editorial sobre escolhas pessoais e uma conversa com o profissional que acompanha você.' },
    { slug: 'especialista', title: 'Escuta, presença e um olhar humano.', image: 'professional1', text: 'Conheça o perfil demonstrativo da especialista que representa a proposta Aura Skin.' },
    { slug: 'conteudos', title: 'Uma pausa para entender.', image: 'wellness', text: 'Ideias sobre presença, individualidade e a primeira conversa de cuidado.' },
  ],
  '04': [
    { slug: 'tecnologia', title: 'Tecnologia a serviço do cuidado.', image: 'technology', text: 'Recursos para apoiar a conversa e o planejamento individual. A decisão continua sendo humana.' },
    { slug: 'skin-scan', title: 'Skin scan. Um novo olhar.', image: 'evaluation', text: 'Explore um painel ilustrativo de análise. Não há câmera, upload, inteligência artificial ou diagnóstico real.' },
    { slug: 'equipamentos', title: 'Recursos. Não atalhos.', image: 'equipment', text: 'Uma visão da proposta tecnológica da Neo, sem indicar equipamentos ou procedimentos para você.' },
    { slug: 'protocolos', title: 'Uma jornada conectada.', image: 'consultation', text: 'Escuta, avaliação, planejamento e acompanhamento: etapas discutidas individualmente.' },
    { slug: 'tratamentos', title: 'Explore as possibilidades.', image: 'laser', text: 'Tratamentos apresentados com clareza e espaço para suas perguntas.' },
    { slug: 'profissionais', title: 'O cuidado por trás da tecnologia.', image: 'team', text: 'Equipe e perfis ilustrativos para representar um atendimento próximo.' },
  ],
  '05': [
    { slug: 'objetivos', title: 'O seu corpo. As suas escolhas.', image: 'patient', text: 'Prioridades que começam em você, sem um padrão de corpo perfeito.' },
    { slug: 'protocolos', title: 'Mais que um protocolo. Um plano.', image: 'laser', text: 'Propostas de cuidado corporal para conhecer e conversar em uma avaliação.' },
    { slug: 'tecnologia', title: 'Recursos com propósito.', image: 'technology', text: 'Tecnologia como parte de um planejamento conversado, nunca como promessa.' },
    { slug: 'jornada', title: 'Um cuidado que acompanha.', image: 'consultation', text: 'Entenda o percurso: uma conversa inicial, avaliação individual e próximos passos.' },
    { slug: 'estrutura', title: 'Espaço para se sentir bem.', image: 'reception', text: 'Ambientes reservados e uma atmosfera que acolhe o seu tempo.' },
  ],
  '06': [
    { slug: 'filosofia', title: 'A beleza de ser.', image: 'skin', text: 'Um olhar que respeita a individualidade. Menos excessos, mais espaço para você.' },
    { slug: 'tratamentos', title: 'Face. Body. Skin.', image: 'skincare', text: 'Três universos, uma mesma intenção: cuidado com presença.' },
    { slug: 'profissional', title: 'O olhar por trás do cuidado.', image: 'professional2', text: 'Um perfil editorial e demonstrativo sobre escuta e atenção individual.' },
    { slug: 'arquitetura', title: 'Um espaço. Uma sensação.', image: 'corridor', text: 'Texturas, luz e materiais que dão forma a uma experiência tranquila.' },
    { slug: 'journal', title: 'Notas sobre o essencial.', image: 'content', text: 'Um convite à leitura, à calma e à beleza pessoal.' },
    { slug: 'contato', title: 'Uma primeira conversa.', image: 'reception', text: 'Conheça a experiência de solicitação. Contatos e localização demonstrativos.' },
  ],
  '07': [
    { slug: 'tratamentos', title: 'Encontre seu próximo cuidado.', image: 'facial', text: 'Busque por tratamento ou selecione uma categoria para conhecer a proposta.' },
    { slug: 'busca', title: 'O cuidado começa pela sua busca.', image: 'consultation', text: 'Um catálogo organizado por possibilidades, com informações claras e espaço para conversar.' },
    { slug: 'objetivos', title: 'Diferentes objetivos. Um cuidado integrado.', image: 'skin', text: 'Conheça as áreas e encontre um ponto de partida para a sua conversa.' },
    { slug: 'profissionais', title: 'Um time. Diferentes olhares.', image: 'teamCandid', text: 'Conheça os perfis fictícios que representam nossa proposta de atendimento integrado.' },
    { slug: 'tecnologias', title: 'Recursos para cada conversa.', image: 'equipment', text: 'Uma estrutura contemporânea, com avaliação profissional antes de qualquer escolha.' },
    { slug: 'estrutura', title: 'Seu cuidado tem lugar.', image: 'reception', text: 'Explore os ambientes ilustrativos da clínica e a proposta de acolhimento.' },
    { slug: 'conteudos', title: 'Informação também é cuidado.', image: 'content', text: 'Leituras sobre prioridades, individualidade e encontros com presença.' },
  ],
  '08': [
    { slug: 'experiencia', title: 'Private by intention.', image: 'relaxed', text: 'Uma experiência particular, com tempo, discrição e atenção aos detalhes.' },
    { slug: 'tratamentos', title: 'Signature treatments.', image: 'facial', text: 'Uma seleção de experiências para conhecer em uma conversa individual.' },
    { slug: 'especialista', title: 'Um cuidado pessoal.', image: 'professional1', text: 'Um encontro que dá espaço à sua história. Perfil de especialista demonstrativo.' },
    { slug: 'tecnologia', title: 'Precisão em cada escolha.', image: 'technology', text: 'Recursos contemporâneos apresentados com clareza e sem promessas de resultado.' },
    { slug: 'clinica', title: 'Your private retreat.', image: 'corridor', text: 'Ambientes ilustrativos reservados, materiais naturais e uma sensação de tranquilidade.' },
    { slug: 'concierge', title: 'A atenção começa antes da chegada.', image: 'privateConsultation', text: 'Conheça a experiência de um primeiro contato reservado.' },
  ],
}
