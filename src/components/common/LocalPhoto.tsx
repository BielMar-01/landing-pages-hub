import { useState, type ReactNode } from 'react'
import './local-photo.css'

interface LocalPhotoProps {
  src: string
  alt: string
  className?: string
  eager?: boolean
  children: ReactNode
}

/** Local assets are optional: failures never expose a broken image. */
export function LocalPhoto({ src, alt, className = '', eager = false, children }: LocalPhotoProps) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  return (
    <div className={`local-photo ${className}`}>
      {!loaded && children}
      {!failed && <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} style={{ visibility: loaded ? 'visible' : 'hidden' }} />}
    </div>
  )
}
