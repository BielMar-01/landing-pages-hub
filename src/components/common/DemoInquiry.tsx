import { useState, type FormEvent } from 'react'

interface DemoInquiryProps {
  services: string[]
  action: string
}

export function DemoInquiry({ services, action }: DemoInquiryProps) {
  const [submitted, setSubmitted] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }
  return <form className="demo-inquiry" onSubmit={submit}>
    <label>Seu nome<input name="name" autoComplete="name" required maxLength={100} /></label>
    <label>E-mail para contato<input name="email" type="email" autoComplete="email" required /></label>
    <label>Seu interesse<select name="service" required defaultValue=""><option value="" disabled>Selecione uma opção</option>{services.map(service => <option key={service}>{service}</option>)}</select></label>
    <label>Como podemos ajudar?<textarea name="message" rows={3} maxLength={1000} /></label>
    <button type="submit">{action} <span aria-hidden="true">↗</span></button>
    <small>Demonstração: nenhum dado é enviado ou armazenado.</small>
    {submitted && <p role="status">Solicitação simulada com sucesso. Este site é uma demonstração; nenhum contato será realizado.</p>}
  </form>
}
