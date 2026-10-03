import { ArrowRight, Check, Stethoscope } from 'lucide-react'
import { useState } from 'react'
import { doctors, specialties } from '../care-data'
import { CareButton, CareModal, CarePhoto, SectionIntro } from './CarePrimitives'

export function Specialties() {
  return <section className="ec-section ec-specialties" id="especialidades"><div className="ec-container"><div className="ec-section-row" data-reveal><SectionIntro eyebrow="Especialidades" title={<>Cuidado completo para<br />cada etapa da sua vida.</>} /><a className="ec-text-link" href="#agendamento">Encontre sua especialidade<ArrowRight size={17} /></a></div>
    <div className="ec-specialty-grid">{specialties.map(({name,image,icon:Icon,description},i)=><a href="#agendamento" className={`ec-specialty ec-specialty--${i+1}`} key={name} data-reveal style={{transitionDelay:`${i%3*65}ms`}}><CarePhoto image={image} alt={`Atendimento ilustrativo de ${name}`} /><div className="ec-specialty-info"><Icon size={25} strokeWidth={1.4} /><div><h3>{name}</h3><p>{description}</p></div><ArrowRight size={18} className="ec-card-arrow" /></div></a>)}</div>
  </div></section>
}

export function Doctors() {
  const [selected, setSelected] = useState<number | null>(null)
  const doctor = selected === null ? null : doctors[selected]
  return <section className="ec-section ec-doctors" id="equipe"><div className="ec-container"><div className="ec-team-intro" data-reveal><SectionIntro eyebrow="Nossa equipe" title={<>Profissionais que cuidam<br />de você com dedicação.</>}>Experiência técnica e escuta cuidadosa. Diferentes especialidades, uma mesma atenção às pessoas.</SectionIntro><CarePhoto image="team" alt="Equipe médica reunida na recepção da clínica" /></div>
    <div className="ec-doctor-grid">{doctors.map((person,i)=><article className="ec-doctor-card" key={person.name} data-reveal style={{transitionDelay:`${i*65}ms`}}><CarePhoto image={person.image} alt={`Retrato ilustrativo de ${person.name}, personagem fictício`} position={person.position} /><div className="ec-doctor-info"><h3>{person.name}</h3><p>{person.specialty}</p><small>CRM/SP 000000 · Perfil fictício</small><div className="ec-doctor-bottom"><span><i />Disponível hoje*</span><button type="button" onClick={()=>setSelected(i)} aria-label={`Ver perfil de ${person.name}`}>Ver perfil<ArrowRight size={16} /></button></div></div></article>)}</div><p className="ec-disclaimer">*Disponibilidade demonstrativa. Equipe, registros e trajetórias são fictícios.</p>
    <CareModal open={doctor !== null} title={doctor?.name || 'Perfil profissional'} onClose={()=>setSelected(null)}>{doctor && <><CarePhoto image={doctor.image} alt={`Retrato ilustrativo de ${doctor.name}`} position={doctor.position} /><span className="ec-eyebrow">{doctor.specialty} · CRM/SP 000000</span><p>{doctor.bio}</p><ul className="ec-checklist"><li><Check size={17} />Consulta com atenção ao histórico individual.</li><li><Stethoscope size={17} />Orientações claras e acompanhamento responsável.</li></ul><p className="ec-disclaimer">Formação e perfil apresentados para demonstração, sem associação a um profissional real.</p><CareButton onClick={()=>setSelected(null)}>Solicitar consulta</CareButton></>}</CareModal>
  </div></section>
}
