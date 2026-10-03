import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-03.css';
export default function MedicoModel03Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-medico-3">
      <div className="wrap">
        <Link to="/medico" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Medicina</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Cuidado Humano<small>Medicina </small>
          </a>
          <nav id="lp-medico-3-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Cuidado Humano">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-medico-3-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Medicina · Acolhedor</span>
                <h1>Você traz sua história. Nós oferecemos escuta.</h1>
                <p className="lead">Um consultório de portas abertas para cuidar de pessoas e de suas diferentes fases.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar consulta <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/medico/modelo-03/hero.webp" alt="Medicina: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Medicina / 03</span>
                  <strong>CN</strong>
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
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Cuidar também é criar vínculo</h2>
              <div className="feature-grid">
                <div>
                  <h3>Medicina de família</h3>
                  <p>Um consultório de portas abertas para cuidar de pessoas e de suas diferentes fases. Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Clara Nogueira ↗</a>
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
                <h3>Medicina de família</h3>
                <p>Avaliação clínica com espaço para ouvir seu histórico e suas dúvidas.</p>
                <a href="#contato">Conversar sobre medicina de família ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Saúde do adulto</h3>
                <p>Orientação preventiva considerando as necessidades individuais.</p>
                <a href="#contato">Conversar sobre saúde do adulto ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Cuidado na maturidade</h3>
                <p>Continuidade do cuidado com revisões e orientações compartilhadas.</p>
                <a href="#contato">Conversar sobre cuidado na maturidade ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="context-letter">
              <span className="eyebrow">Medicina / 03</span>
              <h2>A sua história não é um detalhe</h2>
              <blockquote>“O cuidado considera o trabalho, as relações e as diferentes fases de cada pessoa.”</blockquote>
              <cite>Clara Nogueira · perspectiva ilustrativa</cite>
              <div className="context-strip">
                <span>Família</span>
                <span>Rotina</span>
                <span>Vínculos</span>
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
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/medico/modelo-03/space.webp" alt="Ambiente de atendimento de Cuidado Humano — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Medicina / 03</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Clara Nogueira</h2>
              <p>Uma conversa cuidadosa sobre sua saúde, com orientação individual e decisões compartilhadas.</p>
              <p>Um consultório de portas abertas para cuidar de pessoas e de suas diferentes fases. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRM/SP 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar consulta ↗</a>
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
              <p>Um consultório de portas abertas para cuidar de pessoas e de suas diferentes fases.</p>
              <address>Rua Exemplo, 120 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Medicina de família", "Saúde do adulto", "Cuidado na maturidade"]} action="Solicitar consulta"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Cuidado Humano</strong>
            <p>CRM/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/medico">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
