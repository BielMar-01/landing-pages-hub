import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-03.css';
export default function DentistaModel03Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-dentista-3">
      <div className="wrap">
        <Link to="/dentista" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Odontologia</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Alinha Ortodontia<small>Odontologia </small>
          </a>
          <nav id="lp-dentista-3-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Alinha Ortodontia">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-dentista-3-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Odontologia · Contemporâneo</span>
                <h1>Cada sorriso encontra o seu caminho.</h1>
                <p className="lead">Ortodontia com avaliação cuidadosa, explicações simples e acompanhamento em cada etapa.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar avaliação <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/dentista/modelo-03/hero.webp" alt="Odontologia: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Odontologia / 03</span>
                  <strong>JR</strong>
                  <small>Saúde em cada detalhe do sorriso.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="facts">
                <div><strong>Avaliação</strong>Um planejamento individual</div>
                <div><strong>Orientação</strong>Entenda cada etapa</div>
                <div><strong>Saúde</strong>Cuidado além da estética</div>
              </div>
            </div>
          </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Escolhas que começam na avaliação</h2>
              <div className="feature-grid">
                <div>
                  <h3>Avaliação ortodôntica</h3>
                  <p>Ortodontia com avaliação cuidadosa, explicações simples e acompanhamento em cada etapa. Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Júlia Ramos ↗</a>
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
                <h2>Seu contexto orienta cada escolha.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Avaliação ortodôntica</h3>
                <p>Avaliação odontológica com atenção à saúde, ao histórico e às expectativas.</p>
                <a href="#contato">Conversar sobre avaliação ortodôntica ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Aparelhos ortodônticos</h3>
                <p>Converse sobre indicações, alternativas e etapas do planejamento.</p>
                <a href="#contato">Conversar sobre aparelhos ortodônticos ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Alinhadores sob avaliação</h3>
                <p>Acompanhamento e orientação sobre os cuidados necessários.</p>
                <a href="#contato">Conversar sobre alinhadores sob avaliação ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="context-letter">
              <span className="eyebrow">Odontologia / 03</span>
              <h2>Alinhamento não começa pelo aparelho</h2>
              <blockquote>“A escolha de uma abordagem ortodôntica depende das características de cada paciente.”</blockquote>
              <cite>Júlia Ramos · perspectiva ilustrativa</cite>
              <div className="context-strip">
                <span>Avaliação</span>
                <span>Planejamento</span>
                <span>Acompanhamento</span>
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
                <strong>Avaliação do sorriso</strong>
                <p>Compartilhe suas necessidades e tire as primeiras dúvidas sobre o atendimento.</p>
              </article>
              <article className="step">
                <span className="eyebrow">02</span>
                <strong>Planejamento e alternativas</strong>
                <p>As informações são consideradas para conversar sobre as opções e definir os próximos passos.</p>
              </article>
              <article className="step">
                <span className="eyebrow">03</span>
                <strong>Cuidado e manutenção</strong>
                <p>O planejamento pode ser revisado conforme seu contexto e as orientações profissionais.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/dentista/modelo-03/space.webp" alt="Ambiente de atendimento de Alinha Ortodontia — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Odontologia / 03</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Júlia Ramos</h2>
              <p>Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas.</p>
              <p>Ortodontia com avaliação cuidadosa, explicações simples e acompanhamento em cada etapa. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRO/SP 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar avaliação ↗</a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap faq">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Antes de dar o próximo passo.</h2>
            <details>
              <summary>É possível indicar um tratamento pelo site?</summary>
              <p>Não. A indicação depende de consulta odontológica, histórico e exames quando necessários. Os serviços são ilustrativos e não prometem resultados.</p>
            </details>
            <details>
              <summary>Como solicitar avaliação odontológica?</summary>
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
              <p>Ortodontia com avaliação cuidadosa, explicações simples e acompanhamento em cada etapa.</p>
              <address>Rua Exemplo, 120 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Avaliação ortodôntica", "Aparelhos ortodônticos", "Alinhadores sob avaliação"]} action="Solicitar avaliação"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Alinha Ortodontia</strong>
            <p>CRO/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/dentista">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
