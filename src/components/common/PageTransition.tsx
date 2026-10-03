import { useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  return <div className="page-transition" key={pathname}>{children}</div>
}
