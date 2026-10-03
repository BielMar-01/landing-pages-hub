import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-04.css';
export default function EsteticaBelezaModel04Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [topic, setTopic] = useState(0);
    return <div className="lp-estetica-beleza-4">
      <div className="wrap">
        <Link to="/estetica-beleza" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Estética & Beleza</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Derma Studio<small>Estética & Beleza </small>
          </a>
          <nav id="lp-estetica-beleza-4-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Derma Studio">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-estetica-beleza-4-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Estética & Beleza · Clássico</span>
                <h1>Sua pele tem uma história.</h1>
                <p className="lead">Cuidados faciais com avaliação individual e atenção aos hábitos do dia a dia.</p>
                <div className="actions">
                  <a className="button" href="#contato">Reservar uma avaliação <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/estetica-beleza/modelo-04/hero.webp" alt="Estética & Beleza: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Estética & Beleza / 04</span>
                  <strong>ED</strong>
                  <small>Um momento de atenção para você.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="facts">
                <div><strong>Escuta</strong>Expectativas e escolhas pessoais</div>
                <div><strong>Individual</strong>Respeito às suas características</div>
                <div><strong>Informação</strong>Possibilidades discutidas com clareza</div>
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
                <strong>Escuta e avaliação</strong>
                <p>Compartilhe suas necessidades e tire as primeiras dúvidas sobre o atendimento.</p>
              </article>
              <article className="step">
                <span className="eyebrow">02</span>
                <strong>Orientação individual</strong>
                <p>As informações são consideradas para conversar sobre as opções e definir os próximos passos.</p>
              </article>
              <article className="step">
                <span className="eyebrow">03</span>
                <strong>Cuidados e acompanhamento</strong>
                <p>O planejamento pode ser revisado conforme seu contexto e as orientações profissionais.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <span className="eyebrow">Estética & Beleza / 04</span>
            <h2>Conheça o cuidado com a sua pele</h2>
            <p>Hábitos e características individuais são considerados antes das orientações.</p>
            <div className="topic-tabs" aria-label="Explorar etapas do atendimento">{["Avaliação", "Rotina", "Acompanhamento"].map((label, index) => <button key={label} type="button" aria-pressed={topic === index} aria-controls="lp-estetica-beleza-4-topic" onClick={() => setTopic(index)}>{label}</button>)}</div>
            <div className="topic-panel" id="lp-estetica-beleza-4-topic" role="status">
              <h3>{["Avaliação", "Rotina", "Acompanhamento"][topic]}</h3>
              <p>{["Avaliação faz parte da primeira conversa. Hábitos e características individuais são considerados antes das orientações.", "Conheça as possibilidades de rotina no seu contexto. A avaliação respeita suas características, expectativas e necessidades. Possibilidades e cuidados são conversados antes de qualquer escolha.", "Acompanhamento merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo."][topic]}</p>
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
                <h3>Avaliação da pele</h3>
                <p>Avaliação individual para compreender suas expectativas e necessidades. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre avaliação da pele ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Cuidados faciais</h3>
                <p>Informações sobre possibilidades e cuidados antes de qualquer decisão. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre cuidados faciais ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Rotina de cuidados</h3>
                <p>Atenção aos detalhes, com orientações adaptadas à sua rotina. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre rotina de cuidados ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Sua rotina também faz parte do cuidado</h2>
              <div className="feature-grid">
                <div>
                  <h3>Avaliação da pele</h3>
                  <p>Cuidados faciais com avaliação individual e atenção aos hábitos do dia a dia. A avaliação respeita suas características, expectativas e necessidades. Possibilidades e cuidados são conversados antes de qualquer escolha.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Equipe Derma ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/estetica-beleza/modelo-04/space.webp" alt="Ambiente de atendimento de Derma Studio — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Estética & Beleza / 04</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Equipe Derma</h2>
              <p>A avaliação respeita suas características, expectativas e necessidades. Possibilidades e cuidados são conversados antes de qualquer escolha.</p>
              <p>Cuidados faciais com avaliação individual e atenção aos hábitos do dia a dia. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">Dados profissionais demonstrativos · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Reservar uma avaliação ↗</a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap faq">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Antes de dar o próximo passo.</h2>
            <details>
              <summary>É possível garantir um resultado estético?</summary>
              <p>Não. Indicações e resultados dependem de avaliação profissional e variam individualmente. Os serviços apresentados são demonstrativos.</p>
            </details>
            <details>
              <summary>Como solicitar avaliação?</summary>
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
              <p>Cuidados faciais com avaliação individual e atenção aos hábitos do dia a dia.</p>
              <address>Rua Exemplo, 130 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Avaliação da pele", "Cuidados faciais", "Rotina de cuidados"]} action="Reservar uma avaliação"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Derma Studio</strong>
            <p>Dados profissionais demonstrativos · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/estetica-beleza">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
