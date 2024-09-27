import { FC, PropsWithChildren } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { IWobblyLinkProps } from './props'
import { ConditionalWrap } from '@/components/ConditionalWrap'

export const WobblyLink: FC<PropsWithChildren<IWobblyLinkProps>> = ({ text, to, children, onClick }) => {
  return (
    <ConditionalWrap
      condition={!!to}
      wrap={(wrappedChildren) => (
        <Link className="wobbly-link" to={to || '/'} onClick={onClick}>
          {wrappedChildren}
        </Link>
      )}
      unwrap={(wrappedChildren) => (
        <button className="wobbly-link" onClick={onClick}>
          {wrappedChildren}
        </button>
      )}
    >
      <div className="wobbly-link__label">
        {text.split('').map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
      {children}
    </ConditionalWrap>
  )
}
