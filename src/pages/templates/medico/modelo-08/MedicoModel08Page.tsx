import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-08.css';
export default function MedicoModel08Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-medico-8">
      <div className="wrap">
        <Link to="/medico" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Medicina</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Medical Executive<small>Medicina </small>
          </a>
          <nav id="lp-medico-8-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Medical Executive">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-medico-8-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <LocalPhoto src="/images/medico/modelo-08/hero.webp" alt="Medicina: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Medicina / 08</span>
                  <strong>EL</strong>
                  <small>Cuidado com atenção aos detalhes.</small>
                </div>
              </LocalPhoto>
              <div className="hero-copy">
                <span className="eyebrow">Medicina · Exclusivo</span>
                <h1>Seu tempo é precioso. Sua saúde também.</h1>
                <p className="lead">Acompanhamento médico particular pensado para uma rotina exigente, com discrição e continuidade.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar consulta <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
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
            <div className="section-title">
              <div>
                <span className="eyebrow">Medicina / 08</span>
                <h2>Acompanhamento para uma agenda exigente</h2>
              </div>
              <p>O atendimento particular considera sua disponibilidade sem reduzir a atenção clínica.</p>
            </div>
            <table className="context-table">
              <caption className="note">Pontos de atenção na experiência de medicina</caption>
              <thead>
                <tr>
                  <th scope="col">O que observar</th>
                  <th scope="col">Como conversar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Agenda reservada</th>
                  <td>Agenda reservada faz parte da primeira conversa. O atendimento particular considera sua disponibilidade sem reduzir a atenção clínica.</td>
                </tr>
                <tr>
                  <th scope="row">Continuidade</th>
                  <td>Conheça as possibilidades de continuidade no seu contexto. Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.</td>
                </tr>
                <tr>
                  <th scope="row">Discrição</th>
                  <td>Discrição merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</td>
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
                <h3>Avaliação individual: por onde começar</h3>
                <p>Organize suas dúvidas e o que você considera importante antes do primeiro encontro.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 02</span>
                <h3>Acompanhamento executivo: por onde começar</h3>
                <p>Conheça as etapas de uma avaliação e converse sobre as possibilidades para o seu contexto.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 03</span>
                <h3>Coordenação do cuidado: por onde começar</h3>
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
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/medico/modelo-08/space.webp" alt="Ambiente de atendimento de Medical Executive — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Medicina / 08</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Eduardo Lemos</h2>
              <p>Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.</p>
              <p>Acompanhamento médico particular pensado para uma rotina exigente, com discrição e continuidade. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <div className="credentials">
                <strong>Uma prática com responsabilidade</strong>
                <ul>
                  <li>Avaliação individual como área de atuação.</li>
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
                <h2>Uma experiência construída para você.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Avaliação individual</h3>
                <p>Avaliação clínica com espaço para ouvir seu histórico e suas dúvidas. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre avaliação individual ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Acompanhamento executivo</h3>
                <p>Orientação preventiva considerando as necessidades individuais. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre acompanhamento executivo ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Coordenação do cuidado</h3>
                <p>Continuidade do cuidado com revisões e orientações compartilhadas. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre coordenação do cuidado ↗</a>
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
              <p>Acompanhamento médico particular pensado para uma rotina exigente, com discrição e continuidade.</p>
              <address>Rua Exemplo, 170 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Avaliação individual", "Acompanhamento executivo", "Coordenação do cuidado"]} action="Solicitar consulta"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Medical Executive</strong>
            <p>CRM/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/medico">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
