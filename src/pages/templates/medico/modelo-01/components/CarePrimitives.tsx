import { ArrowRight, X } from 'lucide-react'
import { useEffect, useId, useRef, type ReactNode } from 'react'

export function CareBrand() {
  return <span className="ec-brand"><svg viewBox="0 0 48 52" aria-hidden="true"><path d="M24 3C13 15 14 26 24 32C34 22 34 13 24 3Z" fill="currentColor" /><path d="M4 18C4 34 14 40 23 38C22 25 14 20 4 18Z" fill="currentColor" opacity=".85" /><path d="M45 15C31 16 24 27 26 39C39 36 45 28 45 15Z" fill="currentColor" opacity=".55" /><path d="M9 40C19 49 30 48 40 37M25 28V49" fill="none" stroke="currentColor" strokeWidth="2" /></svg><span>Essencial Care<small>Saúde em cada etapa da sua vida.</small></span></span>
}

export function CarePhoto({ image, alt, className = '', eager = false, position = 'center' }: { image: string; alt: string; className?: string; eager?: boolean; position?: string }) {
  return <div className={`ec-photo ${className}`}><span className="ec-photo-fallback" aria-hidden="true">Essencial Care</span><img src={`/images/medico/shared/${image}.webp`} alt={alt} width={1536} height={1024} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" style={{ objectPosition: position }} onError={event => { event.currentTarget.style.visibility = 'hidden' }} /></div>
}

export function CareButton({ children, href = '#agendamento', secondary = false, onClick }: { children: ReactNode; href?: string; secondary?: boolean; onClick?: () => void }) {
  return <a className={`ec-button ${secondary ? 'ec-button--outline' : ''}`} href={href} onClick={onClick}>{children}<ArrowRight size={17} /></a>
}

export function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return <div className="ec-section-intro"><span className="ec-eyebrow">{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>
}

export function CareModal({ open, title, onClose, children }: { open: boolean; title: string; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  useEffect(() => {
    const dialog = ref.current
    if (!open || !dialog) return
    const previousFocus = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => { dialog.close(); document.body.style.overflow = overflow; previousFocus?.focus({ preventScroll: true }) }
  }, [open])
  return <dialog className="ec-modal" ref={ref} aria-labelledby={titleId} onCancel={onClose} onClick={event => {
    const bounds = event.currentTarget.getBoundingClientRect()
    if (event.target === event.currentTarget && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) onClose()
  }}><button type="button" className="ec-modal-close" onClick={onClose} aria-label="Fechar janela"><X size={22} /></button><h2 id={titleId}>{title}</h2>{children}</dialog>
}
