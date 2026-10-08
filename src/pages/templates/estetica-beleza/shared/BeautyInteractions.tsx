import { useEffect, useId, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, X } from 'lucide-react'
import { beautyPhoto, beautyPhotoSet, beautyTreatments } from './beauty-data'
import type { BeautyImage } from './beauty-data'

export function BeautyPhoto({ image, alt, eager = false, className = '' }: { image: BeautyImage; alt: string; eager?: boolean; className?: string }) {
  return <img className={`bi-photo ${className}`} src={beautyPhoto(image)} srcSet={beautyPhotoSet(image)} sizes={eager ? '100vw' : '(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 640px'} alt={alt} width={1280} height={853} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />
}
export function BeautyDialog({ title, open, onClose, children, menu = false }: { title: string; open: boolean; onClose: () => void; children: ReactNode; menu?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null)
  const id = useId()
  useEffect(() => {
    if (!open || !ref.current) return
    const dialog = ref.current
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const overflow = document.body.style.overflow
    dialog.showModal(); document.body.style.overflow = 'hidden'
    return () => { dialog.close(); document.body.style.overflow = overflow; previous?.focus() }
  }, [open])
  return <dialog ref={ref} className={`bi-dialog${menu ? ' bi-dialog--menu' : ''}`} aria-labelledby={id} onCancel={event => { event.preventDefault(); onClose() }} onClick={event => { if (event.target === event.currentTarget) onClose() }}>
    <div className="bi-dialog-body"><button className="bi-close" onClick={onClose} aria-label="Fechar janela"><X size={24} /></button><h2 id={id}>{title}</h2>{children}</div>
  </dialog>
}
export function BeautyAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return <div className={`bi-accordion${open ? ' is-open' : ''}`}><h3><button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={id}>{question}<ChevronDown size={18} /></button></h3><div id={id} hidden={!open}><p>{answer}</p></div></div>
}
export function BeautyGallery({ images }: { images: { image: BeautyImage; label: string }[] }) {
  const [current, setCurrent] = useState<number | null>(null)
  return <><div className="bi-gallery">{images.map(({ image, label }, index) => <button key={image} onClick={() => setCurrent(index)} aria-label={`Ampliar ${label}`}><BeautyPhoto image={image} alt={`${label} — ambiente ilustrativo`} /><span>{label}<ArrowRight size={16} /></span></button>)}</div><BeautyDialog title={current !== null ? images[current].label : ''} open={current !== null} onClose={() => setCurrent(null)}>{current !== null && <><BeautyPhoto image={images[current].image} alt={images[current].label} /><div className="bi-gallery-controls"><button onClick={() => setCurrent((current + images.length - 1) % images.length)} aria-label="Ambiente anterior"><ArrowLeft size={18} /></button><span>{current + 1} / {images.length}</span><button onClick={() => setCurrent((current + 1) % images.length)} aria-label="Próximo ambiente"><ArrowRight size={18} /></button></div><p className="bi-note">Fotografia e ambiente demonstrativos.</p></>}</BeautyDialog></>
}
function todayInBrazil() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date())
  return ['year', 'month', 'day'].map(type => parts.find(part => part.type === type)?.value).join('-')
}
export function BeautyBookingForm({ initialInterest = '', steps = false, homePath }: { initialInterest?: string; steps?: boolean; homePath: string }) {
  const [stage, setStage] = useState(0)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [values, setValues] = useState({ name: '', phone: '', email: '', interest: beautyTreatments.some(item => item.slug === initialInterest) ? initialInterest : '', date: '', consent: false })
  const heading = useRef<HTMLHeadingElement>(null)
  useEffect(() => { if (stage > 0 || sent) heading.current?.focus() }, [stage, sent])
  function validateContact() {
    const digits = values.phone.replace(/\D/g, '')
    if (values.name.trim().length < 3) { setError('Informe um nome com pelo menos três caracteres.'); return false }
    if (!/^[+()\d .-]+$/.test(values.phone) || digits.length < 10 || digits.length > 13) { setError('Informe um telefone válido, com DDD.'); return false }
    return true
  }
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError('')
    if ((!steps || stage === 0 || stage === 2) && !validateContact()) return
    if ((!steps || stage === 1 || stage === 2) && (!values.interest || values.date < todayInBrazil())) { setError('Escolha seu interesse e uma data a partir de hoje.'); return }
    if (steps && stage < 2) { setStage(stage + 1); return }
    if (!values.consent) { setError('Confirme que você está experimentando uma simulação.'); return }
    setValues({ name: '', phone: '', email: '', interest: '', date: '', consent: false }); setSent(true)
  }
  return sent ? <div className="bi-success" role="status"><CheckCircle2 size={40} /><h3 tabIndex={-1} ref={heading}>Experiência concluída.</h3><p>Sua solicitação foi simulada. Nenhum dado foi enviado, salvo ou convertido em reserva.</p><button className="bi-submit" onClick={() => { setSent(false); setStage(0) }}>Experimentar novamente<ArrowRight size={17} /></button><Link className="bi-return" to={homePath}>Voltar ao início</Link></div> : <form className="bi-form" onSubmit={submit}>
    {steps && <><ol className="bi-form-steps" aria-label="Etapas de solicitação">{['Seus dados', 'Preferência', 'Revisão'].map((label, index) => <li key={label} aria-current={stage === index ? 'step' : undefined}><span>{index + 1}</span>{label}</li>)}</ol><h3 tabIndex={-1} ref={heading}>{['Vamos começar por você.', 'Qual é o seu melhor momento?', 'Revise sua experiência.'][stage]}</h3></>}
    {(!steps || stage === 0) && <><label>Nome completo<input name="name" autoComplete="name" required minLength={3} maxLength={100} placeholder="Como podemos chamar você?" value={values.name} onChange={event => setValues({ ...values, name: event.target.value })} /></label><div className="bi-form-row"><label>Telefone / WhatsApp<input name="phone" type="tel" autoComplete="tel" required minLength={10} maxLength={22} placeholder="(11) 00000-0000" value={values.phone} onChange={event => setValues({ ...values, phone: event.target.value })} /></label><label>E-mail (opcional)<input name="email" type="email" autoComplete="email" maxLength={180} placeholder="voce@exemplo.com" value={values.email} onChange={event => setValues({ ...values, email: event.target.value })} /></label></div></>}
    {(!steps || stage === 1) && <div className="bi-form-row"><label>Seu interesse<select required name="interest" value={values.interest} onChange={event => setValues({ ...values, interest: event.target.value })}><option value="" disabled>Escolha uma experiência</option>{beautyTreatments.map(item => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label><label>Data preferida<input type="date" name="date" min={todayInBrazil()} required value={values.date} onChange={event => setValues({ ...values, date: event.target.value })} /></label></div>}
    {steps && stage === 2 && <dl className="bi-review"><dt>Nome</dt><dd>{values.name}</dd><dt>Telefone</dt><dd>{values.phone}</dd><dt>Interesse</dt><dd>{beautyTreatments.find(item => item.slug === values.interest)?.name}</dd><dt>Data preferida</dt><dd>{values.date.split('-').reverse().join('/')}</dd><dt>E-mail</dt><dd>{values.email || 'Não informado'}</dd></dl>}
    {(!steps || stage === 2) && <label className="bi-consent"><input type="checkbox" required checked={values.consent} onChange={event => setValues({ ...values, consent: event.target.checked })} />Entendo que esta é uma simulação, sem reserva ou envio real de dados.</label>}
    {error && <p className="bi-error" role="alert">{error}</p>}<div className="bi-form-actions">{steps && stage > 0 && <button type="button" className="bi-return" onClick={() => { setStage(stage - 1); setError('') }}><ArrowLeft size={16} />Voltar</button>}<button type="submit" className="bi-submit">{steps && stage < 2 ? 'Continuar' : 'Simular agendamento'}<ArrowRight size={17} /></button></div><p className="bi-note">Use dados fictícios. Sua privacidade faz parte desta experiência.</p>
  </form>
}

