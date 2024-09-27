import { ReactElement } from 'react'

export interface IModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  body?: ReactElement
  footer?: ReactElement
}
