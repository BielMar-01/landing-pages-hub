import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-06.css';
export default function DentistaModel06Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-dentista-6">
      <div className="wrap">
        <Link to="/dentista" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Odontologia</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Pequenos Sorrisos<small>Odontologia </small>
          </a>
          <nav id="lp-dentista-6-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Pequenos Sorrisos">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-dentista-6-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Odontologia · Criativo</span>
                <h1>A primeira visita pode ser uma descoberta.</h1>
                <p className="lead">Um consultório pensado para acolher crianças e orientar famílias com leveza.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar avaliação <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/dentista/modelo-06/hero.webp" alt="Odontologia: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Odontologia / 06</span>
                  <strong>LT</strong>
                  <small>Saúde em cada detalhe do sorriso.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="facts">
                <div><strong>Avaliação</strong>Um planejamento individual</div>
                <div><strong>Orientação</strong>Entenda cada etapa</div>
                <div><strong>Saúde</strong>Cuidado além da estética</div>
              </div>
            </div>
          </section>
        <section className="section">
          <div className="wrap">
            <span className="eyebrow">Odontologia / 06</span>
            <h2>Uma visita no tempo da criança</h2>
            <div className="context-index">
              <article>
                <span>01</span>
                <h3>Conhecer o espaço</h3>
                <p>Conhecer o espaço faz parte da primeira conversa. Famílias participam da orientação e do acolhimento no consultório infantil.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Conversar</h3>
                <p>Conheça as possibilidades de conversar no seu contexto. Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Criar familiaridade</h3>
                <p>Criar familiaridade merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
              </article>
            </div>
            <p>Famílias participam da orientação e do acolhimento no consultório infantil.</p>
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
                <h3>Odontopediatria</h3>
                <p>Avaliação odontológica com atenção à saúde, ao histórico e às expectativas.</p>
                <a href="#contato">Conversar sobre odontopediatria ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Prevenção infantil</h3>
                <p>Converse sobre indicações, alternativas e etapas do planejamento.</p>
                <a href="#contato">Conversar sobre prevenção infantil ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Orientação às famílias</h3>
                <p>Acompanhamento e orientação sobre os cuidados necessários.</p>
                <a href="#contato">Conversar sobre orientação às famílias ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Conhecer, brincar, cuidar</h2>
              <div className="feature-grid">
                <div>
                  <h3>Odontopediatria</h3>
                  <p>Um consultório pensado para acolher crianças e orientar famílias com leveza. Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Lara Tavares ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/dentista/modelo-06/space.webp" alt="Ambiente de atendimento de Pequenos Sorrisos — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Odontologia / 06</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Lara Tavares</h2>
              <p>Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas.</p>
              <p>Um consultório pensado para acolher crianças e orientar famílias com leveza. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRO/SP 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar avaliação ↗</a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap faq">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Antes de dar o próximo passo.</h2>
            <details>
              <summary>É possível indicar um tratamento pelo site?</summary>
              <p>Não. A indicação depende de consulta odontológica, histórico e exames quando necessários. Os serviços são ilustrativos e não prometem resultados.</p>
            </details>
            <details>
              <summary>Como solicitar avaliação odontológica?</summary>
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
              <p>Um consultório pensado para acolher crianças e orientar famílias com leveza.</p>
              <address>Rua Exemplo, 150 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Odontopediatria", "Prevenção infantil", "Orientação às famílias"]} action="Solicitar avaliação"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Pequenos Sorrisos</strong>
            <p>CRO/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/dentista">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
