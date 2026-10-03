import { ArrowRight, Minus, Plus, Quote } from 'lucide-react'
import { useState } from 'react'
import { articles, faqItems } from '../care-data'
import { CareButton, CareModal, CarePhoto, SectionIntro } from './CarePrimitives'

export function Testimonials() {
  const testimonials = [
    { name:'Mariana Silva', quote:'Desde a recepção até a consulta, senti que houve tempo para ouvir minha história. Um atendimento próximo, tranquilo e muito acolhedor.', image:'patient-01' },
    { name:'Carlos Mendes', quote:'Gostei da clareza das orientações e da atenção da equipe. Cada etapa foi explicada com cuidado.', image:'patient-02' },
    { name:'Ana Paula', quote:'O ambiente transmite tranquilidade, e o acolhimento fez diferença desde o primeiro contato.', image:'patient-03' },
  ]
  return <section className="ec-section ec-testimonials" id="depoimentos"><div className="ec-container"><div className="ec-testimonial-layout"><SectionIntro eyebrow="Depoimentos" title={<>O que nossos pacientes<br />dizem sobre o cuidado.</>}>Histórias de acolhimento e confiança em cada encontro.</SectionIntro><div className="ec-testimonial-grid">{testimonials.map((item,i)=><article className={`ec-testimonial ec-testimonial--${i+1}`} key={item.name} data-reveal>{i===0 && <CarePhoto image={item.image} alt="Retrato ilustrativo da personagem Mariana" />}<div className="ec-testimonial-copy"><Quote size={28} /><blockquote>“{item.quote}”</blockquote><span className="ec-stars" aria-label="Cinco estrelas">★★★★★</span><div className="ec-testimonial-person"><img src={`/images/medico/shared/${item.image}.webp`} alt="" width={44} height={44} loading="lazy" /><span><strong>{item.name}</strong><small>Paciente · história fictícia</small></span></div></div></article>)}</div></div><p className="ec-disclaimer">Depoimentos fictícios, utilizados exclusivamente para apresentar este modelo.</p></div></section>
}

export function HealthContent() {
  const [selected, setSelected] = useState<number | null>(null)
  const article = selected === null ? null : articles[selected]
  return <section className="ec-section ec-content" id="conteudos"><div className="ec-container"><div className="ec-section-row" data-reveal><SectionIntro eyebrow="Conteúdos" title={<>Informação também<br />faz parte do cuidado.</>}>Um olhar para o bem-estar, a prevenção e as escolhas do dia a dia.</SectionIntro></div><div className="ec-content-grid">{articles.map((item,i)=><article className="ec-content-card" key={item.title} data-reveal><button type="button" className="ec-content-cover" onClick={()=>setSelected(i)} aria-label={`Ler ${item.title}`}><CarePhoto image={item.image} alt={`Imagem ilustrativa sobre ${item.category.toLowerCase()}`} /></button><div><span className="ec-eyebrow">{item.category}</span><h3>{item.title}</h3><button className="ec-text-link" type="button" onClick={()=>setSelected(i)}>Ler conteúdo<ArrowRight size={17} /></button></div></article>)}</div>
    <CareModal open={article !== null} title={article?.title || 'Conteúdo de saúde'} onClose={()=>setSelected(null)}>{article && <><CarePhoto image={article.image} alt={`Imagem ilustrativa de ${article.category}`} /><span className="ec-eyebrow">{article.category}</span><p>{article.text}</p><p className="ec-disclaimer">Conteúdo geral demonstrativo. Não substitui avaliação, diagnóstico ou orientação profissional individual.</p></>}</CareModal>
  </div></section>
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return <section className="ec-section ec-faq" id="duvidas"><div className="ec-container ec-faq-layout" data-reveal><div><SectionIntro eyebrow="Dúvidas frequentes" title={<>Tire suas dúvidas<br />sobre o atendimento.</>}>Informações para que você se sinta mais tranquilo antes da primeira consulta.</SectionIntro><CarePhoto image="doctor-consultation" alt="Médica conversando com uma paciente" /><CareButton secondary href="#contato">Ainda tem dúvidas?</CareButton></div><div className="ec-faq-list">{faqItems.map((item,i)=><article key={item.question} className={`ec-faq-item ${open===i?'is-open':''}`}><h3><button type="button" id={`ec-question-${i}`} aria-expanded={open===i} aria-controls={`ec-answer-${i}`} onClick={()=>setOpen(open===i?null:i)}>{item.question}{open===i?<Minus size={18} />:<Plus size={18} />}</button></h3><div id={`ec-answer-${i}`} className="ec-faq-answer" role="region" aria-labelledby={`ec-question-${i}`} aria-hidden={open!==i} inert={open!==i}><div><p>{item.answer}</p></div></div></article>)}</div></div></section>
}
