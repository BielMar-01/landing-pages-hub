import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-04.css';
export default function PsicologoModel04Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [topic, setTopic] = useState(0);
    return <div className="lp-psicologo-4">
      <div className="wrap">
        <Link to="/psicologo" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Psicologia</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Pausa Online<small>Psicologia </small>
          </a>
          <nav id="lp-psicologo-4-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Pausa Online">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-psicologo-4-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Psicologia · Digital</span>
                <h1>Um encontro com você. Onde você estiver.</h1>
                <p className="lead">Psicoterapia online com privacidade, orientações claras e espaço para uma conversa tranquila.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar primeira conversa <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <div className="status-panel">
                <span className="eyebrow">Seu próximo encontro</span>
                <h3>Organização que aproxima.</h3>
                <span>01 / Terapia online</span>
                <span>02 / Primeiro encontro</span>
                <span>03 / Acompanhamento remoto</span>
                <small>Interface ilustrativa. Dados demonstrativos.</small>
              </div>
            </div>
            <div className="facts">
                <div><strong>Escuta</strong>Tempo para sua história</div>
                <div><strong>Respeito</strong>Um processo construído em conjunto</div>
                <div><strong>Privacidade</strong>Atendimento com responsabilidade</div>
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
          <div className="wrap">
            <span className="eyebrow">Psicologia / 04</span>
            <h2>Prepare um encontro com privacidade</h2>
            <p>Um ambiente reservado e uma conexão estável ajudam a organizar a sessão online.</p>
            <div className="topic-tabs" aria-label="Explorar etapas do atendimento">{["Seu espaço", "Sua conexão", "Primeira sessão"].map((label, index) => <button key={label} type="button" aria-pressed={topic === index} aria-controls="lp-psicologo-4-topic" onClick={() => setTopic(index)}>{label}</button>)}</div>
            <div className="topic-panel" id="lp-psicologo-4-topic" role="status">
              <h3>{["Seu espaço", "Sua conexão", "Primeira sessão"][topic]}</h3>
              <p>{["Seu espaço faz parte da primeira conversa. Um ambiente reservado e uma conexão estável ajudam a organizar a sessão online.", "Conheça as possibilidades de sua conexão no seu contexto. Você não precisa chegar com todas as respostas. O processo começa com escuta e respeito ao seu tempo.", "Primeira sessão merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo."][topic]}</p>
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
                <h3>Terapia online</h3>
                <p>Um encontro de escuta para compreender o que você deseja trabalhar. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre terapia online ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Primeiro encontro</h3>
                <p>Espaço para falar sobre experiências, relações e questões do cotidiano. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre primeiro encontro ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Acompanhamento remoto</h3>
                <p>Um processo que respeita sua singularidade, com condições combinadas em conjunto. Informações organizadas para facilitar sua experiência.</p>
                <a href="#contato">Conversar sobre acompanhamento remoto ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>Prepare seu espaço para o encontro</h2>
              <div className="feature-grid">
                <div>
                  <h3>Terapia online</h3>
                  <p>Psicoterapia online com privacidade, orientações claras e espaço para uma conversa tranquila. Você não precisa chegar com todas as respostas. O processo começa com escuta e respeito ao seu tempo.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Paula Brito ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/psicologo/modelo-04/space.webp" alt="Ambiente de atendimento de Pausa Online — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Psicologia / 04</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Paula Brito</h2>
              <p>Você não precisa chegar com todas as respostas. O processo começa com escuta e respeito ao seu tempo.</p>
              <p>Psicoterapia online com privacidade, orientações claras e espaço para uma conversa tranquila. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRP 00/000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar primeira conversa ↗</a>
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
              <p>Psicoterapia online com privacidade, orientações claras e espaço para uma conversa tranquila.</p>
              <address>Rua Exemplo, 130 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Terapia online", "Primeiro encontro", "Acompanhamento remoto"]} action="Solicitar primeira conversa"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Pausa Online</strong>
            <p>CRP 00/000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/psicologo">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
