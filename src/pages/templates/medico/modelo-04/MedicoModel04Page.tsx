import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-04.css';
export default function MedicoModel04Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [topic, setTopic] = useState(0);
    return <div className="lp-medico-4">
      <div className="wrap">
        <Link to="/medico" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Medicina</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">MedTech<small>Medicina </small>
          </a>
          <nav id="lp-medico-4-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de MedTech">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-medico-4-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Medicina · Digital</span>
                <h1>Conecte sua rotina a um novo cuidado.</h1>
                <p className="lead">A organização digital facilita o atendimento. A relação humana continua no centro.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar consulta <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <div className="status-panel">
                <span className="eyebrow">Seu próximo encontro</span>
                <h3>Organização que aproxima.</h3>
                <span>01 / Consulta presencial</span>
                <span>02 / Teleconsulta</span>
                <span>03 / Organização de exames</span>
                <small>Interface ilustrativa. Dados demonstrativos.</small>
              </div>
            </div>
            <div className="facts">
              <div>
                <strong>Individual</strong>Planejamento atento ao contexto</div>
              <div>
                <strong>Próximo</strong>Espaço para suas perguntas</div>
              <div>
                <strong>Transparente</strong>Etapas explicadas com clareza</div>
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
                <strong>Escuta e histórico</strong>
                <p>Compartilhe suas necessidades e tire as primeiras dúvidas sobre o atendimento.</p>
              </article>
              <article className="step">
                <span className="eyebrow">02</span>
                <strong>Avaliação individual</strong>
                <p>As informações são consideradas para conversar sobre as opções e definir os próximos passos.</p>
              </article>
              <article className="step">
                <span className="eyebrow">03</span>
                <strong>Orientações e acompanhamento</strong>
                <p>O planejamento pode ser revisado conforme seu contexto e as orientações profissionais.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <span className="eyebrow">Medicina / 04</span>
            <h2>Escolha como conhecer o atendimento</h2>
            <p>A modalidade é discutida conforme a necessidade clínica e os limites de cada atendimento.</p>
            <div className="topic-tabs" aria-label="Explorar etapas do atendimento">{["Presencial", "Teleconsulta", "Exames"].map((label, index) => <button key={label} type="button" aria-pressed={topic === index} aria-controls="lp-medico-4-topic" onClick={() => setTopic(index)}>{label}</button>)}</div>
            <div className="topic-panel" id="lp-medico-4-topic" role="status">
              <h3>{["Presencial", "Teleconsulta", "Exames"][topic]}</h3>
              <p>{["Presencial faz parte da primeira conversa. A modalidade é discutida conforme a necessidade clínica e os limites de cada atendimento.", "Conheça as possibilidades de teleconsulta no seu contexto. Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.", "Exames merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo."][topic]}</p>
              <a href="#contato" className="text-link">Tirar uma dúvida ↗</a>
            </div>
          </div>
        </section>
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Áreas de atuação</span>
                <h2>Conexões que facilitam a sua rotina.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Consulta presencial</h3>
                <p>Avaliação clínica com espaço para ouvir seu histórico e suas dúvidas. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre consulta presencial ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Teleconsulta</h3>
                <p>Orientação preventiva considerando as necessidades individuais. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre teleconsulta ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Organização de exames</h3>
                <p>Continuidade do cuidado com revisões e orientações compartilhadas. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre organização de exames ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Uma jornada digital, uma relação humana</h2>
              <div className="feature-grid">
                <div>
                  <h3>Consulta presencial</h3>
                  <p>A organização digital facilita o atendimento. A relação humana continua no centro. Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com André Valença ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/medico/modelo-04/space.webp" alt="Ambiente de atendimento de MedTech — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Medicina / 04</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>André Valença</h2>
              <p>Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.</p>
              <p>A organização digital facilita o atendimento. A relação humana continua no centro. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRM/SP 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar consulta ↗</a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap faq">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Antes de dar o próximo passo.</h2>
            <details>
              <summary>O atendimento substitui uma avaliação médica?</summary>
              <p>Não. Este site apresenta uma clínica fictícia. Condutas, exames e tratamentos dependem de avaliação médica individual.</p>
            </details>
            <details>
              <summary>Como solicitar consulta?</summary>
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
              <p>A organização digital facilita o atendimento. A relação humana continua no centro.</p>
              <address>Rua Exemplo, 130 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Consulta presencial", "Teleconsulta", "Organização de exames"]} action="Solicitar consulta"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>MedTech</strong>
            <p>CRM/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/medico">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
