import { ReactNode } from 'react'

export interface IConditionalWrap {
  condition: boolean
  wrap: (children: ReactNode) => ReactNode
  unwrap?: (children: ReactNode) => ReactNode
}
