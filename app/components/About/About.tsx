import React from 'react'
import Carousel from './ImageSlider'

const About = () => {
  return (
    <>
      <div className="mx-auto md:flex md:max-w-[900px] md:flex-col md:items-center md:gap-10 md:p-10">
        <h1 className="px-4 pt-8 text-center text-2xl underline md:p-0 md:text-3xl">
          Das ist Hammerhai
        </h1>
        <p className="p-4 pt-4 text-lg md:p-0 md:text-xl">
          HAMMERHAI... die Hohepriester des deutschsprachigen Offbeat-Gewitters
          und bekennende Freibeuter der Stile. Im Gepäck haben sie jede Menge
          unverschämt eingängige Songs und jede Menge Feuer im Hintern.
          HAMMERHAI-Konzerte sind, bei aller ausgelassenen Feierei, musikalische
          Achterbahnfahrten mit unbekanntem Ausgang, wo jede musikalische
          Reglementierung geflissentlich missachtet wird. Energie, Humor,
          Spielfreude und geschmeidiges Songwriting sind die Hauptmerkmale einer
          Band, die sich keinen Pfifferling um irgendwelche Trends schert.
        </p>
        <div className="image-grid hidden md:grid md:max-w-[800px] md:gap-2">
          <img
            src="/images/about/IMG_20220916_230401.jpg"
            alt="Bandfoto 2"
            className="grid-image"
            id="image-2"
            loading="lazy"
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
