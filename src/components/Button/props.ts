import { ReactElement } from 'react'

export interface IButtonProps {
  text: string
  bgColor?: string
  textColor?: string
  onClick?: () => void
  postElement?: ReactElement
}
