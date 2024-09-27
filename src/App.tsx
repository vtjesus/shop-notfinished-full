import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { IProductContext, ProductContext } from '@/context/ProductContext'
import { CART_CONTEXT_LS_KEY, CartContext, ICartContext } from '@/context/CartContext'
import { PRODUCTS } from '@/constants/products'
import { compareProducts } from './utils/cart'
import { ICartProduct } from './types/cart'

export const App: FC<PropsWithChildren> = ({ children }) => {
  const [productContext] = useState<IProductContext>({ products: PRODUCTS })
  const [isLsLoaded, setLsLoaded] = useState(false)
  const [cartContext, setCartContext] = useState<Pick<ICartContext, 'products' | 'isCartOpened'>>({ products: [], isCartOpened: false })

  useEffect(() => {
    const ls = localStorage.getItem(CART_CONTEXT_LS_KEY)

    if (ls) {
      const item = JSON.parse(ls) as ICartContext['products']

      if (item) {
        setCartContext({ ...cartContext, products: item })
      }
    }

    setLsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLsLoaded) {
      localStorage.setItem(CART_CONTEXT_LS_KEY, JSON.stringify(cartContext.products))
    }
  }, [isLsLoaded, cartContext])

  useEffect(() => {
    const has = document.body.classList.contains('no-scroll')

    if (cartContext.isCartOpened && !has) {
      document.body.classList.add('no-scroll')
    }

    if (!cartContext.isCartOpened && has) {
      document.body.classList.remove('no-scroll')
    }
  }, [cartContext.isCartOpened])

  const setIsCartOpened = (isCartOpened: boolean) => {
    setCartContext({ ...cartContext, isCartOpened })
  }

  const addProduct = (product: ICartProduct) => {
    setCartContext({ ...cartContext, products: [...cartContext.products, product] })
  }

  const setProductCount = (product: ICartProduct) => {
    if (product.count === 0) {
      setCartContext({
        ...cartContext,
        products: cartContext.products.filter((p) => !compareProducts(p, product)),
      })
    } else {
      setCartContext({
        ...cartContext,
        products: cartContext.products.map((p) => (compareProducts(p, product) ? { ...p, count: product.count } : p)),
      })
    }
  }

  return (
    <ProductContext.Provider value={productContext}>
      <CartContext.Provider value={{ ...cartContext, setIsCartOpened, addProduct, setProductCount }}>{children}</CartContext.Provider>
    </ProductContext.Provider>
  )
}
