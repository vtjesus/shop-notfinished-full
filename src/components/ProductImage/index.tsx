import { FC } from 'react'
import { IProductImageProps } from './props'
import { appConfig } from '@/config'

export const ProductImage: FC<IProductImageProps> = ({ product, variant, className, fileName, fileFormat = 'webp', imgSize = '1024' }) => {
  const src = `${appConfig.urlPrefix}/assets/imgs/products/${product.id}/${variant}/${fileName || product.imgs[0]}-${imgSize}.${fileFormat}`
  const sizes = imgSize === '1024' ? ['512', '1024'] : ['512']
  const srcSet = sizes
    .map((size) => `${appConfig.urlPrefix}/assets/imgs/products/${product.id}/${variant}/${fileName || product.imgs[0]}-${size}.${fileFormat} ${size}w`)
    .join(', ')
  const srcSizes = sizes.map((size) => `(max-width: ${size}px) ${size}px`).join(', ')

  return (
    <img
      className={className}
      src={src}
      alt={`DOGS ${product.collection} ${product.type} ${variant} (${fileName || product.imgs[0]})`}
      style={{ filter: `drop-shadow(0 0 18px ${product.haloColor})` }}
      loading="lazy"
      sizes={srcSizes}
      srcSet={srcSet}
    />
  )
}
