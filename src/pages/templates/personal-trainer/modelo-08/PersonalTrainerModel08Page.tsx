import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-08.css';
export default function PersonalTrainerModel08Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-personal-trainer-8">
      <div className="wrap">
        <Link to="/personal-trainer" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Treinamento</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Leo Monteiro<small>Treinamento · Leo Monteiro</small>
          </a>
          <nav id="lp-personal-trainer-8-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Leo Monteiro">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-personal-trainer-8-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Treinamento · Marca pessoal</span>
                <h1>Disciplina com direção. Movimento com propósito.</h1>
                <p className="lead">Um trabalho pessoal para transformar intenção em rotina, sem atalhos ou fórmulas mágicas.</p>
                <div className="actions">
                  <a className="button" href="#contato">Planejar meu treino <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
                <div className="hero-credit">Leo Monteiro<br />CREF 000000 · profissional fictício</div>
              </div>
              <LocalPhoto src="/images/personal-trainer/modelo-08/hero.webp" alt="Treinamento: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Treinamento / 08</span>
                  <strong>M</strong>
                  <small>Planejamento, técnica e movimento.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="facts">
                <div><strong>Planejamento</strong>A partir da avaliação individual</div>
                <div><strong>Técnica</strong>Orientação para cada exercício</div>
                <div><strong>Rotina</strong>Um plano para dar continuidade</div>
              </div>
            </div>
          </section>
        <section className="section">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Treinamento / 08</span>
                <h2>O plano precisa sobreviver à segunda-feira</h2>
              </div>
              <p>Planejamento e acompanhamento ajudam a transformar intenção em prática possível.</p>
            </div>
            <table className="context-table">
              <caption className="note">Pontos de atenção na experiência de treinamento</caption>
              <thead>
                <tr>
                  <th scope="col">O que observar</th>
                  <th scope="col">Como conversar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Prioridades</th>
                  <td>Prioridades faz parte da primeira conversa. Planejamento e acompanhamento ajudam a transformar intenção em prática possível.</td>
                </tr>
                <tr>
                  <th scope="row">Rotina</th>
                  <td>Conheça as possibilidades de rotina no seu contexto. Treinar com direção começa por conhecer sua experiência, disponibilidade e objetivos. A progressão é individual.</td>
                </tr>
                <tr>
                  <th scope="row">Revisão</th>
                  <td>Revisão merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <span className="eyebrow">Um olhar mais próximo</span>
            <h2>O processo além da motivação.</h2>
            <div className="schedule">
              <div>
                <span>01</span>
                <strong>Avaliar</strong>Histórico, experiência e disponibilidade para treinar.</div>
              <div>
                <span>02</span>
                <strong>Praticar</strong>Sessões planejadas com orientação sobre execução e ritmo.</div>
              <div>
                <span>03</span>
                <strong>Revisar</strong>Ajustes ao planejamento a partir do acompanhamento.</div>
            </div>
            <p className="note">Estrutura demonstrativa. Frequência e exercícios dependem de avaliação individual; não representam uma prescrição.</p>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/personal-trainer/modelo-08/space.webp" alt="Ambiente de atendimento de Leo Monteiro — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Treinamento / 08</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Conheça o profissional</span>
              <h2>Leo Monteiro</h2>
              <p>Treinar com direção começa por conhecer sua experiência, disponibilidade e objetivos. A progressão é individual.</p>
              <p>Um trabalho pessoal para transformar intenção em rotina, sem atalhos ou fórmulas mágicas. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <div className="credentials">
                <strong>Uma prática com responsabilidade</strong>
                <ul>
                  <li>Coaching de rotina como área de atuação.</li>
                  <li>Atenção à comunicação e às decisões individuais.</li>
                  <li>Orientação clara em cada etapa.</li>
                </ul>
                <small>CREF 000000 · Perfil e trajetória demonstrativos.</small>
              </div>
              <a href="#contato" className="text-link">Planejar meu treino ↗</a>
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
                <h3>Coaching de rotina</h3>
                <p>Planejamento de exercícios a partir da avaliação e da experiência individual. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre coaching de rotina ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Treino individual</h3>
                <p>Orientação sobre técnica, organização e uma progressão adequada ao contexto. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre treino individual ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Planejamento físico</h3>
                <p>Ajustes conforme sua rotina, com foco em continuidade e prática orientada. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre planejamento físico ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap faq">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Antes de dar o próximo passo.</h2>
            <details>
              <summary>O mesmo treino funciona para todo mundo?</summary>
              <p>Não. O planejamento depende de avaliação, experiência e condições individuais. Esta demonstração não prescreve treinos nem garante transformações.</p>
            </details>
            <details>
              <summary>Como solicitar avaliação inicial?</summary>
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
              <p>Um trabalho pessoal para transformar intenção em rotina, sem atalhos ou fórmulas mágicas.</p>
              <address>Rua Exemplo, 170 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Coaching de rotina", "Treino individual", "Planejamento físico"]} action="Planejar meu treino"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Leo Monteiro</strong>
            <p>CREF 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/personal-trainer">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
