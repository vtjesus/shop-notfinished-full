import { FC, useContext, useMemo } from 'react'
import './index.scss'
import { CartContext } from '@/context/CartContext'
import { CartItem } from '@/components/CartItem'
import { ProductContext } from '@/context/ProductContext'
import { Button } from '@/components/Button'
import { ICartProduct } from '@/types/cart'
import { appConfig } from '@/config'
import { Modal } from '@/components/Modal'

export const CartModal: FC = () => {
  const cartContext = useContext(CartContext)
  const productContext = useContext(ProductContext)

  const onCountChange = (product: ICartProduct) => {
    cartContext.setProductCount(product)
  }

  const products = useMemo(() => {
    return cartContext.products.map((p) => ({ ...p, product: productContext.products.find((product) => p.id === product.id) }))
  }, [cartContext.products])

  const total = useMemo(() => {
    return products.reduce((total, product) => total + (product.product?.price || 0) * product.count, 0)
  }, [products])

  return (
    <Modal
      isOpen={cartContext.isCartOpened}
      onClose={() => cartContext.setIsCartOpened(false)}
      title="Cart"
      body={
        products.length > 0 ? (
          <>
            {products.map(
              (p) =>
                p.product && (
                  <div className="cart__item" key={`${p.id}--${p.variant}--${p.size}`}>
                    <CartItem
                      product={p.product}
                      count={p.count}
                      variant={p.variant}
                      size={p.size}
                      onCountChange={(count) => onCountChange({ ...p, count })}
                      onProductClick={() => cartContext.setIsCartOpened(false)}
                    />
                  </div>
                )
            )}
          </>
        ) : (
          <p>Cart Is Empty</p>
        )
      }
      footer={
        products.length > 0 ? (
          <>
            <span className="cart__total">
              <span className="family-alt">Total</span>
              <span className="family-alt">
                {total} {appConfig.currencySymbol}
              </span>
            </span>
            <Button text="Checkout" />
          </>
        ) : undefined
      }
    />
  )
}
