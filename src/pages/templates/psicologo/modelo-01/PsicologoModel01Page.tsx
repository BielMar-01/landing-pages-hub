import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-01.css';
export default function PsicologoModel01Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-psicologo-1">
      <div className="wrap">
        <Link to="/psicologo" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Psicologia</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Entrelinhas<small>Psicologia </small>
          </a>
          <nav id="lp-psicologo-1-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Entrelinhas">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-psicologo-1-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Psicologia · Minimalista</span>
                <h1>Um espaço para ouvir o que você sente.</h1>
                <p className="lead">Psicologia clínica com escuta cuidadosa e respeito à singularidade de cada história.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar primeira conversa <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Conheça o trabalho</a>
                </div>
              </div>
              <LocalPhoto src="/images/psicologo/modelo-01/hero.webp" alt="Psicologia: profissional em seu ambiente de atendimento — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Psicologia / 01</span>
                  <strong>CF</strong>
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
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Áreas de atuação</span>
                <h2>Uma atenção que começa no essencial.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Psicoterapia individual</h3>
                <p>Um encontro de escuta para compreender o que você deseja trabalhar.</p>
                <a href="#contato">Conversar sobre psicoterapia individual ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Vida adulta</h3>
                <p>Espaço para falar sobre experiências, relações e questões do cotidiano.</p>
                <a href="#contato">Conversar sobre vida adulta ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Autoconhecimento</h3>
                <p>Um processo que respeita sua singularidade, com condições combinadas em conjunto.</p>
                <a href="#contato">Conversar sobre autoconhecimento ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <span className="eyebrow">Psicologia / 01</span>
            <h2>Não é preciso saber por onde começar</h2>
            <p>O encontro pode começar pela pergunta, pelo silêncio ou pelo que está presente agora.</p>
            <div className="context-grid">
              <article className="context-point">
                <span className="eyebrow">01</span>
                <strong>Sentimentos</strong>
                <p>Sentimentos faz parte da primeira conversa. O encontro pode começar pela pergunta, pelo silêncio ou pelo que está presente agora.</p>
              </article>
              <article className="context-point">
                <span className="eyebrow">02</span>
                <strong>Relações</strong>
                <p>Conheça as possibilidades de relações no seu contexto. Você não precisa chegar com todas as respostas. O processo começa com escuta e respeito ao seu tempo.</p>
              </article>
              <article className="context-point">
                <span className="eyebrow">03</span>
                <strong>Escolhas</strong>
                <p>Escolhas merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/psicologo/modelo-01/space.webp" alt="Ambiente de atendimento de Entrelinhas — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Psicologia / 01</span>
                <strong>Presença</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Camila Freitas</h2>
              <p>Você não precisa chegar com todas as respostas. O processo começa com escuta e respeito ao seu tempo.</p>
              <p>Psicologia clínica com escuta cuidadosa e respeito à singularidade de cada história. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRP 00/000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar primeira conversa ↗</a>
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
        <section className="section" id="destaque">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Um olhar mais próximo</span>
              <h2>O que pode encontrar espaço aqui</h2>
              <div className="feature-grid">
                <div>
                  <h3>Psicoterapia individual</h3>
                  <p>Psicologia clínica com escuta cuidadosa e respeito à singularidade de cada história. Você não precisa chegar com todas as respostas. O processo começa com escuta e respeito ao seu tempo.</p>
                </div>
                <div>
                  <h3>O que levar para o primeiro encontro</h3>
                  <p>Traga suas dúvidas, expectativas e informações que considera importantes. A proposta é começar com uma conversa clara, respeitando seu contexto.</p>
                  <a href="#contato" className="text-link">Conversar com Camila Freitas ↗</a>
                </div>
              </div>
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
              <p>Psicologia clínica com escuta cuidadosa e respeito à singularidade de cada história.</p>
              <address>Rua Exemplo, 100 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Psicoterapia individual", "Vida adulta", "Autoconhecimento"]} action="Solicitar primeira conversa"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Entrelinhas</strong>
            <p>CRP 00/000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/psicologo">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
