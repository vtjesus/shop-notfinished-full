import { FC } from 'react'
import './index.scss'
import { Modal } from '@/components/Modal'
import { IHelpModalProps } from './props'
import { WobblyLink } from '@/components/WobblyLink'

export const HelpModal: FC<IHelpModalProps> = ({ isOpen, onClose }) => {
  const links = [
    {
      text: 'DELIVERY_AND_RETURNS',
      to: '/delivery-and-returns',
    },
    {
      text: 'PRIVACY_POLICY',
      to: '/privacy-policy',
    },
    {
      text: 'CONTACT_US',
      to: '/contact-us',
    },
  ]

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Help"
      body={
        <ul>
          {links.map((link) => (
            <li key={link.to} className="help-modal__link">
              <WobblyLink text={link.text} to={link.to} onClick={onClose} />
            </li>
          ))}
        </ul>
      }
    />
  )
}
