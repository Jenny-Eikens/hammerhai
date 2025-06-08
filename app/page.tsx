import React from 'react'
import { performRequest } from '../lib/datocms'
import Home from './components/Home'

const HOMEPAGE_QUERY = `query MyQuery {
  allConcerts {
    id
    address
    date
    doors
    price
    time
    venueImage {
      responsiveImage(imgixParams: {fit: crop, auto: format, maxW: "180", maxH: "180"}) {
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
    allMusicArticles (orderBy: year_ASC) {
    id
    price 
    title
    year
    productImage {
      responsiveImage(
        imgixParams: {auto: format, fit: crop}
      ) {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
  }
    allClothingArticles {
    id
    name
    price
    productImage {
      responsiveImage(
        imgixParams: {fit: crop, auto: format}
      ) {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    sizes
  }
}`

const Page = async () => {
  try {
    const res = await performRequest(HOMEPAGE_QUERY, {
      next: { revalidate: 60 },
    })

    const concerts = res.allConcerts || []
    const music = res.allMusicArticles || []
    const clothing = res.allClothingArticles || []

    return <Home concerts={concerts} music={music} clothing={clothing} />
  } catch (error) {
    console.error('Page failed to load data:', error)
    throw error
  }
}

export default Page
