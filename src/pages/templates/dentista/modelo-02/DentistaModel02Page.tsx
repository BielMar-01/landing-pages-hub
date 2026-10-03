import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-02.css';
export default function DentistaModel02Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-dentista-2">
      <div className="wrap">
        <Link to="/dentista" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Odontologia</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Dr. Pedro Lima<small>Odontologia · Pedro Lima</small>
          </a>
          <nav id="lp-dentista-2-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Dr. Pedro Lima">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-dentista-2-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Odontologia · Marca pessoal</span>
                <h1>Precisão no cuidado. Clareza na conversa.</h1>
                <p className="lead">Odontologia especializada com planejamento individual e uma relação próxima com o paciente.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar avaliação <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
                <div className="hero-credit">Pedro Lima<br />CRO/SP 000000 · profissional fictício</div>
              </div>
              <LocalPhoto src="/images/dentista/modelo-02/hero.webp" alt="Odontologia: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Odontologia / 02</span>
                  <strong>PL</strong>
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
        <section className="section">
          <div className="wrap">
            <div className="story">
              <div>
                <span className="eyebrow">Odontologia / 02</span>
                <h2>O planejamento merece uma boa conversa</h2>
                <p>As possibilidades são apresentadas com indicações, limites e etapas.</p>
                <a className="button" href="#contato">Conhecer a experiência ↗</a>
              </div>
              <div className="context-index">
                <article>
                  <span>01</span>
                  <h3>Diagnóstico</h3>
                  <p>Diagnóstico faz parte da primeira conversa. As possibilidades são apresentadas com indicações, limites e etapas.</p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Alternativas</h3>
                  <p>Conheça as possibilidades de alternativas no seu contexto. Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas.</p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Manutenção</h3>
                  <p>Manutenção merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/dentista/modelo-02/space.webp" alt="Ambiente de atendimento de Dr. Pedro Lima — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Odontologia / 02</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Conheça o profissional</span>
              <h2>Pedro Lima</h2>
              <p>Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas.</p>
              <p>Odontologia especializada com planejamento individual e uma relação próxima com o paciente. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <div className="credentials">
                <strong>Uma prática com responsabilidade</strong>
                <ul>
                  <li>Avaliação especializada como área de atuação.</li>
                  <li>Atenção à comunicação e às decisões individuais.</li>
                  <li>Orientação clara em cada etapa.</li>
                </ul>
                <small>CRO/SP 000000 · Perfil e trajetória demonstrativos.</small>
              </div>
              <a href="#contato" className="text-link">Solicitar avaliação ↗</a>
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
                <h3>Avaliação especializada: por onde começar</h3>
                <p>Organize suas dúvidas e o que você considera importante antes do primeiro encontro.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 02</span>
                <h3>Reabilitação oral: por onde começar</h3>
                <p>Conheça as etapas de uma avaliação e converse sobre as possibilidades para o seu contexto.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 03</span>
                <h3>Acompanhamento preventivo: por onde começar</h3>
                <p>Entenda por que acompanhamento e revisão fazem parte de um processo individual.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
            </div>
            <p className="note">Publicações editoriais fictícias para demonstração. Nenhuma instituição ou veículo de mídia real é associado ao profissional.</p>
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
                <h3>Avaliação especializada</h3>
                <p>Avaliação odontológica com atenção à saúde, ao histórico e às expectativas.</p>
                <a href="#contato">Conversar sobre avaliação especializada ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Reabilitação oral</h3>
                <p>Converse sobre indicações, alternativas e etapas do planejamento.</p>
                <a href="#contato">Conversar sobre reabilitação oral ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Acompanhamento preventivo</h3>
                <p>Acompanhamento e orientação sobre os cuidados necessários.</p>
                <a href="#contato">Conversar sobre acompanhamento preventivo ↗</a>
              </article>
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
              <p>Odontologia especializada com planejamento individual e uma relação próxima com o paciente.</p>
              <address>Rua Exemplo, 110 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Avaliação especializada", "Reabilitação oral", "Acompanhamento preventivo"]} action="Solicitar avaliação"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Dr. Pedro Lima</strong>
            <p>CRO/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/dentista">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
