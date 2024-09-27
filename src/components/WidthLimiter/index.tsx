import { FC, PropsWithChildren } from 'react'
import { IWidthLimiterProps } from './props'
import './index.scss'

export const WidthLimiter: FC<PropsWithChildren<IWidthLimiterProps>> = ({ maxWidth = 1440, children }) => {
  return (
    <div className="width-limiter" style={{ maxWidth: `${maxWidth}px` }}>
      {children}
    </div>
  )
}
