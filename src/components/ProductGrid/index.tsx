import { FC } from 'react'
import './index.scss'
import { IProductGridProps } from './props'
import { ProductTile } from '@/components/ProductTile'
import cn from 'classnames'

export const ProductGrid: FC<IProductGridProps> = ({ products, justify, fullHeight }) => {
  return (
    <section
      className={cn('product-grid', {
        'product-grid--full-height': fullHeight,
      })}
      style={{ justifyContent: justify }}
    >
      {products.map((product) => (
        <ProductTile key={product.id} product={product} />
      ))}
    </section>
  )
}
