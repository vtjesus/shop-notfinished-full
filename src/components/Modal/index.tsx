import { FC } from 'react'
import { IModalProps } from './props'
import { useClickOutside } from '@/hooks/useClickOutside'
import cn from 'classnames'
import './index.scss'

export const Modal: FC<IModalProps> = ({ body, footer, isOpen, onClose, title }) => {
  const ref = useClickOutside(() => {
    onClose()
  })

  return (
    <div
      className={cn('modal', {
        'modal--show': isOpen,
      })}
    >
      <div className="modal__modal" ref={ref}>
        <div className="modal__header">
          <h3 className="modal__title">{title}</h3>
          <button onClick={onClose}>x</button>
        </div>
        {body && <div className="modal__body">{body}</div>}
        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
  )
}
