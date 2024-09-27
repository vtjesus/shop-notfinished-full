import { FC } from 'react'
import './index.scss'
import { ICartItemProps } from './props'
import { CountSelector } from '@/components/CountSelector'
import { Link } from 'react-router-dom'
import { ProductImage } from '@/components/ProductImage'
import { appConfig } from '@/config'

export const CartItem: FC<ICartItemProps> = ({ product, count, onCountChange, variant, size, onProductClick }) => {
  return (
    <div className="cart-item">
      <Link className="cart-item__img" to={`/product/${product.id}`} onClick={onProductClick}>
        <ProductImage product={product} variant={variant} imgSize="512" />
      </Link>
      <div className="cart-item__body">
        <h4>
          <span style={{ background: product.color, color: product.textColor }}>{product.collection}</span>
          <br />
          <span>{product.type}</span>
        </h4>
        <div className="cart-item__selected-options">
          <span>{variant}</span>
          <span>{size}</span>
        </div>
        <div className="cart-item__count">
          <CountSelector value={count} onChange={onCountChange} bgColor={product.color} textColor={product.textColor} />
          <h5 className="cart-item__price family-alt">
            {product.price * count} {appConfig.currencySymbol}
          </h5>
        </div>
      </div>
      <button onClick={() => onCountChange(0)}>x</button>
    </div>
  )
}
