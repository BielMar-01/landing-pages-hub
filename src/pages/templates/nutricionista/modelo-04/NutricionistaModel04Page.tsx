import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-04.css';
export default function NutricionistaModel04Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [topic, setTopic] = useState(0);
    return <div className="lp-nutricionista-4">
      <div className="wrap">
        <Link to="/nutricionista" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Nutrição</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Raiz Funcional<small>Nutrição </small>
          </a>
          <nav id="lp-nutricionista-4-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Raiz Funcional">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-nutricionista-4-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="edition">
              <span>NOTAS SOBRE O CUIDADO</span>
              <span>EDIÇÃO 01</span>
            </div>
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Nutrição · Editorial</span>
                <h1>Alimentação que olha para o todo.</h1>
                <p className="lead">Escuta clínica e comida de verdade em um acompanhamento atento às suas particularidades.</p>
                <div className="actions">
                  <a className="button" href="#contato">Conhecer o acompanhamento <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/nutricionista/modelo-04/hero.webp" alt="Nutrição: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Nutrição / 04</span>
                  <strong>ST</strong>
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
          <div className="wrap">
            <span className="eyebrow">Nutrição / 04</span>
            <h2>Três pontos de partida para a conversa</h2>
            <p>Uma avaliação contextual ajuda a discutir orientações sem fórmulas prontas.</p>
            <div className="topic-tabs" aria-label="Explorar etapas do atendimento">{["Rotina alimentar", "Conforto digestivo", "Histórico individual"].map((label, index) => <button key={label} type="button" aria-pressed={topic === index} aria-controls="lp-nutricionista-4-topic" onClick={() => setTopic(index)}>{label}</button>)}</div>
            <div className="topic-panel" id="lp-nutricionista-4-topic" role="status">
              <h3>{["Rotina alimentar", "Conforto digestivo", "Histórico individual"][topic]}</h3>
              <p>{["Rotina alimentar faz parte da primeira conversa. Uma avaliação contextual ajuda a discutir orientações sem fórmulas prontas.", "Conheça as possibilidades de conforto digestivo no seu contexto. Seu contexto vem antes de qualquer plano. Alimentação, preferências e rotina fazem parte da conversa.", "Histórico individual merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo."][topic]}</p>
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
                <h3>Nutrição funcional</h3>
                <p>Entenda como suas escolhas alimentares se conectam ao seu contexto. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre nutrição funcional ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Saúde digestiva</h3>
                <p>Construa possibilidades que respeitam suas preferências e disponibilidade. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre saúde digestiva ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Planejamento alimentar</h3>
                <p>Reavalie a rotina e os desafios em um acompanhamento individual. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre planejamento alimentar ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>O olhar para o seu contexto</h2>
              <div className="feature-grid">
                <div>
                  <h3>Nutrição funcional</h3>
                  <p>Escuta clínica e comida de verdade em um acompanhamento atento às suas particularidades. Seu contexto vem antes de qualquer plano. Alimentação, preferências e rotina fazem parte da conversa.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Sofia Terra ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/nutricionista/modelo-04/space.webp" alt="Ambiente de atendimento de Raiz Funcional — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Nutrição / 04</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Sofia Terra</h2>
              <p>Seu contexto vem antes de qualquer plano. Alimentação, preferências e rotina fazem parte da conversa.</p>
              <p>Escuta clínica e comida de verdade em um acompanhamento atento às suas particularidades. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRN 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Conhecer o acompanhamento ↗</a>
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
              <p>Escuta clínica e comida de verdade em um acompanhamento atento às suas particularidades.</p>
              <address>Rua Exemplo, 130 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Nutrição funcional", "Saúde digestiva", "Planejamento alimentar"]} action="Conhecer o acompanhamento"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Raiz Funcional</strong>
            <p>CRN 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/nutricionista">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
