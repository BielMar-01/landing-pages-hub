import {
  ArrowRight,
  Baby,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Heart,
  HeartPulse,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserRound,
  Users,
  Venus,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { LocalPhoto } from '../../../../components/common/LocalPhoto'
import './medical-essential.css'

const faqItems = [
  {
    question: 'Como faço para agendar uma consulta?',
    answer:
      'Você pode solicitar seu agendamento pelos botões disponíveis na página. Na versão final, esse fluxo pode ser integrado ao WhatsApp ou a um sistema de agendamento.',
  },
  {
    question: 'Quais especialidades estão disponíveis?',
    answer:
      'Este modelo apresenta Clínica Geral, Cardiologia, Dermatologia, Endocrinologia, Pediatria e Ginecologia. As especialidades podem ser personalizadas para cada clínica.',
  },
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'A primeira consulta é dedicada a entender seu histórico, necessidades e objetivos para definir o acompanhamento mais adequado.',
  },
  {
    question: 'A clínica atende convênios?',
    answer:
      'As informações sobre convênios podem ser configuradas de acordo com a clínica. Este conteúdo é apenas demonstrativo.',
  },
  {
    question: 'Posso remarcar ou cancelar uma consulta?',
    answer:
      'Sim. As regras de cancelamento e remarcação podem ser definidas pela clínica e apresentadas durante o processo de agendamento.',
  },
]

