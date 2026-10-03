import { Baby, Ear, HeartPulse, Sparkles, Stethoscope, Venus } from 'lucide-react'

export const specialties = [
  { name: 'Clínica Geral', image: 'general-medicine', icon: Stethoscope, description: 'Prevenção e acompanhamento para a sua saúde, em todas as fases.' },
  { name: 'Pediatria', image: 'pediatrics', icon: Baby, description: 'Atenção ao desenvolvimento, com acolhimento para crianças e famílias.' },
  { name: 'Ginecologia', image: 'gynecology', icon: Venus, description: 'Saúde da mulher com escuta, orientação e cuidado individual.' },
  { name: 'Cardiologia', image: 'cardiology', icon: HeartPulse, description: 'Avaliação e acompanhamento da saúde cardiovascular.' },
  { name: 'Dermatologia', image: 'dermatology', icon: Sparkles, description: 'Cuidado especializado para a saúde da pele, cabelos e unhas.' },
  { name: 'Otorrinolaringologia', image: 'otorhinolaryngology', icon: Ear, description: 'Atenção à saúde do ouvido, nariz e garganta.' },
]

export const doctors = [
  { name: 'Dra. Helena Martins', specialty: 'Clínica Médica', image: 'doctor-profile', position: '46% 30%', bio: 'Dedica seu atendimento à prevenção e ao acompanhamento integral, com espaço para ouvir o histórico e as necessidades de cada pessoa.' },
  { name: 'Dr. Rafael Almeida', specialty: 'Cardiologia', image: 'doctor-male', position: '40% 24%', bio: 'Atua no acompanhamento cardiovascular, com explicações claras sobre a avaliação e as possibilidades de cuidado individual.' },
  { name: 'Dra. Juliana Costa', specialty: 'Pediatria', image: 'team', position: '75% 25%', bio: 'Acolhe crianças e suas famílias, acompanhando diferentes etapas do desenvolvimento com orientação próxima e responsável.' },
  { name: 'Dr. Marcelo Nunes', specialty: 'Ginecologia', image: 'team', position: '62% 22%', bio: 'Oferece uma consulta dedicada à saúde da mulher, com respeito à individualidade e decisões compartilhadas.' },
]

export const facilities = [
  { name: 'Recepção', image: 'clinic-reception', detail: 'O cuidado começa na chegada.' },
  { name: 'Consultórios', image: 'consultation-room', detail: 'Privacidade, conforto e atenção.' },
  { name: 'Sala de exames', image: 'equipment-room', detail: 'Estrutura para avaliações cuidadosas.' },
  { name: 'Tecnologia', image: 'technology', detail: 'Recursos a serviço do cuidado.' },
  { name: 'Circulação', image: 'clinic-corridor', detail: 'Ambientes amplos e iluminados.' },
  { name: 'Área de espera', image: 'waiting-room', detail: 'Um espaço para toda a família.' },
]

export const articles = [
  { category: 'Bem-estar', title: '5 hábitos para uma vida mais saudável', image: 'family-care', text: 'Organizar o descanso, reservar tempo para movimento, observar a alimentação, cultivar relações e manter o acompanhamento profissional são temas que podem entrar na conversa sobre bem-estar. Cada pessoa tem necessidades e possibilidades diferentes; comece por conhecer sua rotina e converse com profissionais sobre escolhas adequadas ao seu contexto.' },
  { category: 'Prevenção', title: 'A importância dos exames preventivos', image: 'doctor-working', text: 'A prevenção começa pela consulta e pelo conhecimento do histórico de saúde. Exames não são iguais para todas as pessoas: indicações e frequência devem ser definidas por avaliação profissional. Leve suas dúvidas e resultados anteriores para discutir quais cuidados fazem sentido para você.' },
  { category: 'Nutrição', title: 'Alimentação equilibrada no dia a dia', image: 'health-content', text: 'Preferências, rotina e contexto de saúde fazem parte das escolhas alimentares. Planejar compras e refeições pode ser um ponto de partida para observar o cotidiano. Orientações individuais e planos alimentares precisam de avaliação nutricional; este conteúdo não apresenta dietas nem prescrições.' },
]

export const faqItems = [
  { question: 'Preciso de pedido médico para agendar?', answer: 'Consultas podem ser solicitadas diretamente. Para exames ou avaliações específicas, a equipe orientaria sobre os documentos necessários antes da confirmação. Neste site, o agendamento é apenas demonstrativo.' },
  { question: 'Quais exames são realizados na consulta?', answer: 'A consulta é dedicada à escuta, ao histórico e à avaliação clínica. Exames complementares dependem de indicação individual e não são automaticamente incluídos no atendimento.' },
  { question: 'Atendem convênios?', answer: 'Modalidades, convênios e condições seriam confirmados com a recepção antes do agendamento. Nenhum convênio real é anunciado nesta demonstração.' },
  { question: 'Qual a duração da consulta?', answer: 'O tempo varia conforme a especialidade e as necessidades do atendimento. A proposta é oferecer espaço para conversar e esclarecer dúvidas, sem prometer uma duração única.' },
  { question: 'Como é o retorno?', answer: 'O profissional orientaria sobre a necessidade, o prazo e as condições do retorno ao final da consulta. Nenhuma reserva ou cobrança é feita neste modelo.' },
  { question: 'Posso remarcar ou cancelar?', answer: 'Em um atendimento real, a recepção esclareceria as condições de remarcação e cancelamento. Aqui, o formulário não cria agendamentos reais.' },
]
