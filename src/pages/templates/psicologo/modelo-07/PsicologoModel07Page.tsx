import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-07.css';
export default function PsicologoModel07Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-psicologo-7">
      <div className="wrap">
        <Link to="/psicologo" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Psicologia</Link>
      </div>
      <div className="utility">Psicologia · Atendimento com orientação clara · Dados demonstrativos</div>
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Plural Psicologia<small>Psicologia </small>
          </a>
          <nav id="lp-psicologo-7-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Plural Psicologia">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-psicologo-7-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Psicologia · Institucional</span>
                <h1>Diferentes histórias encontram lugar aqui.</h1>
                <p className="lead">Uma equipe de psicologia reunida pelo respeito à diversidade e ao cuidado responsável.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar primeira conversa <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/psicologo/modelo-07/hero.webp" alt="Psicologia: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Psicologia / 07</span>
                  <strong>EP</strong>
                  <small>Tempo, escuta e respeito.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="facts">
                <div><strong>Escuta</strong>Tempo para sua história</div>
                <div><strong>Respeito</strong>Um processo construído em conjunto</div>
                <div><strong>Privacidade</strong>Atendimento com responsabilidade</div>
              </div>
            </div>
          </section>
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Áreas de atuação</span>
                <h2>Diferentes necessidades encontram lugar.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Psicologia de adultos</h3>
                <p>Um encontro de escuta para compreender o que você deseja trabalhar.</p>
                <a href="#contato">Conversar sobre psicologia de adultos ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Atendimento a adolescentes</h3>
                <p>Espaço para falar sobre experiências, relações e questões do cotidiano.</p>
                <a href="#contato">Conversar sobre atendimento a adolescentes ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Orientação familiar</h3>
                <p>Um processo que respeita sua singularidade, com condições combinadas em conjunto.</p>
                <a href="#contato">Conversar sobre orientação familiar ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Psicologia / 07</span>
              <h2>Encontre o atendimento para seu momento</h2>
              <p>A equipe orienta o primeiro contato respeitando faixa etária e demanda.</p>
              <div className="context-strip">
                <span>Adultos</span>
                <span>Adolescentes</span>
                <span>Famílias</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <span className="eyebrow">Um olhar mais próximo</span>
            <h2>Diferentes olhares. Um cuidado compartilhado.</h2>
            <div className="team-list">
              <article className="team-person">
                <strong>Ana Ribeiro</strong>
                <p>Psicologia de adultos</p>
                <small>CRP 00/000000 · perfil fictício</small>
              </article>
              <article className="team-person">
                <strong>Lucas Prado</strong>
                <p>Atendimento a adolescentes</p>
                <small>CRP 00/000000 · perfil fictício</small>
              </article>
              <article className="team-person">
                <strong>Mariana Costa</strong>
                <p>Orientação familiar</p>
                <small>CRP 00/000000 · perfil fictício</small>
              </article>
            </div>
            <div className="feature-grid" style={{ marginTop: 24 }}>
              <div className="feature">
                <h3>Unidade Jardim</h3>
                <p>Rua Exemplo, 100 · São Paulo<br />Segunda a sexta, 8h às 18h.<br />Endereço demonstrativo.</p>
              </div>
              <div className="feature">
                <h3>Atendimento organizado</h3>
                <p>Converse com a equipe sobre modalidade, documentação e horários. Condições explicadas no primeiro contato.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="processo">
          <div className="wrap">
            <span className="eyebrow">O próximo passo</span>
            <h2>Um processo que você entende.</h2>
            <div className="steps">
              <article className="step">
                <span className="eyebrow">01</span>
                <strong>Primeiro contato</strong>
                <p>Compartilhe suas necessidades e tire as primeiras dúvidas sobre o atendimento.</p>
              </article>
              <article className="step">
                <span className="eyebrow">02</span>
                <strong>Encontro e acolhimento</strong>
                <p>As informações são consideradas para conversar sobre as opções e definir os próximos passos.</p>
              </article>
              <article className="step">
                <span className="eyebrow">03</span>
                <strong>Construção do processo</strong>
                <p>O planejamento pode ser revisado conforme seu contexto e as orientações profissionais.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/psicologo/modelo-07/space.webp" alt="Ambiente de atendimento de Plural Psicologia — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Psicologia / 07</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Equipe Plural</h2>
              <p>Você não precisa chegar com todas as respostas. O processo começa com escuta e respeito ao seu tempo.</p>
              <p>Uma equipe de psicologia reunida pelo respeito à diversidade e ao cuidado responsável. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRP 00/000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar primeira conversa ↗</a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap faq">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Antes de dar o próximo passo.</h2>
            <details>
              <summary>Como é a primeira sessão?</summary>
              <p>É um encontro para conhecer sua demanda, esclarecer o processo e conversar sobre frequência e condições. O atendimento apresentado é fictício.</p>
            </details>
            <details>
              <summary>Como solicitar primeira conversa?</summary>
              <p>Escolha seu interesse no formulário desta página. Neste modelo, o envio é apenas uma simulação e não gera atendimento real.</p>
            </details>
            <details>
              <summary>Como conhecer as condições e horários?</summary>
              <p>Em um atendimento real, condições, valores e disponibilidade seriam esclarecidos no contato inicial, antes de qualquer confirmação. Não há cobrança ou reserva neste site.</p>
            </details>
          </div>
        </section>
        <section className="section contact" id="contato">
          <div className="wrap contact-grid">
            <div>
              <span className="eyebrow">Vamos conversar</span>
              <h2>O primeiro passo pode ser uma conversa.</h2>
              <p>Uma equipe de psicologia reunida pelo respeito à diversidade e ao cuidado responsável.</p>
              <address>Rua Exemplo, 160 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Psicologia de adultos", "Atendimento a adolescentes", "Orientação familiar"]} action="Solicitar primeira conversa"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Plural Psicologia</strong>
            <p>CRP 00/000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/psicologo">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
