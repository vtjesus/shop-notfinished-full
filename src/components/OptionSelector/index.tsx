import { IOptionSelectorProps } from './props'
import cn from 'classnames'
import './index.scss'
import { TProductSize } from '@/types/product'

export const OptionsSelector = <T extends TProductSize | string>({ options, onChange, value }: IOptionSelectorProps<T>) => {
  return (
    <div className="option-selector">
      {options.map((option) => (
        <button
          key={option}
          className={cn('option-selector__option', {
            'option-selector__option--active': value === option,
          })}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
