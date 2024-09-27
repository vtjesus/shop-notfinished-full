import { FC, PropsWithChildren } from 'react'
import './index.scss'
import { WidthLimiter } from '@/components/WidthLimiter'

export const Article: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="article">
      <WidthLimiter maxWidth={700}>{children}</WidthLimiter>
    </div>
  )
}
