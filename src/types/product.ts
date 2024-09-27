export interface IProductVariant {
  name: string
  color: string
  availability: TProductSize[]
}

export type TProductSize = 's' | 'm' | 'l' | 'xl' | 'xxl'

export interface IProduct {
  id: string
  type: string
  collection: string
  price: number
  color: string
  textColor: string
  haloColor: string
  variants: IProductVariant[]
  imgs: string[]
}
