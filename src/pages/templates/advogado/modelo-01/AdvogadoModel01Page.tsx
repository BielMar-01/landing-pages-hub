import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-01.css';
export default function AdvogadoModel01Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-advogado-1">
      <div className="wrap">
        <Link to="/advogado" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Advocacia</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Marina Vasconcelos<small>Advocacia · Marina Vasconcelos</small>
          </a>
          <nav id="lp-advogado-1-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Marina Vasconcelos">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-advogado-1-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Advocacia · Marca pessoal</span>
                <h1>Clareza para decisões que importam.</h1>
                <p className="lead">Advocacia individual com escuta atenta, análise cuidadosa e comunicação direta.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar contato <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
                <div className="hero-credit">Marina Vasconcelos<br />OAB/SP 000000 · profissional fictício</div>
              </div>
              <LocalPhoto src="/images/advogado/modelo-01/hero.webp" alt="Advocacia: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Advocacia / 01</span>
                  <strong>MV</strong>
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
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Áreas de atuação</span>
                <h2>Uma atenção que começa no essencial.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Direito civil</h3>
                <p>Escuta do contexto e análise inicial das informações relevantes.</p>
                <a href="#contato">Conversar sobre direito civil ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Contratos</h3>
                <p>Avaliação de documentos e das possibilidades jurídicas da situação.</p>
                <a href="#contato">Conversar sobre contratos ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Orientação jurídica</h3>
                <p>Comunicação clara sobre etapas, condições e alternativas. Sem garantia de resultado.</p>
                <a href="#contato">Conversar sobre orientação jurídica ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <span className="eyebrow">Advocacia / 01</span>
            <h2>Primeiro, compreender o que importa</h2>
            <p>A orientação parte de uma análise individual e de informações bem organizadas.</p>
            <div className="context-grid">
              <article className="context-point">
                <span className="eyebrow">01</span>
                <strong>Contexto</strong>
                <p>Contexto faz parte da primeira conversa. A orientação parte de uma análise individual e de informações bem organizadas.</p>
              </article>
              <article className="context-point">
                <span className="eyebrow">02</span>
                <strong>Documentos</strong>
                <p>Conheça as possibilidades de documentos no seu contexto. Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</p>
              </article>
              <article className="context-point">
                <span className="eyebrow">03</span>
                <strong>Objetivos</strong>
                <p>Objetivos merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/advogado/modelo-01/space.webp" alt="Ambiente de atendimento de Marina Vasconcelos — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Advocacia / 01</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Conheça o profissional</span>
              <h2>Marina Vasconcelos</h2>
              <p>Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</p>
              <p>Advocacia individual com escuta atenta, análise cuidadosa e comunicação direta. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <div className="credentials">
                <strong>Uma prática com responsabilidade</strong>
                <ul>
                  <li>Direito civil como área de atuação.</li>
                  <li>Atenção à comunicação e às decisões individuais.</li>
                  <li>Orientação clara em cada etapa.</li>
                </ul>
                <small>OAB/SP 000000 · Perfil e trajetória demonstrativos.</small>
              </div>
              <a href="#contato" className="text-link">Solicitar contato ↗</a>
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
                <strong>Escuta e contexto</strong>
                <p>Compartilhe suas necessidades e tire as primeiras dúvidas sobre o atendimento.</p>
              </article>
              <article className="step">
                <span className="eyebrow">02</span>
                <strong>Análise jurídica</strong>
                <p>As informações são consideradas para conversar sobre as opções e definir os próximos passos.</p>
              </article>
              <article className="step">
                <span className="eyebrow">03</span>
                <strong>Orientação sobre os caminhos</strong>
                <p>O planejamento pode ser revisado conforme seu contexto e as orientações profissionais.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>O contexto antes da estratégia</h2>
              <div className="feature-grid">
                <div>
                  <h3>Direito civil</h3>
                  <p>Advocacia individual com escuta atenta, análise cuidadosa e comunicação direta. Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Marina Vasconcelos ↗</a>
                </div>
              </div>
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
              <p>Advocacia individual com escuta atenta, análise cuidadosa e comunicação direta.</p>
              <address>Rua Exemplo, 100 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Direito civil", "Contratos", "Orientação jurídica"]} action="Solicitar contato"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Marina Vasconcelos</strong>
            <p>OAB/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/advogado">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
