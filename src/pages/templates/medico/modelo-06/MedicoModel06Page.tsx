import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-06.css';
export default function MedicoModel06Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-medico-6">
      <div className="wrap">
        <Link to="/medico" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Medicina</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Consultório Minimal<small>Medicina </small>
          </a>
          <nav id="lp-medico-6-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Consultório Minimal">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-medico-6-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Medicina · Minimalista</span>
                <h1>Saúde. Com espaço para conversar.</h1>
                <p className="lead">Uma agenda enxuta, um ambiente tranquilo e medicina com atenção ao essencial.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar consulta <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/medico/modelo-06/hero.webp" alt="Medicina: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Medicina / 06</span>
                  <strong>LC</strong>
                  <small>Cuidado com atenção aos detalhes.</small>
                </div>
              </LocalPhoto>
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
        <section className="section">
          <div className="wrap">
            <span className="eyebrow">Medicina / 06</span>
            <h2>Menos ruído. Mais presença.</h2>
            <div className="context-index">
              <article>
                <span>01</span>
                <h3>Ouvir</h3>
                <p>Ouvir faz parte da primeira conversa. Uma conversa de cada vez, em um consultório dedicado ao essencial.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Compreender</h3>
                <p>Conheça as possibilidades de compreender no seu contexto. Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Orientar</h3>
                <p>Orientar merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
              </article>
            </div>
            <p>Uma conversa de cada vez, em um consultório dedicado ao essencial.</p>
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
                <h3>Primeira consulta</h3>
                <p>Avaliação clínica com espaço para ouvir seu histórico e suas dúvidas.</p>
                <a href="#contato">Conversar sobre primeira consulta ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Retorno clínico</h3>
                <p>Orientação preventiva considerando as necessidades individuais.</p>
                <a href="#contato">Conversar sobre retorno clínico ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Acompanhamento preventivo</h3>
                <p>Continuidade do cuidado com revisões e orientações compartilhadas.</p>
                <a href="#contato">Conversar sobre acompanhamento preventivo ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Uma agenda com espaço para você</h2>
              <div className="feature-grid">
                <div>
                  <h3>Primeira consulta</h3>
                  <p>Uma agenda enxuta, um ambiente tranquilo e medicina com atenção ao essencial. Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Luiza Campos ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/medico/modelo-06/space.webp" alt="Ambiente de atendimento de Consultório Minimal — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Medicina / 06</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Luiza Campos</h2>
              <p>Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.</p>
              <p>Uma agenda enxuta, um ambiente tranquilo e medicina com atenção ao essencial. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
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
              <p>Uma agenda enxuta, um ambiente tranquilo e medicina com atenção ao essencial.</p>
              <address>Rua Exemplo, 150 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Primeira consulta", "Retorno clínico", "Acompanhamento preventivo"]} action="Solicitar consulta"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Consultório Minimal</strong>
            <p>CRM/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/medico">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
