import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-06.css';
export default function EsteticaBelezaModel06Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-estetica-beleza-6">
      <div className="wrap">
        <Link to="/estetica-beleza" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Estética & Beleza</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Aura Beauty<small>Estética & Beleza </small>
          </a>
          <nav id="lp-estetica-beleza-6-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Aura Beauty">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-estetica-beleza-6-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Estética & Beleza · Impacto</span>
                <h1>Beleza que acompanha quem você é.</h1>
                <p className="lead">Um estúdio de beleza para experimentar, se expressar e cuidar dos detalhes.</p>
                <div className="actions">
                  <a className="button" href="#contato">Reservar uma avaliação <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/estetica-beleza/modelo-06/hero.webp" alt="Estética & Beleza: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Estética & Beleza / 06</span>
                  <strong>EA</strong>
                  <small>Um momento de atenção para você.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="poster-line">Design de sobrancelhas / Maquiagem / Cuidados de beleza</div>
            <div className="facts">
                <div><strong>Escuta</strong>Expectativas e escolhas pessoais</div>
                <div><strong>Individual</strong>Respeito às suas características</div>
                <div><strong>Informação</strong>Possibilidades discutidas com clareza</div>
              </div>
            </div>
          </section>
        <section className="section">
          <div className="wrap">
            <span className="eyebrow">Estética & Beleza / 06</span>
            <h2>Seu jeito de expressar beleza</h2>
            <div className="context-index">
              <article>
                <span>01</span>
                <h3>Olhar</h3>
                <p>Olhar faz parte da primeira conversa. Preferências pessoais orientam o encontro com o estúdio.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Estilo</h3>
                <p>Conheça as possibilidades de estilo no seu contexto. A avaliação respeita suas características, expectativas e necessidades. Possibilidades e cuidados são conversados antes de qualquer escolha.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Ocasião</h3>
                <p>Ocasião merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
              </article>
            </div>
            <p>Preferências pessoais orientam o encontro com o estúdio.</p>
          </div>
        </section>
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Áreas de atuação</span>
                <h2>O necessário, com atenção.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Design de sobrancelhas</h3>
                <p>Avaliação individual para compreender suas expectativas e necessidades.</p>
                <a href="#contato">Conversar sobre design de sobrancelhas ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Maquiagem</h3>
                <p>Informações sobre possibilidades e cuidados antes de qualquer decisão.</p>
                <a href="#contato">Conversar sobre maquiagem ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Cuidados de beleza</h3>
                <p>Atenção aos detalhes, com orientações adaptadas à sua rotina.</p>
                <a href="#contato">Conversar sobre cuidados de beleza ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Beleza como expressão pessoal</h2>
              <div className="feature-grid">
                <div>
                  <h3>Design de sobrancelhas</h3>
                  <p>Um estúdio de beleza para experimentar, se expressar e cuidar dos detalhes. A avaliação respeita suas características, expectativas e necessidades. Possibilidades e cuidados são conversados antes de qualquer escolha.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Equipe Aura ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/estetica-beleza/modelo-06/space.webp" alt="Ambiente de atendimento de Aura Beauty — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Estética & Beleza / 06</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Equipe Aura</h2>
              <p>A avaliação respeita suas características, expectativas e necessidades. Possibilidades e cuidados são conversados antes de qualquer escolha.</p>
              <p>Um estúdio de beleza para experimentar, se expressar e cuidar dos detalhes. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
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
              <p>Um estúdio de beleza para experimentar, se expressar e cuidar dos detalhes.</p>
              <address>Rua Exemplo, 150 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Design de sobrancelhas", "Maquiagem", "Cuidados de beleza"]} action="Reservar uma avaliação"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Aura Beauty</strong>
            <p>Dados profissionais demonstrativos · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/estetica-beleza">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
