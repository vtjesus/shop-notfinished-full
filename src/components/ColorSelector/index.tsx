import { FC } from 'react'
import { IColorSelectorProps } from './props'
import cn from 'classnames'
import './index.scss'

export const ColorSelector: FC<IColorSelectorProps> = ({ variants, onChange, value }) => {
  return (
    <div className="color-selector">
      {variants.map((variant) => (
        <button
          key={variant.name}
          className={cn('color-selector__variant', {
            'color-selector__variant--active': value === variant.name,
          })}
          style={{ background: variant.color }}
          onClick={() => onChange(variant.name)}
          onMouseEnter={() => onChange(variant.name)}
        >
          {variant.name}
        </button>
      ))}
    </div>
  )
}
