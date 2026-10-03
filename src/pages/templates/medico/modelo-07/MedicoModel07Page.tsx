import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-07.css';
export default function MedicoModel07Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-medico-7">
      <div className="wrap">
        <Link to="/medico" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Medicina</Link>
      </div>
      <div className="utility">Medicina · Atendimento com orientação clara · Dados demonstrativos</div>
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Clínica 360<small>Medicina </small>
          </a>
          <nav id="lp-medico-7-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Clínica 360">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-medico-7-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Medicina · Institucional</span>
                <h1>Muitas especialidades. Uma equipe ao seu lado.</h1>
                <p className="lead">Um ponto de encontro entre diferentes profissionais para organizar seu cuidado.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar consulta <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/medico/modelo-07/hero.webp" alt="Medicina: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Medicina / 07</span>
                  <strong>EC</strong>
                  <small>Cuidado com atenção aos detalhes.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="facts">
              <div>
                <strong>Individual</strong>Planejamento atento ao contexto</div>
              <div>
                <strong>Equipe integrada</strong>Espaço para suas perguntas</div>
              <div>
                <strong>Transparente</strong>Etapas explicadas com clareza</div>
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
                <h3>Clínica médica</h3>
                <p>Avaliação clínica com espaço para ouvir seu histórico e suas dúvidas.</p>
                <a href="#contato">Conversar sobre clínica médica ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Pediatria</h3>
                <p>Orientação preventiva considerando as necessidades individuais.</p>
                <a href="#contato">Conversar sobre pediatria ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Ginecologia</h3>
                <p>Continuidade do cuidado com revisões e orientações compartilhadas.</p>
                <a href="#contato">Conversar sobre ginecologia ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Medicina / 07</span>
              <h2>Cuidado integrado, do contato ao retorno</h2>
              <p>Uma equipe organizada para facilitar o encontro com diferentes profissionais.</p>
              <div className="context-strip">
                <span>Recepção</span>
                <span>Especialidades</span>
                <span>Coordenação</span>
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
                <p>Clínica médica</p>
                <small>CRM/SP 000000 · perfil fictício</small>
              </article>
              <article className="team-person">
                <strong>Lucas Prado</strong>
                <p>Pediatria</p>
                <small>CRM/SP 000000 · perfil fictício</small>
              </article>
              <article className="team-person">
                <strong>Mariana Costa</strong>
                <p>Ginecologia</p>
                <small>CRM/SP 000000 · perfil fictício</small>
              </article>
            </div>
            <div className="feature-grid" style={{ marginTop: 24 }}>
              <div className="feature">
                <h3>Unidade Jardim</h3>
                <p>Rua Exemplo, 100 · São Paulo<br />Segunda a sexta, 8h às 18h.<br />Endereço demonstrativo.</p>
              </div>
              <div className="feature">
                <h3>Atendimento organizado</h3>
                <p>Converse com a equipe sobre modalidade, documentação e horários. Convênios e condições dependem de confirmação; nenhum convênio real é anunciado.</p>
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
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/medico/modelo-07/space.webp" alt="Ambiente de atendimento de Clínica 360 — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Medicina / 07</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Equipe Clínica 360</h2>
              <p>Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.</p>
              <p>Um ponto de encontro entre diferentes profissionais para organizar seu cuidado. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
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
              <p>Um ponto de encontro entre diferentes profissionais para organizar seu cuidado.</p>
              <address>Rua Exemplo, 160 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Clínica médica", "Pediatria", "Ginecologia"]} action="Solicitar consulta"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Clínica 360</strong>
            <p>CRM/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/medico">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
