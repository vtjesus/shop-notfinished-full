import { ICartProduct } from '@/types/cart'
import { createContext } from 'react'

export const CART_CONTEXT_LS_KEY = 'dogs-store__cart-products'

export interface ICartContext {
  products: ICartProduct[]
  isCartOpened: boolean
  setIsCartOpened: (isCartOpened: boolean) => void
  addProduct: (product: ICartProduct) => void
  setProductCount: (product: ICartProduct) => void
}

export const CartContext = createContext<ICartContext>({
  products: [],
  isCartOpened: false,
  setIsCartOpened: () => {},
  addProduct: () => {},
  setProductCount: () => {},
})
