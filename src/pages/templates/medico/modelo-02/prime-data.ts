export const PRIME_BASE = '/medico/modelo-02'
export const primePath = (suffix = '') => `${PRIME_BASE}${suffix ? `/${suffix}` : ''}`
export const photoPath = (name: string) => `/images/medico/shared/${name}.webp`
export const primeNavigation = [
  ['Início', ''], ['Experiência Prime', 'experiencia'], ['Especialidades', 'especialidades'],
  ['Equipe', 'equipe'], ['Estrutura', 'estrutura'], ['Conteúdos', 'conteudos'], ['Contato', 'contato'],
] as const
export const primePageTitles: Record<string, string> = {
  '': 'Medicina Particular', experiencia: 'Experiência Prime', especialidades: 'Especialidades',
  'especialidades/cardiologia': 'Cardiologia', equipe: 'Equipe médica', 'equipe/helena-martins': 'Dra. Helena Martins',
  estrutura: 'Nossa estrutura', conteudos: 'Conteúdos', 'conteudos/habitos-vida-saudavel': 'Hábitos e uma vida com mais equilíbrio',
  agendamento: 'Agendar consulta', contato: 'Contato e localização', faq: 'Dúvidas frequentes',
}
export const specialties = [
  { id: 'cardiologia', name: 'Cardiologia', image: 'cardiology', description: 'Um olhar atento ao seu coração, à sua história e ao cuidado contínuo.' },
  { id: 'clinica-geral', name: 'Clínica Geral', image: 'general-medicine', description: 'Acolhimento e uma visão integral para cada etapa da sua vida.' },
  { id: 'dermatologia', name: 'Dermatologia', image: 'dermatology', description: 'Atenção individual à pele, aos cabelos e às suas necessidades.' },
  { id: 'ginecologia', name: 'Ginecologia', image: 'gynecology', description: 'Cuidado próximo à saúde da mulher, respeitando cada momento.' },
  { id: 'pediatria', name: 'Pediatria', image: 'pediatrics', description: 'Escuta e acompanhamento para as crianças e suas famílias.' },
  { id: 'otorrinolaringologia', name: 'Otorrinolaringologia', image: 'otorhinolaryngology', description: 'Cuidado especializado para ouvido, nariz e garganta.' },
]
export const doctors = [
  { id: 'helena-martins', name: 'Dra. Helena Martins', specialty: 'cardiologia', image: 'doctor-profile', position: '50% 35%' },
  { id: 'rafael-almeida', name: 'Dr. Rafael Almeida', specialty: 'clinica-geral', image: 'doctor-male', position: '42% 30%' },
  { id: 'juliana-costa', name: 'Dra. Juliana Costa', specialty: 'dermatologia', image: 'team', position: '34% 30%' },
  { id: 'marcelo-nunes', name: 'Dr. Marcelo Nunes', specialty: 'ginecologia', image: 'team', position: '62% 30%' },
  { id: 'camila-ribeiro', name: 'Dra. Camila Ribeiro', specialty: 'pediatria', image: 'team', position: '76% 30%' },
  { id: 'eduardo-lima', name: 'Dr. Eduardo Lima', specialty: 'otorrinolaringologia', image: 'team', position: '15% 30%' },
]
export const articles = [
  { id: 'habitos-vida-saudavel', title: 'Hábitos e uma vida com mais equilíbrio', category: 'Bem-estar', image: 'family-care', time: '5 min', text: 'Tempo, presença e escolhas possíveis: um convite para olhar para a própria rotina.' },
  { id: 'primeira-consulta', title: 'Uma boa conversa começa antes da consulta', category: 'Cuidado', image: 'doctor-consultation', time: '3 min', text: 'Anote suas dúvidas e organize as informações que deseja compartilhar no encontro.' },
  { id: 'cuidado-familia', title: 'Espaço para cuidar de toda a família', category: 'Família', image: 'mother-child', time: '3 min', text: 'Histórias diferentes merecem escuta, respeito e atenção individual.' },
  { id: 'tempo-para-voce', title: 'O valor de reservar um tempo para você', category: 'Bem-estar', image: 'patient-consultation', time: '2 min', text: 'Uma pausa para perceber suas prioridades e conversar sobre o que importa.' },
]
export const faqItems = [
  { category: 'Agendamento', question: 'Como posso agendar uma consulta?', answer: 'Neste modelo, o agendamento acontece em cinco etapas: especialidade, profissional, data e horário, dados e revisão. Ao finalizar, você verá uma confirmação de simulação. Nenhuma consulta real será reservada.' },
  { category: 'Agendamento', question: 'Posso alterar minha escolha durante o agendamento?', answer: 'Sim. Use Voltar ou os passos já concluídos para editar sua seleção. Ao trocar a especialidade, será necessário escolher novamente o profissional e o horário.' },
  { category: 'Atendimento', question: 'Como funciona a primeira consulta?', answer: 'A proposta da Essencial Prime é começar por uma conversa atenta à sua história e às suas expectativas. Em uma clínica real, duração e condições seriam informadas antes da confirmação.' },
  { category: 'Atendimento', question: 'Posso levar um acompanhante?', answer: 'A experiência apresentada contempla o acolhimento de pacientes e acompanhantes. As condições de cada atendimento devem ser combinadas com uma equipe real.' },
  { category: 'Pagamento', question: 'Quais convênios e formas de pagamento são aceitos?', answer: 'O posicionamento deste modelo é medicina particular. Não há valores, cobrança, cobertura de convênio ou emissão de recibos nesta demonstração.' },
  { category: 'Estrutura', question: 'A clínica possui estacionamento e acessibilidade?', answer: 'O projeto apresenta ambientes acessíveis e estacionamento como parte da experiência proposta. Fotos e localização são ilustrativas; confirme essas condições ao adaptar o site para uma clínica real.' },
  { category: 'Atendimento', question: 'Este site oferece atendimento de urgência?', answer: 'Não. A Essencial Prime é uma clínica fictícia, sem atendimento real. O formulário e o agendamento não são canais de urgência.' },
  { category: 'Privacidade', question: 'Meus dados são enviados ou armazenados?', answer: 'Não. Os formulários funcionam apenas no seu navegador, sem envio a um servidor e sem armazenamento permanente. Você pode usar dados fictícios para testar a experiência.' },
]
export const normalizeSearch = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim()
export const bookingPath = (specialty?: string, doctor?: string) => `${primePath('agendamento')}${specialty ? `?especialidade=${specialty}${doctor ? `&profissional=${doctor}` : ''}` : ''}`
