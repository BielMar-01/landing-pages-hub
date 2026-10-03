import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-05.css';
export default function MedicoModel05Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-medico-5">
      <div className="wrap">
        <Link to="/medico" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Medicina</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Especialista<small>Medicina · Rafael Azevedo</small>
          </a>
          <nav id="lp-medico-5-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Especialista">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-medico-5-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Medicina · Marca pessoal</span>
                <h1>Conhecimento que se traduz em cuidado.</h1>
                <p className="lead">Dr. Rafael Azevedo. Cardiologia com explicações claras e atenção à sua história.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar consulta <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
                <div className="hero-credit">Rafael Azevedo<br />CRM/SP 000000 · profissional fictício</div>
              </div>
              <LocalPhoto src="/images/medico/modelo-05/hero.webp" alt="Medicina: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Medicina / 05</span>
                  <strong>RA</strong>
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
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/medico/modelo-05/space.webp" alt="Ambiente de atendimento de Especialista — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Medicina / 05</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Conheça o profissional</span>
              <h2>Rafael Azevedo</h2>
              <p>Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.</p>
              <p>Dr. Rafael Azevedo. Cardiologia com explicações claras e atenção à sua história. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <div className="credentials">
                <strong>Uma prática com responsabilidade</strong>
                <ul>
                  <li>Avaliação cardiovascular como área de atuação.</li>
                  <li>Atenção à comunicação e às decisões individuais.</li>
                  <li>Orientação clara em cada etapa.</li>
                </ul>
                <small>CRM/SP 000000 · Perfil e trajetória demonstrativos.</small>
              </div>
              <a href="#contato" className="text-link">Solicitar consulta ↗</a>
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
                <h3>Avaliação cardiovascular</h3>
                <p>Avaliação clínica com espaço para ouvir seu histórico e suas dúvidas.</p>
                <a href="#contato">Conversar sobre avaliação cardiovascular ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Prevenção individual</h3>
                <p>Orientação preventiva considerando as necessidades individuais.</p>
                <a href="#contato">Conversar sobre prevenção individual ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Acompanhamento cardiológico</h3>
                <p>Continuidade do cuidado com revisões e orientações compartilhadas.</p>
                <a href="#contato">Conversar sobre acompanhamento cardiológico ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="story">
              <div>
                <span className="eyebrow">Medicina / 05</span>
                <h2>Cardiologia com explicações claras</h2>
                <p>Informação acessível para participar das decisões sobre a saúde cardiovascular.</p>
              </div>
              <div className="context-grid" style={{ gridTemplateColumns: '1fr' }}>
                <details>
                  <summary>Histórico familiar</summary>
                  <p>Histórico familiar faz parte da primeira conversa. Informação acessível para participar das decisões sobre a saúde cardiovascular.</p>
                </details>
                <details>
                  <summary>Hábitos</summary>
                  <p>Conheça as possibilidades de hábitos no seu contexto. Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.</p>
                </details>
                <details>
                  <summary>Acompanhamento</summary>
                  <p>Acompanhamento merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
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
                <h3>Avaliação cardiovascular: por onde começar</h3>
                <p>Organize suas dúvidas e o que você considera importante antes do primeiro encontro.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 02</span>
                <h3>Prevenção individual: por onde começar</h3>
                <p>Conheça as etapas de uma avaliação e converse sobre as possibilidades para o seu contexto.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 03</span>
                <h3>Acompanhamento cardiológico: por onde começar</h3>
                <p>Entenda por que acompanhamento e revisão fazem parte de um processo individual.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas. Este texto é ilustrativo; não substitui orientação profissional.</p>
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
              <p>Dr. Rafael Azevedo. Cardiologia com explicações claras e atenção à sua história.</p>
              <address>Rua Exemplo, 140 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Avaliação cardiovascular", "Prevenção individual", "Acompanhamento cardiológico"]} action="Solicitar consulta"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Especialista</strong>
            <p>CRM/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/medico">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
