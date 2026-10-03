import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-06.css';
export default function ImobiliarioModel06Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className="lp-imobiliario-6">
      <div className="wrap">
        <Link to="/imobiliario" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Imóveis</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Reserva do Parque<small>Imóveis </small>
          </a>
          <nav id="lp-imobiliario-6-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Reserva do Parque">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-imobiliario-6-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Imóveis · Acolhedor</span>
                <h1>Mais natureza no caminho de casa.</h1>
                <p className="lead">Um condomínio fictício que aproxima espaços abertos, convivência e tranquilidade.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar visita <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Explorar possibilidades</a>
                </div>
              </div>
              <LocalPhoto src="/images/imobiliario/modelo-06/hero.webp" alt="Imóveis: arquitetura e ambientes — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Imóveis / 06</span>
                  <strong>ER</strong>
                  <small>Espaços para imaginar sua próxima história.</small>
                </div>
              </LocalPhoto>
            </div>
            <div className="facts">
                <div><strong>Curadoria</strong>Escolhas orientadas pela sua rotina</div>
                <div><strong>Informações</strong>Planta, localização e características</div>
                <div><strong>Visitas</strong>Conheça cada detalhe com calma</div>
              </div>
            </div>
          </section>
        <section className="section">
          <div className="wrap">
            <span className="eyebrow">Imóveis / 06</span>
            <h2>Uma vida conectada aos espaços abertos</h2>
            <div className="context-index">
              <article>
                <span>01</span>
                <h3>Áreas verdes</h3>
                <p>Áreas verdes faz parte da primeira conversa. Um conceito de condomínio demonstrativo para conhecer com calma.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Convivência</h3>
                <p>Conheça as possibilidades de convivência no seu contexto. Localização, planta e estilo de vida entram na mesma conversa. Conheça as informações antes de decidir sua próxima visita.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Acesso</h3>
                <p>Acesso merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</p>
              </article>
            </div>
            <p>Um conceito de condomínio demonstrativo para conhecer com calma.</p>
          </div>
        </section>
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Possibilidades</span>
                <h2>O necessário, com atenção.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Residências</h3>
                <p>Explore localização, características e adequação ao seu momento de vida.</p>
                <a href="#contato">Conhecer opções ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Áreas de convivência</h3>
                <p>Conheça ambientes e informações que ajudam a organizar uma visita.</p>
                <a href="#contato">Conhecer opções ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Localização</h3>
                <p>Converse sobre suas preferências e descubra novas possibilidades de espaços.</p>
                <a href="#contato">Conhecer opções ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <span className="eyebrow">Um olhar mais próximo</span>
            <h2>Convivência que começa do lado de fora.</h2>
            <div className="gallery">
              <LocalPhoto src="/images/imobiliario/modelo-06/living.webp" alt="Sala com luz natural — imóvel demonstrativo">
                <div className="photo-fallback">
                  <span>Ambientes / 01</span>
                  <strong>Estar</strong>
                </div>
              </LocalPhoto>
              <LocalPhoto src="/images/imobiliario/modelo-06/exterior.webp" alt="Fachada do imóvel — imóvel demonstrativo">
                <div className="photo-fallback">
                  <span>Ambientes / 02</span>
                  <strong>Morar</strong>
                </div>
              </LocalPhoto>
              <LocalPhoto src="/images/imobiliario/modelo-06/bedroom.webp" alt="Quarto do imóvel — imóvel demonstrativo">
                <div className="photo-fallback">
                  <span>Ambientes / 03</span>
                  <strong>Pausar</strong>
                </div>
              </LocalPhoto>
              <LocalPhoto src="/images/imobiliario/modelo-06/garden.webp" alt="Jardim e área externa — imóvel demonstrativo">
                <div className="photo-fallback">
                  <span>Ambientes / 04</span>
                  <strong>Respirar</strong>
                </div>
              </LocalPhoto>
            </div>
            <p className="gallery-caption">Condomínio demonstrativo · áreas verdes · espaços de convivência. Imagens, características e metragens ilustrativas.</p>
            <div className="feature-grid">
              <div className="feature">
                <h3>Espaços que se conectam</h3>
                <p>Ambientes integrados, circulação confortável e áreas de convivência apresentadas de forma ilustrativa.</p>
              </div>
              <div className="feature">
                <h3>Explore a localização</h3>
                <p>Bairro Jardim Exemplo, São Paulo. Endereço fictício, próximo a um parque e a serviços de bairro no conceito do projeto.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/imobiliario/modelo-06/space.webp" alt="Ambiente arquitetônico de Reserva do Parque — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Imóveis / 06</span>
                <strong>Espaço</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Equipe Reserva</h2>
              <p>Localização, planta e estilo de vida entram na mesma conversa. Conheça as informações antes de decidir sua próxima visita.</p>
              <p>Um condomínio fictício que aproxima espaços abertos, convivência e tranquilidade. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRECI 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar visita ↗</a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap faq">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Antes de dar o próximo passo.</h2>
            <details>
              <summary>Os imóveis e valores estão disponíveis para negociação?</summary>
              <p>Não. Imóveis, endereços, metragens e valores são fictícios. Esta demonstração não publica ofertas reais nem recebe propostas comerciais.</p>
            </details>
            <details>
              <summary>Como solicitar visita?</summary>
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
              <h2>O próximo endereço começa com uma conversa.</h2>
              <p>Um condomínio fictício que aproxima espaços abertos, convivência e tranquilidade.</p>
              <address>Rua Exemplo, 150 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Residências", "Áreas de convivência", "Localização"]} action="Solicitar visita"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Reserva do Parque</strong>
            <p>CRECI 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/imobiliario">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
