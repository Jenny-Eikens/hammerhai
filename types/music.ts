import type { ResponsiveImage } from './dato'

export type MusicType = {
  id: string
  price: string
  title: string
  year: Date
  productImage: {
    responsiveImage: ResponsiveImage
  }
}
