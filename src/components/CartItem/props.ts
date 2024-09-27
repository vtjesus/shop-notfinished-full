import { IProduct, TProductSize } from '@/types/product'

export interface ICartItemProps {
  product: IProduct
  count: number
  onCountChange: (count: number) => void
  variant: string
  size: TProductSize
  onProductClick: () => void
}
