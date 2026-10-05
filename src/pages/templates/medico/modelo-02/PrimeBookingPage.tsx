import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react'
import { doctors, primePath, specialties } from './prime-data'
import { availablePrimeSlots, dateKey, formatPrimeDate, primeToday } from './prime-booking'
import { PrimeButton, PrimeLayout, PrimePhoto } from './PrimeLayout'

const labels = ['Especialidade', 'Profissional', 'Data e horário', 'Seus dados', 'Confirmação']
export default function PrimeBookingPage() {
  const [params] = useSearchParams()
  const [specialty, setSpecialty] = useState(() => specialties.some(item => item.id === params.get('especialidade')) ? params.get('especialidade')! : '')
  const [doctor, setDoctor] = useState(() => doctors.some(item => item.id === params.get('profissional') && item.specialty === params.get('especialidade')) ? params.get('profissional')! : '')
  const [step, setStep] = useState(0)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [month, setMonth] = useState(() => primeToday().slice(0, 7))
  const [data, setData] = useState({ name: '', email: '', phone: '', consent: false })
  const [error, setError] = useState('')
  const [finished, setFinished] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  const selectedSpecialty = specialties.find(item => item.id === specialty)
  const selectedDoctor = doctors.find(item => item.id === doctor && item.specialty === specialty)
  const matchingDoctors = doctors.filter(item => item.specialty === specialty)
  const slots = date ? availablePrimeSlots(date) : []
  const [year, monthNumber] = month.split('-').map(Number)
  const monthIndex = monthNumber - 1
  const firstOffset = (new Date(Date.UTC(year, monthIndex, 1)).getUTCDay() + 6) % 7
  const days = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate()
  const today = primeToday()
  useEffect(() => { if (step > 0 || finished) heading.current?.focus() }, [step, finished])
  function goStep(next: number) { setError(''); setStep(next) }
  function changeSpecialty(value: string) {
    if (value !== specialty) { setSpecialty(value); setDoctor(''); setDate(''); setTime('') }
    setError('')
  }
  function next() {
    if (step === 0 && !selectedSpecialty) { setError('Escolha uma especialidade para continuar.'); return }
    if (step === 1 && !selectedDoctor) { setError('Escolha um profissional para continuar.'); return }
    if (step === 2 && (!date || !availablePrimeSlots(date).includes(time))) { setError('Selecione uma data e um horário futuro disponíveis.'); return }
    goStep(step + 1)
  }
  function finish() {
    if (!selectedSpecialty || !selectedDoctor || !availablePrimeSlots(date).includes(time)) { setError('O horário já passou ou sua seleção está incompleta. Escolha novamente a data e o horário.'); setStep(2); return }
    if (!data.name.trim() || !data.email.trim() || data.phone.replace(/\D/g, '').length < 10 || !data.consent) { setError('Revise seus dados para continuar.'); setStep(3); return }
    setData({ name: '', email: '', phone: '', consent: false })
    setError(''); setFinished(true)
  }
  function moveMonth(offset: number) {
    const nextMonth = new Date(Date.UTC(year, monthIndex + offset, 1))
    setMonth(dateKey(nextMonth.getUTCFullYear(), nextMonth.getUTCMonth(), 1).slice(0, 7))
  }
  const summary = <div className="ep-booking-summary"><dl><dt>Especialidade</dt><dd>{selectedSpecialty?.name}</dd><dt>Profissional</dt><dd>{selectedDoctor?.name}</dd><dt>Data</dt><dd>{date && formatPrimeDate(date)}</dd><dt>Horário</dt><dd>{time} · Horário de São Paulo</dd><dt>Local</dt><dd>Unidade ilustrativa · Av. Paulista, 1000</dd></dl></div>
  return <PrimeLayout><section className="ep-section ep-booking-section"><div className="ep-container"><div className="ep-booking-title"><Link className="ep-back" to={primePath()}><ArrowLeft size={16} />Voltar ao início</Link><span className="ep-eyebrow">Seu primeiro passo de cuidado</span><h1>Um tempo reservado.<br /><em>Para você.</em></h1><p>Escolha sua especialidade, seu profissional e o melhor momento. Agendamento demonstrativo, sem reserva real.</p></div>
    <div className="ep-booking-grid"><aside className="ep-booking-sidebar"><ol className="ep-booking-steps" aria-label="Etapas de agendamento">{labels.map((label, index) => <li key={label}><button disabled={index > step || finished} aria-current={step === index ? 'step' : undefined} onClick={() => goStep(index)}><span>{index < step ? <Check size={15} /> : index + 1}</span><strong>{label}<small>{index === 0 ? selectedSpecialty?.name : index === 1 ? selectedDoctor?.name : index === 2 ? date && `${date.split('-').reverse().join('/')} · ${time}` : 'Simulação no navegador'}</small></strong></button></li>)}</ol><p className="ep-note"><ShieldCheck size={18} /> Seus dados não são enviados ou armazenados. Use informações fictícias.</p></aside>
    <div className="ep-booking-card">{finished ? <div className="ep-success" role="status"><CheckCircle2 size={38} /><h2 ref={heading} tabIndex={-1}>Experiência concluída.</h2><p>Seu agendamento foi <strong>simulado</strong>. Não há reserva de consulta, envio de confirmação ou cobrança.</p>{summary}<button className="ep-button" onClick={() => { setFinished(false); setStep(0); setSpecialty(''); setDoctor(''); setDate(''); setTime('') }}>Simular outro agendamento<ArrowRight size={17} /></button><div className="ep-actions"><PrimeButton secondary to={primePath()}>Voltar ao início</PrimeButton></div></div> : <><span className="ep-eyebrow">Passo {step + 1} de 5</span><h2 ref={heading} tabIndex={-1}>{['Escolha sua especialidade', 'Quem vai acolher você?', 'Qual é o melhor momento?', 'Como podemos chamar você?', 'Tudo certo para continuar?'][step]}</h2>
    {step === 0 && <><p>Selecione a área de cuidado para conhecer os profissionais.</p><div className="ep-choice-grid">{specialties.map(item => <button key={item.id} className="ep-choice" aria-pressed={specialty === item.id} onClick={() => changeSpecialty(item.id)}><PrimePhoto name={item.image} alt="" /><span><strong>{item.name}</strong><small>Consulta particular</small></span>{specialty === item.id && <Check size={18} />}</button>)}</div></>}
    {step === 1 && <><p>Profissionais de {selectedSpecialty?.name}. Perfis e registros fictícios.</p><div className="ep-choice-grid">{matchingDoctors.map(item => <button key={item.id} className="ep-choice" aria-pressed={doctor === item.id} onClick={() => { if (doctor !== item.id) { setDoctor(item.id); setDate(''); setTime('') } setError('') }}><PrimePhoto name={item.image} alt={`Retrato ilustrativo de ${item.name}`} position={item.position} /><span><strong>{item.name}</strong><small>CRM/SP 000000 · RQE 000000</small></span>{doctor === item.id && <Check size={18} />}</button>)}</div></>}
    {step === 2 && <><p>Datas e horários ilustrativos, de segunda a sexta. Fuso de São Paulo.</p><div className="ep-calendar-layout"><div><div className="ep-calendar-header"><button className="ep-icon-button" aria-label="Mês anterior" disabled={month <= today.slice(0, 7)} onClick={() => moveMonth(-1)}><ChevronLeft size={18} /></button><strong>{new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(year, monthIndex, 1)))}</strong><button className="ep-icon-button" aria-label="Próximo mês" onClick={() => moveMonth(1)}><ChevronRight size={18} /></button></div><div className="ep-calendar-grid">{['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map(day => <span key={day} aria-hidden="true">{day}</span>)}{Array.from({ length: firstOffset }, (_, index) => <span key={`empty-${index}`} />)}{Array.from({ length: days }, (_, index) => { const key = dateKey(year, monthIndex, index + 1); return <button key={key} aria-label={formatPrimeDate(key)} aria-pressed={date === key} disabled={!availablePrimeSlots(key).length} onClick={() => { setDate(key); setTime(''); setError('') }}>{index + 1}</button> })}</div></div><div><strong>{date ? formatPrimeDate(date) : 'Selecione uma data'}</strong>{date ? slots.length ? <div className="ep-slots">{slots.map(slot => <button key={slot} className="ep-slot" aria-pressed={time === slot} onClick={() => { setTime(slot); setError('') }}>{slot}</button>)}</div> : <p className="ep-note">Nenhum horário futuro nesta data. Escolha outro dia.</p> : <p className="ep-note">Os horários disponíveis aparecem após escolher o dia.</p>}</div></div></>}
    {step === 3 && <><p>Preencha dados fictícios para experimentar a revisão. Não informe dados de saúde.</p><form id="ep-booking-data" className="ep-form" onSubmit={event => { event.preventDefault(); if (data.name.trim().length < 3 || data.phone.replace(/\D/g, '').length < 10) { setError('Informe um nome com pelo menos 3 caracteres e um telefone com 10 ou 11 dígitos.'); return } goStep(4) }}><label>Nome completo<input required name="name" autoComplete="name" minLength={3} maxLength={100} value={data.name} onChange={event => setData({ ...data, name: event.target.value })} /></label><div className="ep-form-row"><label>E-mail<input required type="email" name="email" autoComplete="email" maxLength={180} value={data.email} onChange={event => setData({ ...data, email: event.target.value })} /></label><label>Telefone<input required type="tel" name="phone" autoComplete="tel" maxLength={20} pattern="[0-9+\(\) .\-]{10,20}" title="Use números e separadores para informar seu telefone." value={data.phone} onChange={event => setData({ ...data, phone: event.target.value })} /></label></div><label className="ep-consent"><input required type="checkbox" checked={data.consent} onChange={event => setData({ ...data, consent: event.target.checked })} />Entendo que esta é uma simulação sem reserva ou envio real de dados.</label></form></>}
    {step === 4 && <><p>Revise sua seleção antes de concluir a experiência demonstrativa.</p>{summary}<div className="ep-booking-summary"><dl><dt>Nome</dt><dd>{data.name}</dd><dt>E-mail</dt><dd>{data.email}</dd><dt>Telefone</dt><dd>{data.phone}</dd></dl></div><p className="ep-note">Ao concluir, seus dados pessoais serão limpos. Nenhuma mensagem ou reserva será enviada.</p></>}
    {error && <p className="ep-error" role="alert">{error}</p>}<div className="ep-booking-controls"><button className="ep-text-link" disabled={step === 0} onClick={() => goStep(step - 1)}><ArrowLeft size={16} />Voltar</button>{step === 3 ? <button type="submit" form="ep-booking-data" className="ep-button">Revisar<ArrowRight size={17} /></button> : <button className="ep-button" onClick={step === 4 ? finish : next}>{step === 4 ? 'Concluir simulação' : 'Continuar'}<ArrowRight size={17} /></button>}</div></>}</div></div>
  </div></section></PrimeLayout>
}

