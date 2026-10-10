import { useState } from 'react'

export function ListeningPanel() {
  const questions = [
    ['Preciso chegar com tudo definido?', 'Não. O primeiro encontro é um espaço para conhecer seu momento e organizar perguntas.'],
    ['Posso falar sobre minha rotina?', 'Sim. Preferências, contexto e expectativas têm lugar na conversa individual.'],
    ['O acompanhamento tem um ritmo único?', 'O percurso deve ser discutido com o profissional, respeitando suas necessidades.'],
  ]
  const [selected,setSelected]=useState(0)
  return <div className="ni-listening-panel"><span className="ni-eyebrow">Um espaço de escuta</span><div role="group" aria-label="Perguntas sobre a primeira conversa">{questions.map(([question],index)=><button key={question} aria-pressed={selected===index} onClick={()=>setSelected(index)}>{question}<span>↗</span></button>)}</div><p aria-live="polite">{questions[selected][1]}</p></div>
}
export function DigitalPanel({ compact=false }: { compact?:boolean }) {
  const [tab,setTab]=useState('Minha jornada')
  const entries = tab==='Minha jornada' ? ['Primeira conversa','Prioridades em conjunto','Próximos passos'] : ['Como está minha rotina?','O que quero conversar?','Qual é meu próximo encontro?']
  return <div className={'ni-digital-panel'+(compact?' ni-digital-panel--compact':'')}><div className="ni-panel-top"><span>NutriSync / Demo</span><i aria-hidden="true"/></div><div className="ni-panel-tabs" role="group" aria-label="Explorar painel demonstrativo">{['Minha jornada','Meu check-in'].map(item=><button key={item} aria-pressed={tab===item} onClick={()=>setTab(item)}>{item}</button>)}</div><h3>{tab==='Minha jornada'?'Um caminho com presença.':'Uma pausa para conversar.'}</h3><ul>{entries.map((item,index)=><li key={item}><span>0{index+1}</span>{item}</li>)}</ul><p className="ni-note">Interface ilustrativa, sem conta, registros ou acompanhamento real.</p></div>
}
