import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-05.css';
export default function NutricionistaModel05Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-nutricionista-5">
      <div className="wrap">
        <Link to="/nutricionista" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Nutrição</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Ciclo Nutrição<small>Nutrição </small>
          </a>
          <nav id="lp-nutricionista-5-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Ciclo Nutrição">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-nutricionista-5-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Nutrição · Contemporâneo</span>
                <h1>Cuidado que acompanha os seus ciclos.</h1>
                <p className="lead">Nutrição feminina com atenção às diferentes fases da vida e às necessidades individuais.</p>
                <div className="actions">
                  <a className="button" href="#contato">Conhecer o acompanhamento <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/nutricionista/modelo-05/hero.webp" alt="Nutrição: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Nutrição / 05</span>
                  <strong>LM</strong>
                  <small>Comida de verdade. Rotina possível.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="facts">
                <div><strong>Contexto</strong>Histórico, preferências e rotina</div>
                <div><strong>Possível</strong>Alimentação que cabe na vida</div>
                <div><strong>Acompanhamento</strong>Revisão e ajustes em conjunto</div>
              </div>
            </div>
          </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/nutricionista/modelo-05/space.webp" alt="Ambiente de atendimento de Ciclo Nutrição — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Nutrição / 05</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Laura Mendes</h2>
              <p>Seu contexto vem antes de qualquer plano. Alimentação, preferências e rotina fazem parte da conversa.</p>
              <p>Nutrição feminina com atenção às diferentes fases da vida e às necessidades individuais. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRN 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Conhecer o acompanhamento ↗</a>
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
                <h3>Saúde da mulher</h3>
                <p>Entenda como suas escolhas alimentares se conectam ao seu contexto.</p>
                <a href="#contato">Conversar sobre saúde da mulher ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Gestação e alimentação</h3>
                <p>Construa possibilidades que respeitam suas preferências e disponibilidade.</p>
                <a href="#contato">Conversar sobre gestação e alimentação ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Nutrição na maturidade</h3>
                <p>Reavalie a rotina e os desafios em um acompanhamento individual.</p>
                <a href="#contato">Conversar sobre nutrição na maturidade ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="story">
              <div>
                <span className="eyebrow">Nutrição / 05</span>
                <h2>Diferentes fases pedem novas conversas</h2>
                <p>O acompanhamento considera particularidades e necessidades individuais de cada fase.</p>
              </div>
              <div className="context-grid" style={{ gridTemplateColumns: '1fr' }}>
                <details>
                  <summary>Vida adulta</summary>
                  <p>Vida adulta faz parte da primeira conversa. O acompanhamento considera particularidades e necessidades individuais de cada fase.</p>
                </details>
                <details>
                  <summary>Gestação</summary>
                  <p>Conheça as possibilidades de gestação no seu contexto. Seu contexto vem antes de qualquer plano. Alimentação, preferências e rotina fazem parte da conversa.</p>
                </details>
                <details>
                  <summary>Maturidade</summary>
                  <p>Maturidade merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
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
                <h3>Saúde da mulher: por onde começar</h3>
                <p>Organize suas dúvidas e o que você considera importante antes do primeiro encontro.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Seu contexto vem antes de qualquer plano. Alimentação, preferências e rotina fazem parte da conversa. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 02</span>
                <h3>Gestação e alimentação: por onde começar</h3>
                <p>Conheça as etapas de uma avaliação e converse sobre as possibilidades para o seu contexto.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Seu contexto vem antes de qualquer plano. Alimentação, preferências e rotina fazem parte da conversa. Este texto é ilustrativo; não substitui orientação profissional.</p>
                </details>
              </article>
              <article>
                <span className="eyebrow">Caderno / 03</span>
                <h3>Nutrição na maturidade: por onde começar</h3>
                <p>Entenda por que acompanhamento e revisão fazem parte de um processo individual.</p>
                <details>
                  <summary>Ler orientação geral</summary>
                  <p>Seu contexto vem antes de qualquer plano. Alimentação, preferências e rotina fazem parte da conversa. Este texto é ilustrativo; não substitui orientação profissional.</p>
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
                <strong>Conhecer sua rotina</strong>
                <p>Compartilhe suas necessidades e tire as primeiras dúvidas sobre o atendimento.</p>
              </article>
              <article className="step">
                <span className="eyebrow">02</span>
                <strong>Construir um plano possível</strong>
                <p>As informações são consideradas para conversar sobre as opções e definir os próximos passos.</p>
              </article>
              <article className="step">
                <span className="eyebrow">03</span>
                <strong>Reavaliar juntos</strong>
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
              <summary>Vou receber uma dieta nesta demonstração?</summary>
              <p>Não. Planos alimentares exigem avaliação nutricional individual. Nenhum diagnóstico, prescrição ou promessa de resultado é oferecido aqui.</p>
            </details>
            <details>
              <summary>Como solicitar consulta nutricional?</summary>
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
              <p>Nutrição feminina com atenção às diferentes fases da vida e às necessidades individuais.</p>
              <address>Rua Exemplo, 140 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Saúde da mulher", "Gestação e alimentação", "Nutrição na maturidade"]} action="Conhecer o acompanhamento"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Ciclo Nutrição</strong>
            <p>CRN 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/nutricionista">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
