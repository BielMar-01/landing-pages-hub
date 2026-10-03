import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-06.css';
export default function AdvogadoModel06Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-advogado-6">
      <div className="wrap">
        <Link to="/advogado" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Advocacia</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Território Legal<small>Advocacia </small>
          </a>
          <nav id="lp-advogado-6-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Território Legal">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-advogado-6-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Advocacia · Minimalista</span>
                <h1>Segurança começa antes da assinatura.</h1>
                <p className="lead">Direito imobiliário com análise documental e orientação em cada etapa da negociação.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar contato <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/advogado/modelo-06/hero.webp" alt="Advocacia: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Advocacia / 06</span>
                  <strong>RV</strong>
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
            <span className="eyebrow">Advocacia / 06</span>
            <h2>Antes de assinar, leia o contexto</h2>
            <div className="context-index">
              <article>
                <span>01</span>
                <h3>Imóvel</h3>
                <p>Imóvel faz parte da primeira conversa. Análise das informações relevantes para uma negociação imobiliária.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Documentação</h3>
                <p>Conheça as possibilidades de documentação no seu contexto. Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Contrato</h3>
                <p>Contrato merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
              </article>
            </div>
            <p>Análise das informações relevantes para uma negociação imobiliária.</p>
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
                <h3>Contratos imobiliários</h3>
                <p>Escuta do contexto e análise inicial das informações relevantes.</p>
                <a href="#contato">Conversar sobre contratos imobiliários ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Análise documental</h3>
                <p>Avaliação de documentos e das possibilidades jurídicas da situação.</p>
                <a href="#contato">Conversar sobre análise documental ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Locações</h3>
                <p>Comunicação clara sobre etapas, condições e alternativas. Sem garantia de resultado.</p>
                <a href="#contato">Conversar sobre locações ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Antes de assinar, entenda</h2>
              <div className="feature-grid">
                <div>
                  <h3>Contratos imobiliários</h3>
                  <p>Direito imobiliário com análise documental e orientação em cada etapa da negociação. Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Ricardo Vale ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/advogado/modelo-06/space.webp" alt="Ambiente de atendimento de Território Legal — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Advocacia / 06</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Ricardo Vale</h2>
              <p>Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</p>
              <p>Direito imobiliário com análise documental e orientação em cada etapa da negociação. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">OAB/SP 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar contato ↗</a>
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
              <p>Direito imobiliário com análise documental e orientação em cada etapa da negociação.</p>
              <address>Rua Exemplo, 150 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Contratos imobiliários", "Análise documental", "Locações"]} action="Solicitar contato"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Território Legal</strong>
            <p>OAB/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/advogado">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
