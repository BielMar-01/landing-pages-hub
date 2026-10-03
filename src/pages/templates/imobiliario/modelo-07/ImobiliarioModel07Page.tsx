import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-07.css';
export default function ImobiliarioModel07Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [filter, setFilter] = useState('Todos');
    return <div className="lp-imobiliario-7">
      <div className="wrap">
        <Link to="/imobiliario" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Imóveis</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Metro Invest<small>Imóveis </small>
          </a>
          <nav id="lp-imobiliario-7-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Metro Invest">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-imobiliario-7-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Imóveis · Digital</span>
                <h1>Olhe para o imóvel. Entenda o contexto.</h1>
                <p className="lead">Informações organizadas para avaliar localização, características e possibilidades, sem promessas de retorno.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar visita <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Explorar possibilidades</a>
                </div>
              </div>
              <div className="status-panel">
                <span className="eyebrow">Sua seleção</span>
                <h3>Organização que aproxima.</h3>
                <span>01 / Análise de localização</span>
                <span>02 / Curadoria patrimonial</span>
                <span>03 / Informações do empreendimento</span>
                <small>Interface ilustrativa. Dados demonstrativos.</small>
              </div>
            </div>
            <div className="facts">
                <div><strong>Curadoria</strong>Escolhas orientadas pela sua rotina</div>
                <div><strong>Informações</strong>Planta, localização e características</div>
                <div><strong>Visitas</strong>Conheça cada detalhe com calma</div>
              </div>
            </div>
          </section>
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Possibilidades</span>
                <h2>Diferentes necessidades encontram lugar.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Análise de localização</h3>
                <p>Explore localização, características e adequação ao seu momento de vida.</p>
                <a href="#contato">Conhecer opções ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Curadoria patrimonial</h3>
                <p>Conheça ambientes e informações que ajudam a organizar uma visita.</p>
                <a href="#contato">Conhecer opções ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Informações do empreendimento</h3>
                <p>Converse sobre suas preferências e descubra novas possibilidades de espaços.</p>
                <a href="#contato">Conhecer opções ↗</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="feature">
              <span className="eyebrow">Imóveis / 07</span>
              <h2>Informação antes de expectativa</h2>
              <p>Uma análise imobiliária considera contexto e riscos, sem garantia de valorização.</p>
              <div className="context-strip">
                <span>Localização</span>
                <span>Custos</span>
                <span>Características</span>
              </div>
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
                <LocalPhoto src={`/images/imobiliario/modelo-07/${property.image}.webp`} alt={`${property.name} — imóvel fictício`}>
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
            <LocalPhoto src="/images/imobiliario/modelo-07/space.webp" alt="Ambiente arquitetônico de Metro Invest — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Imóveis / 07</span>
                <strong>Espaço</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Felipe Araujo</h2>
              <p>Localização, planta e estilo de vida entram na mesma conversa. Conheça as informações antes de decidir sua próxima visita.</p>
              <p>Informações organizadas para avaliar localização, características e possibilidades, sem promessas de retorno. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
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
              <p>Informações organizadas para avaliar localização, características e possibilidades, sem promessas de retorno.</p>
              <address>Rua Exemplo, 160 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Análise de localização", "Curadoria patrimonial", "Informações do empreendimento"]} action="Solicitar visita"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Metro Invest</strong>
            <p>CRECI 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/imobiliario">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
