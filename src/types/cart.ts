import { TProductSize } from './product'

export interface ICartProduct {
  id: string
  count: number
  variant: string
  size: TProductSize
}
