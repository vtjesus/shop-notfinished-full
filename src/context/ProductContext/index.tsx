import { IProduct } from '@/types/product'
import { createContext } from 'react'

export interface IProductContext {
  products: IProduct[]
}

export const ProductContext = createContext<IProductContext>({
  products: [],
})
