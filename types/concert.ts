import type { ResponsiveImage } from './dato'

export type ConcertType = {
  id: string
  address: string
  date: string
  doors?: string
  price: number
  time: string
  venueImage: {
    responsiveImage: ResponsiveImage
  }
}
