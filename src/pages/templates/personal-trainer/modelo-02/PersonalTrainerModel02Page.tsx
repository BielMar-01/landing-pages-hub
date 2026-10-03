import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-02.css';
export default function PersonalTrainerModel02Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-personal-trainer-2">
      <div className="wrap">
        <Link to="/personal-trainer" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Treinamento</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Forge Strength<small>Treinamento </small>
          </a>
          <nav id="lp-personal-trainer-2-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Forge Strength">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-personal-trainer-2-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Treinamento · Impacto</span>
                <h1>Força se constrói. Repetição por repetição.</h1>
                <p className="lead">Treinamento de força com técnica, progressão planejada e acompanhamento de verdade.</p>
                <div className="actions">
                  <a className="button" href="#contato">Planejar meu treino <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/personal-trainer/modelo-02/hero.webp" alt="Treinamento: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Treinamento / 02</span>
                  <strong>RT</strong>
                  <small>Planejamento, técnica e movimento.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="poster-line">Hipertrofia / Técnica de execução / Progressão de cargas</div>
            <div className="facts">
                <div><strong>Planejamento</strong>A partir da avaliação individual</div>
                <div><strong>Técnica</strong>Orientação para cada exercício</div>
                <div><strong>Rotina</strong>Um plano para dar continuidade</div>
              </div>
            </div>
          </section>
        <section className="section">
          <div className="wrap">
            <div className="story">
              <div>
                <span className="eyebrow">Treinamento / 02</span>
                <h2>Técnica antes de intensidade</h2>
                <p>Carga e volume são ajustados à experiência e à avaliação do praticante.</p>
                <a className="button" href="#contato">Conhecer a experiência ↗</a>
              </div>
              <div className="context-index">
                <article>
                  <span>01</span>
                  <h3>Execução</h3>
                  <p>Execução faz parte da primeira conversa. Carga e volume são ajustados à experiência e à avaliação do praticante.</p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Progressão</h3>
                  <p>Conheça as possibilidades de progressão no seu contexto. Treinar com direção começa por conhecer sua experiência, disponibilidade e objetivos. A progressão é individual.</p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Recuperação</h3>
                  <p>Recuperação merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/personal-trainer/modelo-02/space.webp" alt="Ambiente de atendimento de Forge Strength — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Treinamento / 02</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Rafael Torres</h2>
              <p>Treinar com direção começa por conhecer sua experiência, disponibilidade e objetivos. A progressão é individual.</p>
              <p>Treinamento de força com técnica, progressão planejada e acompanhamento de verdade. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CREF 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Planejar meu treino ↗</a>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <span className="eyebrow">Um olhar mais próximo</span>
            <h2>Uma semana com direção.</h2>
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
                <h3>Hipertrofia</h3>
                <p>Planejamento de exercícios a partir da avaliação e da experiência individual.</p>
                <a href="#contato">Conversar sobre hipertrofia ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Técnica de execução</h3>
                <p>Orientação sobre técnica, organização e uma progressão adequada ao contexto.</p>
                <a href="#contato">Conversar sobre técnica de execução ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Progressão de cargas</h3>
                <p>Ajustes conforme sua rotina, com foco em continuidade e prática orientada.</p>
                <a href="#contato">Conversar sobre progressão de cargas ↗</a>
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
              <p>Treinamento de força com técnica, progressão planejada e acompanhamento de verdade.</p>
              <address>Rua Exemplo, 110 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Hipertrofia", "Técnica de execução", "Progressão de cargas"]} action="Planejar meu treino"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Forge Strength</strong>
            <p>CREF 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/personal-trainer">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
