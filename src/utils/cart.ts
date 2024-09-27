import { ICartProduct } from '@/types/cart'

export const compareProducts = (product1: Omit<ICartProduct, 'count'>, product2: Omit<ICartProduct, 'count'>) => {
  return product1.id === product2.id && product2.variant === product2.variant && product1.size === product2.size
}
