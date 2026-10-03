import { ArrowUpRight, CalendarDays, Heart, Search, Star, Stethoscope, Users } from 'lucide-react'
import { useState } from 'react'
import { facilities } from '../care-data'
import { CareModal, CarePhoto, SectionIntro } from './CarePrimitives'

export function PatientJourney() {
  const steps = [[Search,'Escolha','a especialidade','Encontre a área de cuidado que você procura.'],[CalendarDays,'Agende','data e horário','Converse com a equipe sobre a sua disponibilidade.'],[Stethoscope,'Consulte','com nossos profissionais','Uma avaliação cuidadosa, com tempo para ouvir.'],[Heart,'Acompanhe','seu tratamento','Conte com orientação e continuidade no cuidado.']] as const
  return <section className="ec-section ec-journey" id="como-funciona"><div className="ec-container" data-reveal><SectionIntro eyebrow="Como funciona" title="Sua jornada de cuidado em 4 passos.">Um processo simples, pensado para tornar sua experiência mais tranquila.</SectionIntro><ol className="ec-timeline">{steps.map(([Icon,title,subtitle,description],i)=><li key={title} data-reveal style={{transitionDelay:`${i*90}ms`}}><span className="ec-step-icon"><Icon size={27} strokeWidth={1.5} /></span><small>0{i+1}</small><h3>{title}<span>{subtitle}</span></h3><p>{description}</p></li>)}</ol></div></section>
}

export function Facilities() {
  const [selected, setSelected] = useState<number | null>(null)
  const place = selected === null ? null : facilities[selected]
  return <section className="ec-section ec-facilities" id="estrutura"><div className="ec-container"><div className="ec-section-row" data-reveal><SectionIntro eyebrow="Nossa estrutura" title={<>Ambientes modernos<br />e acolhedores.</>}>Conforto, privacidade e atenção aos detalhes. Um espaço pensado para receber você.</SectionIntro></div><div className="ec-facility-grid">{facilities.map((facility,i)=><button type="button" className={`ec-facility ec-facility--${i+1}`} key={facility.name} onClick={()=>setSelected(i)} data-reveal aria-label={`Ampliar fotografia: ${facility.name}`}><CarePhoto image={facility.image} alt={facility.name} /><span className="ec-facility-caption"><span><strong>{facility.name}</strong><small>{facility.detail}</small></span><ArrowUpRight size={20} /></span></button>)}</div>
    <CareModal open={place !== null} title={place?.name || 'Nossa estrutura'} onClose={()=>setSelected(null)}>{place && <><CarePhoto image={place.image} alt={place.name} /><p>{place.detail}</p></>}</CareModal>
  </div></section>
}

export function Statistics() {
  const stats = [[Users,'+5.000','pacientes atendidos'],[Heart,'+10','anos de experiência'],[Stethoscope,'6','especialidades'],[Star,'4,9','avaliação no Google*']] as const
  return <section className="ec-statistics" aria-label="A clínica em números"><div className="ec-container"><div className="ec-stat-grid" data-reveal>{stats.map(([Icon,value,label])=><div key={label}><span><Icon size={28} strokeWidth={1.5} /></span><div><strong>{value}</strong><small>{label}</small></div></div>)}</div><p className="ec-disclaimer">*Números e avaliação fictícios para demonstração. Não representam dados de uma clínica real.</p></div></section>
}
