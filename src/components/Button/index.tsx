import { FC } from 'react'
import './index.scss'
import { IButtonProps } from './props'

export const Button: FC<IButtonProps> = ({ bgColor, textColor, text, onClick, postElement }) => {
  return (
    <button className="button" style={{ backgroundColor: bgColor }} onClick={onClick}>
      <div className="button__label">
        {text.split('').map((letter, i) => (
          <span key={i} style={{ color: textColor }}>
            {letter}
          </span>
        ))}
      </div>
      {postElement}
    </button>
  )
}
