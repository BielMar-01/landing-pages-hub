import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-08.css';
export default function DentistaModel08Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-dentista-8">
      <div className="wrap">
        <Link to="/dentista" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Odontologia</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Voxel Dental<small>Odontologia </small>
          </a>
          <nav id="lp-dentista-8-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Voxel Dental">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-dentista-8-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Odontologia · Digital</span>
                <h1>Tecnologia para planejar. Pessoas para cuidar.</h1>
                <p className="lead">Fluxos digitais a serviço de decisões claras e de um atendimento odontológico próximo.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar avaliação <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <div className="status-panel">
                <span className="eyebrow">Seu próximo encontro</span>
                <h3>Organização que aproxima.</h3>
                <span>01 / Escaneamento sob indicação</span>
                <span>02 / Planejamento digital</span>
                <span>03 / Odontologia integrada</span>
                <small>Interface ilustrativa. Dados demonstrativos.</small>
              </div>
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
            <div className="section-title">
              <div>
                <span className="eyebrow">Odontologia / 08</span>
                <h2>Tecnologia como apoio ao planejamento</h2>
              </div>
              <p>Recursos digitais são utilizados quando indicados, com supervisão profissional.</p>
            </div>
            <table className="context-table">
              <caption className="note">Pontos de atenção na experiência de odontologia</caption>
              <thead>
                <tr>
                  <th scope="col">O que observar</th>
                  <th scope="col">Como conversar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Escaneamento</th>
                  <td>Escaneamento faz parte da primeira conversa. Recursos digitais são utilizados quando indicados, com supervisão profissional.</td>
                </tr>
                <tr>
                  <th scope="row">Visualização</th>
                  <td>Conheça as possibilidades de visualização no seu contexto. Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas.</td>
                </tr>
                <tr>
                  <th scope="row">Orientação</th>
                  <td>Orientação merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="section" id="processo">
          <div className="wrap">
            <span className="eyebrow">O próximo passo</span>
            <h2>Um processo que você entende.</h2>
            <div className="steps">
              <article className="step">
                <span className="eyebrow">01</span>
                <strong>Avaliação do sorriso</strong>
                <p>Compartilhe suas necessidades e tire as primeiras dúvidas sobre o atendimento.</p>
              </article>
              <article className="step">
                <span className="eyebrow">02</span>
                <strong>Planejamento e alternativas</strong>
                <p>As informações são consideradas para conversar sobre as opções e definir os próximos passos.</p>
              </article>
              <article className="step">
                <span className="eyebrow">03</span>
                <strong>Cuidado e manutenção</strong>
                <p>O planejamento pode ser revisado conforme seu contexto e as orientações profissionais.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Do planejamento à conversa</h2>
              <div className="feature-grid">
                <div>
                  <h3>Escaneamento sob indicação</h3>
                  <p>Fluxos digitais a serviço de decisões claras e de um atendimento odontológico próximo. Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Equipe Voxel ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/dentista/modelo-08/space.webp" alt="Ambiente de atendimento de Voxel Dental — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Odontologia / 08</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Equipe Voxel</h2>
              <p>Cada sorriso tem uma história. A avaliação vem antes do planejamento e todas as etapas são explicadas.</p>
              <p>Fluxos digitais a serviço de decisões claras e de um atendimento odontológico próximo. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRO/SP 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar avaliação ↗</a>
            </div>
          </div>
        </section>
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Áreas de atuação</span>
                <h2>Uma experiência construída para você.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Escaneamento sob indicação</h3>
                <p>Avaliação odontológica com atenção à saúde, ao histórico e às expectativas. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre escaneamento sob indicação ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Planejamento digital</h3>
                <p>Converse sobre indicações, alternativas e etapas do planejamento. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre planejamento digital ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Odontologia integrada</h3>
                <p>Acompanhamento e orientação sobre os cuidados necessários. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conversar sobre odontologia integrada ↗</a>
              </article>
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
              <p>Fluxos digitais a serviço de decisões claras e de um atendimento odontológico próximo.</p>
              <address>Rua Exemplo, 170 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Escaneamento sob indicação", "Planejamento digital", "Odontologia integrada"]} action="Solicitar avaliação"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Voxel Dental</strong>
            <p>CRO/SP 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/dentista">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
