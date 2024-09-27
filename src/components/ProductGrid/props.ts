import { IProduct } from '@/types/product'

export interface IProductGridProps {
  products: IProduct[]
  fullHeight: boolean
  justify?: 'center'
}
