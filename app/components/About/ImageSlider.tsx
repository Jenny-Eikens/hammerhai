'use client'

import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

const images = [
  '/images/about/IMG_4274.jpg',
  '/images/about/IMG_20220916_230401.jpg',
  '/images/about/IMG_20221112_190412.jpg',
  '/images/about/IMG_20221231_163343_975.jpg',
  '/images/about/IMG_20231231_010747.jpg',
  '/images/about/IMG_20240216_195428_edit_398682507131872.jpg',
  '/images/about/IMG_20240405_155752.jpg',
  '/images/about/IMG_20240802_194833.jpg',
  '/images/about/OA Friedewalde.jpg',
  '/images/about/OA Hamburg 1.jpg',
  '/images/about/VEB 2.jpg',
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  })

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative pb-10" aria-label="Bildergallerie">
      <a href="#contact" className="skip-link">
        Bildergallerie überspringen
      </a>
      <div className="relative mb-10 w-full max-w-2xl" {...handlers}>
        {/* Carousel track */}
        <div
          className="flex h-[400px] max-w-screen transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 object-contain"
              aria-hidden={currentIndex !== index}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          aria-label="Zu vorigem Bild"
          className="img-nav-btn absolute left-3"
        >
          <ChevronLeftIcon className="h-6 w-6" strokeWidth={2} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Zu nächstem Bild"
          className="img-nav-btn absolute right-3"
        >
          <ChevronRightIcon className="h-6 w-6" strokeWidth={2} />
        </button>

        <div className="absolute bottom-[-1.5rem] left-1/2 mt-1 flex -translate-x-1/2 gap-4">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Zu Bild ${index + 1}`}
              className={`bg-underline h-3 w-3 rounded-full border-none p-1 transition-all ${currentIndex === index ? 'bg-underline scale-125 transition-all' : 'bg-underline/75'} hover:scale-125 hover:cursor-pointer focus-visible:scale-125`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