export function MedicalEssentialPage() {
  const [bookingSent, setBookingSent] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  function closeMenu() {
    setMenuOpen(false)
  }

  function toggleFaq(index: number) {
    setOpenFaq((current) => (current === index ? null : index))
  }

  return (
    <div className="medical-essential">
      <header className="me-header">
        <div className="me-container me-header__content">
          <a
            href="#inicio"
            className="me-brand"
            aria-label="Clínica Essencial"
            onClick={closeMenu}
          >
            <span className="me-brand__icon">
              <HeartPulse size={21} />
            </span>

            <span>
              Clínica
              <strong> Essencial</strong>
            </span>
          </a>

          <nav
            className={`me-nav ${
              menuOpen ? 'me-nav--open' : ''
            }`}
            aria-label="Navegação da clínica"
          >
            <a href="#inicio" onClick={closeMenu}>
              Início
            </a>

            <a href="#especialidades" onClick={closeMenu}>
              Especialidades
            </a>

            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>

            <a href="#depoimentos" onClick={closeMenu}>
              Depoimentos
            </a>

            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>

            <a
              href="#agendamento"
              className="me-nav__cta"
              onClick={closeMenu}
            >
              Agendar consulta
            </a>
          </nav>

          <button
            type="button"
            className="me-menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="me-hero" id="inicio">
          <div className="me-container me-hero__grid">
            <div className="me-hero__content">
              <div className="me-eyebrow">
                <span />
                Medicina com atenção de verdade
              </div>

              <h1>
                Cuidado médico que começa
                <span> ouvindo você.</span>
              </h1>

              <p className="me-hero__description">
                Atendimento próximo, estrutura moderna e
                profissionais preparados para cuidar da sua saúde
                em cada etapa.
              </p>

              <div className="me-hero__actions">
                <a
                  href="#agendamento"
                  className="me-button me-button--primary"
                >
                  <CalendarDays size={18} />
                  Agendar consulta
                </a>

                <a
                  href="#sobre"
                  className="me-button me-button--secondary"
                >
                  Conheça a clínica
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="me-hero__trust">
                <div className="me-trust-avatars">
                  <span>HM</span>
                  <span>RC</span>
                  <span>AL</span>
                </div>

                <div>
                  <div className="me-stars">★★★★★</div>
                  <p>Cuidado reconhecido por nossos pacientes</p>
                </div>
              </div>
            </div>

            <div
              className="me-hero__visual"
              aria-label="Ambiente da Clínica Essencial"
            >
              <div className="me-visual__background">
                <div className="me-visual__circle" />

                <LocalPhoto src="/images/medico/modelo-01/hero-doctor.webp" alt="Profissional médica em um consultório acolhedor — fotografia demonstrativa" className="me-hero-photo" eager>
<div className="me-doctor">
                  <div className="me-doctor__head" />
                  <div className="me-doctor__hair" />
                  <div className="me-doctor__neck" />

                  <div className="me-doctor__body">
                    <span className="me-doctor__coat-line" />

                    <span className="me-doctor__stethoscope">
                      <Stethoscope size={55} strokeWidth={1.3} />
                    </span>
                  </div>
                </div>

                </LocalPhoto>
<div className="me-floating-card me-floating-card--top">
                  <span className="me-floating-card__icon">
                    <ShieldCheck size={18} />
                  </span>

                  <div>
                    <strong>Atendimento seguro</strong>
                    <span>Seu cuidado em primeiro lugar</span>
                  </div>
                </div>

                <div className="me-floating-card me-floating-card--bottom">
                  <span className="me-floating-card__icon">
                    <Clock3 size={18} />
                  </span>

                  <div>
                    <strong>Consulta sem pressa</strong>
                    <span>Tempo para ouvir você</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="me-trust-strip">
          <div className="me-container me-trust-strip__grid">
            <article>
              <span className="me-stat-icon">
                <HeartPulse size={21} />
              </span>
              <div>
                <strong>+10 anos</strong>
                <span>cuidando de pessoas</span>
              </div>
            </article>

            <article>
              <span className="me-stat-icon">
                <Users size={21} />
              </span>
              <div>
                <strong>+5.000</strong>
                <span>pacientes atendidos</span>
              </div>
            </article>

            <article>
              <span className="me-stat-icon">
                <Stethoscope size={21} />
              </span>
              <div>
                <strong>6 especialidades</strong>
                <span>em um só lugar</span>
              </div>
            </article>

            <article>
              <span className="me-stat-icon">
                <Check size={21} />
              </span>
              <div>
                <strong>Atendimento</strong>
                <span>humanizado e próximo</span>
              </div>
            </article>
          </div>
        </section>

        <section className="me-specialties" id="especialidades">
          <div className="me-container">
            <div className="me-section-heading">
              <div>
                <span className="me-section-kicker">
                  Nossas especialidades
                </span>

                <h2>
                  Cuidado completo para
                  <span> cada fase da vida.</span>
                </h2>
              </div>

              <p>
                Uma equipe multidisciplinar preparada para oferecer
                acompanhamento próximo, diagnóstico cuidadoso e
                atendimento integrado.
              </p>
            </div>

            <div className="me-specialties__grid">
              <article className="me-specialty-card">
                <span className="me-specialty-card__icon">
                  <Stethoscope size={24} />
                </span>
                <h3>Clínica Geral</h3>
                <p>
                  Avaliação completa, prevenção e acompanhamento da
                  sua saúde no dia a dia.
                </p>
                <a href="#agendamento">
                  Agendar consulta
                  <ArrowRight size={16} />
                </a>
              </article>

              <article className="me-specialty-card">
                <span className="me-specialty-card__icon">
                  <HeartPulse size={24} />
                </span>
                <h3>Cardiologia</h3>
                <p>
                  Prevenção, diagnóstico e acompanhamento
                  especializado da saúde cardiovascular.
                </p>
                <a href="#agendamento">
                  Agendar consulta
                  <ArrowRight size={16} />
                </a>
              </article>

              <article className="me-specialty-card">
                <span className="me-specialty-card__icon">
                  <Sparkles size={24} />
                </span>
                <h3>Dermatologia</h3>
                <p>
                  Cuidados especializados para a saúde da pele,
                  cabelos e unhas.
                </p>
                <a href="#agendamento">
                  Agendar consulta
                  <ArrowRight size={16} />
                </a>
              </article>

              <article className="me-specialty-card">
                <span className="me-specialty-card__icon">
                  <UserRound size={24} />
                </span>
                <h3>Endocrinologia</h3>
                <p>
                  Acompanhamento hormonal, metabólico e orientação
                  personalizada.
                </p>
                <a href="#agendamento">
                  Agendar consulta
                  <ArrowRight size={16} />
                </a>
              </article>

              <article className="me-specialty-card">
                <span className="me-specialty-card__icon">
                  <Baby size={24} />
                </span>
                <h3>Pediatria</h3>
                <p>
                  Atenção dedicada ao crescimento e desenvolvimento
                  saudável das crianças.
                </p>
                <a href="#agendamento">
                  Agendar consulta
                  <ArrowRight size={16} />
                </a>
              </article>

              <article className="me-specialty-card">
                <span className="me-specialty-card__icon">
                  <Venus size={24} />
                </span>
                <h3>Ginecologia</h3>
                <p>
                  Saúde feminina com acolhimento, prevenção e
                  acompanhamento em diferentes fases.
                </p>
                <a href="#agendamento">
                  Agendar consulta
                  <ArrowRight size={16} />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="me-about" id="sobre">
          <div className="me-container me-about__grid">
            <div className="me-about__visual">
              <LocalPhoto src="/images/medico/modelo-01/clinic-interior.webp" alt="Ambiente de recepção da clínica — fotografia demonstrativa" className="me-clinic-photo">
<div className="me-about__room">
                <div className="me-room__window">
                  <span />
                  <span />
                </div>

                <div className="me-room__picture">
                  <HeartPulse size={31} />
                </div>

                <div className="me-room__desk">
                  <div className="me-room__monitor" />

                  <div className="me-room__plant">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="me-room__chair" />
              </div>

              </LocalPhoto>
<div className="me-about__badge">
                <span>
                  <Heart size={21} />
                </span>

                <div>
                  <strong>Atendimento humanizado</strong>
                  <small>Você no centro do cuidado</small>
                </div>
              </div>
            </div>

            <div className="me-about__content">
              <span className="me-section-kicker">
                Sobre a Clínica Essencial
              </span>

              <h2>
                Medicina próxima,
                <span> humana e responsável.</span>
              </h2>

              <p>
                A Clínica Essencial nasceu com uma proposta simples:
                oferecer atendimento médico de qualidade sem
                transformar pessoas em números.
              </p>

              <p>
                Nosso espaço foi pensado para unir profissionais
                experientes, tecnologia e uma relação mais próxima
                entre médico e paciente.
              </p>

              <div className="me-about__benefits">
                <div>
                  <span>
                    <Check size={16} />
                  </span>
                  <p>
                    <strong>Consultas com tempo </strong>
                    para entender cada paciente.
                  </p>
                </div>

                <div>
                  <span>
                    <Check size={16} />
                  </span>
                  <p>
                    <strong>Equipe integrada </strong>
                    com diferentes especialidades.
                  </p>
                </div>

                <div>
                  <span>
                    <Check size={16} />
                  </span>
                  <p>
                    <strong>Estrutura moderna </strong>
                    para um atendimento confortável.
                  </p>
                </div>
              </div>

              <a
                href="#agendamento"
                className="me-button me-button--primary me-about__button"
              >
                Conheça nosso atendimento
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="me-doctor-section">
          <div className="me-container">
            <div className="me-section-heading me-section-heading--center">
              <div>
                <span className="me-section-kicker">
                  Profissional em destaque
                </span>

                <h2>
                  Experiência técnica.
                  <span> Cuidado humano.</span>
                </h2>
              </div>
            </div>

            <article className="me-doctor-profile">
              <div className="me-doctor-profile__visual">
                <LocalPhoto src="/images/medico/modelo-01/dra-helena.webp" alt="Retrato ilustrativo da personagem Dra. Helena Martins" className="me-profile-photo">
<div className="me-profile-person">
                  <div className="me-profile-person__hair" />
                  <div className="me-profile-person__head" />
                  <div className="me-profile-person__neck" />

                  <div className="me-profile-person__body">
                    <Stethoscope
                      size={58}
                      strokeWidth={1.25}
                    />
                  </div>
                </div>

                </LocalPhoto>
<span className="me-doctor-profile__availability">
                  <span />
                  Agenda disponível
                </span>
              </div>

              <div className="me-doctor-profile__content">
                <span className="me-doctor-profile__specialty">
                  Clínica Médica
                </span>

                <h3>Dra. Helena Martins</h3>

                <span className="me-doctor-profile__crm">
                  CRM/SP 000000 • Dados demonstrativos
                </span>

                <p>
                  Médica dedicada ao acompanhamento integral da
                  saúde, prevenção e construção de uma relação
                  próxima com cada paciente.
                </p>

                <div className="me-doctor-profile__credentials">
                  <div>
                    <span>
                      <ShieldCheck size={20} />
                    </span>

                    <div>
                      <strong>Formação médica</strong>
                      <small>
                        Universidade Médica — dados demonstrativos
                      </small>
                    </div>
                  </div>

                  <div>
                    <span>
                      <Stethoscope size={20} />
                    </span>

                    <div>
                      <strong>Clínica Médica</strong>
                      <small>
                        Especialização e acompanhamento integral
                      </small>
                    </div>
                  </div>

                  <div>
                    <span>
                      <HeartPulse size={20} />
                    </span>

                    <div>
                      <strong>+10 anos de experiência</strong>
                      <small>
                        Atendimento clínico e preventivo
                      </small>
                    </div>
                  </div>
                </div>

                <a
                  href="#agendamento"
                  className="me-button me-button--primary"
                >
                  <CalendarDays size={18} />
                  Agendar com Dra. Helena
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="me-process">
          <div className="me-container">
            <div className="me-section-heading me-section-heading--center">
              <div>
                <span className="me-section-kicker">
                  Como funciona
                </span>

                <h2>
                  Cuidar da sua saúde
                  <span> pode ser simples.</span>
                </h2>
              </div>
            </div>

            <div className="me-process__grid">
              <article className="me-process-card">
                <span className="me-process-card__number">
                  01
                </span>

                <span className="me-process-card__icon">
                  <Search size={25} />
                </span>

                <h3>Escolha a especialidade</h3>

                <p>
                  Encontre o atendimento ideal de acordo com a sua
                  necessidade.
                </p>
              </article>

              <article className="me-process-card">
                <span className="me-process-card__number">
                  02
                </span>

                <span className="me-process-card__icon">
                  <CalendarDays size={25} />
                </span>

                <h3>Agende seu horário</h3>

                <p>
                  Escolha o melhor dia e horário para realizar sua
                  consulta.
                </p>
              </article>

              <article className="me-process-card">
                <span className="me-process-card__number">
                  03
                </span>

                <span className="me-process-card__icon">
                  <HeartPulse size={25} />
                </span>

                <h3>Cuide da sua saúde</h3>

                <p>
                  Compareça à consulta e receba um atendimento
                  próximo e personalizado.
                </p>
              </article>
            </div>

            <div className="me-process__action">
              <a
                href="#agendamento"
                className="me-button me-button--primary"
              >
                <CalendarDays size={18} />
                Quero agendar uma consulta
              </a>
            </div>
          </div>
        </section>

        <section
          className="me-testimonials"
          id="depoimentos"
        >
          <div className="me-container">
            <div className="me-section-heading">
              <div>
                <span className="me-section-kicker">
                  Experiência dos pacientes
                </span>

                <h2>
                  Cuidado que também
                  <span> aparece nas palavras.</span>
                </h2>
              </div>

              <p>
                Exemplos de avaliações para demonstrar como a
                experiência dos pacientes pode ser apresentada
                nesta landing page.
              </p>
            </div>

            <div className="me-testimonials__grid">
              <article className="me-testimonial-card">
                <div className="me-testimonial-card__stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <blockquote>
                  “Fui muito bem atendida. A consulta foi tranquila
                  e senti que realmente houve tempo para ouvir todas
                  as minhas dúvidas.”
                </blockquote>

                <div className="me-testimonial-card__person">
                  <LocalPhoto src="/images/medico/modelo-01/patient-01.webp" alt="Retrato ilustrativo de paciente fictício" className="me-patient-photo"><span>MS</span></LocalPhoto>

                  <div>
                    <strong>Mariana S.</strong>
                    <small>Paciente • conteúdo demonstrativo</small>
                  </div>
                </div>
              </article>

              <article className="me-testimonial-card">
                <div className="me-testimonial-card__stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <blockquote>
                  “Desde o agendamento até a consulta, tudo foi muito
                  organizado. O ambiente também transmite bastante
                  tranquilidade.”
                </blockquote>

                <div className="me-testimonial-card__person">
                  <LocalPhoto src="/images/medico/modelo-01/patient-02.webp" alt="Retrato ilustrativo de paciente fictício" className="me-patient-photo"><span>RL</span></LocalPhoto>

                  <div>
                    <strong>Rafael L.</strong>
                    <small>Paciente • conteúdo demonstrativo</small>
                  </div>
                </div>
              </article>

              <article className="me-testimonial-card">
                <div className="me-testimonial-card__stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <blockquote>
                  “Gostei muito da atenção da equipe e da forma como
                  explicaram cada etapa. Um atendimento realmente
                  acolhedor.”
                </blockquote>

                <div className="me-testimonial-card__person">
                  <LocalPhoto src="/images/medico/modelo-01/patient-03.webp" alt="Retrato ilustrativo de paciente fictício" className="me-patient-photo"><span>AC</span></LocalPhoto>

                  <div>
                    <strong>Ana C.</strong>
                    <small>Paciente • conteúdo demonstrativo</small>
                  </div>
                </div>
              </article>
            </div>

            <div className="me-testimonials__note">
              <MessageCircle size={18} />

              <p>
                Os depoimentos acima são fictícios e utilizados
                exclusivamente para demonstração do modelo.
              </p>
            </div>
          </div>
        </section>

        <section className="me-faq">
          <div className="me-container me-faq__grid">
            <div className="me-faq__intro">
              <span className="me-section-kicker">
                Dúvidas frequentes
              </span>

              <h2>
                Antes da consulta,
                <span> tire suas dúvidas.</span>
              </h2>

              <p>
                Reunimos algumas das perguntas mais comuns para
                facilitar sua experiência.
              </p>

              <div className="me-faq__support">
                <span>
                  <MessageCircle size={22} />
                </span>

                <div>
                  <strong>Ainda ficou com alguma dúvida?</strong>
                  <p>
                    Nossa equipe pode ajudar você antes do
                    agendamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="me-faq__list">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index

                return (
                  <article
                    className={`me-faq-item ${
                      isOpen ? 'me-faq-item--open' : ''
                    }`}
                    key={item.question}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>

                      <ChevronDown size={20} />
                    </button>

                    {isOpen && (
                      <div className="me-faq-item__answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section
  className="me-booking"
  id="agendamento"
>
  <div className="me-container">
    <div className="me-booking__box">
      <div className="me-booking__content">
        <span className="me-section-kicker">
          Agende sua consulta
        </span>

        <h2>
          Sua saúde merece
          <span> atenção de verdade.</span>
        </h2>

        <p>
          Escolha uma especialidade e solicite seu atendimento.
          Nossa equipe entrará em contato para confirmar o melhor
          horário.
        </p>

        <div className="me-booking__benefits">
          <span>
            <Check size={16} />
            Atendimento humanizado
          </span>

          <span>
            <Check size={16} />
            6 especialidades
          </span>

          <span>
            <Check size={16} />
            Horários flexíveis
          </span>
        </div>
      </div>

      <form
        className="me-booking-form"
        onSubmit={(event) => { event.preventDefault(); setBookingSent(true) }}
      >
        <div className="me-booking-form__heading">
          <span className="me-booking-form__icon">
            <CalendarDays size={21} />
          </span>

          <div>
            <strong>Solicitar agendamento</strong>
            <p>Preencha seus dados abaixo.</p>
          </div>
        </div>

        <div className="me-form-field">
          <label htmlFor="me-name">
            Nome completo
          </label>

          <input
            id="me-name"
            name="name"
            type="text"
            placeholder="Digite seu nome"
          />
        </div>

        <div className="me-form-field">
          <label htmlFor="me-phone">
            Telefone
          </label>

          <input
            id="me-phone"
            name="phone"
            type="tel"
            placeholder="(11) 99999-9999"
          />
        </div>

        <div className="me-form-field">
          <label htmlFor="me-specialty">
            Especialidade
          </label>

          <select
            id="me-specialty"
            name="specialty"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione uma especialidade
            </option>

            <option>Clínica Geral</option>
            <option>Cardiologia</option>
            <option>Dermatologia</option>
            <option>Endocrinologia</option>
            <option>Pediatria</option>
            <option>Ginecologia</option>
          </select>
        </div>

        <div className="me-form-row">
          <div className="me-form-field">
            <label htmlFor="me-date">
              Melhor data
            </label>

            <input
              id="me-date"
              name="date"
              type="date"
            />
          </div>

          <div className="me-form-field">
            <label htmlFor="me-period">
              Período
            </label>

            <select
              id="me-period"
              name="period"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione
              </option>

              <option>Manhã</option>
              <option>Tarde</option>
              <option>Noite</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="me-button me-button--primary me-booking-form__submit"
        >
          <CalendarDays size={18} />
          Solicitar agendamento
        </button>

        {bookingSent && <p role="status" className="me-booking-form__disclaimer">Agendamento simulado. Nenhum dado foi enviado; não haverá contato real.</p>}
        <p className="me-booking-form__disclaimer">
          Formulário demonstrativo. Nenhuma informação é enviada
          ou armazenada.
        </p>
      </form>
    </div>
  </div>
</section>

<section
  className="me-contact"
  id="contato"
>
  <div className="me-container">
    <div className="me-section-heading">
      <div>
        <span className="me-section-kicker">
          Onde estamos
        </span>

        <h2>
          Fácil de chegar.
          <span> Bom de ser cuidado.</span>
        </h2>
      </div>

      <p>
        Um espaço pensado para oferecer conforto, tranquilidade
        e praticidade durante todo o seu atendimento.
      </p>
    </div>

    <div className="me-contact__grid">
      <div className="me-contact__map">
        <div className="me-map">
          <span className="me-map__road me-map__road--one" />
          <span className="me-map__road me-map__road--two" />
          <span className="me-map__road me-map__road--three" />
          <span className="me-map__road me-map__road--four" />

          <div className="me-map__blocks">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="me-map__marker">
            <span>
              <HeartPulse size={22} />
            </span>

            <div>
              <strong>Clínica Essencial</strong>
              <small>São Paulo • SP</small>
            </div>
          </div>
        </div>
      </div>

      <div className="me-contact__info">
        <article className="me-contact-card">
          <span className="me-contact-card__icon">
            <svg
              viewBox="0 0 24 24"
              width="21"
              height="21"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </span>

          <div>
            <span>Endereço</span>
            <strong>
              Av. Exemplo, 1000 — São Paulo, SP
            </strong>
            <p>Endereço utilizado apenas para demonstração.</p>
          </div>
        </article>

        <article className="me-contact-card">
          <span className="me-contact-card__icon">
            <svg
              viewBox="0 0 24 24"
              width="21"
              height="21"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
            </svg>
          </span>

          <div>
            <span>Telefone</span>
            <strong>(11) 0000-0000</strong>
            <p>Segunda a sexta, das 8h às 19h.</p>
          </div>
        </article>

        <article className="me-contact-card">
          <span className="me-contact-card__icon">
            <Clock3 size={21} />
          </span>

          <div>
            <span>Horários</span>
            <strong>Segunda a sábado</strong>
            <p>
              Seg–Sex: 08h às 19h
              <br />
              Sábado: 08h às 13h
            </p>
          </div>
        </article>

        <article className="me-contact-card">
          <span className="me-contact-card__icon">
            <MessageCircle size={21} />
          </span>

          <div>
            <span>WhatsApp</span>
            <strong>(11) 99999-9999</strong>
            <p>
              Canal demonstrativo para atendimento rápido.
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<section className="me-final-cta">
  <div className="me-container">
    <div className="me-final-cta__box">
      <div className="me-final-cta__decoration me-final-cta__decoration--one" />
      <div className="me-final-cta__decoration me-final-cta__decoration--two" />

      <div className="me-final-cta__content">
        <span className="me-final-cta__icon">
          <HeartPulse size={27} />
        </span>

        <span className="me-final-cta__eyebrow">
          Clínica Essencial
        </span>

        <h2>
          Seu cuidado começa
          <span> com uma conversa.</span>
        </h2>

        <p>
          Dê o primeiro passo para cuidar da sua saúde com
          acompanhamento próximo e atendimento humanizado.
        </p>

        <div className="me-final-cta__actions">
          <a
            href="#agendamento"
            className="me-button me-final-cta__primary"
          >
            <CalendarDays size={18} />
            Agendar consulta
          </a>

          <a
            href="#contato"
            className="me-button me-final-cta__secondary"
          >
            Falar com a clínica
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      <footer className="me-footer">
  <div className="me-container">
    <div className="me-footer__top">
      <div className="me-footer__brand">
        <a
          href="#inicio"
          className="me-brand"
          aria-label="Clínica Essencial"
        >
          <span className="me-brand__icon">
            <HeartPulse size={21} />
          </span>

          <span>
            Clínica
            <strong> Essencial</strong>
          </span>
        </a>

        <p>
          Medicina próxima, humana e responsável para cuidar
          de você em cada fase da vida.
        </p>
      </div>

      <div className="me-footer__column">
        <strong>Navegação</strong>

        <a href="#inicio">Início</a>
        <a href="#especialidades">Especialidades</a>
        <a href="#sobre">Sobre</a>
        <a href="#depoimentos">Depoimentos</a>
      </div>

      <div className="me-footer__column">
        <strong>Atendimento</strong>

        <a href="#agendamento">Agendar consulta</a>
        <a href="#contato">Contato</a>
        <span>Seg–Sex • 08h às 19h</span>
        <span>Sáb • 08h às 13h</span>
      </div>

      <div className="me-footer__column">
        <strong>Contato</strong>

        <span>(11) 0000-0000</span>
        <span>(11) 99999-9999</span>
        <span>contato@clinicaexemplo.com</span>
        <span>São Paulo • SP</span>
      </div>
    </div>

    <div className="me-footer__bottom">
      <p>
        © 2026 Clínica Essencial. Modelo demonstrativo.
      </p>

      <p>
        Dados, profissionais, avaliações e contatos fictícios.
      </p>
    </div>
  </div>
</footer>

      <Link
        to="/medico"
        className="me-demo-back"
        aria-label="Voltar para os modelos médicos"
      >
        ← Voltar aos modelos
      </Link>
    </div>
  )
}