import React from 'react'
import { performRequest } from '../lib/datocms'
import { Image as DatoImage, RSCImage as DatoSRCImage } from 'react-datocms'
import Home from './components/Home'
import { error } from 'node:console'

const CONCERT_QUERY = `query MyQuery {
  allConcerts {
    id
    address
    date
    doors
    price
    time
    venueImage {
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
        alt
      }
    }
  }
}`

const Page = async () => {
  const res = await performRequest(CONCERT_QUERY, {
    next: { revalidate: 60 },
  })

  if (!res || !res.allConcerts) {
    throw new Error('Fetching data failed')
  }

  const concerts = res.allConcerts || []
  return <Home concerts={concerts} />
}

export default Page
