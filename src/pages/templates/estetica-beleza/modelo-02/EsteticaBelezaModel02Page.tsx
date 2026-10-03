import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-02.css';
export default function EsteticaBelezaModel02Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-estetica-beleza-2">
      <div className="wrap">
        <Link to="/estetica-beleza" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Estética & Beleza</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Lia Estética<small>Estética & Beleza · Lia Fernandes</small>
          </a>
          <nav id="lp-estetica-beleza-2-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Lia Estética">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-estetica-beleza-2-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Estética & Beleza · Marca pessoal</span>
                <h1>Seu cuidado, feito de perto.</h1>
                <p className="lead">Atendimento pessoal com escuta, delicadeza e atenção à sua rotina.</p>
                <div className="actions">
                  <a className="button" href="#contato">Reservar uma avaliação <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
                <div className="hero-credit">Lia Fernandes<br />Dados profissionais demonstrativos · profissional fictício</div>
              </div>
              <LocalPhoto src="/images/estetica-beleza/modelo-02/hero.webp" alt="Estética & Beleza: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Estética & Beleza / 02</span>
                  <strong>F</strong>
                  <small>Um momento de atenção para você.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="facts">
                <div><strong>Escuta</strong>Expectativas e escolhas pessoais</div>
                <div><strong>Individual</strong>Respeito às suas características</div>
                <div><strong>Informação</strong>Possibilidades discutidas com clareza</div>
              </div>
            </div>
          </section>
        <section className="section">
          <div className="wrap">
            <div className="story">
              <div>
                <span className="eyebrow">Estética & Beleza / 02</span>
                <h2>Uma conversa antes de qualquer ritual</h2>
                <p>Atendimento pessoal para entender o que faz sentido para você.</p>
                <a className="button" href="#contato">Conhecer a experiência ↗</a>
              </div>
              <div className="context-index">
                <article>
                  <span>01</span>
                  <h3>Rotina</h3>
                  <p>Rotina faz parte da primeira conversa. Atendimento pessoal para entender o que faz sentido para você.</p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Preferências</h3>
                  <p>Conheça as possibilidades de preferências no seu contexto. A avaliação respeita suas características, expectativas e necessidades. Possibilidades e cuidados são conversados antes de qualquer escolha.</p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Expectativas</h3>
                  <p>Expectativas merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/estetica-beleza/modelo-02/space.webp" alt="Ambiente de atendimento de Lia Estética — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Estética & Beleza / 02</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Conheça o profissional</span>
              <h2>Lia Fernandes</h2>
              <p>A avaliação respeita suas características, expectativas e necessidades. Possibilidades e cuidados são conversados antes de qualquer escolha.</p>
              <p>Atendimento pessoal com escuta, delicadeza e atenção à sua rotina. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <div className="credentials">
                <strong>Uma prática com responsabilidade</strong>
                <ul>
                  <li>Limpeza de pele como área de atuação.</li>
                  <li>Atenção à comunicação e às decisões individuais.</li>
                  <li>Orientação clara em cada etapa.</li>
                </ul>
                <small>Dados profissionais demonstrativos · Perfil e trajetória demonstrativos.</small>
              </div>
              <a href="#contato" className="text-link">Reservar uma avaliação ↗</a>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Proximidade nos pequenos detalhes</h2>
              <div className="feature-grid">
                <div>
                  <h3>Limpeza de pele</h3>
                  <p>Atendimento pessoal com escuta, delicadeza e atenção à sua rotina. A avaliação respeita suas características, expectativas e necessidades. Possibilidades e cuidados são conversados antes de qualquer escolha.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Lia Fernandes ↗</a>
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
                <h2>O cuidado também está nos detalhes.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Limpeza de pele</h3>
                <p>Avaliação individual para compreender suas expectativas e necessidades.</p>
                <a href="#contato">Conversar sobre limpeza de pele ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Hidratação facial</h3>
                <p>Informações sobre possibilidades e cuidados antes de qualquer decisão.</p>
                <a href="#contato">Conversar sobre hidratação facial ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Orientação de cuidados</h3>
                <p>Atenção aos detalhes, com orientações adaptadas à sua rotina.</p>
                <a href="#contato">Conversar sobre orientação de cuidados ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap faq">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Antes de dar o próximo passo.</h2>
            <details>
              <summary>É possível garantir um resultado estético?</summary>
              <p>Não. Indicações e resultados dependem de avaliação profissional e variam individualmente. Os serviços apresentados são demonstrativos.</p>
            </details>
            <details>
              <summary>Como solicitar avaliação?</summary>
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
              <p>Atendimento pessoal com escuta, delicadeza e atenção à sua rotina.</p>
              <address>Rua Exemplo, 110 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Limpeza de pele", "Hidratação facial", "Orientação de cuidados"]} action="Reservar uma avaliação"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Lia Estética</strong>
            <p>Dados profissionais demonstrativos · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/estetica-beleza">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
