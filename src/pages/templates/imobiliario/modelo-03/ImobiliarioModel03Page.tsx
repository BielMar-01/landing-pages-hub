import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-03.css';
export default function ImobiliarioModel03Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [filter, setFilter] = useState('Todos');
    return <div className="lp-imobiliario-3">
      <div className="wrap">
        <Link to="/imobiliario" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Imóveis</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Élevé Residences<small>Imóveis </small>
          </a>
          <nav id="lp-imobiliario-3-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Élevé Residences">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-imobiliario-3-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <LocalPhoto src="/images/imobiliario/modelo-03/hero.webp" alt="Imóveis: arquitetura e ambientes — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Imóveis / 03</span>
                  <strong>IM</strong>
                  <small>Espaços para imaginar sua próxima história.</small>
                </div>
              </LocalPhoto>
              <div className="hero-copy">
                <span className="eyebrow">Imóveis · Exclusivo</span>
                <h1>Espaços extraordinários. Escolhas pessoais.</h1>
                <p className="lead">Residências selecionadas pela arquitetura, pela localização e pelos detalhes.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar visita <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Explorar possibilidades</a>
                </div>
              </div>
            </div>
            <div className="facts">
                <div><strong>Curadoria</strong>Escolhas orientadas pela sua rotina</div>
                <div><strong>Informações</strong>Planta, localização e características</div>
                <div><strong>Visitas</strong>Conheça cada detalhe com calma</div>
              </div>
            </div>
          </section>
        <section className="section" id="destaque">
          <div className="wrap">
            <span className="eyebrow">Um olhar mais próximo</span>
            <h2>Encontre um espaço com a sua cara.</h2>
            <div className="filter-row" aria-label="Filtrar imóveis">{['Todos', 'Apartamento', 'Casa'].map(type => <button key={type} type="button" aria-pressed={filter === type} onClick={() => setFilter(type)}>{type}</button>)}</div>
            <div className="property-grid">{[
              { name: 'Apartamento Jardim', type: 'Apartamento', size: '92 m² · 2 quartos · 1 vaga', price: 'R$ 680.000', image: 'property-01' },
              { name: 'Casa Vila Serena', type: 'Casa', size: '180 m² · 3 quartos · 2 vagas', price: 'R$ 1.250.000', image: 'property-02' },
              { name: 'Apartamento Horizonte', type: 'Apartamento', size: '118 m² · 3 quartos · 2 vagas', price: 'R$ 920.000', image: 'property-03' },
              ].filter(property => filter === 'Todos' || property.type === filter).map(property => <article className="property" key={property.name}>
                <LocalPhoto src={`/images/imobiliario/modelo-03/${property.image}.webp`} alt={`${property.name} — imóvel fictício`}>
                  <div className="photo-fallback">
                    <span>{property.type}</span>
                    <strong>{property.size.split(' · ')[0]}</strong>
                    <small>Imóvel demonstrativo</small>
                  </div>
                </LocalPhoto>
                <h3>{property.name}</h3>
                <p>{property.size}<br />{property.price} · valor fictício</p>
                <a href="#contato" className="text-link">Solicitar informações ↗</a>
              </article>)}</div>
            <p className="note">Seleção e valores fictícios. O filtro funciona localmente.</p>
          </div>
        </section>
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Possibilidades</span>
                <h2>Seu contexto orienta cada escolha.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Coberturas</h3>
                <p>Explore localização, características e adequação ao seu momento de vida.</p>
                <a href="#contato">Conhecer opções ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Casas de arquitetura</h3>
                <p>Conheça ambientes e informações que ajudam a organizar uma visita.</p>
                <a href="#contato">Conhecer opções ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Residências exclusivas</h3>
                <p>Converse sobre suas preferências e descubra novas possibilidades de espaços.</p>
                <a href="#contato">Conhecer opções ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="context-letter">
              <span className="eyebrow">Imóveis / 03</span>
              <h2>Arquitetura, endereço e singularidade</h2>
              <blockquote>“Uma seleção ilustrativa para quem procura características específicas.”</blockquote>
              <cite>Isadora Melo · perspectiva ilustrativa</cite>
              <div className="context-strip">
                <span>Projetos</span>
                <span>Materiais</span>
                <span>Ambientes</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="processo">
          <div className="wrap">
            <span className="eyebrow">O próximo passo</span>
            <h2>Da primeira conversa à visita.</h2>
            <div className="steps">
              <article className="step">
                <span className="eyebrow">01</span>
                <strong>Definir o que você procura</strong>
                <p>Compartilhe suas necessidades e tire as primeiras dúvidas sobre o atendimento.</p>
              </article>
              <article className="step">
                <span className="eyebrow">02</span>
                <strong>Conhecer os imóveis</strong>
                <p>As informações são consideradas para conversar sobre as opções e definir os próximos passos.</p>
              </article>
              <article className="step">
                <span className="eyebrow">03</span>
                <strong>Conversar sobre a proposta</strong>
                <p>O planejamento pode ser revisado conforme seu contexto e as orientações profissionais.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/imobiliario/modelo-03/space.webp" alt="Ambiente arquitetônico de Élevé Residences — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Imóveis / 03</span>
                <strong>Espaço</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Isadora Melo</h2>
              <p>Localização, planta e estilo de vida entram na mesma conversa. Conheça as informações antes de decidir sua próxima visita.</p>
              <p>Residências selecionadas pela arquitetura, pela localização e pelos detalhes. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <div className="credentials">
                <strong>Uma prática com responsabilidade</strong>
                <ul>
                  <li>Coberturas como área de atuação.</li>
                  <li>Atenção à comunicação e às decisões individuais.</li>
                  <li>Orientação clara em cada etapa.</li>
                </ul>
                <small>CRECI 000000 · Perfil e trajetória demonstrativos.</small>
              </div>
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
              <p>Residências selecionadas pela arquitetura, pela localização e pelos detalhes.</p>
              <address>Rua Exemplo, 120 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Coberturas", "Casas de arquitetura", "Residências exclusivas"]} action="Solicitar visita"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Élevé Residences</strong>
            <p>CRECI 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/imobiliario">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
