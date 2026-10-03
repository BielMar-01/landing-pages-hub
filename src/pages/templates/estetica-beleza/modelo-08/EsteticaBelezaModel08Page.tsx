import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-08.css';
export default function EsteticaBelezaModel08Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-estetica-beleza-8">
      <div className="wrap">
        <Link to="/estetica-beleza" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Estética & Beleza</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Valentina Costa<small>Estética & Beleza </small>
          </a>
          <nav id="lp-estetica-beleza-8-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Valentina Costa">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-estetica-beleza-8-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Estética & Beleza · Criativo</span>
                <h1>Escuta antes de qualquer cuidado.</h1>
                <p className="lead">Uma marca pessoal de estética com olhar atento à individualidade e escolhas bem informadas.</p>
                <div className="actions">
                  <a className="button" href="#contato">Reservar uma avaliação <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/estetica-beleza/modelo-08/hero.webp" alt="Estética & Beleza: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Estética & Beleza / 08</span>
                  <strong>VC</strong>
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
        <section className="section">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Estética & Beleza / 08</span>
                <h2>Cuidado que começa pela escuta</h2>
              </div>
              <p>Escolhas informadas e acompanhamento atento à sua individualidade.</p>
            </div>
            <table className="context-table">
              <caption className="note">Pontos de atenção na experiência de estética & beleza</caption>
              <thead>
                <tr>
                  <th scope="col">O que observar</th>
                  <th scope="col">Como conversar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">História</th>
                  <td>História faz parte da primeira conversa. Escolhas informadas e acompanhamento atento à sua individualidade.</td>
                </tr>
                <tr>
                  <th scope="row">Avaliação</th>
                  <td>Conheça as possibilidades de avaliação no seu contexto. A avaliação respeita suas características, expectativas e necessidades. Possibilidades e cuidados são conversados antes de qualquer escolha.</td>
                </tr>
                <tr>
                  <th scope="row">Continuidade</th>
                  <td>Continuidade merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Cada história pede atenção</h2>
              <div className="feature-grid">
                <div>
                  <h3>Avaliação estética</h3>
                  <p>Uma marca pessoal de estética com olhar atento à individualidade e escolhas bem informadas. A avaliação respeita suas características, expectativas e necessidades. Possibilidades e cuidados são conversados antes de qualquer escolha.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Valentina Costa ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/estetica-beleza/modelo-08/space.webp" alt="Ambiente de atendimento de Valentina Costa — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Estética & Beleza / 08</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Valentina Costa</h2>
              <p>A avaliação respeita suas características, expectativas e necessidades. Possibilidades e cuidados são conversados antes de qualquer escolha.</p>
              <p>Uma marca pessoal de estética com olhar atento à individualidade e escolhas bem informadas. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">Dados profissionais demonstrativos · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Reservar uma avaliação ↗</a>
            </div>
          </div>
        </section>
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Áreas de atuação</span>
                <h2>Uma experiência construída para você.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Avaliação estética</h3>
                <p>Avaliação individual para compreender suas expectativas e necessidades. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre avaliação estética ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Cuidados da pele</h3>
                <p>Informações sobre possibilidades e cuidados antes de qualquer decisão. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre cuidados da pele ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Acompanhamento pessoal</h3>
                <p>Atenção aos detalhes, com orientações adaptadas à sua rotina. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre acompanhamento pessoal ↗</a>
              </article>
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
              <p>Uma marca pessoal de estética com olhar atento à individualidade e escolhas bem informadas.</p>
              <address>Rua Exemplo, 170 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Avaliação estética", "Cuidados da pele", "Acompanhamento pessoal"]} action="Reservar uma avaliação"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Valentina Costa</strong>
            <p>Dados profissionais demonstrativos · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/estetica-beleza">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
