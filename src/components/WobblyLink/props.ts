import { ReactElement } from 'react'

export interface IWobblyLinkProps {
  text: string
  to?: string
  postElement?: ReactElement
  onClick?: () => void
}
