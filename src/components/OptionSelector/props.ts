export interface IOptionSelectorProps<T> {
  options: T[]
  value: T
  onChange: (variant: T) => void
}
