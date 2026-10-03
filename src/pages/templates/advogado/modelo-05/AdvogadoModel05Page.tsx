import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-05.css';
export default function AdvogadoModel05Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-advogado-5">
      <div className="wrap">
        <Link to="/advogado" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Advocacia</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Laços Advocacia<small>Advocacia </small>
          </a>
          <nav id="lp-advogado-5-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Laços Advocacia">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-advogado-5-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Advocacia · Acolhedor</span>
                <h1>Nas mudanças da vida, orientação e respeito.</h1>
                <p className="lead">Direito de família com atenção às pessoas, à privacidade e à singularidade de cada situação.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar contato <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/advogado/modelo-05/hero.webp" alt="Advocacia: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Advocacia / 05</span>
                  <strong>LP</strong>
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
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/advogado/modelo-05/space.webp" alt="Ambiente de atendimento de Laços Advocacia — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Advocacia / 05</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Laura Pontes</h2>
              <p>Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</p>
              <p>Direito de família com atenção às pessoas, à privacidade e à singularidade de cada situação. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
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
                <h2>Experiência a serviço da sua história.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Direito de família</h3>
                <p>Escuta do contexto e análise inicial das informações relevantes.</p>
                <a href="#contato">Conversar sobre direito de família ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Sucessões</h3>
                <p>Avaliação de documentos e das possibilidades jurídicas da situação.</p>
                <a href="#contato">Conversar sobre sucessões ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Acordos familiares</h3>
                <p>Comunicação clara sobre etapas, condições e alternativas. Sem garantia de resultado.</p>
                <a href="#contato">Conversar sobre acordos familiares ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="story">
              <div>
                <span className="eyebrow">Advocacia / 05</span>
                <h2>Uma conversa cuidadosa nas mudanças</h2>
                <p>Questões familiares exigem análise jurídica e respeito às pessoas envolvidas.</p>
              </div>
              <div className="context-grid" style={{ gridTemplateColumns: '1fr' }}>
                <details>
                  <summary>Relações</summary>
                  <p>Relações faz parte da primeira conversa. Questões familiares exigem análise jurídica e respeito às pessoas envolvidas.</p>
                </details>
                <details>
                  <summary>Acordos</summary>
                  <p>Conheça as possibilidades de acordos no seu contexto. Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável.</p>
                </details>
                <details>
                  <summary>Privacidade</summary>
                  <p>Privacidade merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
                </details>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <span className="eyebrow">Um olhar mais próximo</span>
            <h2>Conhecimento para uma conversa mais clara.</h2>
            <div className="article-list">
              <article>
                <span className="eyebrow">Caderno / 01</span>
                <h3>Direito de família: por onde começar</h3>
                <p>Organize suas dúvidas e o que você considera importante antes do primeiro encontro.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 02</span>
                <h3>Sucessões: por onde começar</h3>
                <p>Conheça as etapas de uma avaliação e converse sobre as possibilidades para o seu contexto.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Compreender o contexto, analisar documentos e esclarecer alternativas são os primeiros passos de uma orientação responsável. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 03</span>
                <h3>Acordos familiares: por onde começar</h3>
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
              <p>Direito de família com atenção às pessoas, à privacidade e à singularidade de cada situação.</p>
              <address>Rua Exemplo, 140 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Direito de família", "Sucessões", "Acordos familiares"]} action="Solicitar contato"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Laços Advocacia</strong>
            <p>OAB/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/advogado">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
