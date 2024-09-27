import { FC, useMemo, useState } from 'react'
import './index.scss'
import { IProductTileProps } from './props'
import { Link } from 'react-router-dom'
import { ColorSelector } from '@/components/ColorSelector'
import cn from 'classnames'
import { ProductImage } from '@/components/ProductImage'
import { appConfig } from '@/config'
import { checkAvailability } from '@/utils/availability'

export const ProductTile: FC<IProductTileProps> = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0].name)

  const availability = useMemo(() => {
    return checkAvailability(product, selectedVariant)
  }, [product, selectedVariant])

  return (
    <div className="product-tile">
      <Link className="product-tile__link" to={`/product/${product.id}`}>
        {availability.isOutOfStock && <div className="product-tile__chips">{availability.isOutOfStock && <span>Out of Stock</span>}</div>}

        <div className="product-tile__img">
          <ProductImage
            className={cn({
              front: product.imgs.length > 1,
            })}
            product={product}
            fileName={product.imgs[0]}
            variant={selectedVariant}
            imgSize="512"
          />
          {product.imgs.length > 1 && <ProductImage className="back" product={product} fileName={product.imgs[1]} variant={selectedVariant} imgSize="512" />}
        </div>

        <div className="product-tile__meta">
          <h5>
            <span className="product-tile__name" style={{ background: product.color, color: product.textColor }}>
              {product.collection}
            </span>
            <br />
            {product.type}
          </h5>
          {!availability.isOutOfStock && (
            <span className="product-tile__price family-alt">
              {product.price} {appConfig.currencySymbol}
            </span>
          )}
        </div>
      </Link>

      {product.variants.length > 1 && (
        <div className="product-tile__variants">
          <ColorSelector variants={product.variants} value={selectedVariant} onChange={setSelectedVariant} />
        </div>
      )}
    </div>
  )
}
