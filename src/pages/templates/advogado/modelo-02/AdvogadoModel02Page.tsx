import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-02.css';
export default function AdvogadoModel02Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-advogado-2">
      <div className="wrap">
        <Link to="/advogado" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Advocacia</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Almeida & Torres<small>Advocacia </small>
          </a>
          <nav id="lp-advogado-2-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Almeida & Torres">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-advogado-2-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Advocacia · Premium</span>
                <h1>Perspectiva jurídica. Relações de confiança.</h1>
                <p className="lead">Um escritório que conecta diferentes áreas do direito para compreender cada contexto.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar contato <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/advogado/modelo-02/hero.webp" alt="Advocacia: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Advocacia / 02</span>
                  <strong>AT</strong>
                  <small>Análise cuidadosa. Orientação clara.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="facts">
                <div><strong>Análise</strong>Cada situação pede atenção</div>
                <div><strong>Comunicação</strong>Etapas e alternativas explicadas</div>
                <div><strong>Responsabilidade</strong>Atuação sem promessa de resultado</div>
              </div>
            </div>
          </section>
        <section className="section">
          <div className="wrap">
            <div className="story">
              <div>
                <span className="eyebrow">Advocacia / 02</span>
                <h2>Áreas diferentes. Análise coordenada.</h2>
                <p>Um escritório pode reunir conhecimentos para compreender questões interligadas.</p>
                <a className="button" href="#contato">Conhecer a experiência ↗</a>
              </div>
              <div className="context-index">
                <article>
                  <span>01</span>
                  <h3>Pessoas</h3>
                  <p>Pessoas faz parte da primeira conversa. Um escritório pode reunir conhecimentos para compreender questões interligadas.</p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Negócios</h3>
                  <p>Conheça as possibilidades de negócios no seu contexto. Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Patrimônio</h3>
                  <p>Patrimônio merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/advogado/modelo-02/space.webp" alt="Ambiente de atendimento de Almeida & Torres — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Advocacia / 02</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Almeida & Torres</h2>
              <p>Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</p>
              <p>Um escritório que conecta diferentes áreas do direito para compreender cada contexto. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <div className="credentials">
                <strong>Uma prática com responsabilidade</strong>
                <ul>
                  <li>Consultivo como área de atuação.</li>
                  <li>Atenção à comunicação e às decisões individuais.</li>
                  <li>Orientação clara em cada etapa.</li>
                </ul>
                <small>OAB/SP 000000 · Perfil e trajetória demonstrativos.</small>
              </div>
              <a href="#contato" className="text-link">Solicitar contato ↗</a>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Áreas conectadas, análise responsável</h2>
              <div className="feature-grid">
                <div>
                  <h3>Consultivo</h3>
                  <p>Um escritório que conecta diferentes áreas do direito para compreender cada contexto. Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Almeida &amp; Torres ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Áreas de atuação</span>
                <h2>O cuidado também está nos detalhes.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Consultivo</h3>
                <p>Escuta do contexto e análise inicial das informações relevantes.</p>
                <a href="#contato">Conversar sobre consultivo ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Contencioso cível</h3>
                <p>Avaliação de documentos e das possibilidades jurídicas da situação.</p>
                <a href="#contato">Conversar sobre contencioso cível ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Contratos empresariais</h3>
                <p>Comunicação clara sobre etapas, condições e alternativas. Sem garantia de resultado.</p>
                <a href="#contato">Conversar sobre contratos empresariais ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap faq">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Antes de dar o próximo passo.</h2>
            <details>
              <summary>É possível garantir o resultado de um processo?</summary>
              <p>Não. Toda situação exige análise individual e nenhum resultado é garantido. Este site é demonstrativo e não constitui orientação jurídica.</p>
            </details>
            <details>
              <summary>Como solicitar conversa inicial?</summary>
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
              <p>Um escritório que conecta diferentes áreas do direito para compreender cada contexto.</p>
              <address>Rua Exemplo, 110 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Consultivo", "Contencioso cível", "Contratos empresariais"]} action="Solicitar contato"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Almeida & Torres</strong>
            <p>OAB/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/advogado">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
