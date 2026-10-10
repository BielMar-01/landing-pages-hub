import { useEffect, useId, useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, ChevronDown, X } from 'lucide-react'
import { nutritionPath, nutritionPhoto } from './nutrition-images'
import { nutritionDimensions } from './nutrition-dimensions'
import type { NutritionImage } from './nutrition-images'
import type { NutritionService } from './nutrition-types'
import { maskNutritionPhone, nutritionToday, validNutritionPhone } from './nutrition-form'

export function NutritionPhoto({ image, alt, eager = false, sizes = '(max-width: 767px) 100vw, 50vw' }: { image: NutritionImage; alt: string; eager?: boolean; sizes?: string }) {
  const [width, height] = nutritionDimensions[image]
  return <img className="ni-photo" src={nutritionPhoto(image)} srcSet={`${nutritionPhoto(image,640)} 640w, ${nutritionPhoto(image)} 1280w`} sizes={sizes} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />
}
export function NutritionDialog({ title, open, close, children, menu = false }: { title: string; open: boolean; close: () => void; children: ReactNode; menu?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const id = useId()
  useEffect(() => {
    if (!open || !dialog.current) return
    const node = dialog.current
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const overflow = document.body.style.overflow
    node.showModal(); document.body.style.overflow = 'hidden'
    return () => { node.close(); document.body.style.overflow = overflow; previous?.focus() }
  }, [open])
  return <dialog ref={dialog} className={`ni-dialog${menu ? ' ni-dialog--menu' : ''}`} aria-labelledby={id} onCancel={event => { event.preventDefault(); close() }} onClick={event => { if (event.target === event.currentTarget) close() }}><div><button className="ni-close" aria-label="Fechar janela" onClick={close}><X /></button><h2 id={id}>{title}</h2>{children}</div></dialog>
}
export function NutritionFAQ({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return <div className="ni-faq"><h3><button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={id}>{question}<ChevronDown size={18}/></button></h3><div id={id} hidden={!open}><p>{answer}</p></div></div>
}
export function NutritionBooking({ model, services, initialService = '', initialMode = '' }: { model: string; services: NutritionService[]; initialService?: string; initialMode?: string }) {
  const [values, setValues] = useState({ name: '', phone: '', mode: ['Online','Presencial'].includes(initialMode) ? initialMode : '', service: services.some(item=>item.slug===initialService) ? initialService : '', date: '', message: '', consent: false })
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  useEffect(()=>{ if(done) heading.current?.focus() },[done])
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError('')
    if(values.name.trim().length<3) { setError('Informe um nome com pelo menos três caracteres.'); return }
    if(!validNutritionPhone(values.phone)) { setError('Informe um telefone com DDD e 10 ou 11 números.'); return }
    if(!services.some(item=>item.slug===values.service) || !['Online','Presencial'].includes(values.mode) || !values.date || values.date < nutritionToday()) { setError('Escolha atendimento, modalidade e uma data a partir de hoje.'); return }
    if(!values.consent) { setError('Confirme que você está experimentando uma simulação.'); return }
    setValues({name:'',phone:'',mode:'',service:'',date:'',message:'',consent:false});setDone(true)
  }
  if(done) return <div className="ni-success" role="status"><Check size={36}/><h3 ref={heading} tabIndex={-1}>Simulação concluída.</h3><p>Nenhum dado foi enviado ou salvo. Sua consulta não foi reservada.</p><button className="ni-button" onClick={()=>setDone(false)}>Experimentar novamente<ArrowRight size={17}/></button><Link className="ni-text-link" to={nutritionPath(model)}>Voltar ao início</Link></div>
  return <form className="ni-form" onSubmit={submit}><label>Nome completo<input required name="name" autoComplete="name" minLength={3} maxLength={100} placeholder="Como podemos chamar você?" value={values.name} onChange={event=>setValues({...values,name:event.target.value})}/></label><label>WhatsApp com DDD<input required name="phone" type="tel" inputMode="tel" autoComplete="tel-national" minLength={14} maxLength={15} placeholder="(11) 99999-9999" value={values.phone} onChange={event=>setValues({...values,phone:maskNutritionPhone(event.target.value)})}/></label><div className="ni-form-row"><label>Atendimento<select required name="service" value={values.service} onChange={event=>setValues({...values,service:event.target.value})}><option value="" disabled>Escolha uma área</option>{services.map(item=><option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label><label>Modalidade<select required name="mode" value={values.mode} onChange={event=>setValues({...values,mode:event.target.value})}><option value="" disabled>Escolha uma modalidade</option><option>Online</option><option>Presencial</option></select></label></div><label>Data preferida<input required type="date" name="date" min={nutritionToday()} value={values.date} onChange={event=>setValues({...values,date:event.target.value})}/></label><label>Mensagem (opcional)<textarea name="message" rows={3} maxLength={250} placeholder="Apenas preferências de contato. Não informe dados de saúde." value={values.message} onChange={event=>setValues({...values,message:event.target.value})}/></label><label className="ni-consent"><input required type="checkbox" checked={values.consent} onChange={event=>setValues({...values,consent:event.target.checked})}/>Entendo que esta é uma simulação, sem envio de dados ou consulta real.</label>{error && <p className="ni-error" role="alert">{error}</p>}<button className="ni-button" type="submit">Simular solicitação<ArrowRight size={17}/></button><p className="ni-note">Use dados fictícios. Nenhuma informação é armazenada permanentemente.</p></form>
}
