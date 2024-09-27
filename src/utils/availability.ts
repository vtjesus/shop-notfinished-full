import { IProduct } from '@/types/product'

export const checkAvailability = (product: IProduct | undefined | null, variant: string | undefined | null) => {
  if (!product || !variant) {
    return { isAvailable: false, isOutOfStock: true, availability: [] }
  }

  const v = product.variants.find((v) => v.name === variant)

  const res = v ? v.availability.length > 0 : false

  return { isAvailable: res, isOutOfStock: !res, availability: v?.availability || [] }
}
