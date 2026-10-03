import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-06.css';
export default function PersonalTrainerModel06Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-personal-trainer-6">
      <div className="wrap">
        <Link to="/personal-trainer" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Treinamento</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Treino em Rede<small>Treinamento </small>
          </a>
          <nav id="lp-personal-trainer-6-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Treino em Rede">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-personal-trainer-6-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Treinamento · Digital</span>
                <h1>Sua rotina muda. Seu treino acompanha.</h1>
                <p className="lead">Orientação online para organizar os exercícios, esclarecer dúvidas e acompanhar sua prática.</p>
                <div className="actions">
                  <a className="button" href="#contato">Planejar meu treino <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <div className="status-panel">
                <span className="eyebrow">Seu próximo encontro</span>
                <h3>Organização que aproxima.</h3>
                <span>01 / Consultoria online</span>
                <span>02 / Planejamento de rotina</span>
                <span>03 / Revisão de exercícios</span>
                <small>Interface ilustrativa. Dados demonstrativos.</small>
              </div>
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
            <span className="eyebrow">Treinamento / 06</span>
            <h2>Organização para treinar à distância</h2>
            <div className="context-index">
              <article>
                <span>01</span>
                <h3>Orientações</h3>
                <p>Orientações faz parte da primeira conversa. A consultoria online pode orientar o processo, sem substituir avaliações necessárias.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Registro</h3>
                <p>Conheça as possibilidades de registro no seu contexto. Treinar com direção começa por conhecer sua experiência, disponibilidade e objetivos. A progressão é individual.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Ajustes</h3>
                <p>Ajustes merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
              </article>
            </div>
            <p>A consultoria online pode orientar o processo, sem substituir avaliações necessárias.</p>
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
                <h3>Consultoria online</h3>
                <p>Planejamento de exercícios a partir da avaliação e da experiência individual.</p>
                <a href="#contato">Conversar sobre consultoria online ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Planejamento de rotina</h3>
                <p>Orientação sobre técnica, organização e uma progressão adequada ao contexto.</p>
                <a href="#contato">Conversar sobre planejamento de rotina ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Revisão de exercícios</h3>
                <p>Ajustes conforme sua rotina, com foco em continuidade e prática orientada.</p>
                <a href="#contato">Conversar sobre revisão de exercícios ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <span className="eyebrow">Um olhar mais próximo</span>
            <h2>Sua orientação, em três momentos.</h2>
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
            <LocalPhoto src="/images/personal-trainer/modelo-06/space.webp" alt="Ambiente de atendimento de Treino em Rede — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Treinamento / 06</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Gustavo Neves</h2>
              <p>Treinar com direção começa por conhecer sua experiência, disponibilidade e objetivos. A progressão é individual.</p>
              <p>Orientação online para organizar os exercícios, esclarecer dúvidas e acompanhar sua prática. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
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
              <p>Orientação online para organizar os exercícios, esclarecer dúvidas e acompanhar sua prática.</p>
              <address>Rua Exemplo, 150 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Consultoria online", "Planejamento de rotina", "Revisão de exercícios"]} action="Planejar meu treino"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Treino em Rede</strong>
            <p>CREF 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/personal-trainer">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
