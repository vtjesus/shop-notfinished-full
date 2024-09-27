import { IProduct } from '@/types/product'

export interface IProductImageProps {
  className?: string
  product: IProduct
  variant: string
  fileName?: string
  fileFormat?: string
  imgSize?: '1024' | '512'
}
