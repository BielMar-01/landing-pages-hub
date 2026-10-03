import { useDocumentTitle } from '../../../../hooks/useDocumentTitle'
import { useReveal } from '../../../../hooks/useReveal'
import { CareHeader } from './components/CareHeader'
import { About, Hero, TrustBar } from './components/CareIntro'
import { Doctors, Specialties } from './components/CareServices'
import { Facilities, PatientJourney, Statistics } from './components/CareExperience'
import { FAQ, HealthContent, Testimonials } from './components/CareEditorial'
import { Appointment, CareFooter, FinalCTA, Location, WhatsApp } from './components/CareContact'
import './branding/essencial-care.tokens.css'
import './medical-essential.css'

export function MedicalEssentialPage() {
  useDocumentTitle('Essencial Care | Modelo Médico | OrbisCore')
  const ref = useReveal()
  return (
    <div className="medical-essential" ref={ref}>
      <a className="ec-skip" href="#ec-main">Pular para o conteúdo</a>
      <CareHeader />
      <main id="ec-main">
        <Hero />
        <TrustBar />
        <Specialties />
        <About />
        <Doctors />
        <PatientJourney />
        <Facilities />
        <Statistics />
        <Testimonials />
        <HealthContent />
        <FAQ />
        <Appointment />
        <Location />
        <FinalCTA />
      </main>
      <CareFooter />
      <WhatsApp />
    </div>
  )
}
