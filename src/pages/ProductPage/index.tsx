import { FC, useContext, useEffect, useMemo, useState } from 'react'
import { WidthLimiter } from '@/components/WidthLimiter'
import './index.scss'
import { ProductContext } from '@/context/ProductContext'
import { IProduct, TProductSize } from '@/types/product'
import { useParams } from 'react-router-dom'
import { OptionsSelector } from '@/components/OptionSelector'
import { Button } from '@/components/Button'
import { ProductGrid } from '@/components/ProductGrid'
import cn from 'classnames'
import { CartContext } from '@/context/CartContext'
import { compareProducts } from '@/utils/cart'
import { PageMeta } from '@/components/PageMeta'
import { ProductImage } from '@/components/ProductImage'
import { appConfig } from '@/config'
import { checkAvailability } from '@/utils/availability'

export const ProductPage: FC = () => {
  const productContext = useContext(ProductContext)
  const cartContext = useContext(CartContext)
  const params = useParams()
  const [product, setProduct] = useState<IProduct | null>(null)
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<TProductSize | null>(null)
  const [fromThisCollection, setFromThisCollection] = useState<IProduct[]>([])
  const [fromThisType, setFromThisType] = useState<IProduct[]>([])

  const availability = useMemo(() => {
    return checkAvailability(product, selectedVariant)
  }, [product, selectedVariant])

  useEffect(() => {
    if (params.productId) {
      const product = productContext.products.find((p) => p.id === params.productId)

      if (product) {
        setProduct(product)
        setSelectedVariant(product.variants[0].name)

        const fromThisCollection = productContext.products.filter((p) => p.collection === product.collection && product.id !== p.id)
        setFromThisCollection(fromThisCollection)

        const fromThisType = productContext.products.filter((p) => p.type === product.type && product.id !== p.id)
        setFromThisType(fromThisType)
      }
    }
  }, [params])

  useEffect(() => {
    if (availability.isOutOfStock) {
      setSelectedSize(null)
    } else {
      const middleSize = Math.trunc(availability.availability.length / 2)
      setSelectedSize(availability.availability[middleSize])
    }
  }, [availability])

  const isInCart = useMemo(() => {
    if (!selectedVariant || !selectedSize) return false

    return !!cartContext.products.find((p) => compareProducts(p, { id: params.productId || '', variant: selectedVariant, size: selectedSize }))
  }, [cartContext.products, params, selectedSize, selectedVariant])

  const onAddToCartClick = () => {
    if (isInCart) {
      cartContext.setIsCartOpened(true)
    } else if (product && selectedVariant && selectedSize) {
      cartContext.addProduct({
        id: product.id,
        variant: selectedVariant,
        size: selectedSize,
        count: 1,
      })
    }
  }

  if (!product) return null

  return (
    <>
      <PageMeta
        title={`DOGS ${product.collection} ${product.type} • ${appConfig.storeName}`}
        description="Create your style with DOGS clothes"
        image={`/assets/imgs/products/${product.id}/${selectedVariant}/${product.imgs[0]}-512.webp`}
      />

      <main className="product-page">
        <WidthLimiter>
          <div className="product-page__cols">
            <div className="product-page__info">
              <div className="product-page__info-col">
                <h1>
                  <span style={{ background: product.color, color: product.textColor }}>{product.collection}</span>
                  <br />
                  <span>{product.type}</span>
                </h1>
                <h3 className="product-page__price family-alt">
                  {product.price} {appConfig.currencySymbol}
                </h3>
              </div>
              <div className="product-page__info-col">
                {selectedVariant && <OptionsSelector options={product.variants.map((v) => v.name)} value={selectedVariant} onChange={setSelectedVariant} />}
                {availability.isOutOfStock && <div className="product-page__chips">{availability.isOutOfStock && <span>Out of Stock</span>}</div>}
                {selectedSize && <OptionsSelector options={availability.availability} value={selectedSize} onChange={setSelectedSize} />}
                {selectedVariant && selectedSize && (
                  <div className="product-page__add-to-cart-btn">
                    <Button
                      bgColor={isInCart ? '#242424' : product.color}
                      textColor={isInCart ? '#fff' : product.textColor}
                      text={isInCart ? 'IN_CART' : 'ADD_TO_CART'}
                      onClick={onAddToCartClick}
                    />
                  </div>
                )}
              </div>
            </div>

            {selectedVariant &&
              product.imgs.map((img) => (
                <div
                  key={img}
                  className={cn('product-page__img', {
                    [`product-page__img--size-${selectedSize}`]: true,
                  })}
                >
                  <ProductImage product={product} variant={selectedVariant} fileName={img} />
                </div>
              ))}
          </div>

          {fromThisCollection.length > 0 && (
            <div className="product-page__section">
              <h2>From This Collection</h2>
              <ProductGrid products={fromThisCollection} justify="center" fullHeight={false} />
            </div>
          )}
          {fromThisType.length > 0 && (
            <div className="product-page__section">
              <h2>More {fromThisType[0].type}s</h2>
              <ProductGrid products={fromThisType} justify="center" fullHeight={false} />
            </div>
          )}
        </WidthLimiter>
      </main>
    </>
  )
}
