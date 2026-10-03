import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-08.css';
export default function AdvogadoModel08Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-advogado-8">
      <div className="wrap">
        <Link to="/advogado" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Advocacia</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Nexo Legal<small>Advocacia </small>
          </a>
          <nav id="lp-advogado-8-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Nexo Legal">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-advogado-8-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Advocacia · Contemporâneo</span>
                <h1>O direito acompanha um mundo em movimento.</h1>
                <p className="lead">Um escritório contemporâneo com processos organizados e linguagem acessível.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar contato <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/advogado/modelo-08/hero.webp" alt="Advocacia: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Advocacia / 08</span>
                  <strong>EN</strong>
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
            <div className="section-title">
              <div>
                <span className="eyebrow">Advocacia / 08</span>
                <h2>Clareza também está no processo</h2>
              </div>
              <p>Informações e etapas acessíveis para uma relação profissional transparente.</p>
            </div>
            <table className="context-table">
              <caption className="note">Pontos de atenção na experiência de advocacia</caption>
              <thead>
                <tr>
                  <th scope="col">O que observar</th>
                  <th scope="col">Como conversar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Primeiro contato</th>
                  <td>Primeiro contato faz parte da primeira conversa. Informações e etapas acessíveis para uma relação profissional transparente.</td>
                </tr>
                <tr>
                  <th scope="row">Organização</th>
                  <td>Conheça as possibilidades de organização no seu contexto. Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</td>
                </tr>
                <tr>
                  <th scope="row">Acompanhamento</th>
                  <td>Acompanhamento merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <span className="eyebrow">Um olhar mais próximo</span>
            <h2>Conhecimento para uma conversa mais clara.</h2>
            <div className="article-list">
              <article>
                <span className="eyebrow">Caderno / 01</span>
                <h3>Direito digital: por onde começar</h3>
                <p>Organize suas dúvidas e o que você considera importante antes do primeiro encontro.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 02</span>
                <h3>Contratos: por onde começar</h3>
                <p>Conheça as etapas de uma avaliação e converse sobre as possibilidades para o seu contexto.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 03</span>
                <h3>Consultoria para negócios: por onde começar</h3>
                <p>Entenda por que acompanhamento e revisão fazem parte de um processo individual.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
            </div>
            <p className="note">Publicações editoriais fictícias para demonstração. Nenhuma instituição ou veículo de mídia real é associado ao profissional.</p>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/advogado/modelo-08/space.webp" alt="Ambiente de atendimento de Nexo Legal — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Advocacia / 08</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Equipe Nexo</h2>
              <p>Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</p>
              <p>Um escritório contemporâneo com processos organizados e linguagem acessível. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">OAB/SP 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar contato ↗</a>
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
                <h3>Direito digital</h3>
                <p>Escuta do contexto e análise inicial das informações relevantes. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre direito digital ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Contratos</h3>
                <p>Avaliação de documentos e das possibilidades jurídicas da situação. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre contratos ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Consultoria para negócios</h3>
                <p>Comunicação clara sobre etapas, condições e alternativas. Sem garantia de resultado. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre consultoria para negócios ↗</a>
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
              <p>Um escritório contemporâneo com processos organizados e linguagem acessível.</p>
              <address>Rua Exemplo, 170 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Direito digital", "Contratos", "Consultoria para negócios"]} action="Solicitar contato"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Nexo Legal</strong>
            <p>OAB/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/advogado">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
