import type { ResponsiveImage } from './dato'

export type ClothingType = {
  id: string
  name: string
  price: number
  productImage: {
    responsiveImage: ResponsiveImage
  }
  sizes: string
}
