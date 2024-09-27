import { IProductVariant } from '@/types/product'

export interface IColorSelectorProps {
  variants: IProductVariant[]
  value: string
  onChange: (variantName: string) => void
}
