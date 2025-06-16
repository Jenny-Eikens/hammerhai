import React from 'react'
import Carousel from './ImageSlider'

// const image1 = '/images/about/IMG_4274.jpg'
// const image2 = '/images/about/IMG_20220916_230401.jpg'
// const image3 = '/images/about/IMG_20221112_190412.jpg'
// const image4 = '/images/about/IMG_20221231_163343_975.jpg'
// const image5 = '/images/about/IMG_20231231_010747.jpg'
// const image6 = '/images/about/IMG_20240216_195428_edit_398682507131872.jpg'
// const image7 = '/images/about/IMG_20240405_155752.jpg'
// const image8 = '/images/about/IMG_20240802_194833.jpg'
// const image9 = '/images/about/OA Friedewalde.jpg'
// const image10 = '/images/about/OA Hamburg 1.jpg'
// const image11 = '/images/about/VEB 2.jpg'

const About = () => {
  return (
    <>
      <div className="border border-green-500 md:flex">
        <p className="w-full p-4 pt-8 md:w-[50%] md:text-lg">
          HAMMERHAI... die Hohepriester des deutschsprachigen Offbeat-Gewitters
          und bekennende Freibeuter der Stile. Im Gepäck haben sie jede Menge
          unverschämt eingängige Songs und jede Menge Feuer im Hintern.
          HAMMERHAI-Konzerte sind, bei aller ausgelassenen Feierei, musikalische
          Achterbahnfahrten mit unbekanntem Ausgang, wo jede musikalische
          Reglementierung geflissentlich missachtet wird. Energie, Humor,
          Spielfreude und geschmeidiges Songwriting sind die Hauptmerkmale einer
          Band, die sich keinen Pfifferling um irgendwelche Trends schert.
        </p>
        <div className="image-grid hidden max-w-[700px] gap-2 border border-red-500 md:grid">
          <img
            src="/images/about/IMG_20220916_230401.jpg"
            alt="Bandfoto 2"
            className="grid-image"
            id="image-2"
          />
          <img
            src="/images/about/IMG_20221112_190412.jpg"
            alt="Bandfoto 3"
            className="grid-image"
            id="image-3"
          />
          <img
            src="/images/about/IMG_20221231_163343_975.jpg"
            alt="Bandfoto 4"
            className="grid-image"
            id="image-4"
          />
          <img
            src="/images/about/IMG_20231231_010747.jpg"
            alt="Bandfoto 5"
            className="grid-image"
            id="image-5"
          />
          <img
            src="/images/about/IMG_20240216_195428_edit_398682507131872.jpg"
            alt="Bandfoto 6"
            className="grid-image"
            id="image-6"
          />
          <img
            src="/images/about/IMG_20240405_155752.jpg"
            alt="Bandfoto 7"
            className="grid-image"
            id="image-7"
          />
          <img
            src="/images/about/IMG_20240802_194833.jpg"
            alt="Bandfoto 8"
            className="grid-image"
            id="image-8"
          />
          <img
            src="/images/about/OA Friedewalde.jpg"
            alt="Bandfoto 9"
            className="grid-image"
            id="image-9"
          />
          <img
            src="/images/about/OA Hamburg 1.jpg"
            alt="Bandfoto 10"
            className="grid-image"
            id="image-10"
          />
          <img
            src="/images/about/VEB 2.jpg"
            alt="Bandfoto 11"
            className="grid-image"
            id="image-11"
          />
        </div>
      </div>

      <div className="md:hidden">
        <Carousel />
      </div>
    </>
  )
}

export default About
