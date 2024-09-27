import { FC } from 'react'
import './index.scss'
import { ICountSelectorProps } from './props'
import cn from 'classnames'

export const CountSelector: FC<ICountSelectorProps> = ({ onChange, value, bgColor, textColor }) => {
  const decrement = () => {
    if (value > 1) {
      onChange(value - 1)
    }
  }

  const increment = () => {
    onChange(value + 1)
  }

  return (
    <div className="count-selector">
      <button
        className={cn('count-selector__btn', {
          'count-selector__btn--disabled': value === 1,
        })}
        onClick={decrement}
      >
        -
      </button>
      <span className="count-selector__count family-alt" style={{ backgroundColor: bgColor, color: textColor }}>
        {value}
      </span>
      <button className="count-selector__btn" onClick={increment}>
        +
      </button>
    </div>
  )
}
