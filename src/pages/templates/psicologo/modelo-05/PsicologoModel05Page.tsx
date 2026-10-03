import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-05.css';
export default function PsicologoModel05Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-psicologo-5">
      <div className="wrap">
        <Link to="/psicologo" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Psicologia</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Perspectiva<small>Psicologia </small>
          </a>
          <nav id="lp-psicologo-5-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Perspectiva">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-psicologo-5-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Psicologia · Contemporâneo</span>
                <h1>Novas maneiras de olhar para a sua vida.</h1>
                <p className="lead">Um consultório contemporâneo para falar sobre escolhas, relações e saúde emocional.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar primeira conversa <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/psicologo/modelo-05/hero.webp" alt="Psicologia: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Psicologia / 05</span>
                  <strong>LM</strong>
                  <small>Tempo, escuta e respeito.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="facts">
                <div><strong>Escuta</strong>Tempo para sua história</div>
                <div><strong>Respeito</strong>Um processo construído em conjunto</div>
                <div><strong>Privacidade</strong>Atendimento com responsabilidade</div>
              </div>
            </div>
          </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/psicologo/modelo-05/space.webp" alt="Ambiente de atendimento de Perspectiva — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Psicologia / 05</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Lucas Melo</h2>
              <p>Você não precisa chegar com todas as respostas. O processo começa com escuta e respeito ao seu tempo.</p>
              <p>Um consultório contemporâneo para falar sobre escolhas, relações e saúde emocional. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRP 00/000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar primeira conversa ↗</a>
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
                <h3>Psicoterapia</h3>
                <p>Um encontro de escuta para compreender o que você deseja trabalhar.</p>
                <a href="#contato">Conversar sobre psicoterapia ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Questões do cotidiano</h3>
                <p>Espaço para falar sobre experiências, relações e questões do cotidiano.</p>
                <a href="#contato">Conversar sobre questões do cotidiano ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Orientação inicial</h3>
                <p>Um processo que respeita sua singularidade, com condições combinadas em conjunto.</p>
                <a href="#contato">Conversar sobre orientação inicial ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="story">
              <div>
                <span className="eyebrow">Psicologia / 05</span>
                <h2>O cotidiano também merece atenção</h2>
                <p>O espaço terapêutico pode acolher questões que atravessam diferentes áreas da vida.</p>
              </div>
              <div className="context-grid" style={{ gridTemplateColumns: '1fr' }}>
                <details>
                  <summary>Trabalho</summary>
                  <p>Trabalho faz parte da primeira conversa. O espaço terapêutico pode acolher questões que atravessam diferentes áreas da vida.</p>
                </details>
                <details>
                  <summary>Relacionamentos</summary>
                  <p>Conheça as possibilidades de relacionamentos no seu contexto. Você não precisa chegar com todas as respostas. O processo começa com escuta e respeito ao seu tempo.</p>
                </details>
                <details>
                  <summary>Transições</summary>
                  <p>Transições merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
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
                <h3>Psicoterapia: por onde começar</h3>
                <p>Organize suas dúvidas e o que você considera importante antes do primeiro encontro.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Você não precisa chegar com todas as respostas. O processo começa com escuta e respeito ao seu tempo. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 02</span>
                <h3>Questões do cotidiano: por onde começar</h3>
                <p>Conheça as etapas de uma avaliação e converse sobre as possibilidades para o seu contexto.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Você não precisa chegar com todas as respostas. O processo começa com escuta e respeito ao seu tempo. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 03</span>
                <h3>Orientação inicial: por onde começar</h3>
                <p>Entenda por que acompanhamento e revisão fazem parte de um processo individual.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Você não precisa chegar com todas as respostas. O processo começa com escuta e respeito ao seu tempo. Este texto é ilustrativo; não substitui orientação profissional.</p>
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
                <strong>Primeiro contato</strong>
                <p>Compartilhe suas necessidades e tire as primeiras dúvidas sobre o atendimento.</p>
              </article>
              <article className="step">
                <span className="eyebrow">02</span>
                <strong>Encontro e acolhimento</strong>
                <p>As informações são consideradas para conversar sobre as opções e definir os próximos passos.</p>
              </article>
              <article className="step">
                <span className="eyebrow">03</span>
                <strong>Construção do processo</strong>
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
              <summary>Como é a primeira sessão?</summary>
              <p>É um encontro para conhecer sua demanda, esclarecer o processo e conversar sobre frequência e condições. O atendimento apresentado é fictício.</p>
            </details>
            <details>
              <summary>Como solicitar primeira conversa?</summary>
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
              <p>Um consultório contemporâneo para falar sobre escolhas, relações e saúde emocional.</p>
              <address>Rua Exemplo, 140 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Psicoterapia", "Questões do cotidiano", "Orientação inicial"]} action="Solicitar primeira conversa"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Perspectiva</strong>
            <p>CRP 00/000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/psicologo">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
