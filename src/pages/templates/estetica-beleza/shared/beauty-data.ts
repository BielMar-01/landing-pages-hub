export const beautyImages = {
  naturalHero: 'Retrato de beleza com pele radiante.png', premiumHero: 'Retrato de beleza com pele iluminada.png',
  skin: 'Retrato de beleza com pele radiante (1).png', relaxed: 'Mulher Serena em Ambiente de Spa.png',
  facial: 'Tratamento Facial em Spa Moderno.png', body: 'Tratamento corporal em clínica estética moderna.png',
  laser: 'Tratamento facial a laser em clínica de estética.png', skincare: 'Tratamento Facial com Máscara Branca.png',
  evaluation: 'Análise Facial em Clínica Dermatológica.png', consultation: 'Consulta de estética facial personalizada.png',
  privateConsultation: 'Consulta de skincare em clínica elegante.png', professional1: 'Profissional de Estética em Clínica Moderna.png',
  professional2: 'Profissional da estética em clínica elegante.png', team: 'Equipe de Clínica Estética em Destaque.png',
  teamCandid: 'Equipe de Clínica em Conversa Alegre.png', reception: 'Recepção Luxuosa de Clínica Estética.png',
  reception2: 'Clínica de estética avançada luxuosa.png', room: 'Suíte de Spa Estético Luxuosa e Serena.png',
  waiting: 'Sala de Espera Estética Avançada.png', detail: 'Luxo e Tranquilidade no Spa.png',
  corridor: 'Corredor Luxuoso de Clínica Estética.png', patient: 'Retrato na Clínica de Estética Avançada.png',
  mature: 'Retrato sereno de beleza e bem-estar.png', wellness: 'Espaço de Beleza e Bem-Estar.png',
  content: 'Autocuidado no banheiro moderno.png', booking: 'Agendamento de Consulta na Estética Avançada.png',
  technology: 'Tecnologia estética com seleção de ultrassom.png', equipment: 'Clínica de estética com tecnologia avançada.png',
  massage: 'Massagem facial relaxante no spa.png', facade: 'Clínica de Estética Avançada ao Entardecer.png',
  relaxation: 'Relaxamento na Estética Avançada.png',
} as const
export type BeautyImage = keyof typeof beautyImages
export const beautyPhoto = (key: BeautyImage, width: 640 | 1280 = 1280) => encodeURI(`/images/estetica-beleza/optimized/${beautyImages[key].replace('.png', width === 640 ? '-640.jpg' : '.jpg')}`)
export const beautyPhotoSet = (key: BeautyImage) => `${beautyPhoto(key, 640)} 640w, ${beautyPhoto(key)} 1280w`
export const essenzaPath = (page = '') => `/estetica-beleza/modelo-01${page ? `/${page}` : ''}`
export const lumierePath = (page = '') => `/estetica-beleza/modelo-02${page ? `/${page}` : ''}`
export const beautyTreatments: { slug: string; name: string; category: string; image: BeautyImage; text: string; detail: string }[] = [
  { slug: 'harmonizacao-facial', name: 'Harmonização facial', category: 'Facial', image: 'facial', text: 'Uma conversa sobre proporção, identidade e escolhas pessoais.', detail: 'O ponto de partida é conhecer sua história e suas expectativas. Possibilidades, limites e cuidados são discutidos em avaliação individual, antes de qualquer decisão.' },
  { slug: 'limpeza-de-pele', name: 'Limpeza de pele', category: 'Pele', image: 'skincare', text: 'Um ritual de cuidado pensado para o seu momento.', detail: 'Um encontro para conversar sobre a sua pele e o que você espera do cuidado. A proposta é apresentar uma experiência individual, sem definir protocolos por este site.' },
  { slug: 'cuidado-corporal', name: 'Cuidado corporal', category: 'Corporal', image: 'body', text: 'Atenção ao corpo com respeito à sua individualidade.', detail: 'Uma proposta de cuidado que começa pela escuta, pelo conforto e pelas suas escolhas. Cada atendimento deve ser definido por uma avaliação profissional.' },
  { slug: 'tecnologia-estetica', name: 'Tecnologia estética', category: 'Tecnologia', image: 'laser', text: 'Recursos que fazem parte de um planejamento individual.', detail: 'Tecnologias são recursos a serem discutidos com um profissional habilitado. Indicações, limitações e alternativas dependem de uma avaliação; não há indicação automática neste modelo.' },
  { slug: 'ritual-wellness', name: 'Ritual wellness', category: 'Bem-estar', image: 'massage', text: 'Tempo para desacelerar e se reconectar com você.', detail: 'Um ambiente tranquilo e uma experiência reservada. O ritual apresentado é ilustrativo e pode ser adaptado à proposta de uma clínica real.' },
  { slug: 'avaliacao-personalizada', name: 'Avaliação personalizada', category: 'Facial', image: 'evaluation', text: 'A escuta como primeiro passo de qualquer cuidado.', detail: 'Compartilhe suas prioridades, tire dúvidas e conheça o processo antes de escolher. A avaliação é o início de um planejamento conversado com cada pessoa.' },
]
export const beautyFaq = [
  { question: 'Como funciona a primeira avaliação?', answer: 'A proposta é começar por uma conversa sobre suas expectativas e sua história. Nenhum procedimento é indicado automaticamente. Este site apresenta uma clínica fictícia e não oferece avaliação real.' },
  { question: 'Como saber qual tratamento faz sentido para mim?', answer: 'A escolha depende de avaliação individual com um profissional habilitado. Aqui você pode conhecer a proposta dos tratamentos e experimentar o agendamento demonstrativo.' },
  { question: 'Existem resultados garantidos ou prazos definidos?', answer: 'Não. Não apresentamos promessa de resultado, prazo de recuperação ou indicação clínica. Possibilidades, riscos e limites precisam ser conversados em uma avaliação real.' },
  { question: 'O agendamento confirma uma consulta real?', answer: 'Não. O formulário é uma simulação no navegador. Nenhuma reserva, mensagem, cobrança ou atendimento é gerado.' },
  { question: 'Os dados do formulário são enviados?', answer: 'Não. Não há backend nem armazenamento permanente. Use dados fictícios para explorar a experiência; os campos são limpos ao concluir.' },
  { question: 'Como conhecer valores e condições?', answer: 'Este modelo não apresenta valores ou condições comerciais reais. Essas informações devem ser preenchidas e confirmadas por uma clínica ao adaptar o projeto.' },
]
export const beautyArticles: { slug: string; title: string; category: string; image: BeautyImage; text: string; paragraphs: string[] }[] = [
  { slug: 'tempo-para-voce', title: 'O essencial também merece tempo', category: 'Bem-estar', image: 'content', text: 'Um convite para olhar para o ritmo dos seus dias.', paragraphs: ['Entre compromissos e expectativas, reservar um momento para si pode começar por uma pergunta: o que você gostaria de viver com mais calma?', 'Não existe uma rotina igual para todo mundo. Este espaço convida à reflexão sobre presença, pausas e prioridades, sem indicar tratamentos ou substituir orientação profissional.'] },
  { slug: 'primeira-conversa', title: 'Antes de escolher, uma boa conversa', category: 'Cuidado', image: 'privateConsultation', text: 'Dúvidas e expectativas têm lugar no primeiro encontro.', paragraphs: ['Suas expectativas fazem parte da sua história. Anotá-las pode ajudar a organizar uma conversa sobre o que importa para você.', 'Em um atendimento real, cabe ao profissional avaliar possibilidades e limites com clareza. A escuta acontece antes de qualquer planejamento.'] },
  { slug: 'beleza-pessoal', title: 'Uma beleza que conta a sua história', category: 'Essência', image: 'skin', text: 'Individualidade é o ponto de partida.', paragraphs: ['Cada pessoa tem uma forma própria de perceber a beleza e o cuidado. Respeitar essa perspectiva é parte da proposta deste modelo.', 'Este editorial é demonstrativo. Não define um padrão estético, um resultado ou uma conduta individual.'] },
]
export const beautyTitles: Record<string, string> = {
  tratamentos: 'Tratamentos', sobre: 'Nossa essência', profissionais: 'Profissionais', estrutura: 'Nossa clínica',
  conteudos: 'Conteúdos', faq: 'Perguntas frequentes', contato: 'Contato', agendamento: 'Agendar avaliação',
  experiencia: 'Private Experience', 'consulta-particular': 'Private Consultation',
}
export const beautySearch = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim()
