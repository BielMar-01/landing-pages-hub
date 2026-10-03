import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-04.css';
export default function PersonalTrainerModel04Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [topic, setTopic] = useState(0);
    return <div className="lp-personal-trainer-4">
      <div className="wrap">
        <Link to="/personal-trainer" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Treinamento</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Pace Performance<small>Treinamento </small>
          </a>
          <nav id="lp-personal-trainer-4-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Pace Performance">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-personal-trainer-4-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Treinamento · Contemporâneo</span>
                <h1>Prepare o corpo para o seu próximo desafio.</h1>
                <p className="lead">Preparação física orientada à sua modalidade, com planejamento e ajustes ao longo do ciclo.</p>
                <div className="actions">
                  <a className="button" href="#contato">Planejar meu treino <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/personal-trainer/modelo-04/hero.webp" alt="Treinamento: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Treinamento / 04</span>
                  <strong>DM</strong>
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
        <section className="section" id="processo">
          <div className="wrap">
            <span className="eyebrow">O próximo passo</span>
            <h2>Um processo que você entende.</h2>
            <div className="steps">
              <article className="step">
                <span className="eyebrow">01</span>
                <strong>Entender seu ponto de partida</strong>
                <p>Compartilhe suas necessidades e tire as primeiras dúvidas sobre o atendimento.</p>
              </article>
              <article className="step">
                <span className="eyebrow">02</span>
                <strong>Planejar o treinamento</strong>
                <p>As informações são consideradas para conversar sobre as opções e definir os próximos passos.</p>
              </article>
              <article className="step">
                <span className="eyebrow">03</span>
                <strong>Acompanhar e ajustar</strong>
                <p>O planejamento pode ser revisado conforme seu contexto e as orientações profissionais.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <span className="eyebrow">Treinamento / 04</span>
            <h2>Conheça as fases de um ciclo</h2>
            <p>A preparação física é construída em etapas e acompanhada conforme a modalidade.</p>
            <div className="topic-tabs" aria-label="Explorar etapas do atendimento">{["Base", "Desenvolvimento", "Revisão"].map((label, index) => <button key={label} type="button" aria-pressed={topic === index} aria-controls="lp-personal-trainer-4-topic" onClick={() => setTopic(index)}>{label}</button>)}</div>
            <div className="topic-panel" id="lp-personal-trainer-4-topic" role="status">
              <h3>{["Base", "Desenvolvimento", "Revisão"][topic]}</h3>
              <p>{["Base faz parte da primeira conversa. A preparação física é construída em etapas e acompanhada conforme a modalidade.", "Conheça as possibilidades de desenvolvimento no seu contexto. Treinar com direção começa por conhecer sua experiência, disponibilidade e objetivos. A progressão é individual.", "Revisão merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo."][topic]}</p>
              <a href="#contato" className="text-link">Tirar uma dúvida ↗</a>
            </div>
          </div>
        </section>
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Áreas de atuação</span>
                <h2>Conexões que facilitam a sua rotina.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Preparação física</h3>
                <p>Planejamento de exercícios a partir da avaliação e da experiência individual. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre preparação física ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Corrida e resistência</h3>
                <p>Orientação sobre técnica, organização e uma progressão adequada ao contexto. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre corrida e resistência ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Mobilidade</h3>
                <p>Ajustes conforme sua rotina, com foco em continuidade e prática orientada. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre mobilidade ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <span className="eyebrow">Um olhar mais próximo</span>
            <h2>Organize seu próximo ciclo.</h2>
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
            <LocalPhoto src="/images/personal-trainer/modelo-04/space.webp" alt="Ambiente de atendimento de Pace Performance — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Treinamento / 04</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Diego Moraes</h2>
              <p>Treinar com direção começa por conhecer sua experiência, disponibilidade e objetivos. A progressão é individual.</p>
              <p>Preparação física orientada à sua modalidade, com planejamento e ajustes ao longo do ciclo. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CREF 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Planejar meu treino ↗</a>
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
              <p>Preparação física orientada à sua modalidade, com planejamento e ajustes ao longo do ciclo.</p>
              <address>Rua Exemplo, 130 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Preparação física", "Corrida e resistência", "Mobilidade"]} action="Planejar meu treino"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Pace Performance</strong>
            <p>CREF 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/personal-trainer">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
