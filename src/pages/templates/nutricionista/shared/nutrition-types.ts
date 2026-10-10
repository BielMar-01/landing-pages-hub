import type { NutritionImage } from './nutrition-images'
export interface NutritionService { slug: string; name: string; category: string; image: NutritionImage; text: string; detail: string }
export interface NutritionArticle { slug: string; title: string; category: string; image: NutritionImage; text: string; paragraphs: string[] }
export interface NutritionContent {
  intro: string; about: string; method: string; secondary: string; surface: string; muted: string; soft: string;
  model: string; name: string; tagline: string; positioning: string; root: string; primary: string; background: string; text: string; accent: string; hero: NutritionImage; profile: NutritionImage; food: NutritionImage; consultation: NutritionImage; room: NutritionImage; lifestyle: NutritionImage; journey: string[]; services: NutritionService[]; articles: NutritionArticle[];
}
export const nutritionTitles: Record<string, string> = { sobre: 'Nossa abordagem', atendimentos: 'Atendimentos', 'como-funciona': 'Como funciona', conteudos: 'Conteúdos', agendamento: 'Agendar consulta', contato: 'Contato' }
export const nutritionFaq = [
  { question: 'Como funciona a primeira consulta?', answer: 'A proposta começa por uma conversa sobre sua rotina, necessidades e expectativas. A avaliação e as orientações são individuais. Este site demonstra a experiência de uma marca conceitual.' },
  { question: 'Há atendimento online e presencial?', answer: 'Você pode experimentar as duas modalidades no formulário. Disponibilidade, local e condições precisam ser definidos pelo profissional real.' },
  { question: 'Como são definidos os retornos?', answer: 'O acompanhamento e a frequência dos encontros são combinados individualmente com o nutricionista. Este modelo não define um calendário clínico.' },
  { question: 'O planejamento considera preferências e restrições?', answer: 'Essas informações fazem parte de uma consulta individual. Não envie histórico de saúde, exames ou restrições pelo formulário demonstrativo.' },
  { question: 'A solicitação confirma uma consulta?', answer: 'Não. O formulário funciona apenas no navegador, sem envio, armazenamento permanente ou reserva. Use dados fictícios para conhecer o fluxo.' },
]
