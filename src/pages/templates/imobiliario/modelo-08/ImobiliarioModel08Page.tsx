import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { LocalPhoto } from '../../../../components/common/LocalPhoto';
import { DemoInquiry } from '../../../../components/common/DemoInquiry';
import './modelo-08.css';
export default function ImobiliarioModel08Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [filter, setFilter] = useState('Todos');
    return <div className="lp-imobiliario-8">
      <div className="wrap">
        <Link to="/imobiliario" className="back">
          <ArrowLeft size={15}/> Voltar aos modelos de Imóveis</Link>
      </div>
      
      <header>
        <div className="wrap header-row">
          <a href="#inicio" className="brand">Habita<small>Imóveis </small>
          </a>
          <nav id="lp-imobiliario-8-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação de Habita">
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato ↗</a>
          </nav>
          <button className="menu" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="lp-imobiliario-8-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Imóveis · Criativo</span>
                <h1>Morar bem tem muitas formas.</h1>
                <p className="lead">Uma imobiliária contemporânea para explorar espaços com personalidade e encontrar novas possibilidades.</p>
                <div className="actions">
                  <a className="button" href="#contato">Solicitar visita <ArrowUpRight size={17}/>
                  </a>
                  <a className="text-link" href="#servicos">Explorar possibilidades</a>
                </div>
              </div>
              <LocalPhoto src="/images/imobiliario/modelo-08/hero.webp" alt="Imóveis: arquitetura e ambientes — fotografia demonstrativa" className="visual" eager>
                <div className="photo-fallback">
                  <span>Imóveis / 08</span>
                  <strong>EH</strong>
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
            <div className="section-title">
              <div>
                <span className="eyebrow">Imóveis / 08</span>
                <h2>Descubra diferentes jeitos de morar</h2>
              </div>
              <p>Imóveis com personalidade para explorar novas possibilidades de rotina.</p>
            </div>
            <table className="context-table">
              <caption className="note">Pontos de atenção na experiência de imóveis</caption>
              <thead>
                <tr>
                  <th scope="col">O que observar</th>
                  <th scope="col">Como conversar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Urbano</th>
                  <td>Urbano faz parte da primeira conversa. Imóveis com personalidade para explorar novas possibilidades de rotina.</td>
                </tr>
                <tr>
                  <th scope="row">Acolhedor</th>
                  <td>Conheça as possibilidades de acolhedor no seu contexto. Localização, planta e estilo de vida entram na mesma conversa. Conheça as informações antes de decidir sua próxima visita.</td>
                </tr>
                <tr>
                  <th scope="row">Flexível</th>
                  <td>Flexível merece espaço no planejamento. As orientações são conversadas e podem ser revistas ao longo do processo.</td>
                </tr>
              </tbody>
            </table>
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
                <LocalPhoto src={`/images/imobiliario/modelo-08/${property.image}.webp`} alt={`${property.name} — imóvel fictício`}>
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
        <section className="section" id="sobre">
          <div className="wrap story">
            <LocalPhoto src="/images/imobiliario/modelo-08/space.webp" alt="Ambiente arquitetônico de Habita — fotografia demonstrativa" className="visual">
              <div className="photo-fallback">
                <span>Imóveis / 08</span>
                <strong>Espaço</strong>
                <small>Um espaço pensado para você.</small>
              </div>
            </LocalPhoto>
            <div>
              <span className="eyebrow">Nossa proposta</span>
              <h2>Equipe Habita</h2>
              <p>Localização, planta e estilo de vida entram na mesma conversa. Conheça as informações antes de decidir sua próxima visita.</p>
              <p>Uma imobiliária contemporânea para explorar espaços com personalidade e encontrar novas possibilidades. Cada encontro é uma oportunidade de compreender melhor o que faz sentido para você.</p>
              <p className="note">CRECI 000000 · Nomes, equipe e dados fictícios.</p>
              <a href="#contato" className="text-link">Solicitar visita ↗</a>
            </div>
          </div>
        </section>
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="section-title">
              <div>
                <span className="eyebrow">Possibilidades</span>
                <h2>Uma experiência construída para você.</h2>
              </div>
            </div>
            <div className="service-list">
              <article className="service">
                <span>01</span>
                <h3>Apartamentos urbanos</h3>
                <p>Explore localização, características e adequação ao seu momento de vida. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conhecer opções ↗</a>
              </article>
              <article className="service">
                <span>02</span>
                <h3>Casas</h3>
                <p>Conheça ambientes e informações que ajudam a organizar uma visita. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conhecer opções ↗</a>
              </article>
              <article className="service">
                <span>03</span>
                <h3>Locação residencial</h3>
                <p>Converse sobre suas preferências e descubra novas possibilidades de espaços. Atendimento particular com atenção individual.</p>
                <a href="#contato">Conhecer opções ↗</a>
              </article>
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
              <p>Uma imobiliária contemporânea para explorar espaços com personalidade e encontrar novas possibilidades.</p>
              <address>Rua Exemplo, 170 · Jardim Modelo<br />São Paulo, SP · endereço fictício<br />Segunda a sexta, 9h às 18h<br />contato@example.com</address>
              <p className="note">Site de demonstração. Não há atendimento real ou envio de dados.</p>
            </div>
            <DemoInquiry services={["Apartamentos urbanos", "Casas", "Locação residencial"]} action="Solicitar visita"/>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div>
            <strong>Habita</strong>
            <p>CRECI 000000 · Dados e profissionais fictícios.<br />Demonstração do Landing Pages Hub.</p>
          </div>
          <a href="#inicio">Voltar ao início ↑</a>
          <Link to="/imobiliario">Explorar outros modelos ↗</Link>
        </div>
      </footer>
    </div>;
}
