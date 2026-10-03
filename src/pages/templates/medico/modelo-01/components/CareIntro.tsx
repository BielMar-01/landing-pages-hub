import { ArrowLeft, Check, Clock3, Heart, MapPin, MonitorCheck, ShieldCheck, Stethoscope, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CareButton, CarePhoto, SectionIntro } from './CarePrimitives'

export function Hero() {
  return <section className="ec-hero" id="inicio"><div className="ec-container">
    <Link to="/medico" className="ec-back"><ArrowLeft size={14} />Voltar aos modelos</Link>
    <div className="ec-hero-grid"><div className="ec-hero-copy"><span className="ec-eyebrow">Medicina próxima. Cuidado completo.</span><h1>Cuidado médico<br />que começa<br /><em>ouvindo você.</em></h1><p>Atendimento humanizado, uma equipe especializada e tempo para cuidar da sua saúde em cada etapa da vida.</p>
      <div className="ec-actions"><CareButton>Agendar consulta</CareButton><CareButton secondary href="#sobre">Conheça a clínica</CareButton></div>
      <div className="ec-social-proof"><div className="ec-avatars">{[1,2,3].map(i=><img key={i} src={`/images/medico/shared/patient-0${i}.webp`} width={48} height={48} alt="" />)}</div><div><strong>+5.000 <span>pacientes atendidos</span></strong><span className="ec-stars" aria-label="Cinco estrelas">★★★★★ <small>4,9 no Google*</small></span></div></div><small className="ec-disclaimer">*Indicadores ilustrativos de uma clínica fictícia.</small>
    </div><div className="ec-hero-visual"><CarePhoto image="hero-doctor" alt="Médica em um consultório com iluminação natural" eager position="67% center" />
      <div className="ec-float ec-float--care"><Heart size={24} /><span>Atendimento<strong>humanizado</strong></span></div><div className="ec-float ec-float--family"><Users size={26} /><span>Saúde para<strong>toda a família</strong></span></div>
    </div></div>
  </div></section>
}

export function TrustBar() {
  const benefits = [[Heart,'Atendimento humanizado'],[Stethoscope,'Equipe especializada'],[ShieldCheck,'Estrutura moderna'],[MonitorCheck,'Tecnologia de ponta'],[MapPin,'Fácil acesso'],[Clock3,'Horários flexíveis']] as const
  return <section className="ec-trust" aria-label="Diferenciais da clínica"><div className="ec-container ec-trust-grid">{benefits.map(([Icon,label]) => <div key={label}><span><Icon size={22} strokeWidth={1.5} /></span><strong>{label}</strong></div>)}</div></section>
}

export function About() {
  return <section className="ec-section ec-about" id="sobre"><div className="ec-container ec-about-grid" data-reveal>
    <div className="ec-about-image"><CarePhoto image="clinic-reception" alt="Recepção da clínica com madeira, plantas e tons naturais" /><div className="ec-float ec-about-badge"><Heart size={28} /><span><strong>+10 anos</strong>cuidando de pessoas</span></div></div>
    <div className="ec-about-copy"><SectionIntro eyebrow="Nossa história" title={<>Uma clínica feita<br />para cuidar de pessoas.</>}>Unimos atendimento humanizado, estrutura moderna e tecnologia para oferecer uma experiência de saúde mais próxima.</SectionIntro>
      <p>Acreditamos que uma boa consulta começa com uma boa conversa. Por isso, cada pessoa encontra aqui atenção à sua história, orientações claras e continuidade no cuidado.</p>
      <ul className="ec-checklist">{['Mais de 10 anos de história','Atendimento para toda a família','Tecnologia e conforto','Acompanhamento contínuo'].map(text=><li key={text}><Check size={17} />{text}</li>)}</ul><CareButton href="#equipe">Conheça quem cuida de você</CareButton>
    </div><CarePhoto className="ec-about-detail" image="clinic-detail" alt="Detalhes do ambiente acolhedor da clínica" />
  </div></section>
}
