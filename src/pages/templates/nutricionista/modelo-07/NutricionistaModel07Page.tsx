import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-07.css';
export default function NutricionistaModel07Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-nutricionista-7">
      <div className="wrap">
        <Link to="/nutricionista" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Nutrição</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Maison Nutri<small>Nutrição </small>
          </a>
          <nav id="lp-nutricionista-7-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Maison Nutri">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-nutricionista-7-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Nutrição · Premium</span>
                <h1>Uma experiência pessoal. Em cada escolha.</h1>
                <p className="lead">Nutrição particular com tempo para compreender seu estilo de vida e planejar com cuidado.</p>
                <div className="actions">
                  <a className="button" href="#contato">Conhecer o acompanhamento <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/nutricionista/modelo-07/hero.webp" alt="Nutrição: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Nutrição / 07</span>
                  <strong>IC</strong>
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
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Áreas de atuação</span>
                <h2>Diferentes necessidades encontram lugar.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Consulta particular</h3>
                <p>Entenda como suas escolhas alimentares se conectam ao seu contexto.</p>
                <a href="#contato">Conversar sobre consulta particular ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Planejamento individual</h3>
                <p>Construa possibilidades que respeitam suas preferências e disponibilidade.</p>
                <a href="#contato">Conversar sobre planejamento individual ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Acompanhamento próximo</h3>
                <p>Reavalie a rotina e os desafios em um acompanhamento individual.</p>
                <a href="#contato">Conversar sobre acompanhamento próximo ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Nutrição / 07</span>
              <h2>Seu cotidiano, observado de perto</h2>
              <p>Uma experiência particular para construir um acompanhamento cuidadoso.</p>
              <div className="context-strip">
                <span>Agenda</span>
                <span>Preferências</span>
                <span>Planejamento</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>O cuidado nos pequenos detalhes</h2>
              <div className="feature-grid">
                <div>
                  <h3>Consulta particular</h3>
                  <p>Nutrição particular com tempo para compreender seu estilo de vida e planejar com cuidado. Seu contexto vem antes de qualquer plano. Alimentação, preferências e rotina fazem parte da conversa.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Isabel Costa ↗</a>
                </div>
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
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/nutricionista/modelo-07/space.webp" alt="Ambiente de atendimento de Maison Nutri — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Nutrição / 07</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Isabel Costa</h2>
              <p>Seu contexto vem antes de qualquer plano. Alimentação, preferências e rotina fazem parte da conversa.</p>
              <p>Nutrição particular com tempo para compreender seu estilo de vida e planejar com cuidado. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <div className="credentials">
                <strong>Uma prática com responsabilidade</strong>
                <ul>
                  <li>Consulta particular como área de atuação.</li>
                  <li>Atenção à comunicação e às decisões individuais.</li>
                  <li>Orientação clara em cada etapa.</li>
                </ul>
                <small>CRN 000000 · Perfil e trajetória demonstrativos.</small>
              </div>
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
              <p>Nutrição particular com tempo para compreender seu estilo de vida e planejar com cuidado.</p>
              <address>Rua Exemplo, 160 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Consulta particular", "Planejamento individual", "Acompanhamento próximo"]} action="Conhecer o acompanhamento"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Maison Nutri</strong>
            <p>CRN 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/nutricionista">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
